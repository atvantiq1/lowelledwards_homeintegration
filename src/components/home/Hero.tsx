"use client";

import { motion, useReducedMotion } from "framer-motion";
import Photo from "@/components/ui/Photo";
import CTALink from "@/components/ui/CTALink";
import { homeImages } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex h-screen w-full items-end overflow-hidden bg-cream sm:min-h-[88svh]">
      <div className="absolute inset-0">
        <Photo
          src={homeImages.hero.src}
          alt={homeImages.hero.alt}
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/15 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-white/85 to-transparent sm:h-44" />
      </div>

      <div className="section-pad relative z-10 w-full pb-16 pt-32 sm:pb-50">
        <motion.h1
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
          className="max-w-4xl font-display text-[clamp(1.75rem,5.5vw,5.5rem)] leading-[0.95] text-white"
        >
          Technology, Designed Around Your Home.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: EASE }}
          className="mt-6 max-w-xl font-body text-base leading-relaxed text-white/85 sm:text-lg"
        >
          Create a home that feels effortless. Lowell Edwards Home
          Integration brings audio, video, lighting, shades, automation,
          networking, security, and home theater together into one
          thoughtfully designed experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <CTALink href="/contact" variant="solid">
            Request a Consultation
          </CTALink>
          <CTALink href="/residential" variant="outline" tone="light">
            Explore Our Services
          </CTALink>
        </motion.div>
      </div>
    </section>
  );
}
