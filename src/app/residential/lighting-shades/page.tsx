import type { Metadata } from "next";
import LightingShadesHero from "@/components/residential/lighting-shades/LightingShadesHero";
import LightingShadesIntro from "@/components/residential/lighting-shades/LightingShadesIntro";
import LightingSection from "@/components/residential/lighting-shades/LightingSection";
import ShadesSection from "@/components/residential/lighting-shades/ShadesSection";
import LightShadeIntegration from "@/components/residential/lighting-shades/LightShadeIntegration";
import LightingShadeExperiences from "@/components/residential/lighting-shades/LightingShadeExperiences";
import LightingShadesCTA from "@/components/residential/lighting-shades/LightingShadesCTA";

const description =
  "Lutron lighting control and motorized shades from Lowell Edwards Home Integration — dimming, scenes and sensors, Sivoia QS and Serena shades, with daylight and electric light controlled together as part of the home.";

export const metadata: Metadata = {
  title: "Lighting & Shades",
  description,
  openGraph: {
    title: "Lighting & Shades | Lowell Edwards Home Integration",
    description,
    type: "website",
  },
};

export default function LightingShadesPage() {
  return (
    <>
      <LightingShadesHero />
      <LightingShadesIntro />
      <LightingSection />
      <ShadesSection />
      {/* <LightShadeIntegration /> */}
      <LightingShadeExperiences />
      <LightingShadesCTA />
    </>
  );
}
