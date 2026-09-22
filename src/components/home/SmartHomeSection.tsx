import { Volume2, MonitorPlay, Lightbulb, Blinds, Settings2, Wifi, ShieldCheck, Thermometer } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import CTALink from "@/components/ui/CTALink";
import { homeImages } from "@/lib/images";

const CAPABILITIES = [
  { label: "Audio", icon: Volume2 },
  { label: "Video", icon: MonitorPlay },
  { label: "Lighting", icon: Lightbulb },
  { label: "Shades", icon: Blinds },
  { label: "Automation", icon: Settings2 },
  { label: "Networking", icon: Wifi },
  { label: "Security", icon: ShieldCheck },
  { label: "Thermostats", icon: Thermometer },
];

export default function SmartHomeSection() {
  return (
    <section id="smart-home" className="bg-bg2 py-14 sm:py-18 lg:py-20">
      <div className="section-pad grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-7">
          <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-auto lg:h-full lg:min-h-110">
            <Photo
              src={homeImages.smartHomeFull.src}
              alt={homeImages.smartHomeFull.alt}
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </div>
        </Reveal>

        <Reveal
          delay={0.15}
          distance={32}
          className="flex flex-col justify-center bg-bg p-10 sm:p-12 lg:col-span-5 lg:p-14"
        >
          <h2 className="font-display text-3xl text-cream sm:text-4xl">
            One System. Every Room.
          </h2>

          <p className="mt-5 font-body text-sm leading-relaxed text-cream/65">
            A smart home should make everyday life easier not more
            complicated.
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-cream/65">
            We integrate the technology throughout your home so lighting,
            audio, video, shades, climate, networking, security, and
            thermostats can work together as one experience. Whether
            you&rsquo;re relaxing at
            home or preparing for guests, the right systems are ready when
            you need them.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-bg4 pt-8">
            {CAPABILITIES.map(({ label, icon: Icon }) => (
              <li key={label} className="group/cap flex items-center gap-3">
                <Icon
                  className="h-4 w-4 shrink-0 text-gold/70 transition-colors duration-300 group-hover/cap:text-gold"
                  strokeWidth={1.25}
                  aria-hidden
                />
                <span className="font-body text-sm text-cream/70 transition-colors duration-300 group-hover/cap:text-cream">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <CTALink href="/residential#smart-home" variant="outline" className="mt-10 self-start">
            Explore Smart Home Integration
          </CTALink>
        </Reveal>
      </div>
    </section>
  );
}
