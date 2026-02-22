"use client";

import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { useCart } from "@/hooks/useCart";
import type { CartItem as CartItemType } from "@/types/cart";
import { useCartContext } from "@/context/CartContext";
import { ShoppingCart, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { authenticate } from "@/actions/auth";
import { toast } from "@/components/Toast";
import { useAuth } from "@/context/AuthContext";

export default function ItemsSection() {
  const { getCart } = useCart();
  const [items, setItems] = useState<CartItemType[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { totalQuantity, setTotalQuantity } = useCartContext();

  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [coupons, setCoupons] = useState<any[]>([]);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const { user, loading } = useAuth();

  const router = useRouter();

  /* ================= CART ================= */

  async function refreshCart() {
    const cart = await getCart();
    const cartItems = cart.items;

    setItems(cartItems);

    setTotalQuantity(
      cartItems.reduce(
        (sum: number, item: CartItemType) => sum + item.quantity,
        0,
      ),
    );

    const total = cartItems.reduce(
      (sum: number, item: CartItemType) => sum + item.price * item.quantity,
      0,
    );

    setTotalPrice(total);
    setFinalTotal(total);
  }

  /* ================= PAYMENT ================= */

  async function handlePlaceOrder() {
    if (items.length < 1) {
      toast(
        <span className="flex items-center gap-2">
          <ShoppingCart size={18} />
          Cart is Empty
        </span>,
        "error",
        2000,
      );
      return;
    }

    const { user } = await authenticate();

    if (!user) {
      router.push("/login");
      return;
    }

    const orderRes = await fetch("/api/payment/razorpay/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: finalTotal }),
    });

    if (!orderRes.ok) {
      alert("Failed to create order");
      return;
    }

    const order = await orderRes.json();

    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "My Store",
      order_id: order.id,

      handler: async (response: unknown) => {
        // 1️⃣ Verify payment
        const verifyRes = await fetch("/api/payment/razorpay/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(response),
        });

        const verifyData = await verifyRes.json();

        if (!verifyData.success) {
          toast("Payment verification failed", "error", 2000);
          return;
        }

        // 2️⃣ Save payment record
        const paymentRes = await fetch("/api/payment/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            listing: items[0]?.productId,
            type: "EVENT",
            quantity: totalQuantity,
            totalAmount: finalTotal,
          }),
        });

        const paymentData = await paymentRes.json();

        if (!paymentData.success) {
          toast("Payment saved but DB store failed", "error", 2000);
          return;
        }

        // 3️⃣ Create ticket BEFORE refreshing cart
        const ticketRes = await fetch("/api/ticket/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            purchaseId: paymentData.payment._id,
            items: items.map((item) => ({
              title: item.title,
              quantity: item.quantity,
            })),
            eventName: "Holi Bash",
          }),
        });

        const ticketData = await ticketRes.json();

        if (!ticketData.success) {
          toast("Ticket creation failed", "error", 2000);
          return;
        }

        // 4️⃣ Now refresh cart after everything done
        setItems([]);
        setTotalQuantity(0);
        setTotalPrice(0);
        setFinalTotal(0);
        await refreshCart();

        toast("Payment & Ticket Created Successfully 🎉", "success", 2000);

        router.push(`/ticket?id=${ticketData.ticket._id}`);
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  }

  /* ================= EFFECTS ================= */

  useEffect(() => {
    if (loading) return;
    if (!user?._id) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    refreshCart();
  }, [user?._id, loading]);

  useEffect(() => {
    if (!isCouponOpen) return;

    fetch("/api/coupon?active=true")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setCoupons(data.data);
      });
  }, [isCouponOpen]);

  /* ================= COUPON ================= */

  async function applyCoupon(code?: string) {
    const couponToApply = code || couponCode;

    const res = await fetch("/api/coupon/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: couponToApply,
        cartTotal: totalPrice,
      }),
    });

    const data = await res.json();

    if (!data.success) {
      toast(data.message, "error");
      return;
    }

    setDiscount(data.discount);
    setFinalTotal(data.finalTotal);
    setAppliedCoupon(couponToApply);

    toast("Coupon applied!", "success");
    setIsCouponOpen(false);
  }

  const formattedTotalPrice = totalPrice.toLocaleString("en-US", {
    minimumFractionDigits: 2,
  });

  return (
    <section className="flex w-[95%] flex-col justify-center gap-8 rounded-2xl border border-black/25 bg-white p-4 shadow-[0px_4px_4px_0px_#00000040] sm:gap-11 sm:p-6">
      {/* HEADER */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-14">
        <h2 className="text-2xl font-semibold sm:text-4xl lg:text-[46px]">
          My Cart
        </h2>

        <span className="text-sm font-medium sm:text-xl lg:text-2xl">
          {items.length} Item{items.length > 1 && "s"}
        </span>
      </div>

      {/* ITEMS */}
      <div className="flex flex-col gap-6 px-0 sm:gap-10 sm:px-4 lg:gap-11 lg:px-5">
        {items.map((item) => (
          <div key={item.productId} className="flex flex-col gap-8">
            <CartItem
              productId={item.productId}
              name={item.title}
              price={item.price}
              quantity={item.quantity}
              rating={item.rating}
              thumbnail={item.image}
              onChange={refreshCart}
            />

            <div className="min-h-px min-w-full bg-black/25" />
          </div>
        ))}
      </div>

      {/* PRICE */}
      <div className="flex flex-col gap-8 rounded-3xl border border-black/25 bg-[#F4F7FE] px-4 py-6 shadow-[0px_4px_4px_0px_#00000040] sm:gap-12 sm:px-8 sm:py-8 lg:gap-14 lg:px-12 lg:py-10">
        <h3 className="text-2xl font-medium sm:text-3xl lg:text-[40px]">
          Price Details
        </h3>

        <div className="flex flex-col gap-3 sm:gap-4">
          {[
            ["Total Items", totalQuantity.toString().padStart(2, "0")],
            ["Total MRP", `₹ ${formattedTotalPrice}`],
            ["Discount", "₹ 0"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="flex justify-between text-base sm:text-xl lg:text-2xl"
            >
              <span>{k}</span>
              <span>{v}</span>
            </div>
          ))}

          {/* Coupon */}
          <div className="flex justify-between text-base sm:text-xl lg:text-2xl">
            <span>Coupon</span>

            <button
              onClick={() => setIsCouponOpen(true)}
              className="text-[#0042E9] uppercase"
            >
              {discount > 0 && appliedCoupon
                ? `${appliedCoupon} - ₹ ${discount}`
                : "Apply"}
            </button>
          </div>

          {/* SUBTOTAL */}
          <div className="flex justify-between text-base sm:text-xl lg:text-2xl">
            <span>Sub Total</span>
            <span>₹ {finalTotal.toLocaleString()}</span>
          </div>

          <div className="flex justify-between text-base sm:text-xl lg:text-2xl">
            <span>GST</span>
            <span>₹ 0</span>
          </div>
        </div>

        {/* PLACE ORDER */}
        <button
          onClick={handlePlaceOrder}
          className="w-full rounded-xl bg-linear-to-r from-[#155DFC] to-[#5087FF] py-3 shadow sm:w-auto sm:self-end sm:px-16 lg:px-20"
        >
          <span className="text-lg font-medium text-white sm:text-2xl lg:text-[28px]">
            Place Order
          </span>
        </button>
      </div>

      {/* COUPON MODAL */}
      {isCouponOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsCouponOpen(false)}
          />

          <div className="relative w-full max-w-md rounded-2xl bg-white shadow-xl sm:max-w-lg">
            <div className="flex justify-between border-b px-4 py-3">
              <h3 className="text-lg font-medium">Apply Coupon</h3>

              <button onClick={() => setIsCouponOpen(false)}>
                <X size={22} />
              </button>
            </div>

            <div className="space-y-3 p-4">
              <div className="flex overflow-hidden rounded-lg border">
                <input
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                  placeholder="Enter Code"
                  className="flex-1 px-3 py-2 outline-none"
                />

                <button
                  onClick={() => applyCoupon()}
                  className="px-4 text-blue-600"
                >
                  CHECK
                </button>
              </div>

              <div className="max-h-48 overflow-y-auto">
                {coupons.map((c) => (
                  <div
                    key={c._id}
                    className="flex justify-between px-2 py-2 hover:bg-blue-50"
                  >
                    <span>{c.code}</span>

                    <button
                      onClick={() => applyCoupon(c.code)}
                      className="text-blue-600"
                    >
                      Apply
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
