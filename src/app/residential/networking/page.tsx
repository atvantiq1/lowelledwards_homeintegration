import type { Metadata } from "next";
import NetworkingHero from "@/components/residential/networking/NetworkingHero";
import NetworkingIntro from "@/components/residential/networking/NetworkingIntro";
import WholeHomeConnectivity from "@/components/residential/networking/WholeHomeConnectivity";
import ConnectedSpaces from "@/components/residential/networking/ConnectedSpaces";
import SmartHomeIntegration from "@/components/residential/networking/SmartHomeIntegration";
import NetworkingProcess from "@/components/residential/networking/NetworkingProcess";
import NetworkingCTA from "@/components/residential/networking/NetworkingCTA";

const description =
  "Networking and Wi-Fi systems from Lowell Edwards Home Integration — the dependable foundation behind home theater, audio, video, lighting, shades, automation and security, planned around your home.";

export const metadata: Metadata = {
  title: "Networking",
  description,
  openGraph: {
    title: "Networking | Lowell Edwards Home Integration",
    description,
    type: "website",
  },
};

export default function NetworkingPage() {
  return (
    <>
      <NetworkingHero />
      <NetworkingIntro />
      <WholeHomeConnectivity />
      <ConnectedSpaces />
      <SmartHomeIntegration />
      <NetworkingProcess />
      <NetworkingCTA />
    </>
  );
}
