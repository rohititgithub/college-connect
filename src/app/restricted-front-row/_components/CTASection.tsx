export default function CTASection() {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full max-w-7xl px-8 lg:py-24"
    >
      <div className="flex w-full max-w-6xl flex-col gap-6">
        <span className="text-[40px] leading-none font-semibold lg:text-[85px]">
          WELCOME TO FRONT ROW
        </span>
        <span className="text-[40px] leading-none font-semibold lg:text-[70px]">
          You&apos;re early
        </span>
        <div className="flex gap-90">
          <p className="text-sm lg:pr-5 lg:text-[26px]">
            First 1,000 get FREE PRO access for 3 months.
          </p>
        </div>
      </div>
      <div className="absolute top-8 -left-64 -z-10 hidden size-169.25 items-center rounded-full bg-[#9DBEE2]/50 blur-3xl lg:block" />
    </section>
  );
}
