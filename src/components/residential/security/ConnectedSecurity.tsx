import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import CTALink from "@/components/ui/CTALink";
import { securityImages } from "@/lib/images";

const SYSTEMS = ["Security", "Lighting", "Automation", "Networking"] as const;

export default function ConnectedSecurity() {
  return (
    <section className="bg-bg">
      <div className="relative">
        <ImageReveal className="aspect-4/3 sm:aspect-video lg:aspect-auto lg:h-[47.5rem]">
          <Photo
            src={securityImages.connected.src}
            alt={securityImages.connected.alt}
            sizes="100vw"
            objectPosition={securityImages.connected.position}
          />
        </ImageReveal>

        <Reveal
          delay={0.15}
          distance={32}
          className="bg-bg p-8 sm:p-10 lg:absolute lg:bottom-0 lg:left-[clamp(1.5rem,5vw,5rem)] lg:z-10 lg:w-130 lg:p-12"
        >
          <p className="eyebrow text-gold">Security + Smart Home</p>
          <h2 className="mt-4 font-display text-3xl text-cream sm:text-4xl">
            <span className="cap-o-tight">O</span>ne home. A more connected
            experience.
          </h2>
          <p className="mt-5 font-body text-sm leading-relaxed text-cream/65">
            Lowell Edwards works across lighting and climate control,
            automation, networking and security. Planned together, the
            systems that protect a home sit alongside those that make it
            comfortable, all operated from one control system.
          </p>

          <ul
            aria-label="Connected systems"
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
            className="mt-8"
          >
            Smart Home Integration
          </CTALink>
        </Reveal>
      </div>
    </section>
  );
}
