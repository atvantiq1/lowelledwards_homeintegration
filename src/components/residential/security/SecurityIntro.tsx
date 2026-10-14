import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import { securityImages } from "@/lib/images";

const ELEMENTS = [
  "Video surveillance",
  "Intercom & entry",
  "Smart locks",
] as const;

export default function SecurityIntro() {
  return (
    <section className="bg-bg py-16 sm:py-20 lg:py-28">
      <div className="section-pad grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <Reveal className="flex items-baseline gap-5">
            <span className="font-display text-5xl text-gold sm:text-6xl">
              01
            </span>
            <span aria-hidden className="h-px w-12 bg-gold/50" />
            <p className="eyebrow text-gold">Peace Of Mind</p>
          </Reveal>

          <Reveal delay={0.08} className="mt-8">
            <h2 className="max-w-3xl font-display text-[clamp(2.5rem,6.2vw,5.5rem)] text-cream">
              Peace of mind, built into your home.
            </h2>
          </Reveal>

          <Reveal delay={0.18} className="mt-10 ">
            <p className="max-w-lg font-body text-base leading-relaxed text-cream/65">
              Lowell Edwards designs and installs intercom, entry and video
              surveillance systems as part of a home&rsquo;s wider technology, planned around the property and the way it is used rather
              than added on afterwards.
            </p>
            <ul
              aria-label="Security systems"
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
            src={securityImages.introduction.src}
            alt={securityImages.introduction.alt}
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </ImageReveal>
      </div>
    </section>
  );
}
