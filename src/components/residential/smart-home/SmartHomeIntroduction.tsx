import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import { smartHomeImages } from "@/lib/images";

export default function SmartHomeIntroduction() {
  return (
    <section className="relative overflow-hidden bg-bg py-16 sm:py-20 lg:py-28">
      <div className="section-pad grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6 lg:col-start-1">
          <Reveal>
            <p className="eyebrow text-gold">Smart Home Integration</p>
            <h2 className="mt-6 font-display text-4xl text-cream sm:text-5xl lg:text-[3.25rem]">
              Technology That Works
              <br />
              Around You.
            </h2>
          </Reveal>

          <Reveal delay={0.12} className="mt-8">
            <p className="max-w-md font-body text-base leading-relaxed text-cream/65">
              For more than 40 years, Lowell Edwards has integrated the
              systems throughout a home — multi-room sound, lighting
              control, motorized shading, climate, and even pool systems —
              into a single, customized interface.
            </p>
            <p className="mt-5 max-w-md font-body text-base leading-relaxed text-cream/65">
              Every system is selected and installed around the way you
              live, so the technology stays in the background and the home
              stays in focus.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.1}
          distance={40}
          className="relative lg:col-span-6 lg:col-start-7 lg:-my-10 lg:translate-x-6"
        >
          <div className="relative" style={{ aspectRatio: "6 / 5" }}>
            <Photo
              src={smartHomeImages.introduction.src}
              alt={smartHomeImages.introduction.alt}
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
