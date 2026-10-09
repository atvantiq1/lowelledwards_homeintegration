import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import CTALink from "@/components/ui/CTALink";
import { networkingImages } from "@/lib/images";

const SYSTEMS = [
  "Audio",
  "Video",
  "Automation",
  "Lighting",
  "Shades",
  "Security",
] as const;

export default function SmartHomeIntegration() {
  return (
    <section className="bg-bg2 py-16 sm:py-20 lg:py-28">
      <div className="section-pad grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
        <ImageReveal className="aspect-4/3 sm:aspect-16/10 lg:col-span-7 lg:aspect-auto lg:h-full lg:min-h-130">
          <Photo
            src={networkingImages.integration.src}
            alt={networkingImages.integration.alt}
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </ImageReveal>

        <Reveal
          delay={0.15}
          distance={32}
          className="flex flex-col justify-center bg-bg p-8 sm:p-10 lg:col-span-5 lg:p-12"
        >
          <p className="eyebrow text-gold">Networking + Smart Home</p>
          <h2 className="mt-4 font-display text-3xl text-cream sm:text-4xl">
            <span className="cap-o-tight">O</span>ne connected experience.
          </h2>
          <p className="mt-5 font-body text-sm leading-relaxed text-cream/65">
            The systems Lowell Edwards integrates — from home theater to
            lighting control — meet through the network. When it is planned
            well, they can be brought together into a single, customized
            experience.
          </p>

          <ul
            aria-label="Systems supported by the network"
            className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-bg4 pt-6"
          >
            {SYSTEMS.map((s, i) => (
              <li key={s} className="flex items-center gap-3">
                <span className="eyebrow text-cream/80">{s}</span>
                {i < SYSTEMS.length - 1 && (
                  <span aria-hidden className="text-gold/60">
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>

          <CTALink
            href="/residential/smart-home-integration"
            variant="text"
            className="mt-8 self-start"
          >
            Smart Home Integration
          </CTALink>
        </Reveal>
      </div>
    </section>
  );
}
