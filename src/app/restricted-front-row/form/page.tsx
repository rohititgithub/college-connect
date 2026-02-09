"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { validateSignupForm } from "@/lib/signupForm.Validation";
import { saveSignupToCookie } from "@/lib/signupCookie";
import { useRouter } from "next/navigation";
import Image from "next/image";
import bgImage from "@/assets/bg.jpg";

interface FormData {
  name: string;
  contact: string;
  email: string;
  college: string;
  city: string;
}

type FormKeys = keyof FormData;

export default function ContactSection() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    contact: "",
    college: "",
    city: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isFormFilled = Object.values(formData).every(
    (value) => value.trim() !== "",
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    if (touched[name]) {
      setErrors(validateSignupForm(updated));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validateSignupForm(formData));
  }

  async function handleSubmit() {
  const validationErrors = validateSignupForm(formData);

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    setTouched({
      name: true,
      email: true,
      contact: true,
      college: true,
      city: true,
    });
    return;
  }

  try {
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    saveSignupToCookie({
      ...formData,
      memberId: data.memberId,
    });

    router.push("/restricted-front-row/success");
  } catch (error) {
    console.error("Signup failed:", error);
  }
}


  return (
    <section
      id="contact"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#050505] px-6 py-12"
    >
      <Image src={bgImage} alt="Contact background" fill />

      <div className="absolute top-10 left-10 z-0 size-80 rounded-full bg-red-600/10 blur-[100px]" />
      <div className="absolute top-40 right-10 z-0 size-80 rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="relative z-10 flex w-full max-w-lg flex-col items-center">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl leading-tight font-black text-white md:text-5xl">
            YOU&apos;RE ONE <br /> STEP AWAY.
          </h1>
          <p className="text-lg text-gray-400">
            Join FRONT ROW to unlock <br /> access & opportunities.
          </p>
        </div>

        <div className="mb-8 flex w-full flex-col gap-5">
          {(
            [
              { name: "name", label: "Full Name", type: "text" },
              { name: "contact", label: "Phone Number", type: "tel" },
              { name: "email", label: "Email", type: "email" },
              { name: "college", label: "College Name", type: "text" },
              { name: "city", label: "City", type: "text" },
            ] as const
          ).map(({ name, label, type }) => (
            <div key={name} className="relative w-full">
              <input
                type={type}
                name={name}
                placeholder={label}
                value={formData[name as FormKeys]}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full rounded-xl border bg-white/5 px-6 py-4 text-white transition-all outline-none placeholder:text-gray-500 focus:bg-white/10 ${
                  touched[name] && errors[name]
                    ? "border-red-500/50"
                    : "border-white/10 focus:border-white/30"
                }`}
              />
              {touched[name] && errors[name] && (
                <span className="absolute -bottom-5 left-2 text-[10px] font-bold text-red-500 uppercase">
                  {errors[name]}
                </span>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          disabled={!isFormFilled}
          onClick={handleSubmit}
          className="group relative isolate flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-[#1ca6eb] from-0% via-[#3007d6] via-40% to-[#ff1b6b] to-100% px-6 py-4 text-white transition-all hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[1] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 translate-y-2 rounded-lg bg-linear-to-r from-[#1ca6eb] from-0% via-[#3007d6] via-40% to-[#ff1b6b] to-100% opacity-65 blur-xl transition-all group-hover:opacity-90 group-hover:blur-2xl group-disabled:opacity-0"
          />

          <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-white/20 group-hover:ring-white/30" />

          <span className="relative z-10 text-[22px] font-bold uppercase">
            Join Front Row
          </span>
          <Send size={20} className="relative z-10" />
        </button>

        <p className="mt-8 text-sm font-medium text-gray-500">
          No spam. No random calls. Access only
        </p>
      </div>
    </section>
  );
}
