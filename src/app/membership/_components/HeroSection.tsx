"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
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
      {/* <div className="pointer-events-none absolute -top-200 -right-5 -z-10 hidden h-337.5 w-56 -rotate-15 rounded-[50%] bg-[#ECA1FF]/40 blur-2xl xl:block" />
      <div className="pointer-events-none absolute -top-100 -left-50 -z-10 hidden h-337.5 w-56 -rotate-12 rounded-[50%] bg-[#C0A1FF]/50 blur-2xl xl:block" /> */}
    </section>
  );
}
