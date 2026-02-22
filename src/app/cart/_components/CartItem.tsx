"use client";

import { CircleCheck, Star, Trash2 } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/components/Toast";

type CartItemProps = {
  productId: string;
  name: string;
  price: number;
  rating: number;
  quantity: number;
  thumbnail: string;
  onChange: () => void;
};

export default function CartItem({
  productId,
  name,
  price,
  rating,
  quantity,
  thumbnail,
  onChange,
}: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const formattedPrice = (price * quantity).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const handleUpdate = async (qty: number) => {
    const res = await updateQuantity(productId, qty);

    if (res?.error === "LIMIT_EXCEEDED") {
      toast("Cart Limit Exceeded", "error", 1500);
      return;
    }

    onChange();

    toast(
      <span className="flex items-center gap-2">
        <CircleCheck size={18} />
        Quantity updated
      </span>,
      "success",
      1000,
    );
  };

  const handleRemove = async () => {
    await removeFromCart(productId);
    onChange();

    toast(
      <span className="flex items-center gap-2">
        <CircleCheck size={18} />
        Item removed
      </span>,
      "success",
      1000,
    );
  };

  const safeRating = Math.max(0, Math.min(5, Number(rating) || 0));

  return (
    <div className="flex flex-col gap-6 px-2 sm:flex-row sm:gap-10 sm:px-6">
      {/* Image */}
      <div className="rounded-2xl border p-4 shadow-[0px_4px_4px_0px_#00000040] sm:p-8">
        <div className="relative h-40 w-full sm:h-44 sm:w-44">
          <Image
            src={thumbnail}
            alt="Item"
            fill
            className="rounded-xl bg-orange-400 object-contain"
          />
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col py-1.5">
        <span className="line-clamp-2 text-xl font-semibold sm:text-3xl lg:text-4xl">
          {name}
        </span>

        <span className="mt-auto mb-2 text-sm font-medium text-black/60 sm:text-lg lg:text-xl">
          Quantity
        </span>

        <div className="flex w-fit text-lg sm:text-xl lg:text-2xl">
          <button
            onClick={() => handleUpdate(quantity - 1)}
            className="rounded-l-md border px-4 py-2 hover:bg-black hover:text-white sm:px-6 lg:px-10"
          >
            -
          </button>

          <div className="border px-4 py-2 sm:px-6 lg:px-10">
            {quantity.toString().padStart(2, "0")}
          </div>

          <button
            onClick={() => handleUpdate(quantity + 1)}
            className="rounded-r-md border px-4 py-2 hover:bg-black hover:text-white sm:px-6 lg:px-10"
          >
            +
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="flex w-full items-center justify-between gap-3 md:ml-auto md:w-auto md:flex-col md:items-end md:justify-start lg:flex-col lg:items-end lg:gap-2">
        <button
          onClick={handleRemove}
          className="rounded-xl p-2 hover:bg-black/5"
        >
          <Trash2 size={22} />
        </button>

        <span className="text-base font-semibold sm:text-lg lg:text-[22px]">
          ₹ {formattedPrice}
        </span>

        <div className="gap-0.2 flex text-[#FFC403]">
          {Array(Math.floor(safeRating))
            .fill(null)
            .map((_, i) => (
              <Star key={i} size={18} className="fill-[#FFC403]" />
            ))}

          {Array(5 - Math.ceil(safeRating))
            .fill(null)
            .map((_, i) => (
              <Star key={i} size={18} />
            ))}
        </div>
      </div>
    </div>
  );
}
