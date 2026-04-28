import Image from "next/image";
import LogoIcon from "@/assets/cc.svg";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full max-w-7xl px-8 lg:py-24"
    >
      <div className="flex w-full max-w-3xl flex-col gap-6">
        <span className="text-[40px] leading-none font-semibold lg:text-[100px]">
          Where Brands Meet The Campus Buzz!!
        </span>
        <p className="text-sm lg:pr-5 lg:text-[26px]">
          <span className="font-semibold text-[#234AFF]">College Connect</span>{" "}
          bridges brands and colleges through experiential marketing, talent
          support, and youth-focused campaigns.
        </p>
      </div>

      <Image
        src={LogoIcon}
        alt="Coll-Edge Connect Logo"
        className="absolute top-[calc(40%-4.25rem)] -right-77 hidden w-200 lg:block"
      />
    </section>
  );
}
