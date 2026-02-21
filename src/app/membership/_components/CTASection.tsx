"use client";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  function scrollToSection(id: string) {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 0);
  }
  return (
    <section className="flex w-full flex-col items-center gap-8 bg-linear-to-r from-[#155DFC] to-[#1447E6] px-4 py-16 text-center md:gap-9 md:py-28">
      <span className="font-plus-jakarta-sans text-3xl text-white md:text-5xl">
        Want to Get the Membership?
      </span>

      <button
        onClick={() => scrollToSection("plans")}
        type="button"
        className="flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 text-sm text-[#155DFC] shadow-2xl transition-all active:translate-y-0.5 active:shadow-none md:px-10 md:py-4.5 md:text-base"
      >
        <span>Get Now</span>
        <ArrowRight size={20} />
      </button>
    </section>
  );
}
