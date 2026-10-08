import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import { homeTheatreImages } from "@/lib/images";

export default function TheatreAudioVideo() {
  return (
    <section className="bg-bg2 py-12 sm:py-16 lg:py-20">
      <div className="section-pad grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-6" distance={32}>
          <p className="eyebrow text-gold">Audio</p>
          <ImageReveal className="mt-4 h-64 sm:h-80 lg:h-96">
            <Photo
              src={homeTheatreImages.audio.src}
              alt={homeTheatreImages.audio.alt}
              sizes="(min-width: 1024px) 38vw, 100vw"
            />
          </ImageReveal>
          <h3 className="mt-5 font-display text-2xl text-cream sm:text-3xl">
            Immersive sound.
          </h3>
          <p className="mt-2 max-w-sm font-body text-sm leading-relaxed text-cream/65">
            In-wall and architectural speakers built into the room itself,
            delivering multi-room, high-performance sound without a single
            visible component. Dolby Atmos-ready designs add ceiling
            channels overhead, layered with dual subwoofers for sound you
            feel as much as hear.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-6" delay={0.12} distance={32}>
          <p className="eyebrow text-gold">Video</p>
          <ImageReveal className="mt-4 h-64 sm:h-80 lg:h-96">
            <Photo
              src={homeTheatreImages.video.src}
              alt={homeTheatreImages.video.alt}
              sizes="(min-width: 1024px) 52vw, 100vw"
              objectPosition={homeTheatreImages.video.position}
            />
          </ImageReveal>
          <h3 className="mt-5 font-display text-2xl text-cream sm:text-3xl">
            Cinema-quality visuals.
          </h3>
          <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-cream/65">
            A dedicated screen or a display concealed within the room until
            it&rsquo;s time to watch — video built into the architecture
            rather than placed on top of it. Laser projection and
            acoustically transparent screens keep the image sharp at true
            cinema scale, without giving up a seat&rsquo;s worth of sound.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
