import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import { projectGalleryImages } from "@/lib/images";

/**
 * Layout per tile, in the same order as `projectGalleryImages`. Every ratio
 * is landscape and matches (or nearly matches) its photo, so the screen or
 * TV that is the subject of each shot is never cropped out. The 16:9 and 5:4
 * pair on the first row come out the same height at the 7/5 column split.
 */
const LAYOUT = [
  { className: "lg:col-span-7", aspect: "16 / 9", sizes: "(min-width: 1024px) 58vw, 100vw" },
  // The screen in this render sits at the far left edge, so anchor the crop there.
  { className: "lg:col-span-5", aspect: "5 / 4", sizes: "(min-width: 1024px) 40vw, 100vw", objectPosition: "0% 50%" },
  { className: "lg:col-span-4", aspect: "3 / 2", sizes: "(min-width: 1024px) 33vw, 100vw" },
  { className: "lg:col-span-4", aspect: "3 / 2", sizes: "(min-width: 1024px) 33vw, 100vw" },
  { className: "lg:col-span-4", aspect: "3 / 2", sizes: "(min-width: 1024px) 33vw, 100vw" },
] as const;

export default function ProjectGallery() {
  return (
    <section className="bg-bg pb-16 sm:pb-20 lg:pb-28">
      <div className="section-pad mx-auto max-w-384">
        <Reveal>
          <header className="mb-6 flex flex-col gap-2 border-t border-cream/20 pt-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 md:mb-8">
            <h2 className="font-display text-3xl leading-none text-cream sm:text-4xl">
              In the Details
            </h2>
            <p className="font-body text-sm text-cream/65">
              The finishes and fittings behind every install.
            </p>
          </header>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-6">
          {projectGalleryImages.map((item, i) => {
            const { className, aspect, sizes } = LAYOUT[i];
            const objectPosition =
              "objectPosition" in LAYOUT[i] ? LAYOUT[i].objectPosition : undefined;
            return (
              <Reveal
                key={item.label}
                delay={(i % 3) * 0.08}
                distance={32}
                className={className}
              >
                <figure>
                  <div style={{ aspectRatio: aspect }}>
                    <ImageReveal className="h-full">
                      <Photo
                        src={item.image.src}
                        alt={item.image.alt}
                        sizes={sizes}
                        objectPosition={objectPosition}
                      />
                    </ImageReveal>
                  </div>
                  <figcaption className="mt-4">
                    <p className="font-body text-sm uppercase tracking-[0.08em] text-cream">
                      {item.label}
                    </p>
                    <p className="mt-1 font-body text-sm text-cream/50">
                      {item.caption}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
