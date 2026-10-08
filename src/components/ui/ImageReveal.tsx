"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Editorial image reveal: the frame opens with a clip-path wipe while the
 * photo settles from a slight zoom. Under reduced motion it simply fades in.
 * The inner wrapper adds the shared ~1.03 hover scale.
 *
 * Visibility is observed on the un-clipped outer frame — an element whose
 * clip-path hides it entirely never reports as intersecting.
 */
export default function ImageReveal({
  children,
  className = "",
  delay = 0,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const reduce = useReducedMotion();

  return (
    <div ref={ref} className={`group relative overflow-hidden ${className}`}>
      <motion.div
        className="h-full w-full"
        initial={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
        animate={
          inView
            ? reduce
              ? { opacity: 1 }
              : { clipPath: "inset(0 0 0% 0)" }
            : undefined
        }
        transition={{ duration: reduce ? 0.4 : 1.2, delay, ease: EASE }}
      >
        <motion.div
          className="h-full w-full"
          initial={reduce ? false : { scale: 1.12 }}
          animate={inView ? { scale: 1 } : undefined}
          transition={{ duration: 1.6, delay, ease: EASE }}
        >
          <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
            {children}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
