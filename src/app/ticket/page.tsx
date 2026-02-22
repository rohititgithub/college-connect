"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

type TicketItem = {
  title: string;
  quantity: number;
};

type TicketData = {
  _id?: string;
  id?: string;
  ticketNumber: string;
  status: string;
  qrCode?: string;
  items?: TicketItem[];
  usedAt?: string;
};

type ApiResponse = {
  success: boolean;
  message?: string;
  ticket?: TicketData;
};

export default function MyTicketPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const router = useRouter();
  const { user } = useAuth();

  const params = use(searchParams);

  const id =
    typeof params.id === "string"
      ? params.id
      : Array.isArray(params.id)
        ? params.id[0]
        : undefined;

  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchTicket = async () => {
      try {
        const isAdmin = user?.role === "ADMIN" || user?.role === "SUPER_ADMIN";

        const endpoint = isAdmin
          ? `/api/ticket/verify/${id}`
          : `/api/ticket/by-id/${id}`;

        const res = await fetch(endpoint, {
          credentials: "include",
        });

        if (res.status === 401) {
          router.push("/login");
          return;
        }

        const json = await res.json();
        setData(json);
      } catch {
        setData({ success: false, message: "Something went wrong" });
      } finally {
        setLoading(false);
      }
    };

    fetchTicket();
  }, [id, user]);
  if (loading) {
    return <div className="p-10 text-center">Loading ticket...</div>;
  }

  return (
    <div className="flex items-center justify-center py-8">
      {!data?.success && (
        <p className="text-center text-red-600">
          {data?.message || "Ticket not found"}
        </p>
      )}

      {data?.success && data.ticket && (
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* LEFT SIDE */}
          <div className="w-96 rounded-2xl border bg-white p-8 text-center shadow-xl">
            <p className="text-lg">
              <span className="font-semibold">Ticket No:</span>{" "}
              {data.ticket.ticketNumber}
            </p>

            <p className="mt-1 text-lg">
              <span className="font-semibold">Status:</span>{" "}
              <span
                className={`font-bold ${
                  data.ticket.status === "VALID"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {data.ticket.status}
              </span>
            </p>

            {data.ticket.qrCode && (
              <div className="mt-6 flex justify-center">
                <Image
                  src={data.ticket.qrCode}
                  alt="Ticket QR"
                  width={220}
                  height={220}
                  className="rounded-lg"
                />
              </div>
            )}

            <p className="mt-4 text-sm text-gray-500">
              Scan this QR at entry gate
            </p>
          </div>

          {/* RIGHT SIDE */}
          {data.ticket.status === "USED" &&
            (user?.role === "ADMIN" || user?.role === "SUPER_ADMIN") && (
              <div className="w-96 rounded-2xl border bg-white p-8 shadow-xl">
                <h2 className="mb-4 text-xl font-semibold">Ticket Details</h2>

                {data.ticket.usedAt && (
                  <p className="mb-4 text-sm text-gray-600">
                    <span className="font-semibold">Used At:</span>{" "}
                    {new Date(data.ticket.usedAt).toLocaleString()}
                  </p>
                )}

                {data.ticket.items && data.ticket.items.length > 0 && (
                  <div className="flex flex-col gap-3">
                    {data.ticket.items.map((item) => (
                      <div
                        key={item.title}
                        className="flex justify-between rounded-lg border px-3 py-2"
                      >
                        <span>{item.title}</span>
                        <span className="font-semibold">
                          {item.quantity.toString().padStart(2, "0")}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
        </div>
      )}
    </div>
  );
}
