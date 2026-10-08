"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import { homeTheatreImages } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

const ELEMENTS = [
  { number: "01", label: "Screen" },
  { number: "02", label: "Speakers" },
  { number: "03", label: "Seating" },
  { number: "04", label: "Lighting" },
  { number: "05", label: "Acoustic Treatment" },
  { number: "06", label: "Equipment" },
] as const;

function AnnotationRow({
  number,
  label,
  align,
  reduceMotion,
}: {
  number: string;
  label: string;
  align: "left" | "right";
  reduceMotion: boolean;
}) {
  const lineVariants: Variants = {
    hidden: { scaleX: reduceMotion ? 1 : 0 },
    visible: { scaleX: 1, transition: { duration: 0.7, ease: EASE } },
  };
  const labelVariants: Variants = {
    hidden: { opacity: reduceMotion ? 1 : 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
  };

  const text = (
    <motion.span
      variants={labelVariants}
      className="whitespace-nowrap font-body text-[11px] tracking-[0.18em] text-cream/70 uppercase"
    >
      <span className="mr-2 text-gold">{number}</span>
      {label}
    </motion.span>
  );

  const line = (
    <motion.span
      variants={lineVariants}
      className={`h-px flex-1 bg-gold/70 ${align === "left" ? "origin-right" : "origin-left"}`}
    />
  );

  return (
    <div className="flex items-center gap-3 py-3">
      {align === "left" ? (
        <>
          {text}
          {line}
        </>
      ) : (
        <>
          {line}
          {text}
        </>
      )}
    </div>
  );
}

export default function TheatreDesign() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.14, delayChildren: 0.25 },
    },
  };

  const LEFT = ELEMENTS.slice(0, 3);
  const RIGHT = ELEMENTS.slice(3);

  return (
    <section id="theatre-design" className="bg-bg2 py-16 sm:py-20 lg:py-28">
      <div className="section-pad mb-10 sm:mb-14">
        <Reveal>
          <p className="eyebrow text-gold">Theatre Design</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl text-cream sm:text-5xl">
            Every Element, Considered.
          </h2>
          <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-cream/65">
            From high-performance audio and cinema-quality video to seating,
            lighting, acoustics, and intuitive control, each element is
            designed to feel like part of the room — not equipment placed
            inside it.
          </p>
        </Reveal>
      </div>

      <div className="section-pad">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="hidden lg:grid lg:grid-cols-[minmax(150px,200px)_1fr_minmax(150px,200px)] lg:items-stretch lg:gap-8"
        >
          <div className="flex flex-col justify-center gap-2 py-8">
            {LEFT.map((item) => (
              <AnnotationRow
                key={item.label}
                number={item.number}
                label={item.label}
                align="left"
                reduceMotion={!!prefersReducedMotion}
              />
            ))}
          </div>

          <ImageReveal className="aspect-16/10 lg:aspect-auto lg:h-[34rem]">
            <Photo
              src={homeTheatreImages.theatreDesign.src}
              alt={homeTheatreImages.theatreDesign.alt}
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/45" />
          </ImageReveal>

          <div className="flex flex-col justify-center gap-2 py-8">
            {RIGHT.map((item) => (
              <AnnotationRow
                key={item.label}
                number={item.number}
                label={item.label}
                align="right"
                reduceMotion={!!prefersReducedMotion}
              />
            ))}
          </div>
        </motion.div>

        {/* Mobile / tablet: image with a numbered list beneath it, preserving
            the architectural character without cramming annotation lines
            onto a small screen. */}
        <div className="lg:hidden">
          <ImageReveal className="aspect-4/3 sm:aspect-16/10">
            <Photo
              src={homeTheatreImages.theatreDesign.src}
              alt={homeTheatreImages.theatreDesign.alt}
              sizes="100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/25" />
          </ImageReveal>

          <Reveal delay={0.1} className="mt-8">
            <ol className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-bg4 pt-6 sm:grid-cols-3">
              {ELEMENTS.map((item) => (
                <li key={item.label} className="flex items-center gap-2.5">
                  <span className="font-body text-xs text-gold tabular-nums">
                    {item.number}
                  </span>
                  <span className="font-body text-sm text-cream/75">
                    {item.label}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
