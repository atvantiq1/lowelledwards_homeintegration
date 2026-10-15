import {
  CinemaScreenIcon,
  SurroundSoundIcon,
  TheatreSeatIcon,
  AcousticsIcon,
  LightingIcon,
  RemoteControlIcon,
} from "@/components/ui/HomeIcons";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import CTALink from "@/components/ui/CTALink";
import { homeImages } from "@/lib/images";

const FEATURES = [
  { label: "Cinema Screens", icon: CinemaScreenIcon },
  { label: "Immersive Audio", icon: SurroundSoundIcon },
  { label: "Theater Seating", icon: TheatreSeatIcon },
  { label: "Acoustic Design", icon: AcousticsIcon },
  { label: "Lighting Control", icon: LightingIcon },
  { label: "One-Touch Control", icon: RemoteControlIcon },
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
            Home Theater
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
                  className="h-6 w-6 shrink-0 text-gold/80 transition-colors duration-300 group-hover/cap:text-gold"
                />
                <span className="font-body text-sm text-cream/70 transition-colors duration-300 group-hover/cap:text-cream">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <CTALink href="/residential/home-theatre" variant="outline" className="mt-10 self-start">
            Explore Home Theater
          </CTALink>
        </Reveal>

        <ImageReveal className="aspect-4/3 sm:aspect-16/10 order-1 lg:order-2 lg:col-span-7 lg:aspect-auto lg:h-full lg:min-h-110">
          <Photo
            src={homeImages.homeTheatreFull.src}
            alt={homeImages.homeTheatreFull.alt}
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </ImageReveal>
      </div>
    </section>
  );
}
