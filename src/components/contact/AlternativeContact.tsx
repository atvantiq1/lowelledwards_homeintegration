import Reveal from "@/components/ui/Reveal";

export default function AlternativeContact() {
  return (
    <div className="lg:border-r lg:border-bg4 lg:pr-10">
      <Reveal>
        <p className="eyebrow text-gold">Prefer to Talk?</p>
        <h3 className="mt-6 font-display text-2xl text-cream sm:text-3xl">
          Call Lowell Edwards.
        </h3>
        <p className="mt-4 font-body text-sm leading-relaxed text-cream/60">
          Speak directly with our team, Monday through Friday. Weekend and
          evening appointments are also available.
        </p>
      </Reveal>

      <div className="mt-8 divide-y divide-bg4 border-t border-bg4">
        <Reveal delay={0.08}>
          <div className="py-5">
            <span className="font-body text-xs uppercase tracking-[0.14em] text-cream/40">
              Phone
            </span>
            <a
              href="tel:+12015253300"
              className="mt-2 block font-display text-xl text-cream transition-colors duration-300 hover:text-gold"
            >
              201-525-3300
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="py-5">
            <span className="font-body text-xs uppercase tracking-[0.14em] text-cream/40">
              Email
            </span>
            <a
              href="mailto:info@lowelledwards.com"
              className="mt-2 block break-all font-display text-xl text-cream transition-colors duration-300 hover:text-gold"
            >
              info@lowelledwards.com
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="py-5">
            <span className="font-body text-xs uppercase tracking-[0.14em] text-cream/40">
              Hours
            </span>
            <p className="mt-2 font-body text-sm text-cream/70">
              Monday–Friday, 10:00 a.m.–7:00 p.m.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="py-5">
            <span className="font-body text-xs uppercase tracking-[0.14em] text-cream/40">
              Address
            </span>
            <p className="mt-2 font-body text-sm text-cream/70">
              15 Warren St. Suite 25, Hackensack, NJ 07601
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
