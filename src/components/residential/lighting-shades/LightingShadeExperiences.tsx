"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

const MOMENTS = [
  {
    label: "Wake",
    description:
      "Bedroom lights ramp up gently, and shades open with the position of the sun.",
  },
  {
    label: "Arrive",
    description:
      "Lights set to the right level in every room as you come home.",
  },
  {
    label: "Entertain",
    description:
      "One scene sets the lighting for the evening, in every room that needs it.",
  },
  {
    label: "Watch",
    description: "Lights dim and shades lower to keep glare off the screen.",
  },
  {
    label: "Goodnight",
    description: "One button. The home settles in, without leaving your bed.",
  },
] as const;

const LAST = MOMENTS.length - 1;

export default function LightingShadeExperiences() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-bg2 pt-20 pb-24 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32">
      <div className="section-pad mx-auto max-w-400">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-gold">Experiences</p>
          <h2 className="mt-5 text-balance font-display text-4xl text-cream sm:text-5xl lg:text-6xl">
            <span className="cap-o-tight">O</span>ne touch. Every moment.
          </h2>
          <p className="mx-auto mt-5 max-w-md font-body text-base leading-relaxed text-cream/65">
            Technology that quietly adapts to the rhythm of your day.
          </p>
        </Reveal>

        <p className="eyebrow mt-14 text-center text-[0.6875rem] text-cream/50 sm:mt-16 lg:mt-20">
          A day in the life
        </p>

        <ol
          className="relative mt-8 flex flex-col items-center lg:grid lg:grid-cols-5 lg:items-stretch"
          onMouseLeave={() => setActive(null)}
        >
          {/* Connecting line — runs from the first to the last point on desktop */}
          <span
            aria-hidden
            className="absolute top-1.25 right-[10%] left-[10%] hidden h-px bg-cream/15 lg:block"
          />
          <span
            aria-hidden
            className="absolute top-1.25 left-[10%] hidden h-px bg-gold/70 transition-[width] duration-700 ease-out lg:block"
            style={{ width: `${(active ?? 0) * 20}%` }}
          />

          {MOMENTS.map((m, i) => (
            <li
              key={m.label}
              className="group flex flex-col items-center text-center"
              onMouseEnter={() => setActive(i)}
            >
              <Reveal
                delay={i * 0.08}
                distance={20}
                className="flex flex-col items-center px-4 xl:px-6"
              >
                <span
                  aria-hidden
                  className="relative z-10 block size-2.5 rounded-full border border-cream/30 bg-ivory transition-colors duration-500 group-hover:border-gold group-hover:bg-gold"
                />

                <span className="mt-6 font-body text-xs tracking-[0.2em] tabular-nums text-cream/45 transition-colors duration-500 group-hover:text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-3 font-display text-2xl tracking-[0.12em] text-cream uppercase transition-transform duration-500 ease-out group-hover:-translate-y-0.5 xl:text-3xl">
                  {m.label === "Goodnight" ? (
                    <>
                      G<span className="cap-o-tight">o</span>
                      <span className="cap-o-tight">o</span>dnight
                    </>
                  ) : (
                    m.label
                  )}
                </h3>

                <span
                  aria-hidden
                  className="mt-4 block h-px w-0 bg-gold transition-[width] duration-500 ease-out group-hover:w-8"
                />

                <p className="mt-4 max-w-68 text-balance font-body text-sm leading-relaxed text-cream/65 transition-colors duration-500 group-hover:text-cream/90">
                  {m.description}
                </p>
              </Reveal>

              {/* Vertical connector on mobile / tablet */}
              {i < LAST && (
                <span
                  aria-hidden
                  className="my-8 block h-12 w-px bg-cream/15 lg:hidden"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
