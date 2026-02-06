import { useState } from "react";
import AboutUsGraphics from "@/assets/About_Us_Graphics.png";
import Image from "next/image";

export default function AboutSection() {
  const [tab, setTab] = useState<"identity" | "work">("work");
  const tabContent = {
    identity: [
      "Coll-Edge Connect is a tech-driven platform that bridges the gap between colleges and brands.",
      "We believe in fostering meaningful collaborations that empower students, enhance campus experiences, and help brands become a part of students' most memorable moments. With a strategic and innovation-led approach, we work to shape the future of student-brand engagement.",
    ],
    work: [
      "We help college events secure the right sponsorships, brand collaborations, and partnerships—making event planning smoother and more impactful.",
      "We work closely with college fests, cultural events, technical events, and student-led initiatives to connect them with brands that align with their audience and vision. From initial outreach to final execution, we manage the entire sponsorship process.",
    ],
  };

  return (
    <section
      id="about"
      className="relative mx-auto flex w-full max-w-7xl flex-col gap-16 px-8 lg:gap-32"
    >
      <div className="relative flex flex-col items-baseline gap-4 lg:flex-row lg:gap-16">
        <span className="text-[32px] font-bold lg:text-6xl">About us</span>
        <div className="absolute top-0.5 left-26 -z-10 h-9 w-12 rounded-[22px] bg-[#4673EB]/60 lg:-top-2.5 lg:left-49.5 lg:h-15.5 lg:w-20.5" />

        <div className="mx-auto flex gap-8 border-b-2 border-black/50 text-2xl font-bold lg:gap-16 lg:text-[32px]">
          <button
            type="button"
            onClick={() => setTab("identity")}
            className="cursor-pointer"
          >
            <span
              className={`${
                tab === "identity"
                  ? "text-[#4673EB]"
                  : "text-black/50 decoration-transparent"
              } underline underline-offset-8 transition-all lg:underline-offset-12`}
            >
              Who Are We?
            </span>
          </button>
          <button
            type="button"
            onClick={() => setTab("work")}
            className="cursor-pointer"
          >
            <span
              className={`${
                tab === "work"
                  ? "text-[#4673EB]"
                  : "text-black/50 decoration-transparent"
              } underline underline-offset-8 transition-all lg:underline-offset-12`}
            >
              What We Do?
            </span>
          </button>
        </div>
      </div>
      <div className="text flex flex-col gap-8 lg:flex-row lg:gap-16">
        <Image src={AboutUsGraphics} alt="About Us Graphics" />
        <div className="flex flex-1 flex-col gap-4 text-[20px]">
          {tab === "identity" &&
            tabContent.identity.map((para, index) => <p key={index}>{para}</p>)}
          {tab === "work" &&
            tabContent.work.map((para, index) => <p key={index}>{para}</p>)}
        </div>
      </div>

      <div className="absolute -top-4 -left-28 -z-10 size-75 rounded-full bg-[#4673EB]/25 blur-3xl" />
      <div className="absolute right-0 -bottom-48 -z-10 size-75 rounded-full bg-[#4673EB]/25 blur-3xl" />
    </section>
  );
}
