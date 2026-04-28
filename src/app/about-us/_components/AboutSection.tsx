"use client";
import { useState } from "react";
import AboutUsGraphics from "@/assets/Group.svg";
import Image from "next/image";

export default function AboutSection() {
  const [tab, setTab] = useState<"identity" | "work">("work");
  const tabContent = {
    identity: [
      "College Connect is a tech-driven platform that bridges the gap between colleges and brands.",
      "We focus on building meaningful collaborations that empower students, enhance campus experiences, and help brands connect with youth culture. Through a strategic and innovation-led approach, we aim to redefine student-brand engagement.",
    ],
    work: [
      "We enable college events to secure the right sponsorships, brand collaborations, and partnerships—making event execution smoother and more impactful.",
      "From cultural fests to technical events and student-led initiatives, we connect campuses with brands that align with their audience and vision. We handle the complete sponsorship lifecycle—from outreach to execution.",
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
    </section>
  );
}
