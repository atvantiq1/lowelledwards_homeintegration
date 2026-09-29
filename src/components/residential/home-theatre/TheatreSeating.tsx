"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import { homeTheatreImages } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

const STYLES = [
  { label: "Classic", position: "50% 38%" },
  { label: "Lounge", position: "50% 50%" },
  { label: "Premium Recline", position: "50% 62%" },
  { label: "Signature", position: "50% 46%" },
] as const;

export default function TheatreSeating() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-bg py-16 sm:py-20 lg:py-28">
      <div className="section-pad mb-10 sm:mb-14">
        <Reveal>
          <p className="eyebrow text-gold">Seating</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl text-cream sm:text-5xl">
            Seating for the Way You Watch.
          </h2>
          <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-cream/65">
            Luxury theater seating, selected for comfort and fit, from a
            classic theater row to a fully reclined lounge.
          </p>
        </Reveal>
      </div>

      <div className="section-pad">
        <Reveal className="group" distance={36}>
          <motion.div
            className="relative aspect-4/5 overflow-hidden sm:aspect-16/10 lg:aspect-21/9"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <motion.div
              className="h-full w-full"
              variants={{ rest: { scale: 1 }, hover: { scale: 1.03 } }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              <Photo
                src={homeTheatreImages.seating.src}
                alt={homeTheatreImages.seating.alt}
                sizes="100vw"
                objectPosition={STYLES[active].position}
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
          </motion.div>

          <div className="relative mt-8 flex flex-wrap items-baseline justify-center gap-x-10 gap-y-4 border-t border-bg4 pt-8 sm:justify-between">
            {STYLES.map((style, i) => {
              const isActive = i === active;
              return (
                <button
                  key={style.label}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className="group/label relative pb-3 text-left"
                >
                  <span
                    className={`font-display text-lg transition-colors duration-300 sm:text-xl ${
                      isActive ? "text-gold" : "text-cream/45 group-hover/label:text-cream/70"
                    }`}
                  >
                    {style.label}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="seating-active-indicator"
                      transition={{ duration: 0.4, ease: EASE }}
                      className="absolute inset-x-0 bottom-0 h-px bg-gold"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
