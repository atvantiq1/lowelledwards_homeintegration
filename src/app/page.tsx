import Hero from "@/components/home/Hero";
import BrandIntroduction from "@/components/home/BrandIntroduction";
import ResidentialExperiences from "@/components/home/ResidentialExperiences";
import SmartHomeSection from "@/components/home/SmartHomeSection";
import HomeTheatreSection from "@/components/home/HomeTheatreSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyLowellEdwards from "@/components/home/WhyLowellEdwards";
import Process from "@/components/home/Process";
import Testimonial from "@/components/home/Testimonial";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandIntroduction />
      <ResidentialExperiences />
      <SmartHomeSection />
      <HomeTheatreSection />
      <FeaturedProjects />
      <WhyLowellEdwards />
      <Process />
      <Testimonial />
      <FinalCTA />
    </>
  );
}
