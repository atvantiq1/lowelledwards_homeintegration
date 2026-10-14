import Reveal from "@/components/ui/Reveal";

const STEPS = [
  {
    number: "01",
    label: "Understand",
    text: "Understand the home, its layout, and the homeowner's security priorities.",
  },
  {
    number: "02",
    label: "Plan",
    text: "Consider suitable security solutions in the context of the property and its other systems.",
  },
  {
    number: "03",
    label: "Integrate",
    text: "Bring the selected technology into the wider home environment where appropriate.",
  },
] as const;

export default function SecurityPlanning() {
  return (
    <section className="bg-bg pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28">
      <div className="section-pad">
        <Reveal>
          <p className="eyebrow text-gold">Designed Around Your Needs</p>
          <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.25rem,5.2vw,4.75rem)] text-cream">
            The right system starts with the right plan.
          </h2>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-x-10 sm:mt-20 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.number} className="border-t border-bg4">
              <Reveal delay={i * 0.12} distance={20} className="py-8 sm:py-10">
                <span className="font-display text-5xl text-gold sm:text-6xl">
                  {step.number}
                </span>
                <h3 className="mt-6 font-display text-2xl tracking-[0.12em] text-cream uppercase sm:text-3xl">
                  {step.label}
                </h3>
                <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-cream/65 sm:text-base">
                  {step.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
