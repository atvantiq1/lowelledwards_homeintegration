import type { Metadata } from "next";
import HomeTheatreHero from "@/components/residential/home-theatre/HomeTheatreHero";
import HomeTheatreIntroduction from "@/components/residential/home-theatre/HomeTheatreIntroduction";
import TheatreDesign from "@/components/residential/home-theatre/TheatreDesign";
import TheatreSeating from "@/components/residential/home-theatre/TheatreSeating";
import TheatreAudioVideo from "@/components/residential/home-theatre/TheatreAudioVideo";
import TheatreLighting from "@/components/residential/home-theatre/TheatreLighting";
import HomeTheatreCTA from "@/components/residential/home-theatre/HomeTheatreCTA";

export const metadata: Metadata = {
  title: "Home Theatre",
  description:
    "Private home theaters from Lowell Edwards Home Integration — cinema-quality audio and video, luxury seating, architectural lighting, and one-touch control, designed into the architecture of your home.",
  openGraph: {
    title: "Home Theatre | Lowell Edwards Home Integration",
    description:
      "Private home theaters from Lowell Edwards Home Integration — cinema-quality audio and video, luxury seating, architectural lighting, and one-touch control, designed into the architecture of your home.",
    type: "website",
  },
};

export default function HomeTheatrePage() {
  return (
    <>
      <HomeTheatreHero />
      <HomeTheatreIntroduction />
      <TheatreDesign />
      <TheatreSeating />
      <TheatreAudioVideo />
      <TheatreLighting />
      <HomeTheatreCTA />
    </>
  );
}
