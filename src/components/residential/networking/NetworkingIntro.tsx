import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import { networkingImages } from "@/lib/images";

export default function NetworkingIntro() {
  return (
    <section className="bg-bg pt-16 sm:pt-20 lg:pt-28">
      <div className="section-pad grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-8">
        <div className="flex flex-col justify-center lg:col-span-7">
          <Reveal>
            <p className="eyebrow text-gold">The Foundation</p>
            <h2 className="mt-6 max-w-3xl font-display text-4xl text-cream sm:text-5xl lg:text-[4rem]">
              The foundation of a connected home.
            </h2>
          </Reveal>

          <Reveal delay={0.12} className="mt-8">
            <p className="max-w-lg font-body text-base leading-relaxed text-cream/65">
              Networking is more than internet access. In a connected home,
              the audio, video, lighting, shades, automation and security
              systems all rely on the network to reach one another — so how
              it is designed shapes how well the whole home works.
            </p>
            <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-cream/65">
              Lowell Edwards plans networking and Wi-Fi alongside the rest of
              the home&rsquo;s technology, as part of one integrated system
              rather than an afterthought.
            </p>
          </Reveal>
        </div>

        <ImageReveal
          delay={0.1}
          className="aspect-4/5 sm:aspect-4/3 lg:col-span-5 lg:aspect-auto lg:min-h-130"
        >
          <Photo
            src={networkingImages.introduction.src}
            alt={networkingImages.introduction.alt}
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </ImageReveal>
      </div>

      <div className="section-pad mt-8 sm:mt-10 lg:mt-12">
        <ImageReveal className="aspect-4/3 sm:aspect-video lg:aspect-21/9">
          <Photo
            src={networkingImages.introductionWide.src}
            alt={networkingImages.introductionWide.alt}
            sizes="(min-width: 1024px) 90vw, 100vw"
          />
        </ImageReveal>
      </div>
    </section>
  );
}
