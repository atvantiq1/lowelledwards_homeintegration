import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import type { CommercialService } from "@/lib/commercial";

export default function CommercialFeatures({ service }: { service: CommercialService }) {
  const { features } = service;
  const image = service.images.feature;

  return (
    <section className="bg-bg2 py-16 sm:py-20 lg:py-28">
      <div className="section-pad grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
        <ImageReveal className="aspect-4/5 sm:aspect-4/3 lg:col-span-7 lg:aspect-auto lg:h-[47.5rem]">
          <Photo
            src={image.src}
            alt={image.alt}
            sizes="(min-width: 1024px) 58vw, 100vw"
            objectPosition={image.position}
          />
        </ImageReveal>

        <div className="lg:col-span-5 lg:pl-8">
          <Reveal>
            <p className="eyebrow text-gold">{features.eyebrow}</p>
            <h2 className="mt-4 max-w-md font-display text-4xl text-cream sm:text-5xl">
              {features.title}
            </h2>
            <p className="mt-5 max-w-md font-body text-base leading-relaxed text-cream/65">
              {features.text}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <ol>
              {features.items.map((item, i) => (
                <li
                  key={item.label}
                  className="grid grid-cols-[2.5rem_1fr] gap-x-3 border-t border-bg4 py-4 last:border-b sm:grid-cols-[3rem_1fr]"
                >
                  <span className="font-body text-xs tabular-nums text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="eyebrow text-cream">{item.label}</h3>
                    <p className="mt-1.5 font-body text-sm leading-relaxed text-cream/60">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
