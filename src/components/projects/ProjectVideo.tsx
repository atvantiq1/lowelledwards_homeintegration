"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";

type NavigatorConnection = Navigator & {
  connection?: {
    saveData?: boolean;
    effectiveType?: string;
    addEventListener?: (type: "change", listener: () => void) => void;
    removeEventListener?: (type: "change", listener: () => void) => void;
  };
};

// Treats Save-Data and slow cellular connections as too expensive to
// autoplay a background video on, falling back to a tap-to-play affordance.
function getConnectionAllowsAutoplay() {
  const connection = (navigator as NavigatorConnection).connection;
  const constrained =
    connection?.saveData === true ||
    /^(slow-2g|2g|3g)$/.test(connection?.effectiveType ?? "");
  return !constrained;
}

function subscribeToConnectionChange(onStoreChange: () => void) {
  const connection = (navigator as NavigatorConnection).connection;
  connection?.addEventListener?.("change", onStoreChange);
  return () => connection?.removeEventListener?.("change", onStoreChange);
}

interface ProjectVideoProps {
  sources: { webm: string; mp4: string };
  poster: { src: string; alt: string };
  className?: string;
  /** Skips the intersection-observer gate and loads immediately — for the hero video only. */
  priority?: boolean;
  objectPosition?: string;
  /** `sizes` hint for the poster image. */
  sizes?: string;
  /**
   * Purely visual copy of a clip (e.g. a blurred backdrop): hidden from
   * assistive tech and never shows the tap-to-play control.
   */
  decorative?: boolean;
  /** Set false when the video sits inside a link, so no nested button is rendered. */
  playAffordance?: boolean;
}

/**
 * Cinematic, lazy-loading project video. Nothing is fetched until the clip
 * nears the viewport, autoplay never runs under prefers-reduced-motion or a
 * constrained connection (Save-Data / 2G), and the poster image stays
 * mounted underneath the video at all times so there's no layout shift and
 * no blank frame while sources load.
 */
export default function ProjectVideo({
  sources,
  poster,
  className = "",
  priority = false,
  objectPosition,
  sizes = "(min-width: 1024px) 60vw, 100vw",
  decorative = false,
  playAffordance = true,
}: ProjectVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [shouldLoad, setShouldLoad] = useState(priority);
  const [isVisible, setIsVisible] = useState(priority);
  const [userRequestedPlay, setUserRequestedPlay] = useState(false);
  const networkAllowsAutoplay = useSyncExternalStore(
    subscribeToConnectionChange,
    getConnectionAllowsAutoplay,
    () => true,
  );

  useEffect(() => {
    if (priority) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) setShouldLoad(true);
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [priority]);

  const canAutoplay = !prefersReducedMotion && networkAllowsAutoplay;
  const activated =
    shouldLoad && !prefersReducedMotion && (canAutoplay || userRequestedPlay);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !activated) return;
    if (isVisible) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [activated, isVisible]);

  const showPlayAffordance =
    playAffordance &&
    !decorative &&
    shouldLoad &&
    !prefersReducedMotion &&
    !canAutoplay &&
    !userRequestedPlay;

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full overflow-hidden bg-bg3 ${className}`}
    >
      <Image
        src={poster.src}
        alt={decorative ? "" : poster.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={objectPosition ? { objectPosition } : undefined}
      />

      {activated && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          poster={poster.src}
          aria-hidden="true"
          tabIndex={-1}
          className="absolute inset-0 h-full w-full object-cover"
          style={objectPosition ? { objectPosition } : undefined}
        >
          <source src={sources.webm} type="video/webm" />
          <source src={sources.mp4} type="video/mp4" />
        </video>
      )}

      {showPlayAffordance && (
        <button
          type="button"
          onClick={() => setUserRequestedPlay(true)}
          aria-label="Play project video"
          className="group absolute inset-0 flex items-center justify-center bg-black/15 transition-colors duration-300 hover:bg-black/25"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/70 text-white transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
            <Play
              className="ml-0.5 h-5 w-5"
              strokeWidth={1.5}
              fill="currentColor"
            />
          </span>
        </button>
      )}
    </div>
  );
}
