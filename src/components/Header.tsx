"use client";

import { Menu, X, ShoppingCart, Bell, User, CircleCheck } from "lucide-react";
import Logo from "@/assets/Coll-Edge_Connect_Logo.svg";
import LogoIcon from "@/assets/Coll-Edge_Connect_Icon_Light.svg";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";
import { useCartContext } from "@/context/CartContext";
import { useNotifications } from "@/hooks/useNotifications";
import { NOTIFICATION_ICONS } from "@/lib/notificationIcons";
import Popover from "@/components/Popover";
import { logoutAction } from "@/actions/auth";
import { toast } from "@/components/toast";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const { isLoggedIn, loading, user, refreshUser } = useAuth();
  const { totalQuantity } = useCartContext();

  const userId = user?._id?.toString();
  const { notifications, handleNotificationClick } = useNotifications(userId, {
    mode: "unread",
  });

  const latestThree = notifications.slice(0, 3);
  const unreadCount = notifications.length;

  function goTo(id: string) {
    setIsNavOpen((prev) => !prev);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }

  async function handleLogout() {
    await logoutAction();
    await refreshUser();

    toast(
      <span className="flex items-center gap-2">
        <CircleCheck size={18} />
        Successfully Logged Out
      </span>,
      "success",
      2000,
    );

    router.push("/login");
  }

  return (
    <header className="z-50 flex w-full max-w-7xl items-center gap-6 px-8 py-4 lg:mx-auto">
      <Image
        src={Logo}
        alt="Coll-Edge_Connect_Logo"
        className="mr-auto w-24 lg:w-51.75"
      />

      {/* ================= DESKTOP NAV ================= */}
      <nav className="hidden gap-13.5 text-[17px] font-semibold text-[#382F68] lg:flex">
        <Link href={"/"}>Home</Link>
        <button type="button" onClick={() => goTo("services")}>
          Our Work
        </button>
        <Link href="/about-us">About Us</Link>
        <Link href="/membership">Membership</Link>
      </nav>

      <button
        type="button"
        onClick={() => goTo("contact")}
        className="hidden cursor-pointer items-center gap-1.5 rounded-full bg-black px-4.25 py-2.5 transition-all hover:-translate-y-0.5 hover:shadow-[0px_2px_0px_0px_rgba(0,0,0,0.25)] active:translate-0 active:shadow-none lg:flex"
      >
        <div className="size-3 rounded-full bg-[#4F52FF]/25 p-0.75">
          <div className="size-1.5 animate-ping rounded-full bg-[#4F52FF] duration-300" />
        </div>
        <span className="text-[15px] font-bold text-white">
          Partner with Us
        </span>
      </button>

      {/* ================= RIGHT SIDE (DESKTOP) ================= */}
      <div className="hidden items-center gap-3 lg:flex">
        {!loading &&
          (isLoggedIn ? (
            <>
              {/* CART */}
              <Link
                href="/cart"
                className="relative rounded-full border bg-white p-2.5"
              >
                <ShoppingCart size={20} />
                {totalQuantity > 0 && (
                  <div className="absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                    {totalQuantity}
                  </div>
                )}
              </Link>

              {/* NOTIFICATIONS */}
              <Popover
                trigger={
                  <button className="relative rounded-full border bg-white p-2.5">
                    <Bell size={20} />
                    {unreadCount > 0 && (
                      <div className="absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                        {unreadCount > 9 ? "9+" : unreadCount}
                      </div>
                    )}
                  </button>
                }
              >
                <div className="flex flex-col text-sm">
                  {latestThree.length === 0 ? (
                    <p className="px-4 py-3 text-gray-500">No notifications</p>
                  ) : (
                    latestThree.map((n) => {
                      const Icon = NOTIFICATION_ICONS[n.type];
                      return (
                        <button
                          key={n._id}
                          onClick={() =>
                            handleNotificationClick(n._id, n.actionUrl)
                          }
                          className="flex gap-3 px-3 py-2 hover:bg-gray-100"
                        >
                          <Icon size={18} className="text-blue-600" />
                          <div>
                            <p className="font-medium">{n.title}</p>
                            <p className="text-xs text-gray-500">{n.message}</p>
                          </div>
                        </button>
                      );
                    })
                  )}
                </div>
              </Popover>

              {/* USER */}
              <Popover
                width={220}
                trigger={
                  <button className="flex size-10 items-center justify-center rounded-full border bg-white">
                    <User size={20} className="text-blue-600" />
                  </button>
                }
              >
                <div className="flex flex-col text-sm">
                  <Link href="/account" className="px-3 py-2 hover:bg-gray-100">
                    My Account
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="px-3 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </Popover>
            </>
          ) : (
            <div className="flex items-center overflow-hidden rounded-full border border-[#382F68]">
              <Link
                href="/login"
                className={`px-4 py-2 text-[15px] font-semibold ${
                  pathname === "/login"
                    ? "bg-[#234AFF] text-white"
                    : "text-[#382F68]"
                }`}
              >
                Login
              </Link>

              <Link
                href="/signup"
                className={`px-4 py-2 text-[15px] font-semibold ${
                  pathname === "/signup"
                    ? "bg-[#234AFF] text-white"
                    : "text-[#382F68]"
                }`}
              >
                Signup
              </Link>
            </div>
          ))}
      </div>

      {/* MOBILE MENU BTN */}
      <button
        type="button"
        onClick={() => setIsNavOpen((prev) => !prev)}
        className="lg:hidden"
      >
        <Menu size={24} />
      </button>

      {/* ================= MOBILE NAV ================= */}
      <nav
        className={`${
          isNavOpen ? "right-0" : "-right-[75%]"
        } fixed top-0 z-50 flex h-dvh w-[75%] flex-col items-end gap-8 border-l-2 bg-[#E0E0E0] px-8 py-10 text-4xl transition-all duration-400 lg:hidden`}
      >
        <div className="flex w-full justify-between">
          <Image src={LogoIcon} alt="Logo Icon" className="h-7.25" />
          <button onClick={() => setIsNavOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <Link href={"/"}>Home</Link>
        <button onClick={() => goTo("services")}>Our Work</button>
        <Link href="/membership">Membership</Link>
      </nav>
    </header>
  );
}
