"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Ticket = {
  _id: string;
  eventName: string;
};

type ApiResponse = {
  success: boolean;
  tickets?: Ticket[];
};

export default function TicketSection() {
  const router = useRouter();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await fetch("/api/ticket/my", {
          credentials: "include",
        });

        if (res.status === 401) {
          router.push("/login");
          return;
        }

        const data: ApiResponse = await res.json();

        if (data.success && data.tickets) {
          setTickets(data.tickets);
        }
      } catch (err) {
        console.error("Failed to load tickets");
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, [router]);

  if (loading) return <p>Loading tickets...</p>;

  return (
    <div className="rounded-3xl bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-semibold">My Tickets</h2>

      {tickets.length === 0 ? (
        <p className="text-gray-500">No tickets purchased yet.</p>
      ) : (
        <div className="space-y-3">
          {tickets.map((ticket) => (
            <div
              key={ticket._id}
              onClick={() => router.push(`/ticket?id=${ticket._id}`)}
              className="flex cursor-pointer items-center justify-between rounded-xl bg-gray-50 px-4 py-3 hover:bg-gray-100"
            >
              <span className="line-clamp-1 flex-1 font-medium">
                {ticket.eventName}
              </span>
              <ArrowRight className="text-gray-500" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
