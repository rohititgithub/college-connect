"use client";

import { Check, CircleCheck, Sparkles } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import MonthlyMembership from "@/assets/monthly-membership.png";
import QuaterlyMembership from "@/assets/quaterly-membership.png";
import Bootcamp from "@/assets/bootcamp.png";
import { toast } from "@/components/Toast";

export default function PlansSection() {
  const { addToCart } = useCart();

  const handleAddToCart = async (item: {
    productId: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
    rating: number;
  }) => {
    await addToCart(item);

    toast(
      <span className="flex items-center gap-2">
        <CircleCheck size={18} />
        Item added to cart
      </span>,
      "success",
      1000,
    );
  };

  return (
    <section
      id="plans"
      className="mx-auto flex w-7xl scroll-mt-24 flex-col items-center gap-14"
    >
      <span className="font-plus-jakarta-sans text-5xl">
        Choose the Plan That Fits Your Needs
      </span>

      <div className="flex w-full items-center gap-6">
        <div className="h-fit flex-1 rounded-3xl bg-[#E5E7EB] p-px shadow-lg">
          <div className="flex w-full flex-col gap-8 rounded-[23px] bg-white p-8">
            <div className="flex w-full flex-col items-center gap-2">
              <span className="text-2xl">Monthly Plan</span>
              <span className="mb-10 text-5xl">₹49</span>
            </div>

            <div className="flex flex-col gap-4.5">
              <div className="flex items-center gap-3">
                <Check size={20} className="text-[#FC266C]" />
                <span className="text-[#364153]">All membership benefits</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-[#FC266C]" />
                <span className="text-[#364153]">Premium support</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-[#FC266C]" />
                <span className="text-[#364153]">Exclusive Access</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                handleAddToCart({
                  productId: "monthly-membership",
                  title: "Monthly-membership",
                  price: 49,
                  quantity: 1,
                  image: MonthlyMembership.src,
                  rating: 4,
                })
              }
              className="w-full cursor-pointer rounded-full bg-[#155DFC] p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-[0px_2px_0px_0px_rgba(0,0,0,0.25)] active:translate-0 active:shadow-none"
            >
              <span className="text-white">Add to Cart</span>
            </button>
          </div>
        </div>

        <div className="relative h-full flex-1 rounded-3xl bg-linear-to-br from-[#FD2465] to-[#F83191] p-0.5 shadow-2xl">
          <div className="absolute -top-4 right-1/2 flex translate-x-1/2 items-center gap-1 rounded-full bg-linear-to-br from-[#FD2465] to-[#F83191] px-4 py-1.5 text-white">
            <Sparkles size={15} strokeWidth={2} />
            <span className="text-sm">Recommended</span>
          </div>

          <div className="flex w-full flex-col gap-8 rounded-[22px] bg-white p-8 shadow">
            <div className="flex w-full flex-col items-center gap-2">
              <span className="text-2xl">Quarterly Plan</span>
              <span className="text-5xl">₹149</span>
              <span className="mt-5 text-[#FC266C]">1 Month Free</span>
            </div>

            <div className="flex flex-col gap-4.5">
              <div className="flex items-center gap-3">
                <Check size={20} className="text-[#FC266C]" />
                <span className="text-[#364153]">All membership benefits</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-[#FC266C]" />
                <span className="text-[#364153]">Premium support</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-[#FC266C]" />
                <span className="text-[#364153]">Exclusive Access</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                handleAddToCart({
                  productId: "quaterly-memebership",
                  title: "Quaterly-membership",
                  price: 149,
                  quantity: 1,
                  image: QuaterlyMembership.src,
                  rating: 4.5,
                })
              }
              className="w-full -translate-y-0.5 cursor-pointer rounded-full bg-linear-to-br from-[#FD2465] to-[#F83191] p-3.5 shadow-lg transition-all active:translate-y-0 active:shadow-none"
            >
              <span className="text-white">Add to Cart</span>
            </button>
          </div>
        </div>

        <div className="h-fit flex-1 rounded-3xl bg-[#E5E7EB] p-px shadow-lg">
          <div className="flex w-full flex-col gap-8 rounded-[23px] bg-white p-8">
            <div className="flex w-full flex-col items-center gap-2">
              <span className="text-2xl">Yearly Plan</span>
              <span className="text-5xl">₹499</span>
              <span className="mt-2 text-[#FC266C]">6 Months Free</span>
            </div>

            <div className="flex flex-col gap-4.5">
              <div className="flex items-center gap-3">
                <Check size={20} className="text-[#FC266C]" />
                <span className="text-[#364153]">All membership benefits</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-[#FC266C]" />
                <span className="text-[#364153]">Premium support</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-[#FC266C]" />
                <span className="text-[#364153]">Exclusive Access</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                handleAddToCart({
                  productId: "yearly-membership",
                  title: "Yearly Membership",
                  price: 499,
                  quantity: 1,
                  image: Bootcamp.src,
                  rating: 5,
                })
              }
              className="w-full cursor-pointer rounded-full bg-[#155DFC] p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-[0px_2px_0px_0px_rgba(0,0,0,0.25)] active:translate-0 active:shadow-none"
            >
              <span className="text-white">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute top-200 -right-30 -z-10 h-337.5 w-56 -rotate-7 rounded-[50%] bg-[#ECA1FF]/30 blur-2xl" />
      <div className="pointer-events-none absolute bottom-150 -left-40 -z-10 h-337.5 w-56 -rotate-12 rounded-[50%] bg-[#C0A1FF]/50 blur-2xl" />
    </section>
  );
}
