"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface LeadDetails {
  name: string;
  business: string;
  email: string;
  phone: string;
  website: string;
  trade: string;
  teamSize: string;
  postcodes: string;
  services: string;
  notes: string;
}

export async function submitLead(details: LeadDetails) {
  const {
    name,
    business,
    email,
    phone,
    website,
    trade,
    teamSize,
    postcodes,
    services,
    notes,
  } = details;

  try {
    await resend.emails.send({
      from: "Tandemm Leads <leads@tandemm.co.uk>",
      to: ["hello@tandemm.co.uk"],
      subject: `New audit lead: ${business} (${trade})`,
      html: `
        <h2>New audit lead</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
          <tr><td style="padding:6px 12px;font-weight:bold">Name</td><td style="padding:6px 12px">${name}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold">Business</td><td style="padding:6px 12px">${business}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold">Email</td><td style="padding:6px 12px"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold">Phone</td><td style="padding:6px 12px"><a href="tel:${phone}">${phone}</a></td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold">Website</td><td style="padding:6px 12px"><a href="https://${website}">${website}</a></td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold">Trade</td><td style="padding:6px 12px">${trade}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold">Team size</td><td style="padding:6px 12px">${teamSize}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold">Postcodes</td><td style="padding:6px 12px">${postcodes}</td></tr>
          ${services ? `<tr><td style="padding:6px 12px;font-weight:bold">Services</td><td style="padding:6px 12px">${services}</td></tr>` : ""}
          ${notes ? `<tr><td style="padding:6px 12px;font-weight:bold">Notes</td><td style="padding:6px 12px">${notes}</td></tr>` : ""}
        </table>
        <p style="margin-top:16px;font-size:13px;color:#666">They are now on the Cal.com booking page to pick a walkthrough slot.</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send lead email:", error);
    return { success: false };
  }
}
