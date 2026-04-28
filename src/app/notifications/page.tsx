"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNotifications } from "@/hooks/useNotifications";
import { NOTIFICATION_ICONS } from "@/lib/notificationIcons";
import { CheckCheck } from "lucide-react";
import NotificationCard from "./_components/NotificationCard";

export default function NotificationsPage() {
  const { user } = useAuth();
  const userId = user?._id?.toString();

  const [mode, setMode] = useState<"all" | "unread">("all");

  const { notifications, markAsRead } = useNotifications(userId, {
    mode: "all",
  });

  const allCount = notifications?.length || 0;
  const unreadCount =
    notifications?.filter((n) => n.status === "UNREAD").length || 0;

  const filteredNotifications =
    mode === "all"
      ? notifications
      : notifications?.filter((n) => n.status === "UNREAD");

  return (
    <div className="mx-auto my-12 flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3">
        <span className="w-fit rounded-full bg-[#EFF6FF] px-4 py-2.5 text-sm font-medium text-[#155DFC]">
          Recent updates & activity
        </span>

        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Notifications
        </h1>

        <span className="max-w-2xl text-sm text-[#4A5565] sm:text-base lg:text-lg">
          Stay up to date with system updates, user actions, and important
          alerts
        </span>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setMode("all")}
            className={`text-14 w-83.56px flex h-10 items-center gap-2 rounded-xl px-5 font-medium whitespace-nowrap ${
              mode === "all"
                ? "bg-[#155DFC] text-white shadow-[0px_2px_4px_0px_#155DFC4D]"
                : "border border-[#0000008C] bg-white text-black"
            }`}
          >
            All
            <span className={`text-14 ${mode === "all"}`}>({allCount})</span>
          </button>

          <button
            onClick={() => setMode("unread")}
            className={`text-14 w-117.48px flex h-10 items-center gap-2 rounded-xl px-5 font-medium whitespace-nowrap ${
              mode === "unread"
                ? "bg-[#155DFC] text-white"
                : "border border-[#0000008C] bg-white text-black shadow-[0px_2px_40px_0px_#0000000F]"
            }`}
          >
            Unread
            <span className="text-14">({unreadCount})</span>
          </button>
        </div>

        <button
          onClick={() => {
            notifications?.forEach((n) => {
              if (n.status === "UNREAD") {
                markAsRead(n._id);
              }
            });
          }}
          className="text-14 w-176.74px flex h-10 items-center justify-center gap-2 rounded-xl border border-[#0000008C] bg-white px-5 font-medium text-[#155DFC] shadow-[0px_2px_16.6px_0px_#0000000F] transition-all duration-200 hover:border-[#155DFC] hover:bg-[#155DFC] hover:text-white"
        >
          <CheckCheck size={20} />
          Mark all as read
        </button>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:gap-6">
        {filteredNotifications?.map((n) => {
          const Icon =
            NOTIFICATION_ICONS[n.type as keyof typeof NOTIFICATION_ICONS];

          return (
            <NotificationCard
              key={n._id}
              title={n.title}
              description={n.message}
              tag={n.type}
              Icon={Icon}
              unread={n.status === "UNREAD"}
              url={"/notifications"}
              createdAt={new Date(n.createdAt)}
            />
          );
        })}
      </div>
    </div>
  );
}
