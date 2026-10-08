"use client";

import { motion, useReducedMotion } from "framer-motion";
import Photo from "@/components/ui/Photo";
import { lightingShadesImages } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function LightingShadesHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex h-screen w-full items-end overflow-hidden bg-cream sm:min-h-[88svh]">
      <div className="absolute inset-0">
        <Photo
          src={lightingShadesImages.hero.src}
          alt={lightingShadesImages.hero.alt}
          sizes="100vw"
          priority
        />
        {/* Light touch only: a soft top fade for the transparent navbar and
            a lower fade for the headline — the room itself stays bright. */}
        <div className="absolute inset-0 bg-linear-to-b from-black/35 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
      </div>

      <div className="section-pad relative z-10 w-full pb-16 pt-32 sm:pb-24">
        <motion.h1
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
          className="max-w-4xl font-display text-[clamp(2.25rem,6.5vw,6.5rem)] leading-[0.95] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)]"
        >
          Light That Changes With You.
        </motion.h1>
      </div>
    </section>
  );
}
