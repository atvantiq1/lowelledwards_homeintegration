import Link from "next/link";
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
import CapabilityList from "@/components/ui/CapabilityList";
import CTALink from "@/components/ui/CTALink";
import { homeImages } from "@/lib/images";

const FEATURES = [
  {
    label: "Cinema Screens",
    icon: CinemaScreenIcon,
    description:
      "Large-format screens and projection with the contrast and detail the filmmakers intended.",
  },
  {
    label: "Immersive Audio",
    icon: SurroundSoundIcon,
    description:
      "Surround sound that places you inside the story, from whispers to full-scale impact.",
  },
  {
    label: "Theater Seating",
    icon: TheatreSeatIcon,
    description:
      "Plush, custom seating arranged so every seat has an ideal view and sound.",
  },
  {
    label: "Acoustic Design",
    icon: AcousticsIcon,
    description:
      "Room treatments that control echo and outside noise for clean, accurate sound.",
  },
  {
    label: "Lighting Control",
    icon: LightingIcon,
    description:
      "Lighting that dims automatically when the movie starts and returns when it ends.",
  },
  {
    label: "One-Touch Control",
    icon: RemoteControlIcon,
    description:
      "A single button or remote that powers everything on and sets the room for showtime.",
  },
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
            <Link
              href="/residential/home-theatre"
              className="transition-colors duration-300 hover:text-gold"
            >
              Immersive Home Theater
            </Link>
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

          <CapabilityList items={FEATURES} />

          <CTALink
            href="/residential/home-theatre"
            variant="solid"
            className="mt-10 self-start"
          >
            Plan Your Theater
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
