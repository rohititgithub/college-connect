"use client";

import INGLUGlobalLogo from "@/assets/Coll-Edge_Connect_Logo.svg";
import GoogleGLogo from "@/assets/Google_G_logo.svg";
import { AlertTriangle, Eye, EyeClosed, CircleCheck } from "lucide-react";
import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { login } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { validateLoginForm } from "@/lib/validation";
import { toast } from "@/components/Toast";

type FormErrors = {
  email?: string;
  password?: string;
};

export default function Login({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const redirect = use(searchParams).redirect;

  const router = useRouter();
  const { refreshUser } = useAuth();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  }

  async function handleSubmit() {
    const result = validateLoginForm(formData);
    if (!result.isValid) {
      setErrors({
        email: result.errors.email,
        password: result.errors.password,
      });
      return;
    }
    try {
      const res = await login(formData);
      console.log("LOGIN RESPONSE:", res);

      if (res?.error?.toLowerCase().includes("user")) {
        router.replace("/signup");
        return;
      }

      if (res?.error) {
        toast(
          <span className="flex items-center gap-2">
            <AlertTriangle size={18} />
            Invalid Credentials
          </span>,
          "error",
          2000,
        );
        return;
      }

      toast(
        <span className="flex items-center gap-2">
          <CircleCheck size={18} />
          Successfully Login
        </span>,
        "success",
        2000,
      );
      await refreshUser();
      if (redirect) {
        router.replace(redirect);
      } else {
        router.replace("/");
      }
    } catch (err) {
      console.error(err);
    }
  }

  function handleGoogleLogin() {
    const params = new URLSearchParams({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI!,
      response_type: "code",
      scope: "openid email profile",
      access_type: "offline",
      prompt: "consent",
    });

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
  }

  return (
    <div className="relative mx-4 mt-4 mb-6 flex w-auto max-w-md flex-col items-center gap-6 rounded-3xl border border-black/25 bg-[#F4F7FE] p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] sm:mx-auto sm:max-w-lg lg:max-w-6xl lg:flex-row lg:gap-6 lg:p-16">
      <Image
        src={INGLUGlobalLogo}
        alt="INGLU Global Logo"
        className="hidden max-w-1/2 flex-1 lg:block"
      />

      <div className="flex w-full flex-1 flex-col items-center gap-4">
        <div className="mb-4 flex flex-col items-center text-center">
          <span className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
            Welcome Back !
          </span>
          <span className="text-xs font-light sm:text-sm">
            Please enter your details
          </span>
        </div>

        <label className="flex w-full max-w-md flex-col gap-1">
          <span className="ml-4 text-[15px] font-medium">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`w-full rounded-xl border bg-white px-5 py-3 text-[15px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] outline-none ${
              errors.email ? "border-red-500" : "border-[#6B99FF]"
            }`}
          />
          {errors.email && (
            <span className="ml-4 text-xs text-red-500">{errors.email}</span>
          )}
        </label>

        <div className="flex w-full max-w-md flex-col gap-1">
          <span className="ml-4 text-[15px] font-medium">Password</span>

          <div
            className={`flex w-full items-center gap-4 overflow-hidden rounded-xl border bg-white pr-5 shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] ${
              errors.password ? "border-red-500" : "border-[#6B99FF]"
            }`}
          >
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full py-3 pl-5 text-[15px] outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="cursor-pointer hover:opacity-75 active:opacity-50"
            >
              {showPassword ? <Eye size={22} /> : <EyeClosed size={22} />}
            </button>
          </div>
          {errors.password && (
            <span className="ml-4 text-xs text-red-600">{errors.password}</span>
          )}

          <Link
            href="/forgot-password"
            className="ml-auto p-2 text-xs font-medium text-[#0425F9] hover:opacity-75 active:opacity-50"
          >
            Forgot Password?
          </Link>

          <button
            type="button"
            onClick={handleSubmit}
            className="cursor-pointer rounded-xl bg-linear-to-r from-[#155DFC] to-[#5087FF] px-4 py-2.5 text-base text-white shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] active:translate-y-0.5 active:shadow-none sm:text-lg lg:text-xl"
          >
            Log In
          </button>
        </div>

        <span className="text-sm text-[#676767]">Or</span>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex w-full max-w-md cursor-pointer items-center justify-center gap-4 rounded-xl border border-[#6B99FF] bg-white px-5 py-3 shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] active:translate-y-0.5 active:shadow-none"
        >
          <Image src={GoogleGLogo} alt="Google Logo" className="size-6" />
          <span>Sign in with Google</span>
        </button>

        <div className="flex gap-2 text-sm">
          <span className="font-light">Don&apos;t have an account?</span>
          <Link
            href="/signup"
            className="font-medium text-[#1A6BF7] hover:opacity-75 active:opacity-50"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
