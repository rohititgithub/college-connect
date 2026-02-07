import React from "react";
import { Ticket, Briefcase, Brain } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import bgImage from "@/assets/bg.jpg";

const CTASection = () => {
  return (
    <div className="font-pjs relative flex min-h-screen w-full items-center justify-center overflow-hidden p-6 text-white">
      <Image src={bgImage} alt="Contact background" fill />

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
        <div className="group relative mb-10 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#ff1b6b] from-10% via-[#3007d6] via-40% to-[#1ca6eb] to-100% px-6 py-2 text-sm font-semibold text-white transition-all">
          <span
            aria-hidden
            className="absolute inset-0 -z-10 translate-y-1 rounded-full bg-linear-to-r from-[#ff1b6b] from-10% via-[#3007d6] via-40% to-[#1ca6eb] to-100% opacity-70 blur-lg transition-all group-hover:opacity-90 group-hover:blur-xl"
          />

          <span className="absolute inset-0 rounded-full ring-1 ring-white/20" />

          <span className="rounded bg-white/20 p-0.5">🎟️</span>

          <span>Free PRO access for first 1,000 members worth ₹199</span>
        </div>

        <h1 className="mb-6 text-4xl font-black lg:text-7xl">
          NOT EVERYONE <br />
          GETS THE FRONT ROW.
        </h1>

        <p className="mb-12 max-w-md text-lg leading-relaxed font-medium text-gray-400 md:text-xl">
          You just unlocked early access to events, brands, workshops & paid
          opportunities.
        </p>

        <Link
          href="restricted-front-row/form"
          className="group relative w-full max-w-sm rounded-xl bg-linear-to-r from-[#1ca6eb] from-0% via-[#3007d6] via-40% to-[#ff1b6b] to-100% py-4 text-xl font-bold tracking-wider text-white uppercase transition-all hover:scale-[1.02] active:scale-[1]"
        >
          <span
            aria-hidden
            className="absolute inset-0 -z-10 translate-y-2 rounded-xl bg-linear-to-r from-[#1ca6eb] from-0% via-[#3007d6] via-40% to-[#ff1b6b] to-100% opacity-70 blur-xl transition-all group-hover:opacity-90 group-hover:blur-2xl"
          />

          <span className="absolute inset-0 rounded-xl ring-1 ring-white/20 group-hover:ring-white/30" />

          <span className="relative z-10">Unlock My Access</span>
        </Link>

        <div className="mt-16 grid w-full grid-cols-1 gap-8 border-t border-white/10 pt-12 md:grid-cols-3">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <Ticket className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold">Events</span>
            </div>
            <p className="text-xs tracking-widest text-gray-500 uppercase">
              Free & discounted access
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 md:border-x md:border-white/10 md:px-4">
            <div className="flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-gray-300" />
              <span className="text-lg font-bold">Brands</span>
            </div>
            <p className="text-xs tracking-widest text-gray-500 uppercase">
              Paid opportunities
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-purple-400" />
              <span className="text-lg font-bold">Workshops</span>
            </div>
            <p className="text-xs tracking-widest text-gray-500 uppercase">
              Certified experiences
            </p>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-2 text-xs font-medium tracking-widest text-gray-500 uppercase">
          Powered by{" "}
          <span className="font-bold text-white">COLL-EDGE CONNECT</span>
          <span className="h-3 w-px bg-gray-700" />
          50+ colleges activated
        </div>
      </div>
    </div>
  );
};

export default CTASection;
