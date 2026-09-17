import { Film, Volume2, Armchair, Waves, Lightbulb, Settings2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import CTALink from "@/components/ui/CTALink";
import { homeImages } from "@/lib/images";

const FEATURES = [
  { label: "Cinema Screens", icon: Film },
  { label: "Immersive Audio", icon: Volume2 },
  { label: "Theater Seating", icon: Armchair },
  { label: "Acoustic Design", icon: Waves },
  { label: "Lighting Control", icon: Lightbulb },
  { label: "One-Touch Control", icon: Settings2 },
];

export default function HomeTheatreSection() {
  return (
    <section id="home-theatre" className="bg-bg py-12 sm:py-18 lg:py-20">
      <div className="section-pad grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
        <Reveal
          delay={0.15}
          distance={32}
          className="order-2 flex flex-col justify-center bg-bg2 p-10 sm:p-12 lg:order-1 lg:col-span-5 lg:p-14"
        >
          <h2 className="font-display text-3xl text-cream sm:text-4xl">
            Your Own Private Cinema.
          </h2>

          <p className="mt-5 font-body text-sm leading-relaxed text-cream/65">
            A great home theater is more than a large screen. It is an
            environment designed around the way you watch, listen, and spend
            time together.
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-cream/65">
            From high-performance audio and cinema-quality video to seating,
            lighting, acoustics, and intuitive control, we create private
            theaters that feel at home within the architecture of your space.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-bg4 pt-8">
            {FEATURES.map(({ label, icon: Icon }) => (
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

          <CTALink href="/residential#home-theatre" variant="outline" className="mt-10 self-start">
            Explore Home Theater
          </CTALink>
        </Reveal>

        <Reveal className="order-1 lg:order-2 lg:col-span-7">
          <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-auto lg:h-full lg:min-h-110">
            <Photo
              src={homeImages.homeTheatreFull.src}
              alt={homeImages.homeTheatreFull.alt}
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
