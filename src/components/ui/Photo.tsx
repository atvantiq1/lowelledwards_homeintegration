import Image from "next/image";

interface PhotoProps {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

export default function Photo({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  className = "",
}: PhotoProps) {
  return (
    <div className={`relative h-full w-full overflow-hidden bg-bg3 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
