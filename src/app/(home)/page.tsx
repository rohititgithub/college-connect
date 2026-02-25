// import AboutSection from "./_components/AboutSection";
import BrandsSection from "./_components/BrandsSection";
import CollegesSection from "./_components/CollegesSection";
import ContactSection from "./_components/ContactSection";
import HeroSection from "./_components/HeroSection";
import InfoSection from "./_components/InfoSection";
import ServicesSection from "./_components/ServicesSection";
import StatsSection from "./_components/StatsSection";
import TestimonialsSection from "./_components/TestimonialsSection";
// import VisionMissionSection from "./_components/VisionMissionSection";

export default function Home() {
  return (
    <div id="home" className="flex flex-col gap-8 lg:gap-16">
      <HeroSection />
      <CollegesSection />
      <ServicesSection />
      <InfoSection />
      <BrandsSection />
      <StatsSection />
      <TestimonialsSection />
      {/* <AboutSection /> */}
      {/* <VisionMissionSection /> */}
      <ContactSection />
    </div>
  );
}
