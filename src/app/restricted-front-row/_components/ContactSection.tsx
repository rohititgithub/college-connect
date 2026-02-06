"use client";
import { useState } from "react";
import { Copy, Send } from "lucide-react";
import Dots from "@/assets/Dots.png";
import { validateSignupForm } from "@/lib/signupForm.Validation";
import { saveSignupToCookie, getSignupFromCookie } from "@/lib/signupCookie";
import Image from "next/image";
import Link from "next/link";

export default function ContactSection() {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    college: "",
    city: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [memberId, setMemberId] = useState<string | null>(() => {
    const existing = getSignupFromCookie();
    return existing?.memberId ?? null;
  });

  const isFormFilled = Object.values(formData).every(
    (value) => value.trim() !== "",
  );

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedFormData);

    if (touched[name]) {
      const validationErrors = validateSignupForm(updatedFormData);
      setErrors(validationErrors);
    }
  }

  function handleBlur(
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
      | React.FocusEvent<HTMLSelectElement>,
  ) {
    const { name } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    setErrors(validateSignupForm(formData));
  }

  async function handleSubmit() {
    const validationErrors = validateSignupForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTouched({
        name: true,
        contact: true,
        email: true,
        college: true,
        city: true,
      });
      return;
    }

    try {
      const savedSignup = saveSignupToCookie(formData);
      setMemberId(savedSignup.memberId);
      await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(savedSignup),
      });

      setFormData({
        name: "",
        contact: "",
        email: "",
        college: "",
        city: "",
      });

      setTouched({});
      setErrors({});
    } catch (error) {
      console.error("Signup failed:", error);
    }
  }

  return (
    // Contact / lead capture section
    <section
      id="contact"
      className="relative mx-auto mt-12 mb-8 flex w-[calc(100%-4rem)] max-w-7xl flex-col items-center justify-center gap-8 bg-white p-8 lg:mt-0 lg:flex-row lg:p-16"
    >
      {/* Backgroud gradient and Dots Graphics*/}
      <div className="absolute -top-45 -left-45 -z-10 size-100 rounded-full bg-[#144CEA]/25 blur-3xl" />
      <Image
        src={Dots}
        alt="Dots Graphics"
        className="absolute -top-15 -left-10 w-32 lg:w-42.25"
      />

      {/* Contact form */}
      <div
        className="flex w-full flex-1 flex-col items-center justify-center gap-6 text-center"
        suppressHydrationWarning
      >
        {!memberId ? (
          <div className="flex w-full flex-1 flex-col gap-8">
            <div className="flex w-full flex-col gap-8 lg:grid lg:grid-cols-2">
              {/* Name field */}
              <label
                className={`${touched.name && errors.name && "border-red-500"} relative cursor-text border bg-white px-6 py-4`}
              >
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={formData.name}
                  required
                  className="peer w-full outline-none"
                />
                <span
                  className={`${formData.name ? "-top-2.25 left-3 text-xs" : "top-4 left-3 text-base peer-focus:-top-2.25 peer-focus:left-3 peer-focus:text-xs"} absolute bg-linear-to-b from-transparent to-white to-50% px-2 transition-all`}
                >
                  Full Name
                </span>
                {touched.name && errors.name && (
                  <span className="absolute -top-2.25 right-3 bg-linear-to-b from-transparent to-white to-50% px-2 text-xs text-red-500 transition-all">
                    {errors.name}
                  </span>
                )}
              </label>

              {/* Email field */}
              <label
                className={`${touched.email && errors.email && "border-red-500"} relative cursor-text border bg-white px-6 py-4`}
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={formData.email}
                  required
                  className="peer w-full outline-none"
                />
                <span
                  className={`${formData.email ? "-top-2.25 left-3 text-xs" : "top-4 left-3 text-base peer-focus:-top-2.25 peer-focus:left-3 peer-focus:text-xs"} absolute bg-linear-to-b from-transparent to-white to-50% px-2 transition-all`}
                >
                  Email
                </span>
                {touched.email && errors.email && (
                  <span className="absolute -top-2.25 right-3 bg-linear-to-b from-transparent to-white to-50% px-2 text-xs text-red-500 transition-all">
                    {errors.email}
                  </span>
                )}
              </label>

              {/* Contact number field */}
              <label
                className={`${touched.contact && errors.contact && "border-red-500"} relative cursor-text border bg-white px-6 py-4`}
              >
                <input
                  type="tel"
                  name="contact"
                  id="contact"
                  autoComplete="tel"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={formData.contact}
                  required
                  className="peer w-full outline-none"
                />
                <span
                  className={`${formData.contact ? "-top-2.25 left-3 text-xs" : "top-4 left-3 text-base peer-focus:-top-2.25 peer-focus:left-3 peer-focus:text-xs"} absolute bg-linear-to-b from-transparent to-white to-50% px-2 transition-all`}
                >
                  Contact
                </span>
                {touched.contact && errors.contact && (
                  <span className="absolute -top-2.25 right-3 bg-linear-to-b from-transparent to-white to-50% px-2 text-xs text-red-500 transition-all">
                    {errors.contact}
                  </span>
                )}
              </label>

              {/* College Field */}
              <label
                className={`${touched.college && errors.college && "border-red-500"} relative cursor-text border bg-white px-6 py-4`}
              >
                <input
                  type="text"
                  name="college"
                  id="college"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={formData.college}
                  required
                  className="peer w-full outline-none"
                />
                <span
                  className={`${formData.college ? "-top-2.25 left-3 text-xs" : "top-4 left-3 text-base peer-focus:-top-2.25 peer-focus:left-3 peer-focus:text-xs"} absolute bg-linear-to-b from-transparent to-white to-50% px-2 transition-all`}
                >
                  College
                </span>
                {touched.college && errors.college && (
                  <span className="absolute -top-2.25 right-3 bg-linear-to-b from-transparent to-white to-50% px-2 text-xs text-red-500 transition-all">
                    {errors.college}
                  </span>
                )}
              </label>

              {/* Message field */}
              <label
                className={`${touched.city && errors.city && "border-red-500"} relative cursor-text border bg-white px-6 py-4`}
              >
                <input
                  type="city"
                  name="city"
                  id="city"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={formData.city}
                  required
                  className="peer w-full outline-none"
                />
                <span
                  className={`${formData.city ? "-top-2.25 left-3 text-xs" : "top-4 left-3 text-base peer-focus:-top-2.25 peer-focus:left-3 peer-focus:text-xs"} absolute bg-linear-to-b from-transparent to-white to-50% px-2 transition-all`}
                >
                  City
                </span>
                {touched.city && errors.city && (
                  <span className="absolute -top-2.25 right-3 bg-linear-to-b from-transparent to-white to-50% px-2 text-xs text-red-500 transition-all">
                    {errors.city}
                  </span>
                )}
              </label>
            </div>

            {/* Submit CTA */}
            <button
              type="button"
              disabled={!isFormFilled}
              onClick={handleSubmit}
              className="flex w-fit cursor-pointer items-center gap-2 rounded-[3px] bg-[#144BE9] px-6 py-2 text-white transition-all hover:-translate-y-0.5 hover:shadow-[0px_2px_0px_0px_rgba(0,0,0,0.25)] active:translate-0 active:shadow-none disabled:translate-0 disabled:cursor-not-allowed disabled:opacity-75 disabled:shadow-none"
            >
              <span className="text-[22px]">Quick Sign Up</span>
              <Send size={20} />
            </button>
          </div>
        ) : (
          <div className="flex max-w-xl flex-col items-center gap-6">
            <h2 className="text-3xl font-bold text-[#144BE9]">
              🎉 YOU&apos;RE IN.
            </h2>

            <p className="text-lg">Voila here is your Membership ID:</p>

            <div className="flex items-center gap-3 rounded bg-gray-100 px-6 py-3 font-mono text-xl tracking-wider">
              <span>{memberId}</span>

              <button
                type="button"
                onClick={() => {
                  if (memberId) {
                    navigator.clipboard.writeText(memberId);
                  }
                }}
                className="rounded bg-white px-3 py-1 font-sans text-sm text-[#144BE9] transition hover:bg-gray-200"
              >
                <Copy size={18} />
              </button>
            </div>

            <div className="text-left text-base">
              <p className="font-semibold">You’ve unlocked:</p>
              <ul className="mt-2 list-disc pl-5">
                <li>Early access to events</li>
                <li>Brand & earning opportunities</li>
                <li>Workshops & experiences</li>
              </ul>
            </div>

            <Link
              href={"https://discord.gg/KPEjTbF4VA"}
              className="flex w-fit cursor-pointer items-center gap-2 rounded-[3px] bg-[#144BE9] p-3 text-white transition-all hover:-translate-y-0.5 hover:shadow-[0px_2px_0px_0px_rgba(0,0,0,0.25)] active:translate-0 active:shadow-none disabled:translate-0 disabled:cursor-not-allowed disabled:opacity-75 disabled:shadow-none"
              type="button"
            >
              Discord Link
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
