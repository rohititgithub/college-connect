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
        <div className="flex gap-90 ">
          <p className="text-sm lg:pr-5 lg:text-[26px]">
            First 1,000 get FREE PRO access for 3 months.
          </p>
          <button 
          className="flex w-fit cursor-pointer items-center gap-2 rounded-[3px] bg-[#144BE9] p-3 text-white transition-all hover:-translate-y-0.5 hover:shadow-[0px_2px_0px_0px_rgba(0,0,0,0.25)] active:translate-0 active:shadow-none disabled:translate-0 disabled:cursor-not-allowed disabled:opacity-75 disabled:shadow-none"
          type="button">UNLOCK MY ACCESS</button>
        </div>
      </div>
      <div className="absolute top-8 -left-64 -z-10 hidden size-169.25 items-center rounded-full bg-[#9DBEE2]/50 blur-3xl lg:block" />
    </section>
  );
}
