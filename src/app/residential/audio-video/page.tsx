import type { Metadata } from "next";
import AudioVideoHero from "@/components/residential/audio-video/AudioVideoHero";
import AudioVideoIntro from "@/components/residential/audio-video/AudioVideoIntro";
import WholeHomeAudio from "@/components/residential/audio-video/WholeHomeAudio";
import VideoEverywhere from "@/components/residential/audio-video/VideoEverywhere";
import DiscreetDesign from "@/components/residential/audio-video/DiscreetDesign";
import AudioVideoProcess from "@/components/residential/audio-video/AudioVideoProcess";
import AudioVideoCTA from "@/components/residential/audio-video/AudioVideoCTA";

const description =
  "Whole-home audio and video from Lowell Edwards Home Integration: multi-room music, distributed video, outdoor entertainment and discreet speakers and displays, all controlled from one simple interface.";

export const metadata: Metadata = {
  title: "Audio & Video",
  description,
  openGraph: {
    title: "Audio & Video | Lowell Edwards Home Integration",
    description,
    type: "website",
  },
};

export default function AudioVideoPage() {
  return (
    <>
      <AudioVideoHero />
      <AudioVideoIntro />
      <WholeHomeAudio />
      <VideoEverywhere />
      <DiscreetDesign />
      <AudioVideoProcess />
      <AudioVideoCTA />
    </>
  );
}
