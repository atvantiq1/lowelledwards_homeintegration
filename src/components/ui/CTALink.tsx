import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface CTALinkProps {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "text";
  /** "dark" for use on light backgrounds, "light" for use over imagery. */
  tone?: "dark" | "light";
  className?: string;
}

const base =
  "group inline-flex items-center gap-2 font-body text-[13px] tracking-[0.08em] uppercase transition-colors duration-300";

const solidVariant =
  "bg-gold px-8 py-4 text-white hover:bg-gold2 focus-visible:outline-offset-4";

// "dark" tone sits on light backgrounds, so hover uses the dark maroon gold.
// "light" tone sits on dark backgrounds/imagery, so hover uses gold-light —
// the dark gold is nearly invisible against a dark background.
const variantsByTone: Record<
  NonNullable<CTALinkProps["tone"]>,
  Record<"outline" | "text", string>
> = {
  dark: {
    outline: "border border-current px-8 py-4 hover:border-gold hover:text-gold",
    text: "hover:text-gold",
  },
  light: {
    outline:
      "border border-current px-8 py-4 hover:border-gold-light hover:text-gold-light",
    text: "hover:text-gold-light",
  },
};

const tones: Record<NonNullable<CTALinkProps["tone"]>, string> = {
  dark: "text-cream",
  light: "text-white",
};

export default function CTALink({
  href,
  children,
  variant = "text",
  tone = "dark",
  className = "",
}: CTALinkProps) {
  const variantClass =
    variant === "solid" ? solidVariant : variantsByTone[tone][variant];
  const toneClass = variant === "solid" ? "" : tones[tone];

  return (
    <Link
      href={href}
      className={`${base} ${variantClass} ${toneClass} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight
        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={1.5}
        aria-hidden
      />
    </Link>
  );
}
