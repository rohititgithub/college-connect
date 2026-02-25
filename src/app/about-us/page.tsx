import { Metadata } from "next";
import AboutSection from "./_components/AboutSection";
import VisionMissionSection from "./_components/VisionMissionSection";

export const metadata: Metadata = { title: "About Us" };
export default function About() {
  return (
    <div id="about" className="flex flex-col gap-8 lg:gap-16">
      <AboutSection />
      <VisionMissionSection />
    </div>
  );
}
