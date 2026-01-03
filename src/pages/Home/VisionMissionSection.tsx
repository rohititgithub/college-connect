import Dots from "../../assets/Dots.png";

export default function VisionMissionSection() {
  return (
    <section
      id="vision-mission"
      className="mx-auto my-24 flex w-full max-w-7xl flex-col gap-16"
    >
      <div className="relative">
        <span className="text-6xl font-bold">Vision and Mission</span>
        <div className="absolute -top-2.5 left-131 -z-10 h-15.5 w-20.5 rounded-[22px] bg-[#4673EB]/60" />
      </div>
      <div className="flex justify-center gap-16">
        <div className="relative flex w-120.5 flex-col gap-7 text-6xl font-bold">
          <div>
            <span className="text-[#4673EB]">Defining </span>
            <span>Our</span>
          </div>
          <span>Purpose</span>
          <div>
            <span>And </span>
            <span className="text-[#4673EB]">Direction</span>
          </div>
          <img
            src={Dots}
            alt="Dots"
            className="absolute top-18 right-24 w-23.5"
          />
        </div>
        <div className="flex w-1/2 flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-[32px] font-bold text-[#4673EB]">
              Our Vision
            </span>
            <p className="text-[20px]">
              To become the most trusted platform that transforms how colleges
              and brands collaborate, creating meaningful, memorable, and
              impactful experiences for students.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[32px] font-bold text-[#4673EB]">
              Our Mission
            </span>
            <ul className="list-outside list-disc pl-6 text-[20px]">
              <li>
                To bridge the gap between colleges and brands through a
                seamless, tech-driven collaboration platform
              </li>
              <li>
                To empower colleges with valuable sponsorship and partnership
                opportunities
              </li>
              <li>
                To help brands engage authentically with student communities at
                scale
              </li>
              <li>
                To create win-win partnerships that enhance student experiences
                and brand visibility
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
