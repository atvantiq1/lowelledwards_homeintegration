"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, PenTool, Wrench, LifeBuoy } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const STEPS = [
  {
    number: "01",
    label: "Consult",
    description:
      "We start by understanding your home, your goals, and how you want to use your space.",
    icon: MessageCircle,
  },
  {
    number: "02",
    label: "Design",
    description:
      "Our team develops a thoughtful technology plan around your lifestyle and the architecture of your home.",
    icon: PenTool,
  },
  {
    number: "03",
    label: "Integrate",
    description:
      "Our technicians install and integrate your systems with attention to performance, reliability, and detail.",
    icon: Wrench,
  },
  {
    number: "04",
    label: "Support",
    description:
      "We continue to support your technology after installation, helping you get the most from your investment.",
    icon: LifeBuoy,
  },
];

export default function Process() {
  return (
    <section className="bg-bg py-16 sm:py-20 lg:py-28">
      <div className="section-pad mb-10 sm:mb-14">
        <Reveal>
          <p className="eyebrow text-gold">Process</p>
          <h2 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
            From Vision to Experience.
          </h2>
        </Reveal>
      </div>

      <div className="section-pad grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => {
          const Icon = step.icon;
          return (
            <Reveal key={step.number} delay={i * 0.12} className="group/step relative">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="h-full rounded-2xl border border-bg4 bg-bg2/40 p-6 transition-colors duration-300 group-hover/step:border-gold/40 group-hover/step:bg-bg2 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 font-display text-base text-gold">
                    {step.number}
                  </span>
                  <Icon
                    className="h-6 w-6 text-gold/50 transition-colors duration-300 group-hover/step:text-gold"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </div>
                <span className="eyebrow mt-6 block text-cream">
                  {step.label}
                </span>
                <p className="mt-3 font-body text-sm leading-relaxed text-cream/55">
                  {step.description}
                </p>
              </motion.div>

              {i < STEPS.length - 1 && (
                <ArrowRight
                  aria-hidden
                  className="absolute top-1/2 -right-3 z-10 hidden h-5 w-5 -translate-y-1/2 text-bg4 lg:block"
                  strokeWidth={1.5}
                />
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
