import Image from "next/image";
import Dots from "@/assets/Dots.png";

export default function VisionMissionSection() {
  return (
    <section
      id="vision-mission"
      className="mx-auto my-4 flex w-full max-w-7xl flex-col gap-8 px-8 lg:my-24 lg:gap-16"
    >
      <div className="relative flex flex-col">
        <span className="text-[32px] leading-none font-bold lg:text-6xl">
          Vision and Mission
        </span>
        <span className="text-[10px] font-bold tracking-widest text-[#234AFF] uppercase lg:hidden lg:text-[15px]">
          Defining our purpose and Direction
        </span>

        <div className="absolute -top-2 left-66 -z-10 h-9 w-12 rounded-[22px] bg-[#4673EB]/60 lg:-top-2.5 lg:left-131 lg:h-15.5 lg:w-20.5" />
      </div>
      <div className="flex flex-col justify-center gap-16 lg:flex-row">
        <div className="relative hidden w-120.5 flex-col gap-7 text-6xl font-bold lg:flex">
          <div>
            <span className="text-[#4673EB]">Defining </span>
            <span>Our</span>
          </div>
          <span>Purpose</span>
          <div>
            <span>And </span>
            <span className="text-[#4673EB]">Direction</span>
          </div>

          <Image
            src={Dots}
            alt="Dots"
            className="absolute top-18 right-24 w-23.5"
          />
        </div>
        <div className="flex flex-col gap-8 lg:w-1/2">
          <div className="flex flex-col gap-4">
            <span className="text-[22px] font-bold text-[#4673EB] lg:text-[32px]">
              Our Vision
            </span>
            <p className="lg:text-[20px]">
              &quot;To build a trusted platform that redefines how colleges and
              brands collaborate—creating impactful, memorable, and meaningful
              experiences for students.&quot;
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[22px] font-bold text-[#4673EB] lg:text-[32px]">
              Our Mission
            </span>
            <ul className="list-outside list-disc pl-6 lg:text-[20px]">
              <li>
                To create a seamless, technology-driven platform that connects
                colleges and brands, enabling meaningful collaborations and
                impactful experiences
              </li>
              <li>
                To enable colleges to unlock meaningful sponsorships and
                strategic partnerships that drive growth and impactful
                experiences
              </li>
              <li>
                Enable brands to connect authentically with student communities
                at scale
              </li>
              <li>
                Build win-win partnerships that enhance student experiences
                while boosting brand visibility
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
