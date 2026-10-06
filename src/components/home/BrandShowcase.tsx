import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

type Brand = {
  name: string;
  src: string;
  width: number;
  height: number;
  className?: string;
  /** Logo art is white/light on transparent — needs a dark plate to read, not a filter. */
  onDark?: boolean;
};

const ROW_ONE: Brand[] = [
  { name: "Control4", src: "/images/brands/control4.png", width: 625, height: 138 },
  { name: "URC", src: "/images/brands/urc.png", width: 700, height: 173 },
  { name: "Lutron", src: "/images/brands/lutron.png", width: 340, height: 50, onDark: true },
  { name: "Marantz", src: "/images/brands/marantz.svg", width: 160, height: 40 },
  { name: "Epson", src: "/images/brands/epson.svg", width: 160, height: 40 },
  {
    name: "Digital Projection",
    src: "/images/brands/digital-projection.svg",
    width: 180,
    height: 40,
    onDark: true,
  },
  {
    name: "StormAudio",
    src: "/images/brands/stormaudio.svg",
    width: 180,
    height: 40,
    onDark: true,
  },
];

const ROW_TWO: Brand[] = [
  {
    name: "Stewart Filmscreen",
    src: "/images/brands/stewart-filmscreen.svg",
    width: 180,
    height: 40,
  },
  { name: "Samsung", src: "/images/brands/samsung.svg", width: 160, height: 40 },
  { name: "Sony", src: "/images/brands/sony.svg", width: 130, height: 40 },
  { name: "Sonance", src: "/images/brands/sonance.svg", width: 150, height: 40 },
  { name: "Bluesound", src: "/images/brands/bluesound.png", width: 160, height: 25, onDark: true },
  // Lockup ships with its own solid black plate baked into the SVG.
  { name: "CinemaTech", src: "/images/brands/cinematech.svg", width: 170, height: 40 },
  { name: "Fortress Seating", src: "/images/brands/fortress-seating.png", width: 160, height: 62 },
  { name: "RowOne", src: "/images/brands/rowone.png", width: 150, height: 51 },
];

function MarqueeRow({
  brands,
  reverse = false,
  duration = 46,
}: {
  brands: Brand[];
  reverse?: boolean;
  duration?: number;
}) {
  // Duplicated once for a seamless loop; the track animates exactly -50%.
  const track = [...brands, ...brands];

  return (
    <div className="group relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-ivory to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-ivory to-transparent sm:w-24" />

      <div
        className={`animate-marquee flex w-max items-center gap-5 sm:gap-7 lg:gap-8 ${
          reverse ? "[animation-direction:reverse]" : ""
        } group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${duration}s` }}
      >
        {track.map((brand, i) => {
          const logo = (
            <Image
              src={brand.src}
              alt={brand.name}
              width={brand.width}
              height={brand.height}
              className={`h-auto max-h-6.5 w-auto max-w-22 object-contain sm:max-h-8 sm:max-w-26 lg:max-h-9.5 lg:max-w-30.5 ${
                brand.className ?? ""
              }`}
            />
          );

          return (
            <div
              key={`${brand.name}-${i}`}
              className="flex h-19 w-33 shrink-0 items-center justify-center rounded-md border border-[rgba(103,0,1,0.08)] bg-white p-2 shadow-[0_4px_16px_-6px_rgba(26,26,46,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-6px_rgba(26,26,46,0.14)] sm:h-21 sm:w-39 sm:p-2.5 lg:h-22.5 lg:w-45 lg:p-3"
            >
              {brand.onDark ? (
                <div className="flex h-full w-full items-center justify-center rounded-sm bg-cream">
                  {logo}
                </div>
              ) : (
                logo
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function BrandShowcase() {
  return (
    <section className="overflow-hidden bg-bg2 py-16 sm:py-20 lg:py-24">
      <div className="section-pad mb-12 text-center sm:mb-16">
        <Reveal>
          <p className="eyebrow text-gold">Brands We Work With</p>
          <h2 className="mt-4 font-display text-3xl text-cream sm:text-4xl">
            The Premium Systems Behind Every Installation.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="space-y-6 sm:space-y-8">
        <MarqueeRow brands={ROW_ONE} duration={40} />
        <MarqueeRow brands={ROW_TWO} reverse duration={50} />
      </Reveal>
    </section>
  );
}
