"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds, useful when revealing several items in sequence. */
  delay?: number;
  /** Distance the element travels (px) as it settles into place. */
  distance?: number;
  as?: "div" | "span";
  once?: boolean;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  distance = 28,
  as = "div",
  once = true,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
