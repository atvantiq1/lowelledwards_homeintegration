import type { Metadata } from "next";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsIntro from "@/components/projects/ProjectsIntro";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import ProjectServices from "@/components/projects/ProjectServices";
import ProjectsCTA from "@/components/projects/ProjectsCTA";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of real Lowell Edwards Home Integration work — home theaters, seating, and TV concealment designed into the architecture of the home.",
  openGraph: {
    title: "Projects | Lowell Edwards Home Integration",
    description:
      "A selection of real Lowell Edwards Home Integration work — home theaters, seating, and TV concealment designed into the architecture of the home.",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsIntro />
      <ProjectShowcase />
      <ProjectServices />
      <ProjectsCTA />
    </>
  );
}
