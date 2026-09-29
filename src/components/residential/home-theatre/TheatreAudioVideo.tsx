import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import { homeTheatreImages } from "@/lib/images";

export default function TheatreAudioVideo() {
  return (
    <section className="bg-bg2 py-12 sm:py-16 lg:py-20">
      <div className="section-pad grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5" distance={32}>
          <p className="eyebrow text-gold">Audio</p>
          <div className="relative mt-4 aspect-4/3 overflow-hidden">
            <Photo
              src={homeTheatreImages.audio.src}
              alt={homeTheatreImages.audio.alt}
              sizes="(min-width: 1024px) 38vw, 100vw"
            />
          </div>
          <h3 className="mt-5 font-display text-2xl text-cream sm:text-3xl">
            Immersive sound.
          </h3>
          <p className="mt-2 max-w-sm font-body text-sm leading-relaxed text-cream/65">
            In-wall and architectural speakers built into the room itself,
            delivering multi-room, high-performance sound without a single
            visible component.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-7 lg:mt-8" delay={0.12} distance={32}>
          <p className="eyebrow text-gold">Video</p>
          <div className="relative mt-4 aspect-video overflow-hidden">
            <Photo
              src={homeTheatreImages.video.src}
              alt={homeTheatreImages.video.alt}
              sizes="(min-width: 1024px) 52vw, 100vw"
              objectPosition={homeTheatreImages.video.position}
            />
          </div>
          <h3 className="mt-5 font-display text-2xl text-cream sm:text-3xl">
            Cinema-quality visuals.
          </h3>
          <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-cream/65">
            A dedicated screen or a display concealed within the room until
            it&rsquo;s time to watch — video built into the architecture
            rather than placed on top of it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
