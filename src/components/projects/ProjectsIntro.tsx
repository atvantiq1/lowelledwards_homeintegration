import Reveal from "@/components/ui/Reveal";

export default function ProjectsIntro() {
  return (
    <section className="bg-bg pt-16 sm:pt-20 lg:pt-24">
      <div className="section-pad mx-auto grid max-w-384 gap-12 lg:grid-cols-12 lg:items-end lg:gap-24">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow text-gold">The Work</p>
          </Reveal>

          <Reveal delay={0.1} className="mt-6">
            <h2 className="font-display text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
              Designed Around the Way You Live.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="lg:col-span-6">
          <p className="max-w-xl font-body text-base leading-relaxed text-cream/65 sm:text-lg">
            Every project starts with how a family actually lives, not with a
            list of equipment. From a theater room built into a library to
            seating fitted to a single sightline, our factory-trained
            technicians design and install each system in-house — technology
            that disappears into the architecture of the home.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
