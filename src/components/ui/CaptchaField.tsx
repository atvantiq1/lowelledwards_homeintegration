"use client";

import { forwardRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface CaptchaFieldProps {
  error?: string;
  onChange: (token: string | null) => void;
}

const CaptchaField = forwardRef<ReCAPTCHA, CaptchaFieldProps>(
  function CaptchaField({ error, onChange }, ref) {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    return (
      <div>
        {siteKey ? (
          <ReCAPTCHA
            ref={ref}
            sitekey={siteKey}
            onChange={onChange}
            onExpired={() => onChange(null)}
            onErrored={() => onChange(null)}
          />
        ) : (
          <p className="font-body text-xs text-red" role="alert">
            Captcha is not configured. Please contact us by phone or email.
          </p>
        )}
        {error && (
          <p id="captcha-error" className="mt-2 font-body text-xs text-red">
            {error}
          </p>
        )}
      </div>
    );
  },
);

export default CaptchaField;
