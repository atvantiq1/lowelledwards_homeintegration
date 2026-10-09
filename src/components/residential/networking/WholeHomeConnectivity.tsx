import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import { networkingImages } from "@/lib/images";

const DETAILS = [
  {
    label: "Living spaces",
    text: "Connectivity planned for the rooms you actually use, not just the one where the equipment sits.",
  },
  {
    label: "Entertainment",
    text: "Streaming, music and video systems that depend on a steady connection to perform as intended.",
  },
  {
    label: "Smart devices",
    text: "Connected devices and control systems that need to communicate with one another reliably.",
  },
  {
    label: "Lighting, shades & security",
    text: "The systems that shape comfort and protect the home, running on the same dependable network.",
  },
  {
    label: "Planned for your home",
    text: "A network shaped by the layout of the property and the technology it will carry.",
  },
] as const;

export default function WholeHomeConnectivity() {
  return (
    <section className="bg-bg2 py-16 sm:py-20 lg:py-28">
      <div className="section-pad grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
        <ImageReveal className="aspect-4/3 sm:aspect-16/10 lg:col-span-7 lg:aspect-auto lg:h-170">
          <Photo
            src={networkingImages.wholeHome.src}
            alt={networkingImages.wholeHome.alt}
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </ImageReveal>

        <div className="lg:col-span-5 lg:pl-6">
          <Reveal>
            <p className="eyebrow text-gold">Whole-Home Connectivity</p>
            <h2 className="mt-4 max-w-md font-display text-4xl text-cream sm:text-5xl">
              Reliable, throughout.
            </h2>
            <p className="mt-5 max-w-md font-body text-base leading-relaxed text-cream/65">
              A home works as one only when the connection behind it does.
              Good networking is what lets every room — and every system in
              it — rely on the same foundation.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <dl>
              {DETAILS.map((d) => (
                <div
                  key={d.label}
                  className="grid gap-1 border-t border-bg4 py-4 last:border-b sm:grid-cols-[9.5rem_1fr] sm:gap-5"
                >
                  <dt className="eyebrow text-cream/80">{d.label}</dt>
                  <dd className="font-body text-sm leading-relaxed text-cream/60">
                    {d.text}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
