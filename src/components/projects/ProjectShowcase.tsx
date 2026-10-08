import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import ProjectVideo from "@/components/projects/ProjectVideo";
import { projectVideos, type ProjectVideo as Project } from "@/lib/videos";

/**
 * Selected Work: two video galleries, one per category.
 *
 * Every clip keeps its native aspect ratio, and each sits directly beside (or
 * above) a short info panel: title, a few lines of description, service tags.
 * On desktop each category is a bento. The landscape clip leads with the two
 * info panels tucked beneath it, while the portrait clip runs the full height
 * of the other side, so a portrait ratio never leaves a blank column. Smart
 * Home mirrors Home Theater.
 */

const byId = (id: string): Project => {
  const project = projectVideos.find((p) => p.id === id);
  if (!project) throw new Error(`Unknown project video: ${id}`);
  return project;
};

interface Category {
  id: string;
  number: string;
  title: string;
  tagline: string;
  href: string;
}

const HOME_THEATER: Category = {
  id: "home-theater",
  number: "01",
  title: "Home Theater",
  tagline: "Immersive spaces designed around the experience.",
  href: "/residential/home-theatre",
};

const SMART_HOME: Category = {
  id: "smart-home",
  number: "02",
  title: "Smart Home",
  tagline: "Technology integrated quietly into the architecture.",
  href: "/residential/smart-home-integration",
};

const LANDSCAPE_SIZES = "(min-width: 1280px) 66vw, 100vw";
const PORTRAIT_SIZES =
  "(min-width: 1280px) 33vw, (min-width: 640px) 40vw, 100vw";

export default function ProjectShowcase() {
  const rooms = byId("theatre-rooms");
  const seating = byId("theatre-seating");
  const art = byId("tv-concealment-art");
  const cabinetry = byId("tv-concealment-cabinetry");

  return (
    <section id="showcase" className="scroll-mt-24 bg-bg text-cream">
      <div className="section-pad mx-auto max-w-384 pt-14 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
        {/* 01 — Home Theater: landscape feature left, portrait right. */}
        <div id={HOME_THEATER.id} className="scroll-mt-24">
          <CategoryHeader category={HOME_THEATER} />
          <div className="grid grid-cols-12 gap-3 md:gap-4 xl:grid-rows-[auto_1fr]">
            <VideoTile
              project={rooms}
              number="01.1"
              href={HOME_THEATER.href}
              sizes={LANDSCAPE_SIZES}
              className="col-span-12 xl:col-span-8 xl:col-start-1 xl:row-start-1"
            />
            <InfoPanel
              project={rooms}
              number="01.1"
              category={HOME_THEATER.title}
              className="col-span-12 xl:col-span-4 xl:col-start-1 xl:row-start-2"
            />

            <VideoTile
              project={seating}
              number="01.2"
              href={HOME_THEATER.href}
              sizes={PORTRAIT_SIZES}
              className="col-span-12 sm:col-span-5 md:col-span-4 xl:col-span-4 xl:col-start-9 xl:row-span-2 xl:row-start-1"
            />
            <InfoPanel
              project={seating}
              number="01.2"
              category={HOME_THEATER.title}
              className="col-span-12 sm:col-span-7 md:col-span-8 xl:col-span-4 xl:col-start-5 xl:row-start-2"
            />
          </div>
        </div>

        {/* 02 — Smart Home: mirrored, portrait left, landscape right. */}
        <div id={SMART_HOME.id} className="mt-14 scroll-mt-24 sm:mt-16 lg:mt-20">
          <CategoryHeader category={SMART_HOME} />
          <div className="grid grid-cols-12 gap-3 md:gap-4 xl:grid-rows-[auto_1fr]">
            <VideoTile
              project={art}
              number="02.1"
              href={SMART_HOME.href}
              sizes={PORTRAIT_SIZES}
              className="col-span-12 sm:col-span-5 md:col-span-4 xl:col-span-4 xl:col-start-1 xl:row-span-2 xl:row-start-1"
            />
            <InfoPanel
              project={art}
              number="02.1"
              category={SMART_HOME.title}
              className="col-span-12 sm:col-span-7 md:col-span-8 xl:col-span-4 xl:col-start-5 xl:row-start-2"
            />

            <VideoTile
              project={cabinetry}
              number="02.2"
              href={SMART_HOME.href}
              sizes={LANDSCAPE_SIZES}
              className="col-span-12 xl:col-span-8 xl:col-start-5 xl:row-start-1"
            />
            <InfoPanel
              project={cabinetry}
              number="02.2"
              category={SMART_HOME.title}
              className="col-span-12 xl:col-span-4 xl:col-start-9 xl:row-start-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Category headers ───────────────────────── */

function CategoryHeader({ category }: { category: Category }) {
  return (
    <Reveal>
      <header className="mb-3 flex flex-col gap-2 border-t border-cream/20 pt-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 md:mb-4">
        <div className="flex items-baseline gap-4">
          <h2 className="font-display text-3xl leading-none text-cream sm:text-4xl">
            {category.title}
          </h2>
        </div>
        <p className="font-body text-sm text-cream/65">{category.tagline}</p>
      </header>
    </Reveal>
  );
}

/* ───────────────────────── Video tile ───────────────────────── */

/**
 * A clip at its own aspect ratio. Nothing is cropped or stretched, and the
 * whole tile links to the category page. Hover: slight zoom, a light veil and
 * a "View Project" chip.
 */
function VideoTile({
  project,
  number,
  href,
  sizes,
  className = "",
}: {
  project: Project;
  number: string;
  href: string;
  sizes: string;
  className?: string;
}) {
  return (
    <Reveal distance={32} className={`self-start ${className}`}>
      <Link
        href={href}
        aria-label={`View project: ${project.type}`}
        className="group relative block w-full overflow-hidden bg-cream/10"
        style={{ aspectRatio: `${project.width} / ${project.height}` }}
      >
        <div className="absolute inset-0 transition-transform duration-900 ease-out group-hover:scale-[1.03]">
          <ProjectVideo
            sources={project.sources}
            poster={project.poster}
            sizes={sizes}
            playAffordance={false}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

      </Link>
    </Reveal>
  );
}

/* ───────────────────────── Info panel ───────────────────────── */

/** Title, the existing description (2–4 lines) and the service line. Nothing else. */
function InfoPanel({
  project,
  number,
  category,
  className = "",
}: {
  project: Project;
  number: string;
  category: string;
  className?: string;
}) {
  return (
    <Reveal delay={0.08} distance={24} className={className}>
      <article className="flex h-full flex-col justify-between gap-3 border border-cream/10 bg-bg2 p-5 sm:p-6 xl:p-4 2xl:p-6">
        <div>
          <h3 className="mt-3 font-display text-2xl leading-[1.1] text-cream sm:text-3xl xl:mt-0 xl:text-[1.65rem] 2xl:mt-3 2xl:text-3xl">
            {project.type}
          </h3>
          <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-cream/70 xl:text-[0.8rem] xl:leading-normal 2xl:mt-3 2xl:text-sm 2xl:leading-relaxed">
            {project.description}
          </p>
        </div>
        <p className="border-t border-cream/15 pt-3 font-body text-[0.66rem] leading-relaxed tracking-[0.14em] text-cream/65 uppercase">
          {project.services.join(" · ")}
        </p>
      </article>
    </Reveal>
  );
}
