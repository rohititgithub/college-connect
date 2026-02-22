"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import LogoIcon from "@/assets/Coll-Edge_Connect_Icon_Light.svg";
export default function HeroSection() {
  function scrollToSection(id: string) {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 0);
  }

  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 py-2 md:gap-8">
      <p className="max-w-5xl text-center text-4xl leading-tight tracking-widest md:text-6xl">
        Join the Biggest Youth Army and Feel the{" "}
        <span className="font-bold text-[#155DFC]">INSANITY</span>
      </p>
      <p className="max-w-3xl px-2 text-center text-[18px] font-medium text-[#364153] md:text-[20px]">
        INGLU Membership is a student-focused initiative designed to empower
        young minds with career growth opportunities, premium networking
        experiences, and exclusive benefits at an incredibly affordable price.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
        <button
          onClick={() => scrollToSection("plans")}
          type="button"
          className="flex -translate-y-0.5 cursor-pointer gap-2 rounded-full bg-linear-to-br from-[#155DFC] to-[#5087FF] px-8 py-4 text-white shadow-2xl transition-all active:translate-y-0 active:shadow-none"
        >
          <span className="leading-tight">Get Membership Now</span>
          <ArrowRight size={20} />
        </button>

        <button
          onClick={() => scrollToSection("benefits")}
          type="button"
          className="cursor-pointer rounded-full border-2 border-[#155DFC] px-7.5 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-[0px_2px_0px_0px_rgba(0,0,0,0.25)] active:translate-0 active:shadow-none"
        >
          <span className="leading-tight text-[#155DFC]">Explore Benefits</span>
        </button>
      </div>

      <div className="absolute top-8 -left-64 -z-10 hidden size-169.25 items-center rounded-full bg-[#9DBEE2]/50 blur-3xl lg:block" />
      <div className="absolute top-40 -right-95 -z-10 hidden size-169.25 items-center rounded-full bg-[#4673EB] shadow-[0px_0px_120px_32px_rgba(70,115,235,0.34)] blur-[2px] lg:block" />
      <Image
        src={LogoIcon}
        alt="Coll-Edge Connect Logo"
        width={360}
        className="absolute top-[calc(50%-3.25rem)] -right-40 hidden lg:block"
      />
    </section>
  );
}
