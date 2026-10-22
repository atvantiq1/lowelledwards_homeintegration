import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import CTALink from "@/components/ui/CTALink";
import { audioVideoImages } from "@/lib/images";

const OPTIONS = [
  "Invisible speakers",
  "In-wall & in-ceiling",
  "Concealed TVs",
  "Custom cabinetry",
] as const;

export default function DiscreetDesign() {
  return (
    <section className="bg-bg">
      <div className="relative">
        <ImageReveal className="aspect-4/3 sm:aspect-video lg:aspect-auto lg:h-[47.5rem]">
          <Photo
            src={audioVideoImages.discreet.src}
            alt={audioVideoImages.discreet.alt}
            sizes="100vw"
          />
        </ImageReveal>

        <Reveal
          delay={0.15}
          distance={32}
          className="bg-bg p-8 sm:p-10 lg:absolute lg:bottom-0 lg:left-[clamp(1.5rem,5vw,5rem)] lg:z-10 lg:w-130 lg:p-12"
        >
          <p className="eyebrow text-gold">Discreet By Design</p>
          <h2 className="mt-4 font-display text-3xl text-cream sm:text-4xl">
            Heard and seen, only when you want.
          </h2>
          <p className="mt-5 font-body text-sm leading-relaxed text-cream/65">
            Speakers can disappear behind paint, plaster or stucco, and
            televisions can hide behind mirrors, framed art or motorized
            cabinetry. The technology performs beautifully while the
            architecture stays the focus.
          </p>

          <ul
            aria-label="Discreet installation options"
            className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-bg4 pt-6"
          >
            {OPTIONS.map((o, i) => (
              <li key={o} className="flex items-center gap-3">
                <span className="eyebrow text-cream/80">{o}</span>
                {i < OPTIONS.length - 1 && (
                  <span aria-hidden className="text-gold/60">
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>

          <CTALink href="/residential/home-theatre" variant="text" className="mt-8">
            Explore Home Theater
          </CTALink>
        </Reveal>
      </div>
    </section>
  );
}
