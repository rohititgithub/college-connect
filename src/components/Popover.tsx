"use client";

import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type PopoverProps = {
  trigger: ReactNode;
  children: ReactNode;
  width?: number;
};

export default function Popover({
  trigger,
  children,
  width = 300,
}: PopoverProps) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });

  const triggerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  /* -------- Outside click -------- */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node) &&
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  /* -------- ESC -------- */
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  /* -------- Positioning -------- */
  useLayoutEffect(() => {
    if (!open) return;

    const trigger = triggerRef.current;
    const popover = popoverRef.current;
    if (!trigger || !popover) return;

    const t = trigger.getBoundingClientRect();
    const p = popover.getBoundingClientRect();

    const GAP = 32; // 👈 LARGE GAP (CHANGE THIS TO 48 IF YOU WANT MORE)
    const vw = window.innerWidth;

    // Center under trigger
    let left = t.left + t.width / 2 - p.width / 2;

    // Clamp to viewport with large gap
    left = Math.min(Math.max(left, GAP), vw - p.width - GAP);

    setPos({
      top: t.bottom + 12,
      left,
    });
  }, [open]);

  return (
    <>
      {/* Trigger */}
      <div ref={triggerRef} onClick={() => setOpen((p) => !p)}>
        {trigger}
      </div>

      {/* Portal popover */}
      {open &&
        createPortal(
          <div
            ref={popoverRef}
            style={{
              position: "fixed",
              top: pos.top,
              left: pos.left,
              width,
              zIndex: 9999,
            }}
            className="overflow-hidden rounded-xl bg-white px-2 py-2 shadow-xl ring-1 ring-black/10"
          >
            {children}
          </div>,
          document.body,
        )}
    </>
  );
}
