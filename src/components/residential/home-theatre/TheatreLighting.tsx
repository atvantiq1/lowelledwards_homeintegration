import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import { homeTheatreImages } from "@/lib/images";

export default function TheatreLighting() {
  return (
    <section className="bg-bg py-16 sm:py-20 lg:py-28">
      <div className="section-pad mb-10 sm:mb-14">
        <ImageReveal className="aspect-4/3 sm:aspect-video lg:aspect-21/8">
          <Photo
            src={homeTheatreImages.lighting.src}
            alt={homeTheatreImages.lighting.alt}
            sizes="100vw"
          />
        </ImageReveal>
      </div>

      <div className="section-pad grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-8">
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-1">
          <p className="eyebrow text-gold">Lighting &amp; Atmosphere</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl text-cream sm:text-5xl">
            <span className="cap-o-tight">O</span>ne Touch. Everything Ready.
          </h2>
          <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-cream/65">
            Lighting, shades, and the theater itself, brought together on
            Lutron and Crestron control — so the room dims, the screen wakes,
            and the sound is ready, all from a single touch.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="lg:col-span-5 lg:col-start-8">
          <p className="max-w-lg font-body text-base leading-relaxed text-cream/65">
            A single &ldquo;Movie&rdquo; scene dims the room, lowers the
            shades, and wakes the system in sequence — so the only thing left
            to do once the lights go down is watch.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
