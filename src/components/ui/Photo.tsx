import Image, { type StaticImageData } from "next/image";

interface PhotoProps {
  /** Remote URL, or a static import (local file, gets a blur placeholder). */
  src: string | StaticImageData;
  alt: string;
  sizes?: string;
  priority?: boolean;
  /** next/image quality (1-100); must be listed in images.qualities. */
  quality?: number;
  className?: string;
  /** CSS object-position, e.g. "50% 35%". Defaults to centered. */
  objectPosition?: string;
}

export default function Photo({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  quality,
  className = "",
  objectPosition,
}: PhotoProps) {
  return (
    <div className={`relative h-full w-full overflow-hidden bg-bg3 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={priority}
        loading={priority ? "eager" : undefined}
        quality={quality}
        placeholder={typeof src === "string" ? "empty" : "blur"}
        className="object-cover transition-[object-position] duration-700 ease-out"
        style={objectPosition ? { objectPosition } : undefined}
      />
    </div>
  );
}
