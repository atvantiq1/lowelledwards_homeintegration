"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import { homeImages } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

const STATS = [
  { value: "40 Years", label: "Experience", image: homeImages.whyExperience },
  { value: "24 Hours", label: "Response SLA", image: homeImages.whyResponse },
  { value: "24/7", label: "Phone Support", image: homeImages.whySupport },
  { value: "1 Year", label: "In-Home Service", image: homeImages.whyService },
  { value: "No Surprises", label: "Itemized Pricing", image: homeImages.whyPricing },
  {
    value: "Factory Certified",
    label: "Trained Technicians",
    image: homeImages.whyTechnicians,
  },
];

export default function WhyLowellEdwards() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-28">
      <div className="section-pad mb-10 sm:mb-14">
        <Reveal>
          <p className="eyebrow text-gold-light">Why Lowell Edwards</p>
          <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">
            Experience You Can Rely On.
          </h2>
        </Reveal>
      </div>

      <div className="section-pad grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-7">
          <ul>
            {STATS.map((stat, i) => {
              const isActive = i === active;
              return (
                <li key={stat.value} className="relative border-t border-white/10 last:border-b">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className="flex w-full items-baseline gap-4 py-6 text-left sm:gap-8 sm:py-7"
                  >
                    <span
                      className={`font-body text-xs tabular-nums transition-colors duration-300 ${
                        isActive ? "text-gold-light" : "text-white/30"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-3xl transition-colors duration-300 sm:text-4xl lg:text-5xl ${
                        isActive ? "text-gold-light" : "text-white"
                      }`}
                    >
                      {stat.value}
                    </span>
                    <span
                      className={`ml-auto font-body text-xs uppercase tracking-widest transition-colors duration-300 sm:text-sm ${
                        isActive ? "text-gold-light/80" : "text-white/40"
                      }`}
                    >
                      {stat.label}
                    </span>
                  </button>

                  {isActive && (
                    <motion.span
                      layoutId="why-active-bar"
                      transition={{ duration: 0.4, ease: EASE }}
                      className="absolute inset-x-0 bottom-0 h-px bg-gold-light"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1} distance={30} className="lg:col-span-5">
          <div className="sticky top-28">
            <div className="relative aspect-4/5 overflow-hidden">
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
                    src={STATS[active].image.src}
                    alt={STATS[active].image.alt}
                    sizes="(min-width: 1024px) 35vw, 100vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="section-pad mt-6 sm:mt-8">
        <Reveal className="max-w-2xl">
          <h3 className="font-display text-2xl text-white sm:text-3xl">
            A Better Experience From Design to Support.
          </h3>
          <p className="mt-4 font-body text-base leading-relaxed text-white/60">
            We believe the relationship does not end when installation is
            complete. Our team remains available to help keep your home
            technology performing the way it should.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
