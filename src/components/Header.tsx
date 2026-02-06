"use client"
import { Menu, X } from "lucide-react";
import Logo from "@/assets/Coll-Edge_Connect_Logo.svg";
import LogoIcon from "@/assets/Coll-Edge_Connect_Icon_Light.svg";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function goTo(id: string) {
    setIsNavOpen((prev) => (prev === true ? false : true));
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }

  return (
    <header className="z-50 flex w-full max-w-7xl items-center gap-11.5 px-8 py-10 lg:mx-auto">
      <Image
        src={Logo}
        alt="Coll-Edge_Connect_Logo"
        className="mr-auto w-24 lg:w-51.75"
      />
      <nav className="hidden gap-13.5 text-[17px] font-semibold text-[#382F68] lg:flex">
        <button
          type="button"
          onClick={() => goTo("home")}
          className="cursor-pointer underline decoration-transparent underline-offset-2 transition-all hover:decoration-[#382F68] active:text-[#234AFF] active:decoration-[#234AFF]"
        >
          <span>Home</span>
        </button>
        <button
          type="button"
          onClick={() => goTo("services")}
          className="cursor-pointer underline decoration-transparent underline-offset-2 transition-all hover:decoration-[#382F68] active:text-[#234AFF] active:decoration-[#234AFF]"
        >
          <span>Our Work</span>
        </button>
        <button
          type="button"
          onClick={() => goTo("about")}
          className="cursor-pointer underline decoration-transparent underline-offset-2 transition-all hover:decoration-[#382F68] active:text-[#234AFF] active:decoration-[#234AFF]"
        >
          <span>About Us</span>
        </button>
      </nav>
      <button
        type="button"
        onClick={() => goTo("contact")}
        className="hidden cursor-pointer items-center gap-1.5 rounded-full bg-black px-4.25 py-2.5 transition-all hover:-translate-y-0.5 hover:shadow-[0px_2px_0px_0px_rgba(0,0,0,0.25)] active:translate-0 active:shadow-none lg:flex"
      >
        <div className="size-3 rounded-full bg-[#4F52FF]/25 p-0.75">
          <div className="size-1.5 animate-ping rounded-full bg-[#4F52FF] duration-300" />
        </div>
        <span className="text-[15px] font-bold text-white">
          Partner with Us
        </span>
      </button>
      <button
        type="button"
        onClick={() => setIsNavOpen((prev) => !prev)}
        className="transition-all hover:opacity-75 active:opacity-50 lg:hidden"
      >
        <Menu size={24} />
      </button>
      <nav
        className={`${isNavOpen ? "right-0" : "-right-[75%]"} fixed top-0 z-50 flex h-dvh w-[75%] flex-col items-end gap-8 border-l-2 bg-[#E0E0E0] px-8 py-10 text-4xl transition-all duration-400 lg:hidden`}
      >
        <div className="flex w-full justify-between gap-4">
          <Image
            src={LogoIcon}
            alt="Coll-Edge_Connect_Logo Icon"
            className="h-7.25 lg:w-51.75"
          />
          <button
            type="button"
            onClick={() => setIsNavOpen((prev) => !prev)}
            className="transition-all hover:opacity-75 active:opacity-50 lg:hidden"
          >
            <X size={24} />
          </button>
        </div>
        <button
          type="button"
          onClick={() => goTo("home")}
          className="cursor-pointer underline decoration-transparent underline-offset-2 transition-all hover:decoration-[#382F68] active:text-[#234AFF] active:decoration-[#234AFF]"
        >
          <span>Home</span>
        </button>
        <button
          type="button"
          onClick={() => goTo("services")}
          className="cursor-pointer underline decoration-transparent underline-offset-2 transition-all hover:decoration-[#382F68] active:text-[#234AFF] active:decoration-[#234AFF]"
        >
          <span>Our Work</span>
        </button>
        <button
          type="button"
          onClick={() => goTo("about")}
          className="cursor-pointer underline decoration-transparent underline-offset-2 transition-all hover:decoration-[#382F68] active:text-[#234AFF] active:decoration-[#234AFF]"
        >
          <span>About Us</span>
        </button>
        <button
          type="button"
          onClick={() => goTo("contact")}
          className="mt-auto flex cursor-pointer items-center gap-3 rounded-full bg-black px-4.25 py-2.5 transition-all hover:-translate-y-0.5 hover:shadow-[0px_2px_0px_0px_rgba(0,0,0,0.25)] active:translate-0 active:shadow-none lg:hidden"
        >
          <div className="size-3 rounded-full bg-[#4F52FF]/25 p-0.75">
            <div className="size-1.5 animate-ping rounded-full bg-[#4F52FF] duration-300" />
          </div>
          <span className="text-xl font-bold text-white">Partner with Us</span>
        </button>
      </nav>
    </header>
  );
}
