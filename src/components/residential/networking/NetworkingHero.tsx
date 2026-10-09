"use client";

import { motion, useReducedMotion } from "framer-motion";
import Photo from "@/components/ui/Photo";
import CTALink from "@/components/ui/CTALink";
import { networkingImages } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function NetworkingHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex h-screen w-full items-end overflow-hidden bg-cream sm:min-h-[88svh]">
      <div className="absolute inset-0">
        <Photo
          src={networkingImages.hero.src}
          alt={networkingImages.hero.alt}
          sizes="100vw"
          objectPosition={networkingImages.hero.position}
          priority
        />
        {/* Localized, light-touch shading only: the photo stays bright. */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-linear-to-t from-black/80 via-black/45 to-black/5" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/55 via-black/15 to-transparent sm:h-44" />
      </div>

      <div className="section-pad relative z-10 w-full pb-16 pt-32 sm:pb-50">
        <motion.h1
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
          className="max-w-4xl font-display text-[clamp(1.75rem,5.5vw,5.5rem)] leading-[0.95] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)]"
        >
          Connected From The Ground Up.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: EASE }}
          className="mt-6 max-w-xl font-body text-base leading-relaxed text-white/90 sm:text-lg"
        >
          A reliable network is the quiet foundation of a modern connected
          home — working behind the scenes so every system in it can work
          together.
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
