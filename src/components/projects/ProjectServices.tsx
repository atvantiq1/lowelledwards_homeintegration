import {
  Blinds,
  Clapperboard,
  Cpu,
  Lightbulb,
  ShieldCheck,
  Thermometer,
  Tv,
  Volume2,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

// The same integration disciplines already established in the site's own
// taxonomy (see ResidentialExperiences and the Footer), not a new list.
const SERVICES: readonly {
  name: string;
  blurb: string;
  Icon: LucideIcon;
}[] = [
  {
    name: "Audio",
    blurb:
      "Whole-home and dedicated-room sound, tuned to the space it lives in.",
    Icon: Volume2,
  },
  {
    name: "Video",
    blurb:
      "Displays and distribution that stay out of sight until they're wanted.",
    Icon: Tv,
  },
  {
    name: "Home Theater",
    blurb: "Screens, acoustics, and seating built around a single sightline.",
    Icon: Clapperboard,
  },
  {
    name: "Lighting",
    blurb: "Scenes and control that shift the mood of a room at a touch.",
    Icon: Lightbulb,
  },
  {
    name: "Shades",
    blurb: "Motorized shades that move with the light through the day.",
    Icon: Blinds,
  },
  {
    name: "Automation",
    blurb: "One system tying every room together, from a single control.",
    Icon: Cpu,
  },
  {
    name: "Networking",
    blurb: "The dependable backbone every connected device relies on.",
    Icon: Wifi,
  },
  {
    name: "Security",
    blurb: "Cameras, access, and alerts you can check from anywhere.",
    Icon: ShieldCheck,
  },
  {
    name: "Thermostats",
    blurb: "Comfort that follows the routines of the home.",
    Icon: Thermometer,
  },
];

export default function ProjectServices() {
  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-28">
      <div className="section-pad mx-auto grid max-w-384 gap-12 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow text-gold-light">What We Integrate</p>
            <h2 className="mt-5 font-display text-3xl leading-[1.15] text-white sm:text-4xl lg:text-5xl">
              Technology, Integrated Around the Way You Live.
            </h2>
            <div className="mt-6 max-w-sm space-y-4 font-body text-sm leading-relaxed text-white/55 sm:text-base">
              <p>
                Nine disciplines, designed and installed as one system rather
                than nine separate ones. From fully integrated custom home
                theaters and multiroom sound to home automation and Wi-Fi
                networking, every system pairs superior products with well
                thought out system design.
              </p>
              <p>
                Our factory-trained team handles the details that make
                technology disappear into the home, from TV concealment and
                motorized shades to lighting control and touch screen remotes.
                We pride ourselves on getting the job done right the first time,
                and a dedicated customer service coordinator keeps it running
                long after installation.
              </p>
            </div>
          </div>
        </Reveal>

        <ul className="grid grid-cols-1 content-start gap-x-8 border-t border-white/10 md:grid-cols-2 lg:col-span-8">
          {SERVICES.map(({ name, blurb, Icon }, i) => (
            <li key={name} className="border-b border-white/10">
              <Reveal
                delay={(i % 2) * 0.08}
                distance={20}
                className="group relative flex h-full items-center gap-4 py-7 pr-2 pl-5 transition-colors duration-500 hover:bg-white/4 sm:py-8 sm:pl-6"
              >
                <span
                  aria-hidden
                  className="absolute top-0 left-0 h-full w-0.5 origin-top scale-y-0 bg-gold-light transition-transform duration-500 group-hover:scale-y-100"
                />

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 text-gold-light transition-all duration-500 group-hover:border-gold-light group-hover:bg-gold-light group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-2xl text-white transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl">
                    {name}
                  </h3>
                  <p className="mt-2 max-w-sm font-body text-sm leading-relaxed text-white/60">
                    {blurb}
                  </p>
                </div>

                <span
                  aria-hidden
                  className="self-start pt-1 font-body text-xs tracking-widest text-white/30 transition-colors duration-500 group-hover:text-gold-light"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
