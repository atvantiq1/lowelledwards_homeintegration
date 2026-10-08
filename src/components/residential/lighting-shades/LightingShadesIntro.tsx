import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import { lightingShadesImages } from "@/lib/images";

export default function LightingShadesIntro() {
  return (
    <section className="bg-bg pt-16 sm:pt-20 lg:pt-28">
      <div className="section-pad grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-8">
        <Reveal className="lg:col-span-8">
          <p className="eyebrow text-gold">Light &amp; Shade</p>
          <h2 className="mt-6 font-display text-4xl text-cream sm:text-5xl lg:text-[4rem]">
            A home that adjusts to the way you live — not the other way around.
          </h2>
        </Reveal>

        <Reveal delay={0.12} className="lg:col-span-4">
          <p className="max-w-md font-body text-base leading-relaxed text-cream/65">
            Lutron lighting and shade controls bring daylight and electric
            light together, so a room can change with the hour without anyone
            crossing it to flip a switch or pull a cord. It is operated from
            a wall keypad, a handheld remote, or an iPad — and sits alongside
            every other system in the home.
          </p>
        </Reveal>
      </div>

      <div className="section-pad mt-10 sm:mt-14">
        <ImageReveal className="aspect-4/3 sm:aspect-video lg:aspect-21/9">
          <Photo
            src={lightingShadesImages.introduction.src}
            alt={lightingShadesImages.introduction.alt}
            sizes="(min-width: 1024px) 90vw, 100vw"
          />
        </ImageReveal>
      </div>
    </section>
  );
}
