import Reveal from "@/components/ui/Reveal";
import type { CommercialService } from "@/lib/commercial";

export default function CommercialProcess({ service }: { service: CommercialService }) {
  const { process } = service;

  return (
    <section className="bg-bg py-16 sm:py-20 lg:py-28">
      <div className="section-pad">
        <Reveal>
          <p className="eyebrow text-gold">{process.eyebrow}</p>
          <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.25rem,5.2vw,4.75rem)] text-cream">
            {process.title}
          </h2>
        </Reveal>

        <ol
          className={`mt-14 grid grid-cols-1 gap-x-10 sm:mt-20 ${
            process.steps.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "lg:grid-cols-3"
          }`}
        >
          {process.steps.map((step, i) => (
            <li key={step.label} className="border-t border-bg4">
              <Reveal delay={i * 0.12} distance={20} className="py-8 sm:py-10">
                <span className="font-display text-5xl text-gold sm:text-6xl">
                  {String(i + 1).padStart(2, "0")}
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
