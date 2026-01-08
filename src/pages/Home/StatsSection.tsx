export default function StatsSection() {
  return (
    <section id="stats" className="relative mt-4 px-8 lg:mt-16 lg:h-35">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 rounded-2xl bg-white p-4 lg:h-35 lg:flex-row">
        <div className="flex w-full items-center">
          <div className="flex flex-1 flex-col items-center gap-2 lg:w-69.5">
            <span className="text-[32px] font-medium">
              500<sup>+</sup>
            </span>
            <span className="text-sm">College Events</span>
          </div>
          <div className="min-h-25 min-w-0.75 bg-[#C8C8C8]" />
          <div className="flex flex-1 flex-col items-center gap-2 lg:w-69.5">
            <span className="text-[32px] font-medium">
              2M<sup>+</sup>
            </span>
            <span className="text-sm">Students Reached</span>
          </div>
        </div>
        <div className="min-h-0.75 min-w-full bg-[#C8C8C8] lg:min-h-25 lg:min-w-0.75" />
        <div className="flex w-full items-center">
          <div className="flex flex-1 flex-col items-center gap-2 lg:w-69.5">
            <span className="text-[32px] font-medium">
              50<sup>+</sup>
            </span>
            <span className="text-sm">Brand Collaborations</span>
          </div>
          <div className="min-h-25 min-w-0.75 bg-[#C8C8C8]" />
          <div className="flex flex-1 flex-col items-center gap-2 lg:w-69.5">
            <span className="text-[32px] font-medium">
              20<sup>+</sup>
            </span>
            <span className="text-sm">City Activation</span>
          </div>
        </div>
      </div>
      <div className="absolute -top-22 -left-22 -z-10 size-44 rounded-full bg-[#4F7FFF]/25 blur-xl" />
    </section>
  );
}
