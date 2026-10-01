"use client";

import { motion, useReducedMotion } from "framer-motion";
import Photo from "@/components/ui/Photo";
import { contactImages } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ContactHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex h-screen w-full items-end overflow-hidden bg-cream sm:min-h-[88svh]">
      <div className="absolute inset-0">
        <Photo
          src={contactImages.hero.src}
          alt={contactImages.hero.alt}
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/45 to-black/10" />
      </div>

      <div className="section-pad relative z-10 w-full pb-16 pt-32 sm:pb-44">
        <motion.h1
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
          className="max-w-4xl font-display text-[clamp(1.75rem,5.5vw,5.5rem)] leading-[0.95] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)]"
        >
          Let&rsquo;s Talk About Your Project.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: EASE }}
          className="mt-6 max-w-xl font-body text-base leading-relaxed text-white/85 sm:text-lg"
        >
          Every home starts with a conversation. Tell us what you have in
          mind, and we&rsquo;ll help you shape it.
        </motion.p>
      </div>
    </section>
  );
}
