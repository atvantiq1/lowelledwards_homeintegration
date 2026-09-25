import { Smartphone, MonitorSmartphone, SlidersHorizontal, Mic2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import CTALink from "@/components/ui/CTALink";
import { smartHomeImages } from "@/lib/images";

const CONTROLS = [
  { label: "App Control", icon: Smartphone },
  { label: "Touchscreens", icon: MonitorSmartphone },
  { label: "Keypads", icon: SlidersHorizontal },
  { label: "Voice Control", icon: Mic2 },
];

export default function SmartHomeIntegration() {
  return (
    <section className="bg-bg2 py-16 sm:py-20 lg:py-28">
      <div className="section-pad grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-7">
          <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-auto lg:h-full lg:min-h-110">
            <Photo
              src={smartHomeImages.integration.src}
              alt={smartHomeImages.integration.alt}
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </div>
        </Reveal>

        <Reveal
          delay={0.15}
          distance={32}
          className="flex flex-col justify-center bg-bg p-10 sm:p-12 lg:col-span-5 lg:p-14"
        >
          <p className="eyebrow text-gold">Integration</p>
          <h2 className="mt-4 font-display text-3xl text-cream sm:text-4xl">
            One Controlled Experience.
          </h2>
          <p className="mt-5 font-body text-sm leading-relaxed text-cream/65">
            Audio, video, lighting, shades, climate, and security — every
            system in the home, working together through a single,
            customized interface rather than a collection of disconnected
            apps and remotes.
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-cream/65">
            Whether it&rsquo;s a Lutron or Crestron touchscreen mounted by
            the door, a keypad in the hallway, an app on your phone, or a
            simple voice command, every system responds the same way —
            instantly, and without a second thought.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-bg4 pt-8">
            {CONTROLS.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="group/ctrl flex items-center gap-2.5"
              >
                <Icon
                  className="h-4 w-4 shrink-0 text-gold/70 transition-colors duration-300 group-hover/ctrl:text-gold"
                  strokeWidth={1.25}
                  aria-hidden
                />
                <span className="font-body text-sm text-cream/70 transition-colors duration-300 group-hover/ctrl:text-cream">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <CTALink href="/contact" variant="outline" className="mt-10 self-start">
            Schedule a Consultation
          </CTALink>
        </Reveal>
      </div>
    </section>
  );
}
