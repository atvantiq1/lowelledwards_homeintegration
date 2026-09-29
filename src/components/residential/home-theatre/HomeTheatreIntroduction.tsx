import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import { homeTheatreImages } from "@/lib/images";

export default function HomeTheatreIntroduction() {
  return (
    <section className="relative overflow-hidden bg-bg py-16 sm:py-20 lg:py-28">
      <div className="section-pad grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6 lg:col-start-1">
          <Reveal>
            <p className="eyebrow text-gold">The Experience</p>
            <h2 className="mt-6 font-display text-4xl text-cream sm:text-5xl lg:text-[3.25rem]">
              More Than a Theatre.
              <br />
              An Experience.
            </h2>
          </Reveal>

          <Reveal delay={0.12} className="mt-8">
            <p className="max-w-md font-body text-base leading-relaxed text-cream/65">
              A great home theater is more than a large screen. It is an
              environment designed around the way you watch, listen, and
              spend time together.
            </p>
            <p className="mt-5 max-w-md font-body text-base leading-relaxed text-cream/65">
              Screens and speakers matter, but seating, lighting, acoustics,
              and control are what make the room feel finished — each one
              considered as part of the architecture of your home, not
              added on top of it.
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
              src={homeTheatreImages.introduction.src}
              alt={homeTheatreImages.introduction.alt}
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
