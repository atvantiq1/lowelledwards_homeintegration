import Reveal from "@/components/ui/Reveal";

const STEPS = [
  {
    number: "01",
    label: "Listen",
    text: "We learn how you live, entertain and relax, and where music and video matter most in your home.",
  },
  {
    number: "02",
    label: "Design",
    text: "We select speakers, displays and sources for each room and plan them around the architecture.",
  },
  {
    number: "03",
    label: "Install & Train",
    text: "Our factory-trained technicians install and calibrate everything, then show you how to enjoy it.",
  },
] as const;

export default function AudioVideoProcess() {
  return (
    <section className="bg-bg pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28">
      <div className="section-pad">
        <Reveal>
          <p className="eyebrow text-gold">Designed Around You</p>
          <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.25rem,5.2vw,4.75rem)] text-cream">
            Great sound starts with a great plan.
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
