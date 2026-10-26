"use client";

import { useRef, useState, type FormEvent } from "react";
import type ReCAPTCHA from "react-google-recaptcha";
import PhoneInput, { type CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Reveal from "@/components/ui/Reveal";
import CaptchaField from "@/components/ui/CaptchaField";
import AlternativeContact from "@/components/contact/AlternativeContact";
import {
  contactLeadSchema,
  MESSAGE_MAX_LENGTH,
} from "@/lib/lead-validation";
import { PROJECT_TYPES } from "@/lib/project-types";

interface FormValues {
  name: string;
  email: string;
  // Digits only, country code included, as react-phone-input-2 reports it.
  phone: string;
  projectType: string;
  location: string;
  message: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  location: "",
  message: "",
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type PhoneCountry = Pick<CountryData, "countryCode" | "dialCode" | "format">;

const DEFAULT_COUNTRY = "us";

// The country's mask has one "." per digit, so it gives the full number length.
function maskDigitCount(format: string): number {
  return format.split("").filter((char) => char === ".").length;
}

// Sends "+<digits>", or "" when only the country code has been entered.
function toE164(phone: string, country: PhoneCountry | null): string {
  if (!phone || phone === country?.dialCode) return "";
  return `+${phone}`;
}

function validate(values: FormValues, country: PhoneCountry | null): FormErrors {
  const errors: FormErrors = {};
  const parsed = contactLeadSchema.safeParse({
    ...values,
    phone: toE164(values.phone, country),
  });

  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as keyof FormValues;
      errors[field] ??= issue.message;
    }
  }

  // Masks vary in length outside North America, so only there is the
  // exact digit count enforced; elsewhere the mask caps the length.
  if (!errors.phone && country?.dialCode === "1") {
    if (values.phone.length !== maskDigitCount(country.format)) {
      errors.phone = "Please enter a 10-digit phone number.";
    }
  }

  return errors;
}

const fieldLabelClass =
  "font-body text-xs font-medium uppercase tracking-[0.14em] text-cream/50";

const inputClass =
  "mt-2 w-full border border-bg4 bg-bg2/60 px-4 py-2.5 font-body text-base text-cream placeholder:text-cream/30 transition-colors duration-300 focus:border-gold focus:bg-bg focus:outline-none aria-invalid:border-red";

export default function ConsultationForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [phoneCountry, setPhoneCountry] = useState<PhoneCountry | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string>();
  const captchaRef = useRef<ReCAPTCHA>(null);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(
    null,
  );

  // Once a field shows an error, re-check it on every keystroke so the
  // message clears as soon as the value is fixed.
  function updateField(
    field: keyof FormValues,
    value: string,
    country: PhoneCountry | null = phoneCountry,
  ) {
    const next = { ...values, [field]: value };
    setValues(next);
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: validate(next, country)[field] }));
    }
  }

  function handleChange(
    field: keyof FormValues,
  ): (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => void {
    return (e) => updateField(field, e.target.value);
  }

  // Empty fields are only flagged on submit, so tabbing through stays quiet.
  function handleBlur(field: keyof FormValues): () => void {
    return () => {
      if (!values[field].trim()) return;
      setErrors((prev) => ({
        ...prev,
        [field]: validate(values, phoneCountry)[field],
      }));
    };
  }

  function handlePhoneChange(value: string, data: CountryData | object) {
    const country = "dialCode" in data ? data : null;
    setPhoneCountry(country);
    updateField("phone", value, country);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    const validationErrors = validate(values, phoneCountry);
    setErrors(validationErrors);
    setResult(null);

    setCaptchaError(captchaToken ? undefined : "Please confirm you're not a robot.");

    if (Object.keys(validationErrors).length > 0 || !captchaToken) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          phone: toE164(values.phone, phoneCountry),
          captchaToken,
        }),
      });
      const data: { status?: boolean; message?: string } = await res
        .json()
        .catch(() => ({}));

      if (res.ok && data.status) {
        setResult({
          ok: true,
          message: data.message ?? "Thank you. We'll be in touch shortly.",
        });
        setValues(initialValues);
      } else {
        setResult({
          ok: false,
          message: data.message ?? "Something went wrong. Please try again.",
        });
      }
    } catch {
      setResult({
        ok: false,
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      // A reCAPTCHA token is single-use, so every attempt needs a fresh tick.
      captchaRef.current?.reset();
      setCaptchaToken(null);
      setSubmitting(false);
    }
  }

  return (
    <section className="relative bg-bg py-16 sm:py-20 lg:py-28">
      <div className="section-pad">
        <Reveal>
          <p className="eyebrow text-gold">Consultation</p>
          <h2 className="mt-6 max-w-2xl font-display text-4xl text-cream sm:text-5xl">
            Request Consultation.
          </h2>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-cream/65">
            Share a few details about your space and your goals. A member of
            our team will follow up to schedule your complimentary in-home
            consultation.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-16 lg:mt-16 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-5 lg:col-start-1">
            <AlternativeContact />
          </div>

          <Reveal delay={0.12} className="lg:col-span-6 lg:col-start-7">
            <form noValidate onSubmit={handleSubmit} className="space-y-7">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={fieldLabelClass}>
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    value={values.name}
                    onChange={handleChange("name")}
                    onBlur={handleBlur("name")}
                    maxLength={100}
                    className={inputClass}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 font-body text-xs text-red">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className={fieldLabelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    value={values.email}
                    onChange={handleChange("email")}
                    onBlur={handleBlur("email")}
                    maxLength={254}
                    className={inputClass}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 font-body text-xs text-red">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className={fieldLabelClass}>
                    Phone
                  </label>
                  <PhoneInput
                    country={DEFAULT_COUNTRY}
                    preferredCountries={["us", "ca"]}
                    enableSearch
                    disableSearchIcon
                    countryCodeEditable={false}
                    value={values.phone}
                    onChange={handlePhoneChange}
                    onBlur={handleBlur("phone")}
                    onMount={(_, data) => {
                      if ("dialCode" in data) setPhoneCountry(data);
                    }}
                    containerClass="phone-field mt-2"
                    inputProps={{
                      id: "phone",
                      name: "phone",
                      autoComplete: "tel",
                      required: true,
                      "aria-required": "true",
                      "aria-invalid": Boolean(errors.phone),
                      "aria-describedby": errors.phone ? "phone-error" : undefined,
                    }}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-2 font-body text-xs text-red">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="projectType" className={fieldLabelClass}>
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.projectType)}
                    aria-describedby={
                      errors.projectType ? "projectType-error" : undefined
                    }
                    value={values.projectType}
                    onChange={handleChange("projectType")}
                    onBlur={handleBlur("projectType")}
                    className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%231a1a2e%22 stroke-opacity=%220.4%22 stroke-width=%221.6%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-size-[16px] bg-position-[right_1rem_center] bg-no-repeat pr-10`}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p
                      id="projectType-error"
                      className="mt-2 font-body text-xs text-red"
                    >
                      {errors.projectType}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="location" className={fieldLabelClass}>
                    Location
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    autoComplete="address-level2"
                    placeholder="City, State"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.location)}
                    aria-describedby={
                      errors.location ? "location-error" : undefined
                    }
                    value={values.location}
                    onChange={handleChange("location")}
                    onBlur={handleBlur("location")}
                    maxLength={150}
                    className={inputClass}
                  />
                  {errors.location && (
                    <p
                      id="location-error"
                      className="mt-2 font-body text-xs text-red"
                    >
                      {errors.location}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className={fieldLabelClass}>
                  Tell Us About Your Project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  aria-required="true"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  value={values.message}
                  onChange={handleChange("message")}
                  onBlur={handleBlur("message")}
                  maxLength={MESSAGE_MAX_LENGTH}
                  className={`${inputClass} resize-none`}
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 font-body text-xs text-red">
                    {errors.message}
                  </p>
                )}
              </div>

              <CaptchaField
                ref={captchaRef}
                error={captchaError}
                onChange={(token) => {
                  setCaptchaToken(token);
                  if (token) setCaptchaError(undefined);
                }}
              />

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  aria-busy={submitting}
                  className="group inline-flex items-center gap-2 bg-gold px-8 py-4 font-body text-[13px] tracking-[0.08em] uppercase text-white transition-colors duration-300 hover:bg-gold2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span>{submitting ? "Sending…" : "Request Consultation"}</span>
                  <span
                    className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  >
                    →
                  </span>
                </button>
                <p
                  role="status"
                  aria-live="polite"
                  className={`mt-4 font-body text-sm ${result?.ok ? "text-green" : "text-red"}`}
                >
                  {result?.message}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
