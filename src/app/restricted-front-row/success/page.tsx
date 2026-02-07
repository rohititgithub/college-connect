"use client";

import { useEffect, useState } from "react";
import { Copy, CheckCircle2 } from "lucide-react";
import { getSignupFromCookie } from "@/lib/signupCookie";
import Link from "next/link";
import Image from "next/image";
import bgImage from "@/assets/bg.jpg";

export default function SuccessPage() {
  const [memberId, setMemberId] = useState<string | null>(null);
  const [hasHydrated, setHasHydrated] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      setHasHydrated(true);
    });
  }, []);

  if (!hasHydrated) return null;

  if (memberId === null) {
    const existing = getSignupFromCookie();
    if (existing?.memberId) {
      setMemberId(existing.memberId);
    }
  }

  const handleCopy = () => {
    if (memberId) {
      navigator.clipboard.writeText(memberId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!memberId) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050505] text-white">
        <p className="font-pjs text-lg">No active membership found.</p>
      </div>
    );
  }

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#050505] px-6 py-12 text-center text-white">
      <Image src={bgImage} alt="Background" fill priority />

      <div className="relative flex w-full max-w-xl flex-col items-center">
        <h2 className="mb-4 text-5xl font-black text-white md:text-6xl">
          🎉 YOU&apos;RE IN.
        </h2>

        <p className="mb-8 text-lg text-gray-400">
          Voila! Here is your Membership ID:
        </p>

        <div className="relative mb-12 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 backdrop-blur-md transition-all hover:border-white/20">
          <span className="text-3xl font-bold text-white">{memberId}</span>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center justify-center rounded-lg bg-white/10 p-2 text-blue-400 transition-colors hover:bg-white/20 active:scale-90"
          >
            {copied ? (
              <CheckCircle2 size={22} className="text-green-400" />
            ) : (
              <Copy size={22} className="cursor-pointer" />
            )}
          </button>
        </div>

        <div className="mb-10 w-full rounded-2xl border border-white/5 bg-black/40 p-8 text-left">
          <p className="mb-4 text-xl font-bold text-white uppercase">
            You’ve unlocked:
          </p>
          <ul className="space-y-3">
            {[
              "Early access to events",
              "Brand & earning opportunities",
              "Workshops & experiences",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="mb-8 text-gray-400">
          Next step drops inside the{" "}
          <strong className="font-bold text-white">FRONT ROW</strong> community.
        </p>

        <Link
          href="https://discord.gg/KPEjTbF4VA"
          className="group font-pjs relative isolate flex w-full items-center justify-center rounded-xl bg-linear-to-r from-[#1ca6eb] from-0% via-[#3007d6] via-40% to-[#ff1b6b] to-100% px-8 py-4 text-lg font-bold tracking-widest text-white uppercase transition-all active:scale-[1]"
        >
          <span
            aria-hidden
            className="absolute inset-0 -z-10 translate-y-2 rounded-xl bg-linear-to-r from-[#1ca6eb] from-0% via-[#3007d6] via-40% to-[#ff1b6b] to-100% opacity-60 blur-xl transition-all group-hover:opacity-85 group-hover:blur-2xl"
          />

          <span className="absolute inset-0 rounded-xl ring-1 ring-white/25" />

          <span className="absolute inset-0 rounded-xl bg-white/10" />

          <span className="relative z-10">JOIN THE FRONT ROW COMMUNITY</span>
        </Link>
      </div>
    </section>
  );
}
