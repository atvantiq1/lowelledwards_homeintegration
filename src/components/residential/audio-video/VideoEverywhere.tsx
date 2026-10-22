import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import { audioVideoImages } from "@/lib/images";

const { living, outdoor, listening } = audioVideoImages.spaces;

function Caption({ label, text }: { label: string; text: string }) {
  return (
    <div className="mt-4 grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-4">
      <p className="eyebrow text-cream/80">{label}</p>
      <p className="font-body text-sm leading-relaxed text-cream/60">{text}</p>
    </div>
  );
}

export default function VideoEverywhere() {
  return (
    <section className="bg-bg py-16 sm:py-20 lg:py-28">
      <div className="section-pad grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow text-gold">Distributed Video</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl text-cream sm:text-5xl lg:text-6xl">
            The perfect picture, wherever you watch.
          </h2>
        </Reveal>
        <Reveal delay={0.12} className="lg:col-span-4 lg:col-start-9">
          <p className="max-w-md font-body text-base leading-relaxed text-cream/65">
            A movie in the living room, the game on the patio, a favorite
            show in the bedroom. Sources live in one place and stream in
            stunning 4K to any screen in the home.
          </p>
        </Reveal>
      </div>

      <div className="section-pad mt-10 grid grid-cols-1 gap-8 sm:mt-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <ImageReveal className="aspect-4/3 lg:aspect-5/4">
            <Photo
              src={living.src}
              alt={living.alt}
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </ImageReveal>
          <Reveal delay={0.1}>
            <Caption
              label="Living"
              text="Large-format displays and immersive sound for movie nights and big games."
            />
          </Reveal>
        </div>

        <div className="flex flex-col gap-8 lg:col-span-5 lg:justify-between">
          <div>
            <ImageReveal delay={0.1} className="aspect-16/10">
              <Photo
                src={outdoor.src}
                alt={outdoor.alt}
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </ImageReveal>
            <Reveal delay={0.1}>
              <Caption
                label="Outdoor"
                text="Weather-rated speakers and displays for poolside parties and evenings on the patio."
              />
            </Reveal>
          </div>

          <div>
            <ImageReveal delay={0.15} className="aspect-16/10">
              <Photo
                src={listening.src}
                alt={listening.alt}
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </ImageReveal>
            <Reveal delay={0.1}>
              <Caption
                label="Listening"
                text="Hi-fi speakers chosen for clarity and warmth, for music worth sitting down for."
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
