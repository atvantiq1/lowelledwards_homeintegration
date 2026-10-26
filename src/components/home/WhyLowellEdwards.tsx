"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import { homeImages } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

const STATS = [
  {
    title: "Four Decades of Expertise",
    description:
      "40+ years of experience creating technology environments designed around the way our clients live.",
    image: homeImages.whyExperience,
  },
  {
    title: "Responsive When It Matters",
    description:
      "A 24-hour response commitment when your home technology needs attention.",
    image: homeImages.whyResponse,
  },
  {
    title: "Free Phone & Remote Support",
    description:
      "Free phone and remote support from a team that knows your systems, available during business hours.",
    image: homeImages.whySupport,
  },
  {
    title: "We Stand Behind Our Work",
    description:
      "One year of in-home service included with every installation.",
    image: homeImages.whyService,
  },
  {
    title: "Complete Pricing Transparency",
    description:
      "Detailed, itemized proposals with no hidden costs or surprises.",
    image: homeImages.whyPricing,
  },
  {
    title: "High Quality Luxury Installation",
    description:
      "Factory-trained, certified technicians delivering expert installation and integration.",
    image: homeImages.whyTechnicians,
  },
];

export default function WhyLowellEdwards() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-28">
      <div className="section-pad mb-10 sm:mb-14">
        <Reveal>
          <h2 className="font-display text-4xl text-gold-light sm:text-5xl lg:text-6xl">
            Why Lowell Edwards
          </h2>
          <p className="mt-4 font-body text-base uppercase tracking-[0.18em] text-white/80 sm:text-lg">
            Experience You Can Rely On.
          </p>
        </Reveal>
      </div>

      <div className="section-pad grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-7">
          <ul>
            {STATS.map((stat, i) => {
              const isActive = i === active;
              return (
                <li key={stat.title} className="relative border-t border-white/10 last:border-b">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-expanded={isActive}
                    className="flex w-full items-baseline gap-4 py-6 text-left sm:gap-8 sm:py-7"
                  >
                    <span
                      className={`font-body text-xs tabular-nums transition-colors duration-300 ${
                        isActive ? "text-gold-light" : "text-white/30"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">
                      <span
                        className={`block font-display text-2xl transition-colors duration-300 sm:text-3xl lg:text-4xl ${
                          isActive ? "text-gold-light" : "text-white"
                        }`}
                      >
                        {stat.title}
                      </span>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.span
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: EASE }}
                            className="block overflow-hidden"
                          >
                            <span className="block pt-3 font-body text-sm leading-relaxed text-white/65 sm:text-base">
                              {stat.description}
                            </span>
                          </motion.span>
                        )}
                      </AnimatePresence>
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

      <div className="section-pad mt-6 grid grid-cols-1 gap-8 sm:mt-8 lg:grid-cols-12 lg:items-center lg:gap-10">
        <Reveal className="max-w-2xl lg:col-span-7">
          <h3 className="font-display text-2xl text-white sm:text-3xl">
            1 Year Support Plan After Installation.
          </h3>
          <p className="mt-4 font-body text-base leading-relaxed text-white/60">
            The relationship does not end when installation is complete. Every
            project includes a one-year support plan, so our team is there to
            keep your home technology performing the way it should.
          </p>
        </Reveal>
        <Reveal className="flex lg:col-span-5 lg:justify-center">
          <Link
            href="/about"
            className="inline-flex w-full items-center justify-center gap-2 border border-gold bg-gold px-10 py-4 font-body text-[11px] sm:w-auto sm:min-w-72 font-medium tracking-[0.2em] whitespace-nowrap text-white uppercase transition-[background-color,border-color] duration-500 hover:border-gold2 hover:bg-gold2"
          >
            About Us
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
