import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import { aboutImages } from "@/lib/images";

export default function CompanyStory() {
  return (
    <section className="relative overflow-hidden bg-bg py-16 sm:py-20 lg:py-24">
      <div className="section-pad grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-5 lg:col-start-1">
          <Reveal>
            <p className="eyebrow text-gold">Our Story</p>
            <h2 className="mt-6 font-display text-4xl text-cream sm:text-5xl">
              Built Around the Way You Live.
            </h2>
          </Reveal>

          <Reveal delay={0.12} className="mt-8">
            <p className="max-w-md font-body text-base leading-relaxed text-cream/65">
              For more than 40 years, Lowell Edwards has helped homeowners
              bring technology into their homes without letting it take over
              the space.
            </p>
            <p className="mt-5 max-w-md font-body text-base leading-relaxed text-cream/65">
              Every project starts with how a family actually lives, not with
              a list of equipment. From a single room to a fully integrated
              residence, our factory-trained technicians design and install
              each system in-house, then remain part of the relationship long
              after installation is complete.
            </p>
          </Reveal>
        </div>

        <div className="relative pb-10 sm:pb-12 lg:col-span-7 lg:col-start-6 lg:pb-14">
          <Reveal
            delay={0.1}
            distance={40}
            className="relative"
          >
            <ImageReveal className="ml-auto aspect-4/3 w-[82%] lg:aspect-auto lg:h-96">
              <Photo
                src={aboutImages.story.src}
                alt={aboutImages.story.alt}
                sizes="(min-width: 1024px) 48vw, 82vw"
              />
            </ImageReveal>
          </Reveal>

          <Reveal
            delay={0.28}
            distance={30}
            className="absolute -bottom-8 left-0 w-[36%] sm:-bottom-10 lg:-bottom-10"
          >
            <ImageReveal className="aspect-4/5 border-4 border-bg shadow-[0_20px_48px_rgba(0,0,0,0.18)]">
              <Photo
                src={aboutImages.storyDetail.src}
                alt={aboutImages.storyDetail.alt}
                sizes="(min-width: 1024px) 18vw, 34vw"
              />
            </ImageReveal>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
