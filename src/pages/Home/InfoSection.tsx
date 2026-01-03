import InfoCard from "../../components/InfoCard";

export default function InfoSection() {
  return (
    <section
      id="info"
      className="flex w-full flex-col items-center gap-20 bg-[#144BE9] p-16"
    >
      <div className="relative z-20 w-7xl">
        <div className="absolute -top-2.25 left-196 -z-10 h-15.5 w-20.5 rounded-[22px] bg-[#F1F1F1]/60" />
        <span className="text-6xl font-bold text-white uppercase">
          Why Coll-Edge Connect?
        </span>
      </div>
      <div className="flex gap-8">
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
