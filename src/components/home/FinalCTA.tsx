import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import CTALink from "@/components/ui/CTALink";
import { homeImages } from "@/lib/images";

export default function FinalCTA() {
  return (
    <section className="relative flex min-h-[55vh] w-full items-center overflow-hidden bg-cream">
      <div className="absolute inset-0">
        <Photo
          src={homeImages.finalCta.src}
          alt={homeImages.finalCta.alt}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/20 to-transparent" />
      </div>

      <Reveal className="section-pad relative z-10 w-full py-16 text-center sm:py-20">
        <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          Let&rsquo;s Design Your Experience.
        </h2>
        <p className="mx-auto mt-5 max-w-md font-body text-base leading-relaxed text-white/80">
          Your home is unique. Your technology should be, too. Start a
          conversation with the Lowell Edwards Home Integration team about
          your next project.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <CTALink href="/contact" variant="solid">
            Start a Conversation
          </CTALink>
          <CTALink href="#" variant="outline" tone="light">
            Call Lowell Edwards
          </CTALink>
        </div>
      </Reveal>
    </section>
  );
}
