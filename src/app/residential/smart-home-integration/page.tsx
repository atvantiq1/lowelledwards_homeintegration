import type { Metadata } from "next";
import SmartHomeHero from "@/components/residential/smart-home/SmartHomeHero";
import SmartHomeIntroduction from "@/components/residential/smart-home/SmartHomeIntroduction";
import SmartHomeSystems from "@/components/residential/smart-home/SmartHomeSystems";
import SmartHomeLifestyle from "@/components/residential/smart-home/SmartHomeLifestyle";
import SmartHomeIntegration from "@/components/residential/smart-home/SmartHomeIntegration";
import SmartHomeCTA from "@/components/residential/smart-home/SmartHomeCTA";

export const metadata: Metadata = {
  title: "Smart Home Integration",
  description:
    "Whole-home automation from Lowell Edwards Home Integration — multi-room audio, video, lighting control, motorized shades, climate, networking, and security, integrated into one customized experience.",
  openGraph: {
    title: "Smart Home Integration | Lowell Edwards Home Integration",
    description:
      "Whole-home automation from Lowell Edwards Home Integration — multi-room audio, video, lighting control, motorized shades, climate, networking, and security, integrated into one customized experience.",
    type: "website",
  },
};

export default function SmartHomeIntegrationPage() {
  return (
    <>
      <SmartHomeHero />
      <SmartHomeIntroduction />
      <SmartHomeSystems />
      <SmartHomeLifestyle />
      <SmartHomeIntegration />
      <SmartHomeCTA />
    </>
  );
}
