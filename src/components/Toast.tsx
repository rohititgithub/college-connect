"use client";

import { ReactNode, useEffect, useState } from "react";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: number;
  message: ReactNode;
  type: ToastType;
  duration: number;
}

let triggerToast: (
  message: ReactNode,
  type: ToastType,
  duration?: number,
) => void;

export function toast(
  message: ReactNode,
  type: ToastType = "info",
  duration = 3000,
) {
  triggerToast?.(message, type, duration);
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    triggerToast = (message, type = "info", duration = 2000) => {
      const id = Date.now();

      setToasts((prev) => [...prev, { id, message, type, duration }]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    };
  }, []);

  const bg = {
    success: "bg-green-400",
    error: "bg-red-500",
    info: "bg-blue-600",
  };

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col gap-3">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`min-w-60 rounded-lg px-4 py-3 text-sm text-white shadow-lg ${bg[t.type]}`}
        >
          {t.message}
        </div>
      ))}
    </div>
  );
}
