"use client";
import { useState } from "react";
import ContactGraphics from "@/assets/image 80.svg";
import { Send } from "lucide-react";

import { validateContactForm } from "@/lib/contactForm.validation";
import { sendToDiscord } from "@/lib/discordWebhook";
import Image from "next/image";

export default function ContactSection() {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    organization: "",
    message: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Used to control submit button enabled state
  const isFormFilled = Object.values(formData).every(
    (value) => value.trim() !== "",
  );

  // Handle controlled input changes with live validation
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
      const validationErrors = validateContactForm(updatedFormData);
      setErrors(validationErrors);
    }
  }

  // Mark field as touched and trigger validation on blur
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

    setErrors(validateContactForm(formData));
  }

  // Final validation and API submission
  async function handleSubmit() {
    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTouched({
        name: true,
        contact: true,
        email: true,
        reason: true,
        message: true,
      });
      return;
    }

    try {
      await sendToDiscord(formData);

      // Optional: reset form
      setFormData({
        name: "",
        contact: "",
        email: "",
        organization: "",
        message: "",
      });
      setTouched({});
      setErrors({});
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="relative w-full max-w-325 px-4">
      <h2 className="relative text-[32px] leading-tight font-bold lg:text-[64px]">
        Contact{" "}
        <span className="relative inline-block">
          <span className="relative z-10">us</span>
          <span className="absolute bottom-4 left-0 -z-10 h-15.5 w-21.25 rounded-[22px] bg-[#4673EB] opacity-60" />
        </span>
      </h2>

      <section
        id="contact"
        className="relative mx-auto mt-12 mb-8 flex w-[calc(100%-4rem)] max-w-7xl flex-col items-center justify-center gap-8 bg-white p-8 lg:mt-0 lg:flex-row lg:p-16"
      >
        {/* Visual illustration & Heading*/}
        <div className="flex flex-1 flex-col items-center">
          <Image
            src={ContactGraphics}
            alt="Contact Section Graphics"
            width={400}
            className="mt-8 lg:mt-14"
          />
        </div>

        {/* Contact form */}
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

            {/* Organization Field */}
            <label
              className={`${touched.organization && errors.organization && "border-red-500"} relative cursor-text border bg-white px-6 py-4`}
            >
              <input
                type="text"
                name="organization"
                id="organization"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.organization}
                required
                className="peer w-full outline-none"
              />
              <span
                className={`${formData.organization ? "-top-2.25 left-3 text-xs" : "top-4 left-3 text-base peer-focus:-top-2.25 peer-focus:left-3 peer-focus:text-xs"} absolute bg-linear-to-b from-transparent to-white to-50% px-2 transition-all`}
              >
                Organization
              </span>
              {touched.organization && errors.organization && (
                <span className="absolute -top-2.25 right-3 bg-linear-to-b from-transparent to-white to-50% px-2 text-xs text-red-500 transition-all">
                  {errors.organization}
                </span>
              )}
            </label>

            {/* Message field */}
            <label
              className={`${touched.message && errors.message && "border-red-500"} relative col-span-2 h-40 cursor-text border bg-white px-6 py-4`}
            >
              <textarea
                name="message"
                id="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.message}
                required
                className="peer h-full w-full resize-none outline-none"
              />
              <span
                className={`${formData.message ? "-top-2.25 left-3 text-xs" : "top-4 left-3 text-base peer-focus:-top-2.25 peer-focus:left-3 peer-focus:text-xs"} absolute bg-linear-to-b from-transparent to-white to-50% px-2 transition-all`}
              >
                Write Message Here
              </span>
              {touched.message && errors.message && (
                <span className="absolute -top-2.25 right-3 bg-linear-to-b from-transparent to-white to-50% px-2 text-xs text-red-500 transition-all">
                  {errors.message}
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
            <span className="-right-88 text-[22px]">Connect Now</span>
            <Send size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
