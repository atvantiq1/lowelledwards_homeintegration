import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import CTALink from "@/components/ui/CTALink";
import { homeImages } from "@/lib/images";

export default function BrandIntroduction() {
  return (
    <section className="relative overflow-hidden bg-bg py-16 sm:py-20 lg:py-28">
      <div className="section-pad grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6 lg:col-start-1">
          <Reveal>
            <p className="eyebrow text-gold">About Lowell Edwards</p>
            <h2 className="mt-6 font-display text-4xl text-cream sm:text-5xl lg:text-[3.25rem]">
              40 Years of Experience.
              <br />
              Designed Around You.
            </h2>
          </Reveal>

          <Reveal delay={0.12} className="mt-8">
            <p className="max-w-md font-body text-base leading-relaxed text-cream/65">
              For more than 40 years, Lowell Edwards has helped homeowners
              bring technology into their homes without letting it take over
              the space.
            </p>
            <p className="mt-5 max-w-md font-body text-base leading-relaxed text-cream/65">
              From a single room to a fully integrated residence, we design
              and install technology around the way you live, entertain,
              relax, and connect. Every system is carefully selected,
              professionally integrated, and supported by our experienced
              team.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-12">
            <CTALink href="/about" variant="text">
              About Lowell Edwards
            </CTALink>
          </Reveal>
        </div>

        <Reveal
          delay={0.1}
          distance={40}
          className="relative lg:col-span-6 lg:col-start-7 lg:-my-10 lg:translate-x-6"
        >
          <div className="relative" style={{ aspectRatio: "6 / 5" }}>
            <Photo
              src={homeImages.brandIntroduction.src}
              alt={homeImages.brandIntroduction.alt}
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
