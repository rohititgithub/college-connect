"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { NotificationType } from "@/lib/notificationTypes";

export type Notification = {
  _id: string;
  title: string;
  message: string;
  type: NotificationType;
  status: "READ" | "UNREAD";
  createdAt: string;
  actionUrl?: string;
};

type Mode = "unread" | "all";

export function useNotifications(
  userId?: string,
  options: { mode?: Mode } = {},
) {
  const router = useRouter();
  const mode = options.mode ?? "unread";
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const storageKey = `notifications:lastSeen:${userId}:${mode}`;
  const lastSeenRef = useRef<string | null>(null);

  useEffect(() => {
    if (!userId) return;
    lastSeenRef.current = sessionStorage.getItem(storageKey);
  }, [userId, mode, storageKey]);

  useEffect(() => {
    if (!userId) return;

    const fetchInitial = async () => {
      const url =
        mode === "unread"
          ? `/api/notifications?userId=${userId}&unread=true`
          : `/api/notifications?userId=${userId}`;

      const res = await fetch(url, { cache: "no-store" });
      const data = await res.json();
      const items: Notification[] = data.notifications || [];

      setNotifications(items);

      if (items.length > 0) {
        const fetchedLatest = items[0].createdAt;
        const storedLastSeen = lastSeenRef.current;

        if (
          !storedLastSeen ||
          new Date(fetchedLatest) > new Date(storedLastSeen)
        ) {
          lastSeenRef.current = fetchedLatest;
          sessionStorage.setItem(storageKey, fetchedLatest);
        }
      }
    };

    fetchInitial();
  }, [userId, mode, storageKey]);

  useEffect(() => {
    if (!userId) return;

    const since = lastSeenRef.current ?? new Date().toISOString();

    const source = new EventSource(
      `/api/notifications/stream?userId=${userId}&since=${since}`,
    );

    source.onmessage = (event) => {
      const incoming: Notification[] = JSON.parse(event.data);

      setNotifications((prev) => {
        const fresh = incoming.filter(
          (n) =>
            !lastSeenRef.current ||
            new Date(n.createdAt) > new Date(lastSeenRef.current),
        );

        if (fresh.length === 0) return prev;

        const newest = fresh[0].createdAt;
        lastSeenRef.current = newest;
        sessionStorage.setItem(storageKey, newest);

        const ids = new Set(prev.map((n) => n._id));
        return [...fresh.filter((n) => !ids.has(n._id)), ...prev];
      });
    };

    source.onerror = () => source.close();
    return () => source.close();
  }, [userId, storageKey]);

  const markAsRead = async (notificationId: string) => {
    await fetch("/api/notifications", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notificationId }),
    });

    setNotifications((prev) =>
      mode === "unread"
        ? prev.filter((n) => n._id !== notificationId)
        : prev.map((n) =>
            n._id === notificationId ? { ...n, status: "READ" } : n,
          ),
    );
  };

  const handleNotificationClick = async (
    notificationId: string,
    actionUrl?: string,
  ) => {
    await markAsRead(notificationId);
    if (actionUrl) router.push(actionUrl);
  };

  return {
    notifications,
    markAsRead,
    handleNotificationClick,
  };
}
