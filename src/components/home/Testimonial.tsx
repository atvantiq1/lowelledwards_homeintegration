"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const AUTOPLAY_INTERVAL = 5000;

const TESTIMONIALS = [
  {
    quote:
      "Lowell Edwards turned our new build into something that actually feels effortless to live in. Every light, shade, and screen just works, and it never feels like we're fighting the technology.",
    name: "Sarah Whitfield",
    meta: "Greenwich, CT / Full-Home Automation",
  },
  {
    quote:
      "The home theater exceeded every expectation. Picture, sound, and seating all came together as one experience, and the team was meticulous about every detail during install.",
    name: "Marcus Reyes",
    meta: "Scarsdale, NY / Home Theater",
  },
  {
    quote:
      "What impressed us most was the support after the project was done. Any time we've had a question, someone from the team has been quick to help.",
    name: "Elena Park",
    meta: "Short Hills, NJ / Smart Home Integration",
  },
  {
    quote:
      "They designed our system around how our family actually lives, not around the technology itself. It disappears into the architecture the way we hoped it would.",
    name: "David Chen",
    meta: "Bronxville, NY / Lighting & Shades",
  },
  {
    quote:
      "From the first consultation to the final walkthrough, the process felt organized and unhurried. Our home now feels genuinely connected without a single visible wire.",
    name: "Olivia Bennett",
    meta: "Rye, NY / Networking & Security",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS[index];
  const prefersReducedMotion = useReducedMotion();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);

  useEffect(() => {
    if (prefersReducedMotion) return;

    intervalRef.current = setInterval(next, AUTOPLAY_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [index, prefersReducedMotion]);

  const handleNext = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    next();
  };

  return (
    <section className="relative overflow-hidden bg-bg2 py-14 sm:py-18 lg:py-20">
      <Quote
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-8 hidden h-40 w-40 -translate-y-1/2 rotate-180 text-gold/5 lg:block xl:left-20"
        strokeWidth={0.75}
      />
      <Quote
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-8 hidden h-40 w-40 -translate-y-1/2 text-gold/5 lg:block xl:right-20"
        strokeWidth={0.75}
      />

      <div className="section-pad relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow text-gold">What Our Clients Say</p>
          <Quote
            className="mx-auto mt-8 h-10 w-10 text-gold/40"
            strokeWidth={1}
            aria-hidden
          />
        </Reveal>

        <div className="relative mt-8 min-h-36 sm:min-h-28">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display text-2xl leading-snug text-cream sm:text-3xl lg:text-4xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <footer className="mt-8">
                <p className="font-body text-sm uppercase tracking-widest text-cream">
                  {current.name}
                </p>
                <p className="mt-1 font-body text-sm text-cream/50">
                  {current.meta}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-14 flex items-center justify-center gap-6">
          <span className="font-body text-xs tracking-widest text-cream/40">
            {String(index + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={handleNext}
            className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-widest text-cream transition-colors duration-300 hover:text-gold"
          >
            Next
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.5}
              aria-hidden
            />
          </button>
        </div>
      </div>
    </section>
  );
}
