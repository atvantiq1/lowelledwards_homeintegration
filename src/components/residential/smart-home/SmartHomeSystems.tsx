"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import { smartHomeImages } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

const SYSTEMS = [
  {
    label: "Audio & Video",
    description:
      "Multi-room sound and concealed, art-frame televisions that fill every room with rich audio and cinema-quality picture, disappearing until it's time to enjoy them.",
    image: smartHomeImages.systems.audioVideo,
  },
  {
    label: "Lighting",
    description:
      "Lutron lighting control that layers architectural, task, and accent lighting into scenes setting the mood automatically, morning through night.",
    image: smartHomeImages.systems.lighting,
  },
  {
    label: "Shades",
    description:
      "Motorized shades that rise and fall with the light, and with your day programmed for sunrise, movie night, or a single tap.",
    image: smartHomeImages.systems.shades,
  },
  {
    label: "Thermostat",
    description:
      "Room-by-room climate control that keeps every space comfortable, adjusting quietly on its own schedule throughout the day.",
    image: smartHomeImages.systems.thermostat,
  },
  {
    label: "Automation",
    description:
      "One interface for every system in the home, so audio, video, lighting, shades, and climate move as one.",
    image: smartHomeImages.systems.automation,
  },
  {
    label: "Networking",
    description:
      "A reliable, enterprise-grade network running quietly behind everything connected in your home, keeping every device and stream online.",
    image: smartHomeImages.systems.networking,
  },
  {
    label: "Security",
    description:
      "Cameras, smart locks, and video intercoms on the same interface as everything else protection that stays out of sight until you need it.",
    image: smartHomeImages.systems.security,
  },
] as const;

export default function SmartHomeSystems() {
  const [active, setActive] = useState(0);

  return (
    <section id="systems" className="bg-bg2 py-12 sm:py-16 lg:py-18">
      <div className="section-pad mb-6 sm:mb-8">
        <Reveal>
          <p className="eyebrow text-gold">Systems</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl text-cream sm:text-5xl">
            Every System, One Experience.
          </h2>
        </Reveal>
      </div>

      <div className="section-pad grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-7">
          <ul>
            {SYSTEMS.map((system, i) => {
              const isActive = i === active;
              return (
                <li
                  key={system.label}
                  className="group/row relative border-t border-bg4 last:border-b"
                >
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    aria-describedby={`system-desc-${i}`}
                    className="flex w-full items-center gap-4 py-6 text-left sm:gap-8 sm:py-5"
                  >
                    <span
                      className={`font-body text-xs tabular-nums transition-colors duration-300 ${
                        isActive ? "text-gold" : "text-cream/30"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-xl transition-colors duration-300 sm:text-2xl lg:text-3xl ${
                        isActive ? "text-gold" : "text-cream"
                      }`}
                    >
                      {system.label}
                    </span>
                    <ArrowRight
                      aria-hidden
                      className={`ml-auto h-4 w-4 shrink-0 transition-all duration-300 ${
                        isActive
                          ? "translate-x-1 text-gold"
                          : "text-cream/30 group-hover/row:translate-x-1 group-hover/row:text-cream/60"
                      }`}
                      strokeWidth={1.5}
                    />
                  </button>

                  <div
                    id={`system-desc-${i}`}
                    className="grid transition-[grid-template-rows] duration-500 ease-out"
                    style={{
                      gridTemplateRows: isActive ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-md pb-6 font-body text-sm leading-relaxed text-cream/60 sm:pb-6 sm:text-sm">
                        {system.description}
                      </p>

                      <div className="relative mb-3 aspect-video overflow-hidden sm:hidden">
                        <Photo
                          src={system.image.src}
                          alt={system.image.alt}
                          sizes="100vw"
                        />
                      </div>
                    </div>
                  </div>

                  {isActive && (
                    <motion.span
                      layoutId="system-active-bar"
                      transition={{ duration: 0.4, ease: EASE }}
                      className="absolute inset-x-0 bottom-0 h-px bg-gold"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal
          delay={0.1}
          distance={30}
          className="hidden sm:block lg:col-span-5"
        >
          <div className="sticky top-24">
            <div className="relative aspect-square overflow-hidden">
              <AnimatePresence>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="absolute inset-0"
                >
                  <Photo
                    src={SYSTEMS[active].image.src}
                    alt={SYSTEMS[active].image.alt}
                    sizes="(min-width: 1024px) 35vw, 100vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
