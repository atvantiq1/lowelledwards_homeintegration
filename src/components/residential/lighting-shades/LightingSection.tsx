import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import { lightingShadesImages } from "@/lib/images";

const DETAILS = [
  {
    label: "Dimming & scenes",
    text: "A single keypad can control multiple lights and shades, and one scene can set every room for the activity at hand.",
  },
  {
    label: "Occupancy & vacancy sensing",
    text: "Wireless sensors switch light on and off as rooms are used and left.",
  },
  {
    label: "Lamps included",
    text: "A plug-in dimmer brings table lamps into the same system as the architectural lighting.",
  },
] as const;

export default function LightingSection() {
  return (
    <section className="bg-bg2 py-16 sm:py-20 lg:py-28">
      <div className="section-pad grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow text-gold">Lighting</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl text-cream sm:text-5xl">
              The right light for every moment.
            </h2>
            <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-cream/65">
              Lutron RadioRA lighting control is wireless, so light can be
              layered and dimmed throughout the home without opening walls.
              In the morning it can rise gently; in the evening it settles —
              and it works in step with the shades and the rest of the home
              control.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <dl>
              {DETAILS.map((d) => (
                <div
                  key={d.label}
                  className="grid gap-1 border-t border-bg4 py-4 last:border-b sm:grid-cols-[11rem_1fr] sm:gap-6"
                >
                  <dt className="eyebrow text-cream/80">{d.label}</dt>
                  <dd className="font-body text-sm leading-relaxed text-cream/60">
                    {d.text}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <ImageReveal
          delay={0.15}
          className="aspect-4/3 lg:col-span-6 lg:col-start-7 lg:aspect-auto lg:h-136"
        >
          <Photo
            src={lightingShadesImages.lighting.src}
            alt={lightingShadesImages.lighting.alt}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </ImageReveal>
      </div>
    </section>
  );
}
