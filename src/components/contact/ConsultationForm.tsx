"use client";

import { useRef, useState, type FormEvent } from "react";
import type ReCAPTCHA from "react-google-recaptcha";
import Reveal from "@/components/ui/Reveal";
import CaptchaField from "@/components/ui/CaptchaField";
import AlternativeContact from "@/components/contact/AlternativeContact";
import { EMAIL_PATTERN } from "@/lib/contact";
import { PROJECT_TYPES } from "@/lib/project-types";

interface FormValues {
  name: string;
  email: string;
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

const PHONE_PATTERN = /^[\d\s()+.-]{7,}$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (
    !PHONE_PATTERN.test(values.phone.trim()) ||
    !/^\d{10,15}$/.test(values.phone.replace(/\D/g, ""))
  ) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.projectType) errors.projectType = "Please select a project type.";

  if (!values.location.trim()) errors.location = "Please enter your location.";

  if (!values.message.trim())
    errors.message = "Tell us a bit about your project.";

  return errors;
}

const fieldLabelClass =
  "font-body text-xs font-medium uppercase tracking-[0.14em] text-cream/50";

const inputClass =
  "mt-2 w-full border border-bg4 bg-bg2/60 px-4 py-2.5 font-body text-base text-cream placeholder:text-cream/30 transition-colors duration-300 focus:border-gold focus:bg-bg focus:outline-none";

export default function ConsultationForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string>();
  const captchaRef = useRef<ReCAPTCHA>(null);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(
    null,
  );

  function handleChange(
    field: keyof FormValues,
  ): (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => void {
    return (e) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    const validationErrors = validate(values);
    setErrors(validationErrors);
    setResult(null);

    setCaptchaError(captchaToken ? undefined : "Please confirm you're not a robot.");

    if (Object.keys(validationErrors).length > 0 || !captchaToken) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, captchaToken }),
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
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    value={values.phone}
                    onChange={handleChange("phone")}
                    className={inputClass}
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
