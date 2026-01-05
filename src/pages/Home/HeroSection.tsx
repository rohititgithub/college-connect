import Logo from "../../assets/Coll-Edge_Connect_Icon_Light.svg";

export default function HeroSection() {
  return (
    <section id="hero" className="relative mx-auto w-7xl py-24">
      <div className="flex w-3xl flex-col gap-6">
        <span className="text-[100px] leading-none font-semibold">
          Where Brands Meets The Campus Buzz!!
        </span>
        <p className="pr-5 text-[26px]">
          <span className="font-semibold text-[#234AFF]">
            Coll-Edge Connect
          </span>{" "}
          bridges brands and colleges through experiential marketing, talent
          support, and youth-focused campaigns.
        </p>
      </div>
      <div className="absolute top-8 -left-64 -z-10 flex size-169.25 items-center rounded-full bg-[#9DBEE2]/50 blur-3xl" />
      <div className="absolute top-18 -right-120 -z-10 flex size-169.25 items-center rounded-full bg-[#4673EB] shadow-[0px_0px_120px_32px_rgba(70,115,235,0.34)] blur-[2px]" />
      <img
        src={Logo}
        alt="Coll-Edge Connect Logo"
        width={360}
        className="absolute top-[calc(50%-3.25rem)] -right-64"
      />
    </section>
  );
}
