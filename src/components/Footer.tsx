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

export default function Footer() {
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
            <button
              type="button"
              className="cursor-pointer rounded-full bg-[#F3F4F6] p-2.5 transition-all hover:opacity-75 active:opacity-50"
            >
              <Facebook size={20} />
            </button>
            <button
              type="button"
              className="cursor-pointer rounded-full bg-[#F3F4F6] p-2.5 transition-all hover:opacity-75 active:opacity-50"
            >
              <Linkedin size={20} />
            </button>
            <button
              type="button"
              className="cursor-pointer rounded-full bg-[#F3F4F6] p-2.5 transition-all hover:opacity-75 active:opacity-50"
            >
              <Youtube size={20} />
            </button>
            <button
              type="button"
              className="cursor-pointer rounded-full bg-[#F3F4F6] p-2.5 transition-all hover:opacity-75 active:opacity-50"
            >
              <Instagram size={20} />
            </button>
          </div>
        </div>

        {/* Quick navigation links */}
        <div className="flex w-75 flex-col gap-4">
          <span className="text-black">Quick Links</span>
          <span>Home</span>
          <span>Our Work</span>
          <span>About Us</span>
          <span>Contact Us</span>
        </div>

        {/* Contact information */}
        <div className="ml-auto flex w-75 flex-col gap-6">
          <span className="text-black">Contact</span>
          <div className="flex gap-2">
            <MapPin size={24} className="min-w-6 text-[#155DFC]" />
            <span>82, SatyaNiketan, First Floor, New Delhi - 110021</span>
          </div>
          <div className="flex gap-2">
            <Mail size={24} className="min-w-6 text-[#155DFC]" />
            <span>info@ingluglobal.in</span>
          </div>
          <div className="flex gap-2">
            <Phone size={24} className="min-w-6 text-[#155DFC]" />
            <span>+91 7827808413</span>
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
