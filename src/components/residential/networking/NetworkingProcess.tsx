import Reveal from "@/components/ui/Reveal";

const STEPS = [
  {
    number: "01",
    label: "Understand",
    text: "Understand the property, its layout, and the homeowner's connectivity needs.",
  },
  {
    number: "02",
    label: "Plan",
    text: "Plan the network around the home's spaces and the systems it will connect.",
  },
  {
    number: "03",
    label: "Integrate",
    text: "Bring the network into the wider home technology experience.",
  },
] as const;

const PRODUCT_LINES = ["Araknis Networks", "EnGenius", "Packedge", "OVRC"] as const;

export default function NetworkingProcess() {
  return (
    <section className="bg-bg pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28">
      <div className="section-pad grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow text-gold">Planning &amp; Integration</p>
          <h2 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
            Built around your home.
          </h2>
          <p className="mt-5 max-w-sm font-body text-base leading-relaxed text-cream/65">
            Every home is different. Understanding its layout, the systems
            it will run and how it is lived in comes before any network is
            designed.
          </p>

          <div className="mt-8 max-w-sm border-t border-bg4 pt-5">
            <p className="eyebrow text-cream/80">Product lines</p>
            <p className="mt-2 font-body text-sm leading-relaxed text-cream/60">
              {PRODUCT_LINES.join(" · ")}
            </p>
          </div>
        </Reveal>

        <ol className="lg:col-span-7 lg:col-start-6">
          {STEPS.map((step, i) => (
            <li key={step.number} className="border-t border-bg4 last:border-b">
              <Reveal
                delay={i * 0.1}
                distance={20}
                className="grid grid-cols-[3.5rem_1fr] items-baseline gap-x-4 py-8 sm:grid-cols-[6rem_1fr] sm:gap-x-6 sm:py-10"
              >
                <span className="font-display text-4xl text-gold sm:text-5xl">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display text-2xl tracking-[0.12em] text-cream uppercase sm:text-3xl">
                    {step.label}
                  </h3>
                  <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-cream/65 sm:text-base">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
