import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import { audioVideoImages } from "@/lib/images";

const ELEMENTS = [
  "Whole-home audio",
  "Distributed video",
  "Outdoor entertainment",
] as const;

export default function AudioVideoIntro() {
  return (
    <section className="bg-bg py-16 sm:py-20 lg:py-28">
      <div className="section-pad grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <Reveal className="flex items-baseline gap-5">
            <span className="font-display text-5xl text-gold sm:text-6xl">
              01
            </span>
            <span aria-hidden className="h-px w-12 bg-gold/50" />
            <p className="eyebrow text-gold">Entertainment, Simplified</p>
          </Reveal>

          <Reveal delay={0.08} className="mt-8">
            <h2 className="max-w-3xl font-display text-[clamp(2.5rem,6.2vw,5.5rem)] text-cream">
              Entertainment that fits the way you live.
            </h2>
          </Reveal>

          <Reveal delay={0.18} className="mt-10">
            <p className="max-w-lg font-body text-base leading-relaxed text-cream/65">
              Lowell Edwards designs audio and video systems as part of the
              home itself. One central system sends music and video to any
              room, so everyone can enjoy what they love, together or apart,
              without a tangle of remotes and equipment.
            </p>
            <ul
              aria-label="Audio and video systems"
              className="mt-8 max-w-lg border-t border-bg4"
            >
              {ELEMENTS.map((e) => (
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
            src={audioVideoImages.introduction.src}
            alt={audioVideoImages.introduction.alt}
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </ImageReveal>
      </div>
    </section>
  );
}
