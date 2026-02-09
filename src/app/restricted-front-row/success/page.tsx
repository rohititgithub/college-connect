"use client";

import { useEffect, useState } from "react";
import { Copy, CheckCircle2 } from "lucide-react";
import { getSignupFromCookie, saveSignupToCookie } from "@/lib/signupCookie";
import Link from "next/link";
import Image from "next/image";
import bgImage from "@/assets/bg.jpg";

export default function SuccessPage() {
  const [memberId, setMemberId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      await Promise.resolve();

      const cookie = getSignupFromCookie();
      if (!cookie || cancelled) {
        setReady(true);
        return;
      }

      setMemberId(cookie.memberId);
      setReady(true);

      try {
        const res = await fetch("/api/auth/sync", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cookie),
        });

        const data = await res.json();

        if (
          !cancelled &&
          data?.memberId &&
          data.memberId !== cookie.memberId
        ) {
          saveSignupToCookie({
            ...cookie,
            memberId: data.memberId,
          });
          setMemberId(data.memberId);
        }
      } catch {
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleCopy = () => {
    if (!memberId) return;
    navigator.clipboard.writeText(memberId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050505] text-white">
        <p className="text-gray-400">Loading your membership…</p>
      </div>
    );
  }

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#050505] px-6 py-12 text-center text-white">
      <Image src={bgImage} alt="Background" fill priority />

      <div className="relative flex w-full max-w-xl flex-col items-center">
        {!memberId ? (
          <p className="text-lg text-gray-400">
            No active membership found.
          </p>
        ) : (
          <>
            <h2 className="mb-4 text-5xl font-black md:text-6xl">
              🎉 YOU&apos;RE IN.
            </h2>

            <p className="mb-8 text-lg text-gray-400">
              Voila! Here is your Membership ID:
            </p>

            <div className="mb-12 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 backdrop-blur-md">
              <span className="text-3xl font-bold">{memberId}</span>

              <button
                type="button"
                onClick={handleCopy}
                className="rounded-lg bg-white/10 p-2 text-blue-400 transition hover:bg-white/20"
              >
                {copied ? (
                  <CheckCircle2 size={22} className="text-green-400" />
                ) : (
                  <Copy size={22} />
                )}
              </button>
            </div>

            <div className="mb-10 w-full rounded-2xl border border-white/5 bg-black/40 p-8 text-left">
              <p className="mb-4 text-xl font-bold uppercase">
                You&apos;ve unlocked:
              </p>
              <ul className="space-y-3">
                {[
                  "Early access to events",
                  "Brand & earning opportunities",
                  "Workshops & experiences",
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mb-8 text-gray-400">
              Next step drops inside the{" "}
              <strong className="text-white">FRONT ROW</strong> community.
            </p>

            <Link
              href="https://discord.gg/KPEjTbF4VA"
              className="w-full rounded-xl bg-linear-to-r from-[#1ca6eb] via-[#3007d6] to-[#ff1b6b] px-8 py-4 text-lg font-bold uppercase tracking-widest transition hover:scale-[1.02]"
            >
              JOIN THE FRONT ROW COMMUNITY
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
