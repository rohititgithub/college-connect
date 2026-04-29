import { Metadata } from "next";
import BenefitsSection from "./_components/BenefitsSection";
import CTASection from "./_components/CTASection";
import HeroSection from "./_components/HeroSection";
import InfoSection from "./_components/InfoSection";
import PlansSection from "./_components/PlansSection";

export const metadata: Metadata = { title: "Membership" };
export default function Membership() {
  return (
    <div className="flex flex-col gap-8 overflow-x-clip pt-24 lg:gap-24">
      <HeroSection />
      <InfoSection />
      <PlansSection />
      <BenefitsSection />
      <CTASection />
    </div>
  );
}
