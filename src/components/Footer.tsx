import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import Logo from "../assets/Coll-Edge_Connect_Logo.png";
import { Link } from "react-router";

export default function Footer() {
  function goTo(id: string) {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }

  return (
    <footer className="flex flex-col items-center gap-10 bg-[#DDE7FF] pt-16 text-[#4A5565]">
      {/* Footer main content grid */}
      <div className="flex w-full max-w-7xl gap-8">
        {/* Brand summary & social links */}
        <div className="flex w-75 flex-col gap-4">
          <img
            src={Logo}
            alt="Coll-Edge Connect Logo"
            width={173}
            className="self-start"
          />
          <span>
            Coll-Edge Connect Is One Of The Fastest Growing Global Youth
            Community
          </span>
          <div className="flex gap-4">
            <Link
              to={""}
              target="_blank"
              className="rounded-full bg-[#F3F4F6] p-2.5 transition-all hover:opacity-75 active:opacity-50"
            >
              <Facebook size={20} />
            </Link>
            <Link
              to={"https://www.linkedin.com/company/coll-edge-connect/"}
              target="_blank"
              className="rounded-full bg-[#F3F4F6] p-2.5 transition-all hover:opacity-75 active:opacity-50"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              to={""}
              target="_blank"
              className="rounded-full bg-[#F3F4F6] p-2.5 transition-all hover:opacity-75 active:opacity-50"
            >
              <Youtube size={20} />
            </Link>
            <Link
              to={"https://www.instagram.com/colledge_connect/"}
              target="_blank"
              className="rounded-full bg-[#F3F4F6] p-2.5 transition-all hover:opacity-75 active:opacity-50"
            >
              <Instagram size={20} />
            </Link>
          </div>
        </div>

        {/* Quick navigation links */}
        <div className="flex w-75 flex-col gap-4">
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
          <button
            type="button"
            onClick={() => goTo("home")}
            className="cursor-pointer self-start underline decoration-transparent underline-offset-2 transition-all hover:decoration-[#4A5565] active:text-[#155DFC] active:decoration-[#155DFC]"
          >
            <span>About Us</span>
          </button>
          <button
            type="button"
            onClick={() => goTo("home")}
            className="cursor-pointer self-start underline decoration-transparent underline-offset-2 transition-all hover:decoration-[#4A5565] active:text-[#155DFC] active:decoration-[#155DFC]"
          >
            <span>Contact Us</span>
          </button>
        </div>

        {/* Contact information */}
        <div className="ml-auto flex w-75 flex-col gap-6">
          <span className="text-black">Contact</span>
          <div className="flex gap-2">
            <MapPin size={24} className="min-w-6 text-[#155DFC]" />
            <span>198, SatyaNiketan, 3rd Floor, New Delhi - 110021</span>
          </div>
          <div className="flex gap-2">
            <Mail size={24} className="min-w-6 text-[#155DFC]" />
            <Link to={"mailto:info@colledgeconnect.in"}>
              <span>info@colledgeconnect.in</span>
            </Link>
          </div>
          <div className="flex gap-2">
            <Phone size={24} className="min-w-6 text-[#155DFC]" />
            <div className="flex gap-2">
              <Link to={"tel:+91-7042336388"}>
                <span>+91 7042336388,</span>
              </Link>
              <Link to={"tel:+91-9711692922"}>
                <span>+91 9711692922</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright notice */}
      <span className="self-center py-8">
        © 2025 COLL-EDGE CONNECT. All rights reserved.
      </span>
    </footer>
  );
}
