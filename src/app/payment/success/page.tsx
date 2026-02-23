import React from "react";
import Icon from "@/assets/All Icons.svg";
import Image from "next/image";
import { ArrowDownToLine, CircleChevronRight, CirclePlay } from "lucide-react";

export default function Page() {
  return (
    <div className="flex items-center justify-center py-5">
      <div className="h-200.75 w-260.5 rounded-xl border border-[#000000]/27 shadow-md shadow-gray-300">
        <div className="flex h-75 justify-center rounded-t-xl bg-[#48C575]">
          <div className="flex flex-col items-center gap-2 pt-10">
            <Image
              src={Icon}
              alt="Icon_Image"
              className="h-40.75 w-40.75"
            ></Image>
            <h2 className="font-pjs text-5xl font-semibold text-white">
              Payment Successful
            </h2>
          </div>
        </div>
        <div className="flex justify-center p-4 text-lg text-[#888888]">
          Your order has been confirmed and a receipt has been sent to your
          registered email.
        </div>
        <div className="flex justify-center">
          <div className="h-px w-247.5 bg-[#000000]/27" />
        </div>
        <div className="grid grid-cols-2 gap-y-4 p-6 text-lg">
          <div className="font-sans text-[23.5px] text-[#928F8F]">
            Transaction Date
          </div>
          <div className="text-right font-sans text-[20.5px]">
            Tuesday, 3 Feb 2026
          </div>

          <div className="font-sans text-[23.5px] text-[#928F8F]">
            Transaction ID
          </div>
          <div className="text-right font-sans text-[20.5px]">7137892340</div>

          <div className="font-sans text-[23.5px] text-[#928F8F]">
            Payment Method
          </div>
          <div className="text-right font-sans text-[20.5px]">Card</div>

          <div className="font-sans text-[23.5px] text-[#928F8F]">Taxes</div>
          <div className="text-right font-sans text-[20.5px]">₹ 329</div>

          <div className="font-sans text-[23.5px] text-[#928F8F]">SubTotal</div>
          <div className="text-right font-sans text-[20.5px]">₹ 3,000</div>
        </div>

        <div className="flex flex-wrap justify-center gap-7 pt-10">
          <button className="flex items-center gap-4 rounded-xl border-2 bg-[#F4F7FE] px-6 py-3 text-xl shadow-md shadow-gray-500">
            <CirclePlay size={22} />
            Back to home
          </button>

          <button className="flex items-center gap-4 rounded-xl border-2 bg-[#F4F7FE] px-6 py-3 text-xl shadow-md shadow-gray-500">
            <ArrowDownToLine size={22} />
            Download Recipt
          </button>

          <button className="flex items-center gap-4 rounded-xl border-2 bg-[#F4F7FE] px-6 py-3 text-xl shadow-md shadow-gray-500">
            Continue Shoping
            <CircleChevronRight size={22} />
          </button>
        </div>
      </div>
      <div className="pointer-events-none absolute -top-200 -right-1 -z-10 h-337.5 w-56 -rotate-20 rounded-[50%] bg-[#ECA1FF]/15 blur-2xl" />
      <div className="pointer-events-none absolute -top-100 -left-50 -z-10 h-337.5 w-56 -rotate-12 rounded-[50%] bg-[#C0A1FF]/15 blur-2xl" />
    </div>
  );
}
