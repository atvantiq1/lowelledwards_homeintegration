import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import { aboutImages } from "@/lib/images";

const MILESTONES = [
  {
    place: "New York City",
    label: "The D&D Building",
    text: "A presence of more than 20 years in the prestigious Decoration & Design Building, working alongside leading interior designers, architects, builders, and discerning homeowners.",
  },
  {
    place: "Hackensack, New Jersey",
    label: "Showroom & Service Center",
    text: "Today we continue that tradition from our showroom and service center, serving homeowners throughout New Jersey, New York, and Connecticut.",
  },
] as const;

const STATS = [
  { value: "40+", label: "Years of Experience" },
  { value: "20+", label: "Years at the D&D Building" },
  { value: "3", label: "States Served: NJ · NY · CT" },
] as const;

export default function AboutHeritage() {
  return (
    <section className="relative overflow-hidden bg-bg2 py-20 sm:py-28 lg:py-32">
      <div className="section-pad grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center lg:gap-10">
        {/* Portrait with an offset frame and an overlapping name card */}
        <div className="relative mx-auto w-full max-w-md pb-10 pr-6 sm:pr-10 lg:col-span-5 lg:max-w-none">
          <div
            aria-hidden
            className="absolute right-0 top-6 bottom-4 left-6 border border-gold/30 sm:top-10 sm:left-10"
          />
          <ImageReveal className="relative aspect-4/5 w-full shadow-[0_30px_60px_-24px_rgba(26,26,46,0.35)]">
            <Photo
              src={aboutImages.founder.src}
              alt={aboutImages.founder.alt}
              sizes="(min-width: 1024px) 36vw, (min-width: 640px) 28rem, 100vw"
              objectPosition="50% 25%"
            />
          </ImageReveal>
          <Reveal
            delay={0.3}
            distance={20}
            className="absolute bottom-0 left-6 bg-bg px-6 py-5 shadow-[0_16px_40px_-16px_rgba(26,26,46,0.25)] sm:left-10 sm:px-8"
          >
            <p className="font-display text-xl text-cream sm:text-2xl">
              Lowell Edwards
            </p>
            <p className="mt-1 font-body text-[11px] tracking-[0.22em] text-gold uppercase">
              Founder
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p className="eyebrow text-gold">Our Heritage</p>
            <h2 className="mt-5 max-w-lg font-display text-4xl leading-[1.08] text-cream sm:text-5xl">
              A Legacy of Experience and Craftsmanship
            </h2>
            <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-cream/65 sm:text-lg">
              This heritage has shaped our understanding of luxury residential
              environments, where exceptional technology must coexist with
              beautiful architecture and thoughtful interior design.
            </p>
          </Reveal>

          <ol className="relative mt-12 space-y-10 border-l border-gold/25 pl-8 sm:pl-10">
            {MILESTONES.map((m, i) => (
              <li key={m.place} className="relative">
                <Reveal delay={0.12 + i * 0.1} distance={20}>
                  <span
                    aria-hidden
                    className="absolute top-1.5 -left-[2.3rem] size-2.5 rounded-full bg-gold ring-4 ring-bg2 sm:-left-[2.8rem]"
                  />
                  <p className="font-body text-[11px] tracking-[0.22em] text-gold uppercase">
                    {m.label}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-cream">
                    {m.place}
                  </h3>
                  <p className="mt-3 max-w-md font-body text-[15px] leading-relaxed text-cream/60">
                    {m.text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal delay={0.3} className="mt-14">
            <dl className="grid grid-cols-3 divide-x divide-cream/10 border-t border-cream/10 pt-8">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col-reverse px-3 first:pl-0 sm:px-6"
                >
                  <dt className="mt-2 font-body text-[11px] leading-snug tracking-[0.14em] text-cream/55 uppercase sm:text-xs">
                    {s.label}
                  </dt>
                  <dd className="font-display text-3xl text-gold sm:text-4xl">
                    {s.value}
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
