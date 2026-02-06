import InfoCard from "@/components/InfoCard";

export default function InfoSection() {
  return (
    <section
      id="info"
      className="flex w-full flex-col items-center gap-8 bg-[#144BE9] p-8 lg:gap-20 lg:p-16"
    >
      <div className="relative z-20 w-full max-w-7xl">
        <div className="absolute top-0 left-56 -z-10 h-9 w-12 rounded-[22px] bg-[#F1F1F1]/60 lg:-top-2.25 lg:left-196 lg:h-15.5 lg:w-20.5" />
        <span className="text-[32px] font-bold text-white uppercase lg:text-6xl">
          Why Coll-Edge Connect?
        </span>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row">
        <InfoCard
          title="Experiential Marketing Expertise"
          description="Full-service execution, transforming marketing concepts into real, on-ground realities."
        />
        <InfoCard
          title="Pan-India College Network"
          description="Seamless access to India's vast 1000+ college ecosystem for maximum reach."
        />
        <InfoCard
          title="Artist & Production Support"
          description="We manage end-to-end event logistics, talent booking, and complete production support."
        />
      </div>
    </section>
  );
}
