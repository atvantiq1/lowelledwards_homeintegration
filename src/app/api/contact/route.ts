import { NextResponse, type NextRequest } from "next/server";
import { sendMail } from "@/lib/email";
import {
  renderConsultationAdminEmail,
  renderConsultationCustomerEmail,
} from "@/lib/email-templates";
import { createLead } from "@/lib/leads";
import {
  contactLeadSchema,
  formatValidationMessage,
} from "@/lib/lead-validation";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { getCaptchaToken, verifyCaptchaToken } from "@/lib/recaptcha";
import { getUsStateName, isUsCity } from "@/lib/us-locations";

// Prisma needs Node.js APIs and does not run on the Edge runtime.
export const runtime = "nodejs";

function reply(code: number, message: string, headers?: HeadersInit) {
  return NextResponse.json(
    { status: code >= 200 && code < 300, code, message },
    { status: code, headers },
  );
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req.headers);
  const limit = checkRateLimit("contact", ip);
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

  const captcha = await verifyCaptchaToken(getCaptchaToken(body), ip);
  if (!captcha.ok) {
    return reply(captcha.status, captcha.reason);
  }

  const parsed = contactLeadSchema.safeParse(body);
  if (!parsed.success) {
    return reply(400, formatValidationMessage(parsed.error));
  }

  const lead = parsed.data;
  const stateName = getUsStateName(lead.state);
  if (!stateName) {
    return reply(400, "State: Please select a state.");
  }
  if (!isUsCity(lead.state, lead.city)) {
    return reply(400, "City: Please select a city in the chosen state.");
  }

  try {
    await createLead({ formType: "contact", ...lead });
  } catch (error) {
    console.error("Failed to save contact lead", error);
    return reply(500, "Something went wrong. Please try again.");
  }

  // The lead is already saved, so failed emails are logged but never fail the request.
  const emailLead = { ...lead, state: stateName };
  const [adminResult, customerResult] = await Promise.allSettled([
    sendMail({ ...renderConsultationAdminEmail(emailLead), replyTo: lead.email }),
    sendMail({ to: lead.email, ...renderConsultationCustomerEmail(emailLead) }),
  ]);
  if (adminResult.status === "rejected") {
    console.error("Consultation admin email failed", adminResult.reason);
  }
  if (customerResult.status === "rejected") {
    console.error("Consultation customer email failed", customerResult.reason);
  }

  return reply(200, "Thank you. A member of our team will be in touch shortly.");
}
