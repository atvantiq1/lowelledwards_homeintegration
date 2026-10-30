import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import CTALink from "@/components/ui/CTALink";
import type { CommercialService } from "@/lib/commercial";

export default function CommercialCTA({ service }: { service: CommercialService }) {
  const image = service.images.cta;

  return (
    <section className="relative flex min-h-[50vh] w-full items-center overflow-hidden bg-cream">
      <div className="absolute inset-0">
        <Photo
          src={image.src}
          alt={image.alt}
          sizes="100vw"
          objectPosition={image.position}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/45 to-black/25" />
      </div>

      <Reveal className="section-pad relative z-10 w-full py-16 text-center sm:py-20">
        <h2 className="mx-auto max-w-5xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          {service.cta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-md font-body text-base leading-relaxed text-white/85">
          {service.cta.text}
        </p>
        <div className="mt-10 flex justify-center">
          <CTALink href="/contact" variant="solid">
            Request Consultation
          </CTALink>
        </div>
      </Reveal>
    </section>
  );
}
