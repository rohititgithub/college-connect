"use client";

import { toast } from "@/components/Toast";
import { User } from "lucide-react";
import { useEffect, useState } from "react";

const ticketTypes = [
  "Kids Pass",
  "Single Pass",
  "Buddy Pass",
  "Group of 4 Pass",
  "VIP Female",
  "VIP Male",
  "VIP Couple",
  "Table for 5",
  "Table for 10",
];

type UserType = {
  role: string;
  name?: string;
};

export default function AccountHeader() {
  const [user, setUser] = useState<UserType | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTickets, setSelectedTickets] = useState<
    { title: string; quantity: number }[]
  >([]);

  /* 🔹 Fetch real logged-in user */
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/me", { credentials: "include" });
        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        console.error("Failed to load user", err);
      }
    };

    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="flex w-full items-center gap-6 rounded-3xl bg-white p-6 shadow">
      {/* User Icon Circle */}
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-indigo-50">
        <User size={40} className="text-indigo-600" />
      </div>

      {/* User Info */}
      <div className="flex-1">
        <h1 className="text-2xl font-semibold capitalize">
          {user.name || "User"}
        </h1>
      </div>

      {user?.role == "ADMIN" && (
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-2xl border bg-blue-600 p-2 text-white"
        >
          Manual Ticket
        </button>
      )}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-2xl rounded-xl bg-white p-8">
            <h2 className="mb-2 text-2xl font-bold">HoliBash Ticket</h2>

            <form
              onSubmit={async (e) => {
                e.preventDefault();

                if (selectedTickets.length === 0) {
                  toast("Select at least one ticket", "error");
                  return;
                }

                const form = new FormData(e.currentTarget);
                const data: any = Object.fromEntries(form.entries());

                try {
                  await fetch("/api/ticket/manual-create", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({
                      fullName: data.fullName,
                      email: data.email,
                      items: selectedTickets,
                    }),
                  });

                  toast("Manual Ticket Created!", "success", 2000);
                  setIsOpen(false);
                  setSelectedTickets([]);
                } catch (err) {
                  toast("Something went wrong!", "error", 2000);
                }
              }}
              className="space-y-4"
            >
              <input
                name="fullName"
                required
                placeholder="Your Full Name*"
                className="w-full rounded border p-1"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Email*"
                className="w-full rounded border p-1"
              />
              <input
                name="phone"
                required
                placeholder="Phone Number*"
                className="w-full rounded border p-1"
              />

              <div>
                <div className="space-y-3">
                  <p className="font-semibold">Select Tickets</p>

                  {ticketTypes.map((type) => {
                    const existing = selectedTickets.find(
                      (t) => t.title === type,
                    );

                    return (
                      <div
                        key={type}
                        className="flex items-center justify-between rounded border p-1"
                      >
                        <span>{type}</span>

                        <input
                          type="number"
                          min={0}
                          value={existing?.quantity || ""}
                          placeholder="0"
                          className="w-20 rounded border p-1 text-center"
                          onChange={(e) => {
                            const qty = Number(e.target.value);

                            setSelectedTickets((prev) => {
                              const filtered = prev.filter(
                                (t) => t.title !== type,
                              );

                              if (qty > 0) {
                                return [
                                  ...filtered,
                                  { title: type, quantity: qty },
                                ];
                              }

                              return filtered;
                            });
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded bg-gray-300 px-4 py-2"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded bg-blue-600 px-6 py-2 text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
