import { Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import CTALink from "@/components/ui/CTALink";

const INCLUDED = [
  "Remote system monitoring and updates",
  "Priority phone and in-home support",
  "Performance check-ins and fine tuning",
];

export default function FirstMonthFree() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="section-pad grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow text-gold-light">Ongoing Service Plan</p>
          <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">
            Purchase a Service Plan, Get Your First Month Free.
          </h2>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-white/65">
            Purchase a service plan and receive the first month of service
            free, so your systems stay tuned, secure, and performing exactly
            as they should.
          </p>
          <CTALink
            href="/contact"
            variant="solid"
            className="mt-9"
          >
            Claim Your Free Month
          </CTALink>
        </Reveal>

        <Reveal delay={0.12} distance={28} className="lg:col-span-5">
          <div className="border border-gold-light/30 p-8 sm:p-10">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-6xl text-gold-light sm:text-7xl">
                1st
              </span>
              <span className="font-body text-sm uppercase tracking-[0.18em] text-white/70">
                Month Free
              </span>
            </div>
            <ul className="mt-8 space-y-4">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-sm text-white/75">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" strokeWidth={1.75} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
