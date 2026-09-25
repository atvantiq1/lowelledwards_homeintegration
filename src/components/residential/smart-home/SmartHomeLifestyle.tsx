"use client";

import { motion } from "framer-motion";
import { Volume2, Moon, ShieldCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import { smartHomeImages } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

const SCENES = [
  {
    key: "entertain",
    icon: Volume2,
    title: "Entertain",
    description:
      "Multi-room sound and concealed displays that turn any room into the best seat in the house — ready for movie nights, dinner parties, or a quiet Sunday morning.",
    image: smartHomeImages.lifestyle.entertain,
  },
  {
    key: "relax",
    icon: Moon,
    title: "Relax",
    description:
      "Lighting and shades that settle into the rhythm of your evening, dimming and closing on their own as the sun goes down.",
    image: smartHomeImages.lifestyle.relax,
  },
  {
    key: "protect",
    icon: ShieldCheck,
    title: "Protect",
    description:
      "Cameras, locks, and alerts integrated quietly into the home you love, and within reach from anywhere you are.",
    image: smartHomeImages.lifestyle.protect,
  },
] as const;

export default function SmartHomeLifestyle() {
  return (
    <section className="bg-bg py-16 sm:py-20 lg:py-28">
      <div className="section-pad mb-10 sm:mb-14">
        <Reveal>
          <p className="eyebrow text-gold">Lifestyle</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl text-cream sm:text-5xl">
            Made for the Way You Live.
          </h2>
          <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-cream/65">
            Every home moves through the same moments — entertaining,
            unwinding, coming and going. The systems fade into the
            background and adjust to fit each one, without you having to
            think about the technology at all.
          </p>
        </Reveal>
      </div>

      <div className="section-pad grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-6">
        <Reveal className="group lg:col-span-7" distance={36}>
          <motion.div
            className="relative aspect-4/5 overflow-hidden sm:aspect-16/10 lg:aspect-auto lg:h-full lg:min-h-125"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <motion.div
              className="h-full w-full"
              variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              <Photo
                src={SCENES[0].image.src}
                alt={SCENES[0].image.alt}
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
            </motion.div>

            <div className="absolute bottom-6 left-6 max-w-[calc(100%-3rem)] bg-black/45 p-6 backdrop-blur-sm sm:bottom-8 sm:left-8 sm:max-w-sm sm:p-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40">
                <Volume2 className="h-4 w-4 text-gold" strokeWidth={1.25} aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-3xl text-white sm:text-4xl">
                {SCENES[0].title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-white/75">
                {SCENES[0].description}
              </p>
            </div>
          </motion.div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:col-span-5 lg:grid-rows-2">
          {SCENES.slice(1).map((scene, i) => (
            <Reveal
              key={scene.key}
              delay={0.12 + i * 0.1}
              distance={36}
              className={`group ${i === 0 ? "lg:translate-x-6" : ""}`}
            >
              <motion.div
                className="relative aspect-4/3 overflow-hidden"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <motion.div
                  className="h-full w-full"
                  variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
                  transition={{ duration: 0.9, ease: EASE }}
                >
                  <Photo
                    src={scene.image.src}
                    alt={scene.image.alt}
                    sizes="(min-width: 1024px) 38vw, 100vw"
                  />
                </motion.div>

                <div className="absolute bottom-5 left-5 max-w-[calc(100%-2.5rem)] bg-black/45 p-5 backdrop-blur-sm sm:bottom-6 sm:left-6 sm:max-w-xs sm:p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40">
                    <scene.icon className="h-3.5 w-3.5 text-gold" strokeWidth={1.25} aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-white sm:text-3xl">
                    {scene.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-white/75">
                    {scene.description}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
