"use client";

import INGLUGlobalLogo from "@/assets/Coll-Edge_Connect_Logo.svg";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "@/components/toast";
import { AlertTriangle, CircleCheck } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  async function handleSubmit() {
    if (!email) {
      return;
    }
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error("Failed");
      }
      toast(
        <span className="flex items-center gap-2">
          <CircleCheck size={18} />
          If the Entered Email Exists, A reset link has been sent.
        </span>,
        "success",
        2000,
      );
    } catch (err) {
      console.error(err);
      toast(
        <span className="flex items-center gap-2">
          <AlertTriangle size={18} />
          Something Went Wrong
        </span>,
        "error",
        2000,
      );
    }
  }

  return (
    <div className="relative mx-4 mt-4 mb-6 flex w-auto max-w-md flex-col items-center gap-6 rounded-3xl border border-black/25 bg-[#F4F7FE] p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] sm:mx-auto sm:max-w-lg lg:max-w-6xl lg:flex-row lg:gap-6 lg:p-16">
      {/* Left Logo */}
      <Image
        src={INGLUGlobalLogo}
        alt="INGLU Global Logo"
        className="hidden max-w-1/2 flex-1 lg:block"
      />

      {/* Right Form */}
      <div className="flex flex-1 flex-col items-center gap-6">
        <div className="mb-4 flex flex-col items-center">
          <span className="text-4xl font-semibold">Forgot Password?</span>
          <span className="text-center text-sm font-light">
            Enter your registered email to receive reset link
          </span>
        </div>

        <label className="flex w-full flex-col lg:w-[80%]">
          <span className="ml-4 text-[15px] font-medium">Email</span>
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-[#6B99FF] bg-white px-5 py-3 text-[15px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]"
          />
        </label>

        {/* Submit */}
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full cursor-pointer rounded-xl bg-linear-to-r from-[#155DFC] to-[#5087FF] px-4.5 py-2.5 shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] transition-all active:translate-y-0.5 active:shadow-none lg:w-[80%]"
        >
          <span className="text-xl text-white">Send Reset Link</span>
        </button>

        {/* Back to login */}
        <Link
          href="/login"
          className="text-sm font-medium text-[#1A6BF7] transition-all hover:opacity-75"
        >
          Back to Login
        </Link>
      </div>

      {/* Background blobs (same as login) */}
      <div className="pointer-events-none absolute -top-256 -right-48 -z-10 hidden h-337.5 w-56 -rotate-12 rounded-[50%] bg-[#ECA1FF61] blur-[80px] lg:block" />
      <div className="pointer-events-none absolute -bottom-2/12 -left-128 -z-10 hidden h-337.5 w-56 -rotate-12 rounded-[50%] bg-[#C0A1FFB0] blur-[80px] lg:block" />
    </div>
  );
}
