import { NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  const { Resend } = require("resend") as typeof import("resend");
  return new Resend(key);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { scanId, name, phone, bestTime, url, findings } = body as {
      scanId: string | null;
      name: string;
      phone: string;
      bestTime: string;
      url: string;
      findings: Array<{ label: string; passed: boolean; copy: string }>;
    };

    if (!name?.trim() || !phone?.trim()) {
      return Response.json({ error: "Name and phone are required" }, { status: 400 });
    }

    if (supabase && scanId) {
      await supabase.from("leads").insert({
        scan_id: scanId,
        name: name.trim(),
        phone: phone.trim(),
        best_time: bestTime || null,
      });
    }

    const failedFindings = findings?.filter((f) => !f.passed) ?? [];
    const findingsHtml = failedFindings
      .map(
        (f) =>
          `<tr><td style="padding:8px 12px;font-weight:bold;vertical-align:top">${f.label}</td><td style="padding:8px 12px">${f.copy}</td></tr>`
      )
      .join("");

    const resend = getResend();
    try {
      await resend?.emails.send({
        from: "Tandemm Leads <leads@tandemm.co.uk>",
        to: ["hello@tandemm.co.uk"],
        subject: `Website Check lead: ${name.trim()} (${phone.trim()})`,
        html: `
          <h2>New Website Check lead</h2>
          <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
            <tr><td style="padding:6px 12px;font-weight:bold">Name</td><td style="padding:6px 12px">${name}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold">Phone</td><td style="padding:6px 12px"><a href="tel:${phone}">${phone}</a></td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold">Best time</td><td style="padding:6px 12px">${bestTime || "Any"}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold">Site scanned</td><td style="padding:6px 12px"><a href="${url}">${url}</a></td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold">Issues found</td><td style="padding:6px 12px">${failedFindings.length} of 5</td></tr>
          </table>
          ${findingsHtml ? `<h3 style="margin-top:20px">Findings</h3><table style="border-collapse:collapse;font-family:sans-serif;font-size:13px">${findingsHtml}</table>` : ""}
          <p style="margin-top:16px;font-size:13px;color:#666">They have been told someone will call within 24 hours.</p>
        `,
      });
    } catch (emailErr) {
      console.error("Lead email failed:", emailErr);
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Lead capture error:", err);
    return Response.json({ error: "Failed to save lead" }, { status: 500 });
  }
}
