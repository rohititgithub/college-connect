import CTASection from "./_components/CTASection";
import ContactSection from "./_components/ContactSection";
export default function FrontRow() {
  return (
    <div className="flex flex-col gap-8 lg:gap-16">
      <CTASection />
      <ContactSection/>
    </div>
  );
}
