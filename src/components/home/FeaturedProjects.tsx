import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import CTALink from "@/components/ui/CTALink";
import { homeImages } from "@/lib/images";

const PROJECTS = [
  {
    name: "Hillside Modern Residence",
    location: "Full-Home Automation — Audio, Video & Lighting",
    className: "lg:col-span-7 lg:row-span-2",
    aspect: "4 / 5",
    image: homeImages.projectLarge,
    sizes: "(min-width: 1024px) 58vw, 100vw",
  },
  {
    name: "Riverside Media Retreat",
    location: "Dedicated Home Theater & Acoustic Design",
    className: "lg:col-span-5 lg:row-span-1",
    aspect: "4 / 3",
    image: homeImages.projectMediaRoom,
    sizes: "(min-width: 1024px) 40vw, 100vw",
  },
  {
    name: "Lakeside Estate",
    location: "Outdoor Living — Shades, Audio & Landscape Lighting",
    className: "lg:col-span-5 lg:row-span-1",
    aspect: "4 / 3",
    image: homeImages.projectOutdoor,
    sizes: "(min-width: 1024px) 40vw, 100vw",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-bg py-14 sm:py-18 lg:py-20">
      <div className="section-pad mb-10 grid grid-cols-1 gap-8 sm:mb-14 lg:grid-cols-12 lg:items-end lg:gap-6">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow text-gold">Featured Projects</p>
          <h2 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
            Technology That Belongs in the Home.
          </h2>
          <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-cream/65">
            Every project is different. Our work is designed around the
            architecture, interior, and lifestyle of each residence. Explore
            a selection of Lowell Edwards projects and see how technology
            can become part of the home rather than compete with it.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5 lg:justify-self-end">
          <CTALink href="/projects" variant="outline">
            View Our Projects
          </CTALink>
        </Reveal>
      </div>

      <div className="section-pad grid grid-cols-1 gap-8 lg:grid-cols-12 lg:grid-rows-2 lg:gap-6">
        {PROJECTS.map((project, i) => (
          <Reveal
            key={i}
            delay={i * 0.1}
            distance={32}
            className={`group ${project.className}`}
          >
            <Link href="/projects" className="block h-full">
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: project.aspect }}
              >
                <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
                  <Photo
                    src={project.image.src}
                    alt={project.image.alt}
                    sizes={project.sizes}
                  />
                </div>
              </div>
              <div className="mt-4">
                <p className="font-body text-sm uppercase tracking-[0.08em] text-cream">
                  {project.name}
                </p>
                <p className="mt-1 font-body text-sm text-cream/50">
                  {project.location}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
