import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import { lightingShadesImages } from "@/lib/images";

const TREATMENTS = [
  "Roller shades",
  "Honeycomb shades",
  "Venetian blinds",
  "Drapery tracks",
  "Vertical drapery",
  "Tensioned shades",
  "Roman shades",
] as const;

export default function ShadesSection() {
  return (
    <section className="bg-bg py-16 sm:py-20 lg:py-28">
      <div className="section-pad grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-6">
        <ImageReveal className="aspect-4/3 lg:col-span-6 lg:aspect-auto lg:h-136">
          <Photo
            src={lightingShadesImages.shades.src}
            alt={lightingShadesImages.shades.alt}
            sizes="(min-width: 1024px) 50vw, 100vw"
            objectPosition={lightingShadesImages.shades.position}
          />
        </ImageReveal>

        <div className="w-full lg:col-span-6 lg:max-w-2xl lg:justify-self-end">
          <Reveal>
            <p className="eyebrow text-gold">Shades</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl text-cream sm:text-5xl">
              Windows, framed and softened.
            </h2>
            <p className="mt-5 max-w-lg hyphens-auto font-body text-base leading-relaxed text-cream/65">
              Lutron Sivoia QS wireless shading covers the full family of
              motorized window treatments, from roller shades to drapery
              tracks, all controlled from the same keypads as the lighting.
              Serena offers totally wireless, remote-controlled cellular
              shades. Both come in hundreds of fabrics and colors.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 border-t border-bg4 pt-5">
              {TREATMENTS.map((t) => (
                <li
                  key={t}
                  className="font-body text-[13px] tracking-[0.08em] text-cream/70 uppercase"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="mt-8 flex items-center gap-4">
            <span className="flex h-10 items-center bg-cream px-4">
              <Image
                src="/images/brands/lutron.png"
                alt="Lutron"
                width={340}
                height={50}
                className="h-4 w-auto"
              />
            </span>
            <span className="eyebrow text-cream/55">Sivoia QS · Serena</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
