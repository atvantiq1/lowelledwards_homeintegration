import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import { securityImages } from "@/lib/images";

const { grounds, door, paths } = securityImages.coverage;

function Caption({ label, text }: { label: string; text: string }) {
  return (
    <div className="mt-3 flex items-baseline gap-3">
      <p className="eyebrow shrink-0 text-gold">{label}</p>
      <p className="font-body text-sm leading-relaxed text-cream/60">{text}</p>
    </div>
  );
}

export default function SecurityCoverage() {
  return (
    <section className="bg-bg py-16 sm:py-20 lg:py-28">
      <div className="section-pad grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow text-gold">Across The Property</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl text-cream sm:text-5xl lg:text-6xl">
            Confidence, from every angle.
          </h2>
        </Reveal>
        <Reveal delay={0.12} className="lg:col-span-4 lg:col-start-9">
          <p className="max-w-md font-body text-base leading-relaxed text-cream/65">
            A home is more than its front door. Security is planned around the whole property, from the entrance to the grounds and the paths between, and shaped by how each space is actually used.
          </p>
        </Reveal>
      </div>

      <div className="section-pad mt-10 grid grid-cols-1 gap-8 sm:mt-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <ImageReveal className="aspect-4/3 lg:aspect-auto lg:h-[32rem]">
            <Photo
              src={grounds.src}
              alt={grounds.alt}
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </ImageReveal>
          <Reveal delay={0.1}>
            <Caption label="The grounds" text="Lit paths and planting, considered with the property." />
          </Reveal>
        </div>

        <div className="grid grid-cols-2 items-start gap-6 lg:col-span-5 lg:gap-8">
          <div className="lg:mt-24">
            <ImageReveal delay={0.1} className="aspect-[3/5]">
              <Photo
                src={door.src}
                alt={door.alt}
                sizes="(min-width: 1024px) 20vw, 50vw"
              />
            </ImageReveal>
            <Reveal delay={0.1}>
              <p className="eyebrow mt-3 text-gold">Front door</p>
            </Reveal>
          </div>

          <div className="col-span-2 sm:col-span-1 lg:col-span-1 lg:mt-72">
            <ImageReveal delay={0.2} className="aspect-square">
              <Photo
                src={paths.src}
                alt={paths.alt}
                sizes="(min-width: 1024px) 20vw, 50vw"
                objectPosition={paths.position}
              />
            </ImageReveal>
            <Reveal delay={0.1}>
              <p className="eyebrow mt-3 text-gold">Pathways</p>
            </Reveal>
          </div>
        </div>
      </div>

      <Reveal className="section-pad mt-10">
        <p className="max-w-xl font-body text-xs leading-relaxed text-cream/50">
          Images are illustrative. Which areas a system covers is decided
          project by project.
        </p>
      </Reveal>
    </section>
  );
}
