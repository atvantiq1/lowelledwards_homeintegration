import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import { aboutImages } from "@/lib/images";

export default function AboutPhilosophy() {
  return (
    <section className="relative overflow-hidden bg-bg py-20 sm:py-28 lg:py-36">
      <div className="section-pad grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7 lg:col-start-1">
          <Reveal>
            <p className="eyebrow text-gold">Our Philosophy</p>
          </Reveal>

          <Reveal delay={0.1} className="mt-6">
            <h2 className="max-w-2xl font-display text-4xl leading-[1.08] text-cream sm:text-5xl lg:text-[3.5rem]">
              Technology Should Enhance the Home
              <span className="text-gold">
                {" "}
                — Not Compete With It.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.22} className="mt-8">
            <p className="max-w-md font-body text-base leading-relaxed text-cream/65">
              From home theaters and whole-home automation to networking and
              custom cabinetry, we design every system as one integrated
              experience rather than a collection of separate products —
              approached with the same eye for detail and commitment to
              getting it right the first time, on every project, regardless
              of size.
            </p>
          </Reveal>
        </div>

        <ImageReveal className="-mx-6 h-64 sm:mx-0 sm:h-80 lg:col-span-5 lg:col-start-8 lg:-my-20 lg:h-[38rem]">
          <Photo
            src={aboutImages.philosophy.src}
            alt={aboutImages.philosophy.alt}
            sizes="(min-width: 1024px) 38vw, 100vw"
          />
        </ImageReveal>
      </div>
    </section>
  );
}
