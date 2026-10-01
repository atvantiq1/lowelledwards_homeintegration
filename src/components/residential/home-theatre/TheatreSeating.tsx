"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import { homeTheatreImages } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

const STYLES = [
  {
    label: "Classic",
    image: homeTheatreImages.seatingClassic,
    description:
      "A traditional theater row, fixed-back and forward-facing, for the direct, immersive sightline of a true cinema. Offered in fine leather or faux leather to match the room.",
  },
  {
    label: "Lounge",
    image: homeTheatreImages.seating,
    description:
      "Wider spacing and a relaxed recline, so the room feels as comfortable on a Sunday afternoon as on a premiere night — built for households who linger as much as they watch.",
  },
  {
    label: "Power Recline",
    image: homeTheatreImages.seatingRecline,
    description:
      "Motorized recline, footrests, and memory positions on a commercial-grade frame, strong enough for nightly use through a three-hour film.",
  },
  {
    label: "Signature",
    image: homeTheatreImages.seatingSignature,
    description:
      "Built to order in your choice of leather, mohair, Ultrasuede, or your own fabric, with details like retractable arms, tray tables, and aisle lighting finished to match.",
  },
] as const;

export default function TheatreSeating() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-bg py-16 sm:py-20 lg:py-28">
      <div className="section-pad mb-10 grid grid-cols-1 gap-8 sm:mb-14 lg:grid-cols-12 lg:items-end lg:gap-8">
        <Reveal className="lg:col-span-6 lg:col-start-1">
          <p className="eyebrow text-gold">Seating</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl text-cream sm:text-5xl">
            Seating for the Way You Watch.
          </h2>
          <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-cream/65">
            Luxury theater seating, selected for comfort and fit, from a
            classic theater row to a fully reclined lounge.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="lg:col-span-5 lg:col-start-8">
          <p className="max-w-lg font-body text-base leading-relaxed text-cream/65">
            Every row is built to order by seating specialists like Fortress
            Seating and CinemaTech, sized, spaced, and angled to its
            sightline, then finished in fine leather, mohair, or Ultrasuede
            with details like motorized recline, LED aisle lighting, and tray
            tables — built for comfort through the whole film, not just the
            first act.
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
            <AnimatePresence>
              <motion.div
                key={STYLES[active].label}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <motion.div
                  className="h-full w-full"
                  variants={{ rest: { scale: 1 }, hover: { scale: 1.03 } }}
                  transition={{ duration: 0.9, ease: EASE }}
                >
                  <Photo
                    src={STYLES[active].image.src}
                    alt={STYLES[active].image.alt}
                    sizes="100vw"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
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

          <div className="mt-6 flex min-h-16 justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={STYLES[active].label}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                aria-live="polite"
                className="max-w-md text-center font-body text-sm leading-relaxed text-cream/65"
              >
                {STYLES[active].description}
              </motion.p>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
