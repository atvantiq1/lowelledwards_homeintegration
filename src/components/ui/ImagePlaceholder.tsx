import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  sublabel?: string;
  className?: string;
  /** Set to a CSS aspect-ratio value (e.g. "4 / 5"). Omit to fill the parent. */
  aspect?: string;
  /**
   * Where the caption sits. Full-bleed sections that overlay large headline
   * text near the bottom should use "top" so the placeholder caption never
   * collides with that copy.
   */
  labelPosition?: "center" | "top";
}

const positionClasses: Record<NonNullable<ImagePlaceholderProps["labelPosition"]>, string> = {
  center: "justify-center",
  top: "justify-start pt-16 sm:pt-20",
};

export default function ImagePlaceholder({
  label,
  sublabel,
  className = "",
  aspect,
  labelPosition = "center",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={sublabel ? `${label} — ${sublabel}` : label}
      style={aspect ? { aspectRatio: aspect } : undefined}
      className={`relative flex h-full w-full flex-col items-center overflow-hidden bg-bg3 ${positionClasses[labelPosition]} ${className}`}
    >
      <span className="pointer-events-none absolute inset-3 border border-bg4/80 sm:inset-4" />
      <ImageIcon
        className="mb-3 h-5 w-5 text-cream/25 sm:mb-4 sm:h-6 sm:w-6"
        strokeWidth={1.25}
        aria-hidden
      />
      <span className="eyebrow px-6 text-center text-cream/45">{label}</span>
      {sublabel && (
        <span className="mt-2 px-6 text-center font-body text-[11px] tracking-wide text-cream/30">
          {sublabel}
        </span>
      )}
    </div>
  );
}
