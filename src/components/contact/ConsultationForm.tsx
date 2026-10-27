"use client";

import { useMemo, useRef, useState, type FormEvent } from "react";
import type ReCAPTCHA from "react-google-recaptcha";
import { CalendarDays } from "lucide-react";
import PhoneInput, { type CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Reveal from "@/components/ui/Reveal";
import CaptchaField from "@/components/ui/CaptchaField";
import SelectField, { type SelectOption } from "@/components/ui/SelectField";
import AlternativeContact from "@/components/contact/AlternativeContact";
import {
  contactLeadSchema,
  MESSAGE_MAX_LENGTH,
} from "@/lib/lead-validation";
import { PROJECT_TYPES } from "@/lib/project-types";
import type { UsState } from "@/lib/us-locations";

interface FormValues {
  name: string;
  email: string;
  // Digits only, country code included, as react-phone-input-2 reports it.
  phone: string;
  projectType: string;
  streetAddress: string;
  zipCode: string;
  // Two-letter USPS code, e.g. "NJ".
  state: string;
  city: string;
  message: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  streetAddress: "",
  zipCode: "",
  state: "",
  city: "",
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
  "font-body text-xs font-medium uppercase tracking-[0.14em] text-gold";

const inputClass =
  "mt-2 w-full rounded-md border border-bg4 bg-bg px-4 py-3 font-body text-base text-cream placeholder:text-cream/35 transition-colors duration-300 focus:border-gold focus:outline-none aria-invalid:border-red";

const projectTypeOptions: SelectOption[] = PROJECT_TYPES.map((type) => ({
  value: type,
  label: type,
}));

interface ConsultationFormProps {
  // Passed down from the server so the ~8MB city dataset stays out of the bundle.
  states: UsState[];
}

export default function ConsultationForm({ states }: ConsultationFormProps) {
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
  const [cities, setCities] = useState<string[]>([]);
  const [citiesStatus, setCitiesStatus] = useState<"idle" | "loading" | "error">(
    "idle",
  );
  const citiesRequest = useRef<AbortController | null>(null);
  const stateOptions = useMemo(
    () => states.map((state) => ({ value: state.code, label: state.name })),
    [states],
  );
  const cityOptions = useMemo(
    () => cities.map((city) => ({ value: city, label: city })),
    [cities],
  );
  const zipLookup = useRef<{ zip: string; controller: AbortController | null }>({
    zip: "",
    controller: null,
  });

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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

  // Resolves true once the state's cities are in the dropdown, false if the
  // request failed or a newer state choice replaced it.
  async function loadCities(state: string): Promise<boolean> {
    citiesRequest.current?.abort();
    setCities([]);
    if (!state) {
      setCitiesStatus("idle");
      return false;
    }

    const controller = new AbortController();
    citiesRequest.current = controller;
    setCitiesStatus("loading");
    try {
      const res = await fetch(`/api/us-cities?state=${encodeURIComponent(state)}`, {
        signal: controller.signal,
      });
      const data: { cities?: string[] } = await res.json().catch(() => ({}));
      if (!res.ok || !data.cities) throw new Error("City lookup failed");
      setCities(data.cities);
      setCitiesStatus("idle");
      return true;
    } catch {
      if (!controller.signal.aborted) setCitiesStatus("error");
      return false;
    }
  }

  // Picking a state clears the city, since it may not exist in the new state.
  function handleStateChange(state: string) {
    const next = { ...values, state, city: "" };
    setValues(next);
    if (errors.state || errors.city) {
      setErrors((prev) => ({
        ...prev,
        state: validate(next, phoneCountry).state,
        city: undefined,
      }));
    }
    // A manual choice wins over a ZIP lookup that is still in flight.
    zipLookup.current.controller?.abort();
    void loadCities(state);
  }

  // Once the first five digits are in, look the ZIP up and fill in the state
  // and city. Typing a ZIP+4 suffix does not trigger another lookup.
  function handleZipChange(e: React.ChangeEvent<HTMLInputElement>) {
    const zipCode = e.target.value.replace(/[^\d-]/g, "");
    updateField("zipCode", zipCode);

    const zip = /^\d{5}/.exec(zipCode)?.[0] ?? "";
    if (zip === zipLookup.current.zip) return;
    zipLookup.current.controller?.abort();
    zipLookup.current = { zip, controller: null };
    if (zip) void lookUpZip(zip);
  }

  async function lookUpZip(zip: string) {
    const controller = new AbortController();
    zipLookup.current.controller = controller;
    const stillCurrent = () => !controller.signal.aborted;

    let data: { state?: string; city?: string | null };
    try {
      const res = await fetch(`/api/zip-lookup?zip=${zip}`, {
        signal: controller.signal,
      });
      if (!res.ok) return;
      data = await res.json();
    } catch {
      // Autofill is a convenience; the visitor can still pick by hand.
      return;
    }
    const { state, city } = data;
    if (!state || !stillCurrent()) return;

    setValues((prev) => ({ ...prev, state, city: "" }));
    setErrors((prev) => ({ ...prev, state: undefined, city: undefined }));
    const loaded = await loadCities(state);
    if (loaded && city && stillCurrent()) {
      setValues((prev) => (prev.state === state ? { ...prev, city } : prev));
    }
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
        setCities([]);
        zipLookup.current = { zip: "", controller: null };
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

          <Reveal
            delay={0.12}
            className="rounded-2xl border border-bg4 bg-bg2 px-5 py-10 sm:px-10 lg:col-span-7 lg:col-start-6 lg:px-12 lg:py-12"
          >
            <form noValidate onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={fieldLabelClass}>
                    Name
                    <span aria-hidden className="ml-1 text-gold-light">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your name"
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
                    <span aria-hidden className="ml-1 text-gold-light">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter email address"
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
                    <span aria-hidden className="ml-1 text-gold-light">*</span>
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
                    <span aria-hidden className="ml-1 text-gold-light">*</span>
                  </label>
                  <SelectField
                    id="projectType"
                    placeholder="Select one"
                    options={projectTypeOptions}
                    invalid={Boolean(errors.projectType)}
                    describedBy={errors.projectType ? "projectType-error" : undefined}
                    value={values.projectType}
                    onChange={(value) => updateField("projectType", value)}
                    onBlur={handleBlur("projectType")}
                  />
                  {errors.projectType && (
                    <p
                      id="projectType-error"
                      className="mt-2 font-body text-xs text-red"
                    >
                      {errors.projectType}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="streetAddress" className={fieldLabelClass}>
                    Street Address
                    <span aria-hidden className="ml-1 text-gold-light">*</span>
                  </label>
                  <input
                    id="streetAddress"
                    name="streetAddress"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.streetAddress)}
                    aria-describedby={errors.streetAddress ? "streetAddress-error" : undefined}
                    value={values.streetAddress}
                    type="text"
                    autoComplete="street-address"
                    placeholder="Enter street address"
                    onChange={handleChange("streetAddress")}
                    onBlur={handleBlur("streetAddress")}
                    maxLength={150}
                    className={inputClass}
                  />
                  {errors.streetAddress && (
                    <p id="streetAddress-error" className="mt-2 font-body text-xs text-red">
                      {errors.streetAddress}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="zipCode" className={fieldLabelClass}>
                    ZIP Code
                    <span aria-hidden className="ml-1 text-gold-light">*</span>
                  </label>
                  <input
                    id="zipCode"
                    name="zipCode"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.zipCode)}
                    aria-describedby={errors.zipCode ? "zipCode-error" : undefined}
                    value={values.zipCode}
                    type="text"
                    inputMode="numeric"
                    autoComplete="postal-code"
                    placeholder="Enter ZIP code"
                    onChange={handleZipChange}
                    onBlur={handleBlur("zipCode")}
                    maxLength={10}
                    className={inputClass}
                  />
                  {errors.zipCode && (
                    <p id="zipCode-error" className="mt-2 font-body text-xs text-red">
                      {errors.zipCode}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="state" className={fieldLabelClass}>
                    State
                    <span aria-hidden className="ml-1 text-gold-light">*</span>
                  </label>
                  <SelectField
                    id="state"
                    placeholder="Select state"
                    options={stateOptions}
                    searchable
                    invalid={Boolean(errors.state)}
                    describedBy={errors.state ? "state-error" : undefined}
                    value={values.state}
                    onChange={handleStateChange}
                    onBlur={handleBlur("state")}
                  />
                  {errors.state && (
                    <p id="state-error" className="mt-2 font-body text-xs text-red">
                      {errors.state}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="city" className={fieldLabelClass}>
                    City
                    <span aria-hidden className="ml-1 text-gold-light">*</span>
                  </label>
                  <SelectField
                    id="city"
                    placeholder={
                      !values.state
                        ? "Select state first"
                        : citiesStatus === "loading"
                          ? "Loading cities…"
                          : citiesStatus === "error"
                            ? "Couldn't load cities. Re-select the state."
                            : "Select city"
                    }
                    options={cityOptions}
                    searchable
                    invalid={Boolean(errors.city)}
                    describedBy={errors.city ? "city-error" : undefined}
                    value={values.city}
                    disabled={!values.state || citiesStatus !== "idle"}
                    onChange={(value) => updateField("city", value)}
                    onBlur={handleBlur("city")}
                  />
                  {errors.city && (
                    <p id="city-error" className="mt-2 font-body text-xs text-red">
                      {errors.city}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className={fieldLabelClass}>
                  Tell Us About Your Project
                  <span className="ml-2 normal-case tracking-normal text-cream/40">
                    (optional)
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project"
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
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 font-body text-sm font-medium tracking-[0.08em] text-white shadow-[0_8px_20px_-8px_rgba(103,0,1,0.6)] transition-colors duration-300 hover:bg-gold2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <CalendarDays className="size-4" aria-hidden />
                  <span>{submitting ? "Sending…" : "Submit request"}</span>
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
