"use client";
import { Instagram, Linkedin, Mail, Phone, Github } from "lucide-react";
import Logo from "@/assets/cc.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  function goTo(id: string) {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }

  return (
    <footer className="flex flex-col items-center gap-6 bg-[#DDE7FF] px-8 py-12 text-[#4A5565] lg:gap-10">
      {/* Footer main content grid */}
      <div className="flex w-full max-w-7xl flex-col gap-8 lg:flex-row">
        {/* Brand summary & social links */}
        <div className="flex w-75 flex-col gap-4">
          <Image
            src={Logo}
            alt="Coll-Edge Connect Logo"
            width={173}
            className="self-start"
          />
          {/* <span className="hidden lg:block">
            India&apos;s fastest bridge between Colleges & Brands. Sponsorships,
            activations and engagement simplified
          </span> */}
          <div className="hidden gap-4 lg:flex">
            <Link
              href={"https://www.linkedin.com/in/rohit-kumar6200/"}
              target="_blank"
              className="rounded-full bg-[#F3F4F6] p-2.5 transition-all hover:opacity-75 active:opacity-50"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href={"https://github.com/rohititgithub"}
              target="_blank"
              className="rounded-full bg-[#F3F4F6] p-2.5 transition-all hover:opacity-75 active:opacity-50"
            >
              <Github size={20} />
            </Link>
            <Link
              href={"https://www.instagram.com/rohitc0des/"}
              target="_blank"
              className="rounded-full bg-[#F3F4F6] p-2.5 transition-all hover:opacity-75 active:opacity-50"
            >
              <Instagram size={20} />
            </Link>
          </div>
        </div>

        {/* Quick navigation links */}
        <div className="flex w-75 flex-col gap-2 lg:gap-4">
          <span className="text-black">Quick Links</span>
          <button
            type="button"
            onClick={() => goTo("home")}
            className="cursor-pointer self-start underline decoration-transparent underline-offset-2 transition-all hover:decoration-[#4A5565] active:text-[#155DFC] active:decoration-[#155DFC]"
          >
            <span>Home</span>
          </button>
          <button
            type="button"
            onClick={() => goTo("home")}
            className="cursor-pointer self-start underline decoration-transparent underline-offset-2 transition-all hover:decoration-[#4A5565] active:text-[#155DFC] active:decoration-[#155DFC]"
          >
            <span>Our Work</span>
          </button>
          <Link
            href="/about-us"
            className="cursor-pointer self-start underline decoration-transparent underline-offset-2 transition-all hover:decoration-[#4A5565] active:text-[#155DFC] active:decoration-[#155DFC]"
          >
            About Us
          </Link>

          <button
            type="button"
            onClick={() => goTo("home")}
            className="cursor-pointer self-start underline decoration-transparent underline-offset-2 transition-all hover:decoration-[#4A5565] active:text-[#155DFC] active:decoration-[#155DFC]"
          >
            <span>Contact Us</span>
          </button>
        </div>

        {/* Contact information */}
        <div className="flex w-75 flex-col gap-3 lg:ml-auto lg:gap-6">
          <span className="text-black">Contact</span>

          <div className="flex gap-2">
            <Mail size={24} className="min-w-6 text-[#155DFC]" />
            <Link href={"mailto:info@colledgeconnect.in"}>
              <span>rohitkumarsahu6200@gmail.com</span>
            </Link>
          </div>
          <div className="flex gap-2">
            <Phone size={24} className="min-w-6 text-[#155DFC]" />
            <div className="flex gap-2">
              <Link href={"tel:+91-7042336388"}>
                <span>+91 6200196712</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright notice */}
      <span className="self-center text-xs lg:text-base">
        © 2025 COLLEGE CONNECT. All rights reserved.
      </span>
    </footer>
  );
}
