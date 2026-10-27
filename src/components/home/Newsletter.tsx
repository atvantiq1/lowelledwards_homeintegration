"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/ui/Reveal";
import { EMAIL_PATTERN } from "@/lib/contact";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message ?? "Something went wrong.");
      }
      setEmail("");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("idle");
    }
  }

  return (
    <section className="border-t border-bg4 bg-bg py-16 sm:py-20">
      <div className="section-pad grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow text-gold">Stay Connected</p>
          <h2 className="mt-4 font-display text-3xl text-cream sm:text-4xl">
            Ideas for a Smarter, More Beautiful Home.
          </h2>
          <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-cream/65">
            Keep informed on featured projects, new technology, and seasonal
            tips from the Lowell Edwards team. No clutter, just the good stuff.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="lg:col-span-6">
          <form noValidate onSubmit={handleSubmit}>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                autoComplete="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={Boolean(error)}
                aria-describedby="newsletter-status"
                className="min-w-0 flex-1 border border-bg4 bg-bg2/60 px-5 py-4 font-body text-base text-cream placeholder:text-cream/35 transition-colors duration-300 focus:border-gold focus:bg-bg focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-gold px-8 py-4 font-body text-[13px] uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:bg-gold2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Subscribing…" : "Subscribe"}
              </button>
            </div>
            <p id="newsletter-status" role="status" aria-live="polite" className="mt-3 font-body text-sm">
              {status === "sent" && (
                <span className="text-green">Thank you for subscribing.</span>
              )}
              {error && <span className="text-red">{error}</span>}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
