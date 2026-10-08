import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import { lightingShadesImages } from "@/lib/images";

export default function LightShadeIntegration() {
  return (
    <section className="relative bg-cream">
      <ImageReveal className="h-[80svh] min-h-130 w-full sm:min-h-150">
        <Photo
          src={lightingShadesImages.integration.src}
          alt={lightingShadesImages.integration.alt}
          sizes="100vw"
        />
      </ImageReveal>
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-black/5" />

      <div className="section-pad absolute inset-x-0 bottom-0 grid grid-cols-1 gap-6 pb-10 sm:pb-14 lg:grid-cols-12 lg:items-end lg:gap-8 lg:pb-16">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow text-white/80">Light + Shade</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl text-white sm:text-5xl lg:text-6xl">
            Light and shade, working together.
          </h2>
        </Reveal>

        <Reveal delay={0.12} className="lg:col-span-4 lg:col-start-9">
          <p className="max-w-md font-body text-base leading-relaxed text-white/80">
            Lutron controls daylight and electric light together. Shades can
            move with the position of the sun while lighting is set
            alongside them, so a room stays balanced as the day changes —
            and the controls stay out of sight.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <span className="flex h-10 items-center bg-cream px-4">
              <Image
                src="/images/brands/lutron.png"
                alt="Lutron"
                width={340}
                height={50}
                className="h-4 w-auto"
              />
            </span>
            <span className="eyebrow text-white/70">
              Lighting + Shading Control
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
