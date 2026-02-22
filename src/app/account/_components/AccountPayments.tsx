"use client";

import { useEffect, useState } from "react";
import { CreditCard } from "lucide-react";

type Payment = {
  _id: string;
  type: "EVENT" | "COURSE";
  items: {
    title: string;
    quantity: number;
  }[];
  totalAmount: number;
  paymentStatus: "PAID" | "PENDING" | "FAILED";
  createdAt: string;
};

export default function AccountPayments() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [totalSpent, setTotalSpent] = useState(0);
  const [totalPayments, setTotalPayments] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await fetch("/api/payment/my", {
          credentials: "include",
          cache: "no-store",
        });

        // ⭐ SAFE JSON PARSE (fix <!DOCTYPE error)
        let data: any = {};

        try {
          const text = await res.text();
          data = text ? JSON.parse(text) : {};
        } catch {
          console.warn("Payment API returned HTML instead of JSON");
        }

        if (data?.success) {
          setPayments(data.payments || []);
          setTotalSpent(data.totalSpent || 0);
          setTotalPayments(data.totalPayments || 0);
        }
      } catch (err) {
        console.error("Failed to load payments", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  if (loading) return <p>Loading payments...</p>;

  return (
    <div className="w-full rounded-3xl bg-white p-6 shadow">
      {/* 📊 Stats */}
      <div className="mb-6 grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-indigo-50 p-4 text-center">
          <p className="text-sm text-gray-500">Total Payments</p>
          <p className="text-2xl font-semibold">{totalPayments}</p>
        </div>

        <div className="rounded-xl bg-green-50 p-4 text-center">
          <p className="text-sm text-gray-500">Total Spent</p>
          <p className="text-2xl font-semibold">₹{totalSpent}</p>
        </div>
      </div>

      {/* 📜 Payment List */}
      {payments.length === 0 ? (
        <p className="text-gray-500">No payments yet.</p>
      ) : (
        <div className="space-y-3">
          {payments.map((p) => (
            <div
              key={p._id}
              className="flex items-center justify-between rounded-xl bg-gray-50 p-4"
            >
              <div className="flex items-center gap-3">
                <CreditCard className="text-indigo-600" />
                <div>
                  <p className="font-medium">{p.type}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(p.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold">₹{p.totalAmount}</p>
                <p
                  className={`text-sm ${
                    p.paymentStatus === "PAID"
                      ? "text-green-600"
                      : p.paymentStatus === "FAILED"
                        ? "text-red-600"
                        : "text-yellow-600"
                  }`}
                >
                  {p.paymentStatus}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
