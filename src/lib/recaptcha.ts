type RecaptchaVerifyResponse = {
  success: boolean;
  hostname?: string;
  "error-codes"?: string[];
};

export type CaptchaVerificationResult =
  | { ok: true }
  | { ok: false; status: 400 | 403 | 500 | 502; reason: string };

export function getCaptchaToken(body: unknown): string | null {
  if (!body || typeof body !== "object" || !("captchaToken" in body)) {
    return null;
  }

  

  const token = (body as { captchaToken?: unknown }).captchaToken;
  return typeof token === "string" && token.trim() ? token.trim() : null;
}

// Server-side check of a reCAPTCHA v2 checkbox token with Google.
export async function verifyCaptchaToken(
  captchaToken: string | null,
  remoteIp?: string,
): Promise<CaptchaVerificationResult> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.error("RECAPTCHA_SECRET_KEY is not set");
    return { ok: false, status: 500, reason: "Something went wrong. Please try again." };
  }
  if (!captchaToken) {
    return { ok: false, status: 400, reason: "Please complete the captcha." };
  }

  const params = new URLSearchParams({ secret, response: captchaToken });
  if (remoteIp && remoteIp !== "unknown") params.set("remoteip", remoteIp);

  let data: RecaptchaVerifyResponse;
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
      cache: "no-store",
    });
    if (!res.ok) {
      return { ok: false, status: 502, reason: "Could not verify captcha. Please try again." };
    }
    data = (await res.json()) as RecaptchaVerifyResponse;
  } catch {
    return { ok: false, status: 502, reason: "Could not verify captcha. Please try again." };
  }

  if (!data.success) {
    console.warn("reCAPTCHA verification failed:", data["error-codes"] ?? []);
    return { ok: false, status: 403, reason: "Captcha verification failed. Please try again." };
  }

  return { ok: true };
}
