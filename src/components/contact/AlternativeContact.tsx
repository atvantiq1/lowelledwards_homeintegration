import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const cardClass = "flex gap-5 rounded-2xl border border-bg4 bg-bg2 p-6 sm:p-7";

const iconClass =
  "flex size-14 shrink-0 items-center justify-center rounded-lg border border-bg4 bg-ivory/70 text-gold";

const subLabelClass =
  "font-body text-xs font-medium uppercase tracking-[0.14em] text-gold";

const HOURS = [
  { days: "Mon-Fri", time: "10:00 AM - 7:00 PM" },
  { days: "Saturday", time: "By appointment" },
  { days: "Sunday", time: "Closed" },
];

export default function AlternativeContact() {
  return (
    <div className="space-y-6">
      <Reveal>
        <div className={cardClass}>
          <span className={iconClass}>
            <Phone className="size-6" strokeWidth={1.5} aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-2xl text-cream">Phone</h3>
            <a
              href="tel:+12015253300"
              className="mt-1 inline-block font-body text-lg text-gold transition-colors duration-300 hover:text-gold2"
            >
              201-525-3300
            </a>

            <div className="mt-5 border-t border-bg4 pt-5">
              <p className={subLabelClass}>Business Hours</p>
              <dl className="mt-3 space-y-1 font-body text-sm text-cream/60">
                {HOURS.map(({ days, time }) => (
                  <div key={days}>
                    <dt className="inline text-cream/85">{days}:</dt>{" "}
                    <dd className="inline">{time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className={cardClass}>
          <span className={iconClass}>
            <MapPin className="size-6" strokeWidth={1.5} aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-2xl text-cream">Location &amp; Email</h3>
            <address className="mt-2 font-body text-base not-italic leading-relaxed text-cream/70">
              15 Warren St. Suite 25
              <br />
              Hackensack, NJ 07601
              <br />
              Serving Northern New Jersey, New York Metro and surrounding areas
            </address>

            <div className="mt-5 border-t border-bg4 pt-5">
              <p className={subLabelClass}>Direct Contact</p>
              <a
                href="mailto:info@lowelledwards.com"
                className="mt-3 inline-flex items-center gap-2 break-all font-body text-base text-gold transition-colors duration-300 hover:text-gold2"
              >
                <Mail className="size-4 shrink-0" strokeWidth={1.6} aria-hidden />
                info@lowelledwards.com
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
