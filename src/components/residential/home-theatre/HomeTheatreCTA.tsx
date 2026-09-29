import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import CTALink from "@/components/ui/CTALink";
import { homeTheatreImages } from "@/lib/images";

export default function HomeTheatreCTA() {
  return (
    <section className="relative flex min-h-[50vh] w-full items-center overflow-hidden bg-cream">
      <div className="absolute inset-0">
        <Photo
          src={homeTheatreImages.cta.src}
          alt={homeTheatreImages.cta.alt}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/20 to-transparent" />
      </div>

      <Reveal className="section-pad relative z-10 w-full py-16 text-center sm:py-20">
        <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          Design Your Home Theatre.
        </h2>
        <div className="mt-10 flex justify-center">
          <CTALink href="/contact" variant="solid">
            Start a Conversation
          </CTALink>
        </div>
      </Reveal>
    </section>
  );
}
