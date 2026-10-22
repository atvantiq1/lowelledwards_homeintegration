import Reveal from "@/components/ui/Reveal";
import CTALink from "@/components/ui/CTALink";

const PILLARS = [
  {
    title: "Creating Homes That Are as Intelligent as They Are Beautiful",
    paragraphs: [
      "Every home is unique, and so is every solution we design.",
      "Whether creating a dedicated home theater, bringing music throughout an entire residence, or integrating lighting, climate, shades, security, and entertainment into a unified smart home experience, our approach begins with understanding how our clients live.",
      "We combine carefully selected technologies with thoughtful system design, professional installation, and intuitive controls. The result is a home that feels effortlessly connected, comfortable, and distinctly yours.",
      "We believe the most sophisticated technology is often the least visible — seamlessly integrated into the architecture of your home, yet always ready when you need it.",
    ],
  },
  {
    title: "Trusted Expertise. Personalized Service.",
    paragraphs: [
      "Our experience extends beyond selecting and installing equipment. We understand the importance of careful planning, attention to detail, coordination with other professionals, and dependable support long after installation.",
      "From the initial consultation and system design through installation, programming, and ongoing service, our team is committed to delivering solutions that perform beautifully and stand the test of time.",
      "We take pride in building lasting relationships with our clients, becoming their trusted technology partner as their homes, lifestyles, and needs evolve.",
    ],
  },
  {
    title: "Four Decades of Experience. A Vision for the Future.",
    paragraphs: [
      "Home technology has changed dramatically over the past 40 years. What began with sophisticated audio and entertainment systems has evolved into fully integrated intelligent homes.",
      "Throughout that evolution, our commitment has remained the same: delivering exceptional quality, thoughtful design, and a superior client experience.",
      "At Lowell Edwards Home Integration, we honor that legacy while embracing the possibilities of tomorrow.",
    ],
  },
] as const;

export default function AboutApproach() {
  return (
    <section className="bg-cream py-20 sm:py-28 lg:py-32">
      <div className="section-pad">
        <Reveal>
          <p className="eyebrow text-gold-light">Our Approach</p>
        </Reveal>

        <div className="mt-10 border-t border-white/10">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.06 * i} distance={20}>
              <div className="grid grid-cols-1 gap-6 border-b border-white/10 py-10 sm:py-14 lg:grid-cols-12 lg:gap-8">
                <div className="flex gap-4 sm:gap-6 lg:col-span-5">
                  <span className="pt-2 font-body text-xs tabular-nums text-gold-light">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="max-w-md font-display text-2xl leading-tight text-white sm:text-3xl">
                    {pillar.title}
                  </h3>
                </div>
                <div className="space-y-5 lg:col-span-6 lg:col-start-7">
                  {pillar.paragraphs.map((text) => (
                    <p
                      key={text}
                      className="max-w-xl font-body text-base leading-relaxed text-white/65"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col items-start gap-8 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-3xl text-white sm:text-4xl">
            Experience the art of intelligent living.
          </p>
          <CTALink href="/contact" variant="solid">
            Schedule a Private Consultation
          </CTALink>
        </Reveal>
      </div>
    </section>
  );
}
