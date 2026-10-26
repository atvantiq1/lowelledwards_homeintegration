import Reveal from "@/components/ui/Reveal";

export default function AboutIntro() {
  return (
    <section className="relative overflow-hidden bg-bg py-20 sm:py-28 lg:py-32">
      <div className="section-pad">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-gold">
                About Lowell Edwards Home Integration
              </p>
              <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] text-cream sm:text-5xl lg:text-[3.5rem]">
                <span className="cap-o-tight">O</span>ver 40 Years of Excellence in
                <span className="text-gold"> Luxury Home Technology</span>
              </h2>
              <p className="mt-6 font-display text-xl italic text-cream/80 sm:text-2xl">
                Where Timeless Design Meets Intelligent Living.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:col-span-5 lg:pt-14">
            <p className="max-w-md font-body text-base leading-relaxed text-cream/65">
              For over four decades, Lowell Edwards Home Integration has been
              helping homeowners transform their living spaces through
              thoughtfully designed technology. From exceptional home theaters
              and immersive audio systems to sophisticated smart home
              automation, lighting control, and motorized shades, we bring
              together innovation, craftsmanship, and personalized service to
              create extraordinary living experiences.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14 border-l-2 border-gold pl-6 sm:mt-20 sm:pl-10">
          <p className="max-w-4xl font-display text-2xl leading-snug text-cream sm:text-3xl">
            <span className="cap-o-tight">O</span>ur philosophy is simple: Technology should enhance the way you
            live, complement the beauty of your home, and work effortlessly in
            the background.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
