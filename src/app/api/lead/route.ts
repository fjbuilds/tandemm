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
    const { name, email, phone, trade, area, source } = body as {
      name: string;
      email: string;
      phone: string;
      trade?: string;
      area?: string;
      source?: string;
    };

    if (!name?.trim() || !email?.trim() || !phone?.trim()) {
      return Response.json(
        { error: "Name, email and phone are required" },
        { status: 400 },
      );
    }

    if (supabase) {
      try {
        await supabase.from("leads").insert({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          trade: trade?.trim() || null,
          area: area?.trim() || null,
          source: source?.trim() || "start-page",
        });
      } catch (dbErr) {
        console.error("Lead DB insert failed:", dbErr);
      }
    }

    const resend = getResend();
    try {
      await resend?.emails.send({
        from: "Tandemm Leads <leads@tandemm.co.uk>",
        to: ["hello@tandemm.co.uk"],
        subject: `New enquiry: ${name.trim()} (${phone.trim()})`,
        html: `
          <h2>New enquiry from ${source || "start page"}</h2>
          <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
            <tr><td style="padding:6px 12px;font-weight:bold">Name</td><td style="padding:6px 12px">${name}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold">Email</td><td style="padding:6px 12px"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold">Phone</td><td style="padding:6px 12px"><a href="tel:${phone}">${phone}</a></td></tr>
            ${trade ? `<tr><td style="padding:6px 12px;font-weight:bold">Trade</td><td style="padding:6px 12px">${trade}</td></tr>` : ""}
            ${area ? `<tr><td style="padding:6px 12px;font-weight:bold">Area</td><td style="padding:6px 12px">${area}</td></tr>` : ""}
          </table>
          <p style="margin-top:16px;font-size:13px;color:#666">Call within 24 hours.</p>
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
