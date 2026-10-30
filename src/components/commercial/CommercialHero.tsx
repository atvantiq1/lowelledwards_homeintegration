"use client";

import { motion, useReducedMotion } from "framer-motion";
import Photo from "@/components/ui/Photo";
import CTALink from "@/components/ui/CTALink";
import type { CommercialService } from "@/lib/commercial";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function CommercialHero({ service }: { service: CommercialService }) {
  const prefersReducedMotion = useReducedMotion();
  const image = service.images.hero;

  return (
    <section className="relative flex h-screen w-full items-end overflow-hidden bg-cream sm:min-h-[88svh]">
      <div className="absolute inset-0">
        <Photo
          src={image.src}
          alt={image.alt}
          sizes="100vw"
          objectPosition={image.position}
          priority
        />
        {/* Localized, light-touch shading only: the photo stays bright. */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-linear-to-t from-black/75 via-black/35 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/50 via-black/10 to-transparent sm:h-44" />
      </div>

      <div className="section-pad relative z-10 w-full pb-16 pt-32 sm:pb-50">
        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE }}
          className="eyebrow mb-5 text-white/85"
        >
          Commercial &middot; {service.label}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
          className="max-w-4xl font-display text-[clamp(1.75rem,5.5vw,5.5rem)] leading-[0.95] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)]"
        >
          {service.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: EASE }}
          className="mt-6 max-w-xl font-body text-base leading-relaxed text-white/90 sm:text-lg"
        >
          {service.hero.text}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <CTALink href="/contact" variant="solid">
            Request Consultation
          </CTALink>
        </motion.div>
      </div>
    </section>
  );
}
