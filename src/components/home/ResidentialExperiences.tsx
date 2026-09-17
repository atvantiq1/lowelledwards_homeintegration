"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";
import CTALink from "@/components/ui/CTALink";
import { homeImages } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

const EXPERIENCES = [
  {
    number: "01",
    title: "Smart Home Integration",
    description:
      "Technology that works quietly in the background, connecting the systems throughout your home.",
    tags: "Audio • Video • Lighting • Shades • Automation • Networking • Security",
    href: "/residential#smart-home",
    ctaLabel: "Explore Smart Home",
    image: homeImages.residentialSmartHome,
  },
  {
    number: "02",
    title: "Home Theater",
    description:
      "Bring the cinema home with a dedicated space designed for exceptional picture, immersive sound, comfortable seating, and complete control.",
    tags: "Screens • Audio • Seating • Acoustics • Lighting • Control",
    href: "/residential#home-theater",
    ctaLabel: "Explore Home Theater",
    image: homeImages.residentialHomeTheater,
  },
];

export default function ResidentialExperiences() {
  return (
    <section className="bg-bg2 py-14 sm:py-18 lg:py-20">
      <div className="section-pad mb-10 sm:mb-14">
        <Reveal>
          <p className="eyebrow text-gold">Residential Experiences</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl text-cream sm:text-5xl">
            Two Signature Experiences.
          </h2>
          <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-cream/65">
            Every home is different, but most projects begin in one of two
            places. Explore how we bring smart home integration and private
            home theaters to life.
          </p>
        </Reveal>
      </div>

      <div className="section-pad grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8">
        {EXPERIENCES.map((experience, i) => (
          <Reveal key={experience.number} className="group" distance={36} delay={i * 0.15}>
            <motion.div
              className="relative aspect-4/5 overflow-hidden sm:aspect-square lg:aspect-4/3"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <Link href={experience.href} className="absolute inset-0 z-0 block">
                <motion.div
                  className="h-full w-full"
                  variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
                  transition={{ duration: 0.9, ease: EASE }}
                >
                  <Photo
                    src={experience.image.src}
                    alt={experience.image.alt}
                    sizes="(min-width: 1024px) 48vw, 100vw"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />
              </Link>

              <span
                aria-hidden
                className="pointer-events-none absolute top-6 right-4 select-none font-display text-[7rem] leading-none text-white/10 transition-colors duration-500 group-hover:text-white/20 sm:right-6 sm:text-[9rem]"
              >
                {experience.number}
              </span>

              <motion.div
                className="pointer-events-none absolute inset-x-0 bottom-0 p-6 sm:p-8"
                variants={{ rest: { y: 0 }, hover: { y: -4 } }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <h3 className="font-display text-2xl text-white sm:text-3xl">
                  {experience.title}
                </h3>
                <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-white/75">
                  {experience.description}
                </p>
                {experience.tags && (
                  <p className="mt-2 font-body text-xs tracking-wide text-white/55">
                    {experience.tags}
                  </p>
                )}
                <div className="pointer-events-auto mt-4">
                  <CTALink href={experience.href} variant="outline" tone="light">
                    {experience.ctaLabel}
                  </CTALink>
                </div>
              </motion.div>

              <span className="absolute bottom-0 left-0 z-10 h-0.75 w-0 bg-gold transition-all duration-500 ease-out group-hover:w-full" />
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
