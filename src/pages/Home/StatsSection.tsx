export default function StatsSection() {
  return (
    <section
      id="stats"
      className="relative mx-auto mt-16 flex h-35 items-center rounded-2xl bg-white"
    >
      <div className="flex w-69.5 flex-col items-center gap-2">
        <span className="text-[32px] font-medium">
          500<sup>+</sup>
        </span>
        <span className="text-sm">College Events</span>
      </div>
      <div className="min-h-25 min-w-0.75 bg-[#C8C8C8]" />
      <div className="flex w-69.5 flex-col items-center gap-2">
        <span className="text-[32px] font-medium">
          2M<sup>+</sup>
        </span>
        <span className="text-sm">Students Reached</span>
      </div>
      <div className="min-h-25 min-w-0.75 bg-[#C8C8C8]" />
      <div className="flex w-69.5 flex-col items-center gap-2">
        <span className="text-[32px] font-medium">
          50<sup>+</sup>
        </span>
        <span className="text-sm">Brand Collaborations</span>
      </div>
      <div className="min-h-25 min-w-0.75 bg-[#C8C8C8]" />
      <div className="flex w-69.5 flex-col items-center gap-2">
        <span className="text-[32px] font-medium">
          20<sup>+</sup>
        </span>
        <span className="text-sm">City Activation</span>
      </div>
      <div className="absolute -top-22 -left-22 -z-10 size-44 rounded-full bg-[#4F7FFF]/25 blur-xl" />
    </section>
  );
}
