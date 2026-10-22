import { CONTACT_EMAIL, EMAIL_PATTERN } from "@/lib/contact";

const CONSULTATION_FIELDS = [
  "name",
  "email",
  "phone",
  "projectType",
  "location",
  "message",
] as const;

const MAX_FIELD_LENGTH = 5000;

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim().slice(0, MAX_FIELD_LENGTH) : "";
}

async function sendMail(subject: string, text: string, replyTo: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not set");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Lowell Edwards Website <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      reply_to: replyTo,
      subject,
      text,
    }),
  });

  if (!res.ok) throw new Error(`Email provider responded ${res.status}`);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = clean(body.email);
  if (!EMAIL_PATTERN.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    if (body.type === "subscribe") {
      await sendMail(
        "New newsletter subscriber",
        `A new visitor subscribed to updates from the website.\n\nEmail: ${email}`,
        email,
      );
    } else if (body.type === "consultation") {
      const values = Object.fromEntries(
        CONSULTATION_FIELDS.map((field) => [field, clean(body[field])]),
      );
      if (CONSULTATION_FIELDS.some((field) => !values[field])) {
        return Response.json({ error: "Please complete every field." }, { status: 400 });
      }
      await sendMail(
        `Consultation request from ${values.name}`,
        [
          `Name: ${values.name}`,
          `Email: ${values.email}`,
          `Phone: ${values.phone}`,
          `Project Type: ${values.projectType}`,
          `Location: ${values.location}`,
          "",
          "Message:",
          values.message,
        ].join("\n"),
        email,
      );
    } else {
      return Response.json({ error: "Invalid request." }, { status: 400 });
    }
  } catch (err) {
    console.error("Contact email failed:", err);
    return Response.json(
      { error: `We couldn't send your message. Please email us at ${CONTACT_EMAIL}.` },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
