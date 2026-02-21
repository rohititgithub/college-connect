"use client";

import Link from "next/link";
import INGLUGlobalLogo from "@/assets/Coll-Edge_Connect_Logo.svg";
import GoogleGLogo from "@/assets/Google_G_logo.svg";
import Image from "next/image";
import { useState } from "react";
import { validateSignupForm } from "@/lib/validation";
import { toast } from "@/components/toast";
import { AlertTriangle, CircleCheck } from "lucide-react";

type FormErrors = {
  name?: string;
  email?: string;
  password?: string;
  confirm?: string;
};

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  // const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async () => {
    const { isValid, errors: zodErrors } = validateSignupForm(form);

    if (!isValid) {
      setErrors(zodErrors);
      return;
    }

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      if (!res.ok) {
        toast(
          <span className="flex items-center gap-2">
            <AlertTriangle size={18} />
            Signup Failed
          </span>,
          "error",
          2000,
        );
      } else {
        toast(
          <span className="flex items-center gap-2">
            <CircleCheck size={18} />
            SignUp Successfully!
          </span>,
          "success",
          2000,
        );
        window.location.href = "/login";
      }
    } catch (err) {
      console.error(err);
    }
  };

  function handleGoogleSignup() {
    const params = new URLSearchParams({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI!,
      response_type: "code",
      scope: "openid email profile",
      access_type: "offline",
      prompt: "consent",
    });
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  }

  return (
    <div className="relative mx-4 mt-4 mb-6 flex w-auto max-w-md flex-col items-center gap-6 rounded-3xl border border-black/25 bg-[#F4F7FE] p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] sm:mx-auto sm:max-w-lg lg:max-w-6xl lg:flex-row lg:gap-6 lg:p-16">
      <Image
        src={INGLUGlobalLogo}
        alt="Logo"
        className="hidden max-w-1/2 flex-1 lg:block"
      />

      <div className="flex flex-1 flex-col items-center gap-4">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-semibold">Create an account</span>
          <span className="text-sm font-light">Please enter your details</span>
        </div>

        {/* Name Input */}
        <div className="flex w-full flex-col gap-1">
          <span className="ml-4 text-[15px] font-medium">Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className={`w-full rounded-xl border bg-white px-5 py-3 text-[15px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] transition-colors outline-none ${
              errors.name
                ? "border-red-500 ring-1 ring-red-500"
                : "border-[#6B99FF]"
            }`}
          />
          {errors.name && (
            <span className="ml-4 text-xs font-medium text-red-500">
              {errors.name}
            </span>
          )}
        </div>

        {/* Email Input */}
        <div className="flex w-full flex-col gap-1">
          <span className="ml-4 text-[15px] font-medium">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`w-full rounded-xl border bg-white px-5 py-3 text-[15px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] transition-colors outline-none ${
              errors.email
                ? "border-red-500 ring-1 ring-red-500"
                : "border-[#6B99FF]"
            }`}
          />
          {errors.email && (
            <span className="ml-4 text-xs font-medium text-red-500">
              {errors.email}
            </span>
          )}
        </div>

        {/* Password Input */}
        <div className="flex w-full flex-col gap-1">
          <span className="ml-4 text-[15px] font-medium">Password</span>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className={`w-full rounded-xl border bg-white px-5 py-3 text-[15px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] transition-colors outline-none ${
              errors.password
                ? "border-red-500 ring-1 ring-red-500"
                : "border-[#6B99FF]"
            }`}
          />
          {errors.password && (
            <span className="ml-4 text-xs font-medium text-red-500">
              {errors.password}
            </span>
          )}
        </div>

        {/* Confirm Password Input */}
        <div className="flex w-full flex-col gap-1">
          <span className="ml-4 text-[15px] font-medium">Confirm Password</span>
          <input
            type="password"
            name="confirm"
            value={form.confirm}
            onChange={handleChange}
            placeholder="Re-enter password"
            className={`w-full rounded-xl border bg-white px-5 py-3 text-[15px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] transition-colors outline-none ${
              errors.confirm
                ? "border-red-500 ring-1 ring-red-500"
                : "border-[#6B99FF]"
            }`}
          />
          {errors.confirm && (
            <span className="ml-4 text-xs font-medium text-red-500">
              {errors.confirm}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="] mt-2 w-full cursor-pointer rounded-xl bg-linear-to-r from-[#155DFC] to-[#5087FF] px-4 py-3 text-xl text-white shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] transition active:translate-y-0.5 active:shadow-none"
        >
          Sign Up
        </button>

        <span className="text-sm text-[#676767]">Or</span>

        <button
          type="button"
          onClick={handleGoogleSignup}
          className="] flex w-full cursor-pointer justify-center gap-4 rounded-xl border border-[#6B99FF] bg-white px-5 py-3 shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] transition active:translate-y-0.5 active:shadow-none"
        >
          <Image src={GoogleGLogo} alt="Google" className="size-6" />
          <span>Sign Up with Google</span>
        </button>

        <div className="flex gap-2 text-sm">
          <span className="font-light">Already have an account?</span>
          <Link href="/login" className="font-medium text-[#1A6BF7]">
            Log In
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute -top-40 -right-20 -z-10 hidden h-96 w-40 rotate-12 rounded-[50%] bg-[#ECA1FF61] blur-[80px] xl:block" />
      <div className="pointer-events-none absolute -bottom-20 -left-32 -z-10 hidden h-96 w-40 rotate-12 rounded-[50%] bg-[#C0A1FFB0] blur-[80px] xl:block" />
    </div>
  );
}
