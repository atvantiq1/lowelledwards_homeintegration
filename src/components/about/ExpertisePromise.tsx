import Reveal from "@/components/ui/Reveal";

const PROMISES = [
  {
    title: "Factory-Certified Technicians",
    description:
      "Every system is designed and installed by technicians trained and certified directly by the brands we carry.",
  },
  {
    title: "24-Hour Response SLA",
    description:
      "Service requests are acknowledged and scheduled within 24 hours, no exceptions.",
  },
  {
    title: "24/7 Phone Support",
    description:
      "A real person is always available to help, day or night, for whatever comes up.",
  },
  {
    title: "1-Year In-Home Service",
    description:
      "Every installation is backed by a full year of in-home service, at no additional cost.",
  },
  {
    title: "Itemized Pricing",
    description:
      "Clear, line-by-line pricing on every proposal, so you always know exactly what you're paying for.",
  },
] as const;

const PARTNERS = [
  "Control4",
  "Crestron",
  "Lutron",
  "Sonos",
  "Denon",
  "Marantz",
  "Samsung",
  "LG",
  "Sony",
  "DoorBird",
] as const;

export default function ExpertisePromise() {
  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-28">
      <div className="section-pad grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow text-gold-light">The Standard</p>
          <div className="mt-6 flex items-baseline gap-4 sm:gap-6">
            <span className="font-display text-[clamp(4.5rem,16vw,11rem)] leading-none text-white">
              40
            </span>
            <span className="font-body text-sm tracking-[0.22em] text-white/60 uppercase sm:text-base">
              Years
              <br />
              Experience
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.12} distance={24} className="lg:col-span-6">
          <p className="max-w-md font-body text-base leading-relaxed text-white/65">
            Our factory-trained technicians pride themselves on getting the
            job done right the first time — backed by direct partnerships
            with the brands our clients already trust, and a safety-first
            approach on every visit.
          </p>

        </Reveal>

        <div className="col-span-full mt-4 border-t border-white/10 sm:mt-6">
          {PROMISES.map((item, i) => (
            <Reveal key={item.title} delay={0.06 * i} distance={20}>
              <div
                className={`flex items-baseline gap-4 border-b border-white/10 py-5 sm:gap-8 sm:py-6 ${
                  i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""
                }`}
              >
                <span className="font-body text-xs tabular-nums text-gold-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <span className="font-display text-xl text-white sm:text-2xl lg:text-3xl">
                    {item.title}
                  </span>
                  <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-white/55 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
