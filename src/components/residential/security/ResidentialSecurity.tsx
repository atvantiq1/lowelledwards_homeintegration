import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import { securityImages } from "@/lib/images";

const INDEX = [
  {
    number: "01",
    label: "Video surveillance",
    text: "Room monitoring and video surveillance, planned as part of the home rather than around it.",
  },
  {
    number: "02",
    label: "Intercom & entry",
    text: "Telephone, intercom and entry systems, including Akuvox, ButterflyMX and DoorBird.",
  },
  {
    number: "03",
    label: "Smart locks",
    text: "Yale Z-Wave locks for the doors you use every day.",
  },
  {
    number: "04",
    label: "Home control",
    text: "Control4, Crestron and Savant, where a project calls for one control system.",
  },
] as const;

export default function ResidentialSecurity() {
  return (
    <section className="bg-bg2 py-16 sm:py-20 lg:py-28">
      <div className="section-pad grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="relative lg:col-span-7">
          <ImageReveal className="aspect-4/5 sm:aspect-4/3 lg:aspect-auto lg:h-[47.5rem]">
            <Photo
              src={securityImages.residential.src}
              alt={securityImages.residential.alt}
              sizes="(min-width: 1024px) 58vw, 100vw"
              objectPosition={securityImages.residential.position}
            />
          </ImageReveal>

          {/* Small detail inset: the technology stays subtle beside the architecture. */}
          <div className="absolute -bottom-6 right-4 hidden w-40 border-4 border-bg2 sm:block lg:right-8 lg:w-52">
            <ImageReveal delay={0.25} className="aspect-5/4">
              <Photo
                src={securityImages.doorbell.src}
                alt={securityImages.doorbell.alt}
                sizes="208px"
              />
            </ImageReveal>
          </div>
        </div>

        <div className="lg:col-span-5 lg:pl-8">
          <Reveal>
            <p className="eyebrow text-gold">Residential Security</p>
            <h2 className="mt-4 max-w-md font-display text-4xl text-cream sm:text-5xl">
              A closer look at your home.
            </h2>
            <p className="mt-5 max-w-md font-body text-base leading-relaxed text-cream/65">
              Cameras, entry points and locks are chosen to suit the
              architecture of the home, so awareness around the property
              comes without a visible system dominating it.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <ol>
              {INDEX.map((item) => (
                <li
                  key={item.number}
                  className="grid grid-cols-[2.5rem_1fr] gap-x-3 border-t border-bg4 py-4 last:border-b sm:grid-cols-[3rem_1fr]"
                >
                  <span className="font-body text-xs tabular-nums text-gold">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="eyebrow text-cream">{item.label}</h3>
                    <p className="mt-1.5 font-body text-sm leading-relaxed text-cream/60">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
