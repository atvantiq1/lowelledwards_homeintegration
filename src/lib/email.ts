import { CONTACT_EMAIL } from "@/lib/contact";

interface SendMailOptions {
  to?: string | string[];
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
}

// Sends through Resend's HTTP API. Defaults to the site inbox (CONTACT_EMAIL).
export async function sendMail({
  to = CONTACT_EMAIL,
  subject,
  text,
  html,
  replyTo,
}: SendMailOptions) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not set");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:
        process.env.CONTACT_FROM_EMAIL ??
        "Lowell Edwards Website <onboarding@resend.dev>",
      to: Array.isArray(to) ? to : [to],
      reply_to: replyTo,
      subject,
      text,
      html,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Email provider responded ${res.status}: ${detail}`);
  }
}
