import Image from "next/image";

interface PhotoProps {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** CSS object-position, e.g. "50% 35%". Defaults to centered. */
  objectPosition?: string;
}

export default function Photo({
  src,
  alt,
  sizes = "100vw",
  priority = false,
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
        priority={priority}
        className="object-cover transition-[object-position] duration-700 ease-out"
        style={objectPosition ? { objectPosition } : undefined}
      />
    </div>
  );
}
