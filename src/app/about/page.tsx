import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import ExpertisePromise from "@/components/about/ExpertisePromise";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";

export const metadata: Metadata = {
  title: "About",
  description:
    "40 years of designing technology into the architecture of the home. Learn about Lowell Edwards Home Integration's story, standards, and philosophy.",
  openGraph: {
    title: "About | Lowell Edwards Home Integration",
    description:
      "40 years of designing technology into the architecture of the home. Learn about Lowell Edwards Home Integration's story, standards, and philosophy.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <ExpertisePromise />
      <AboutPhilosophy />
    </>
  );
}
