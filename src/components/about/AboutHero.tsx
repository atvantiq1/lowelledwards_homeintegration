"use client";

import { motion, useReducedMotion } from "framer-motion";
import Photo from "@/components/ui/Photo";
import { aboutImages } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function AboutHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex h-screen w-full items-end overflow-hidden bg-cream sm:min-h-[88svh]">
      <div className="absolute inset-0">
        <Photo
          src={aboutImages.hero.src}
          alt={aboutImages.hero.alt}
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/45 to-black/10" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/70 via-black/20 to-transparent sm:h-44" />
      </div>

      <div className="section-pad relative z-10 w-full pb-16 pt-32 sm:pb-44">
        <motion.h1
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
          className="max-w-4xl font-display text-[clamp(1.6rem,4.6vw,4.25rem)] leading-[1.04] tracking-[0.01em] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)]"
        >
          40 Years <span className="cap-o-tight">O</span>f Making Technology
          Feel Simple.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: EASE }}
          className="mt-6 max-w-lg font-body text-base leading-relaxed text-white/85 sm:text-lg"
        >
          We believe great technology should be felt, not seen — quietly
          built into the way you already live.
        </motion.p>
      </div>
    </section>
  );
}
