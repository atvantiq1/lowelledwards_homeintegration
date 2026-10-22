import {
  AudioIcon,
  VideoIcon,
  LightingIcon,
  ShadesIcon,
  AutomationIcon,
  NetworkingIcon,
  SecurityIcon,
  ThermostatIcon,
} from "@/components/ui/HomeIcons";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import CapabilityList from "@/components/ui/CapabilityList";
import { homeImages } from "@/lib/images";

const CAPABILITIES = [
  {
    label: "Audio",
    icon: AudioIcon,
    description:
      "Whole-home music that follows you from room to room, with clear sound at any volume.",
  },
  {
    label: "Video",
    icon: VideoIcon,
    description:
      "Displays and sources that are easy to use, discreetly placed, and ready when you are.",
  },
  {
    label: "Lighting",
    icon: LightingIcon,
    description:
      "Scenes that set the mood for any moment, from morning routines to evening entertaining.",
  },
  {
    label: "Shades",
    icon: ShadesIcon,
    description:
      "Motorized shades that balance natural light, privacy, and comfort throughout the day.",
  },
  {
    label: "Automation",
    icon: AutomationIcon,
    description:
      "One simple system that ties every device together and responds to the way you live.",
  },
  {
    label: "Networking",
    icon: NetworkingIcon,
    description:
      "A fast, reliable network with full-home coverage for every device and every room.",
  },
  {
    label: "Security",
    icon: SecurityIcon,
    description:
      "Cameras, door locks, and alerts you can monitor and control from anywhere.",
  },
  {
    label: "Thermostats",
    icon: ThermostatIcon,
    description:
      "Zoned climate control that keeps every space comfortable while saving energy.",
  },
];

export default function SmartHomeSection() {
  return (
    <section id="smart-home" className="bg-bg2 py-14 sm:py-18 lg:py-20">
      <div className="section-pad grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
        <ImageReveal className="aspect-4/3 sm:aspect-16/10 lg:col-span-7 lg:aspect-auto lg:h-full lg:min-h-110">
          <Photo
            src={homeImages.smartHomeFull.src}
            alt={homeImages.smartHomeFull.alt}
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </ImageReveal>

        <Reveal
          delay={0.15}
          distance={32}
          className="flex flex-col justify-center bg-bg p-10 sm:p-12 lg:col-span-5 lg:p-14"
        >
          <h2 className="font-display text-3xl text-cream sm:text-4xl">
            Smart Home Integration
          </h2>

          <p className="mt-5 font-body text-sm leading-relaxed text-cream/65">
            A smart home should make everyday life easier, not more
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

          <CapabilityList items={CAPABILITIES} />
        </Reveal>
      </div>
    </section>
  );
}
