import AboutSection from "./AboutSection";
import BrandsSection from "./BrandsSection";
import CollegesSection from "./CollegesSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import ServicesSection from "./ServicesSection";
import StatsSection from "./StatsSection";
import TestimonialsSection from "./TestimonialsSection";
import VisionMissionSection from "./VisionMissionSection";

export default function Home() {
  return (
    <div id="home" className="flex flex-col gap-16">
      <HeroSection />
      <CollegesSection />
      <ServicesSection />
      <InfoSection />
      <BrandsSection />
      <StatsSection />
      <TestimonialsSection />
      <AboutSection />
      <VisionMissionSection />
      <ContactSection />
    </div>
  );
}
