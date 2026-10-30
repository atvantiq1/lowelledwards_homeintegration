import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import type { CommercialService } from "@/lib/commercial";

export default function CommercialIntro({ service }: { service: CommercialService }) {
  const { intro } = service;
  const image = service.images.intro;

  return (
    <section className="bg-bg py-16 sm:py-20 lg:py-28">
      <div className="section-pad grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <Reveal className="flex items-baseline gap-5">
            <span className="font-display text-5xl text-gold sm:text-6xl">
              01
            </span>
            <span aria-hidden className="h-px w-12 bg-gold/50" />
            <p className="eyebrow text-gold">{intro.eyebrow}</p>
          </Reveal>

          <Reveal delay={0.08} className="mt-8">
            <h2 className="max-w-3xl font-display text-[clamp(2.5rem,6.2vw,5.5rem)] text-cream">
              {intro.title}
            </h2>
          </Reveal>

          <Reveal delay={0.18} className="mt-10">
            <p className="max-w-lg font-body text-base leading-relaxed text-cream/65">
              {intro.text}
            </p>
            <ul
              aria-label={`${service.label} systems`}
              className="mt-8 max-w-lg border-t border-bg4"
            >
              {intro.elements.map((e) => (
                <li
                  key={e}
                  className="eyebrow border-b border-bg4 py-3.5 text-cream/80"
                >
                  {e}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <ImageReveal
          delay={0.1}
          className="aspect-4/5 sm:aspect-4/3 lg:col-span-5 lg:aspect-auto lg:mt-24 lg:min-h-150"
        >
          <Photo
            src={image.src}
            alt={image.alt}
            sizes="(min-width: 1024px) 40vw, 100vw"
            objectPosition={image.position}
          />
        </ImageReveal>
      </div>
    </section>
  );
}
