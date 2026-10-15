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
        {/* Portrait screens get a taller crop so the copy sits below the devices */}
        <Photo
          src={homeImages.heroPortrait.src}
          alt={homeImages.hero.alt}
          sizes="100vw"
          priority
          quality={90}
          className="lg:hidden [&_img]:object-[66%_50%] sm:[&_img]:object-[71%_50%]"
        />
        <Photo
          src={homeImages.hero.src}
          alt={homeImages.hero.alt}
          sizes="100vw"
          priority
          quality={90}
          className="hidden lg:block [&_img]:object-[48%_50%] xl:[&_img]:object-[33%_50%]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/15 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/70 via-black/20 to-transparent sm:h-44" />
      </div>

      <div className="section-pad relative z-10 w-full pb-16 pt-32 sm:pb-32 lg:pb-50">
        <motion.h1
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
          className="max-w-3xl font-display text-[clamp(1.75rem,5vw,5.5rem)] leading-[0.95] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)]"
        >
          Technology Designed Around Your Home.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: EASE }}
          className="mt-6 max-w-md font-body xl:max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
        >
          Create a home that feels effortless. Lowell Edwards Home
          Integration brings audio, video, lighting, shades, automation,
          networking, security, thermostats, and home theater together into
          one thoughtfully designed experience.
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
