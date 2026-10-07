"use client";

import { motion, useReducedMotion } from "framer-motion";
import Photo from "@/components/ui/Photo";
import CTALink from "@/components/ui/CTALink";
import { projectsImages } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ProjectsHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex h-screen w-full items-end overflow-hidden bg-cream sm:min-h-[88svh]">
      <div className="absolute inset-0">
        <Photo
          src={projectsImages.hero.src}
          alt={projectsImages.hero.alt}
          sizes="100vw"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/45 to-black/10" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/70 via-black/20 to-transparent sm:h-44" />
      </div>

      <div className="section-pad pointer-events-none relative z-10 w-full pb-16 pt-32 sm:pb-50">
        <motion.h1
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
          className="max-w-4xl font-display text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)]"
        >
          Projects.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: EASE }}
          className="mt-6 max-w-xl font-body text-base leading-relaxed text-white/85 sm:text-lg"
        >
          A selection of real Lowell Edwards work — theaters, seating, and
          technology designed into the architecture of the home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: EASE }}
          className="pointer-events-auto mt-10 inline-block"
        >
          <CTALink href="/contact" variant="solid" tone="light">
            Request Consultation
          </CTALink>
        </motion.div>
      </div>
    </section>
  );
}
