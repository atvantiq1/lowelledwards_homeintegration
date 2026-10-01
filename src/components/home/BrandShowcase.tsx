import Reveal from "@/components/ui/Reveal";

const AUTOMATION_BRANDS = ["Control4", "URC", "Lutron"];

const THEATER_BRANDS = [
  "Marantz",
  "Epson",
  "Digital Projection",
  "StormAudio",
  "Stewart Filmscreen",
  "Samsung",
  "Sony",
  "Sonance",
  "Bluesound",
  "CinemaTech",
  "Fortress Seating",
  "RowOne",
];

function MarqueeRow({ brands, reverse = false }: { brands: string[]; reverse?: boolean }) {
  // Duplicated once for a seamless loop; the track animates exactly -50%.
  const track = [...brands, ...brands];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-cream to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-cream to-transparent sm:w-32" />

      <div
        className={`animate-marquee flex w-max items-center gap-10 sm:gap-16 ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        {track.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="font-display whitespace-nowrap text-2xl text-white/50 transition-colors duration-300 sm:text-3xl"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function BrandShowcase() {
  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="section-pad mb-12 text-center sm:mb-16">
        <Reveal>
          <p className="eyebrow text-gold-light">Brands We Work With</p>
          <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
            The Premium Systems Behind Every Installation.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="space-y-8 sm:space-y-10">
        <MarqueeRow brands={AUTOMATION_BRANDS} />
        <MarqueeRow brands={THEATER_BRANDS} reverse />
      </Reveal>
    </section>
  );
}
