import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import ImageReveal from "@/components/ui/ImageReveal";
import { audioVideoImages } from "@/lib/images";

const DETAILS = [
  {
    label: "Every room",
    text: "Play the same song throughout the house for a party, or something different in each room.",
  },
  {
    label: "Streaming",
    text: "Spotify, Apple Music, Pandora, TIDAL, SiriusXM and more, including high-resolution lossless audio.",
  },
  {
    label: "Simple control",
    text: "Choose music from a wall keypad, touchscreen, remote or the app on your phone.",
  },
  {
    label: "Tuned to the room",
    text: "Speakers selected and positioned for each space, so sound is clear at any volume.",
  },
  {
    label: "Trusted brands",
    text: "Sonos, Sonance, KEF, Marantz, NAD and Bluesound, matched to the home and the budget.",
  },
] as const;

export default function WholeHomeAudio() {
  return (
    <section className="bg-bg2 py-16 sm:py-20 lg:py-28">
      <div className="section-pad grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <ImageReveal className="aspect-4/3 sm:aspect-16/10 lg:aspect-auto lg:h-full lg:min-h-150">
          <Photo
            src={audioVideoImages.wholeHomeAudio.src}
            alt={audioVideoImages.wholeHomeAudio.alt}
            sizes="(min-width: 1024px) 48vw, 100vw"
          />
        </ImageReveal>

        <div className="lg:self-center">
          <Reveal>
            <p className="eyebrow text-gold">Whole-Home Audio</p>
            <h2 className="mt-4 max-w-md font-display text-4xl text-cream sm:text-5xl">
              Music that follows you.
            </h2>
            <p className="mt-5 max-w-md font-body text-base leading-relaxed text-cream/65">
              Morning news in the kitchen, a playlist on the patio, quiet
              jazz in the study. Whole-home audio brings the music you love
              into every part of daily life.
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
