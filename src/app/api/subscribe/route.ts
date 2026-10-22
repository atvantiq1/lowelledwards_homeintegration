import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { sendMail } from "@/lib/email";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

export const runtime = "nodejs";

const subscribeSchema = z.object({
  email: z
    .string({ error: "Please enter your email." })
    .trim()
    .toLowerCase()
    .min(1, { error: "Please enter your email." })
    .max(254, { error: "Please enter a valid email address." })
    .pipe(z.email({ error: "Please enter a valid email address." })),
});

function reply(code: number, message: string, headers?: HeadersInit) {
  return NextResponse.json(
    { status: code >= 200 && code < 300, code, message },
    { status: code, headers },
  );
}

export async function POST(req: NextRequest) {
  const limit = checkRateLimit("subscribe", getClientIp(req.headers));
  if (!limit.allowed) {
    return reply(429, "Too many requests. Please try again later.", {
      "Retry-After": String(limit.retryAfterSeconds),
    });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return reply(400, "Invalid request body.");
  }

  const parsed = subscribeSchema.safeParse(body);
  if (!parsed.success) {
    return reply(400, parsed.error.issues[0]?.message ?? "Invalid email.");
  }
  const { email } = parsed.data;

  try {
    await sendMail({
      subject: "New newsletter subscriber",
      text: `A new visitor subscribed to updates from the website.\n\nEmail: ${email}`,
      replyTo: email,
    });
  } catch (error) {
    console.error("Subscribe notification email failed", error);
    return reply(502, "We couldn't subscribe you right now. Please try again later.");
  }

  // TODO: send the welcome email to the subscriber once the template is provided.

  return reply(200, "Thank you for subscribing.");
}
