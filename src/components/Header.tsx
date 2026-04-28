"use client";

import { Menu, X, ShoppingCart, Bell, User, CircleCheck } from "lucide-react";
import Logo from "@/assets/cc.svg";
// import LogoIcon from "@/assets/Coll-Edge_Connect_Icon_Light.svg";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "@/components/Toast";

import { useAuth } from "@/context/AuthContext";
import { useCartContext } from "@/context/CartContext";
import { useNotifications } from "@/hooks/useNotifications";
import { NOTIFICATION_ICONS } from "@/lib/notificationIcons";
import Popover from "@/components/Popover";
import { logoutAction } from "@/actions/auth";

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

  useEffect(() => {
    if (isNavOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsNavOpen(false);
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isNavOpen]);

  function goTo(id: string) {
    setIsNavOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 200);
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
    <header className="z-50 flex w-full max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 md:px-8 lg:mx-auto lg:gap-6 lg:px-8 lg:py-4">
      <Image
        src={Logo}
        alt="Coll-Edge_Connect_Logo"
        className="mr-auto w-20 sm:w-24 md:w-32 lg:w-51.75"
      />

      <nav className="hidden gap-6 text-[15px] font-semibold text-[#382F68] md:gap-8 md:text-[16px] lg:flex lg:gap-13.5 lg:text-[17px]">
        <Link href="/">Home</Link>
        <button onClick={() => goTo("services")} className="cursor-pointer">
          Our Work
        </button>
        <Link href="/about-us">About Us</Link>
        <Link href="/membership">Membership</Link>
      </nav>

      <div className="hidden items-center gap-2 md:gap-3 lg:flex">
        {!loading &&
          (isLoggedIn ? (
            <>
              <Link
                href="/cart"
                className="relative rounded-full border bg-white p-2 md:p-2.5"
              >
                <ShoppingCart size={20} />
                {totalQuantity > 0 && (
                  <div className="absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                    {totalQuantity}
                  </div>
                )}
              </Link>

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

      <button
        aria-label="Open Menu"
        aria-expanded={isNavOpen}
        onClick={() => setIsNavOpen(true)}
        className="ml-auto transition-transform duration-200 active:scale-90 lg:hidden"
      >
        <Menu size={26} />
      </button>

      <div
        onClick={() => setIsNavOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isNavOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      <nav
        className={`fixed top-0 right-0 z-50 flex h-dvh w-[85%] max-w-85 transform flex-col bg-[#E0E0E0] shadow-2xl transition-transform duration-300 ease-in-out ${isNavOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}
      >
        <div className="flex items-center justify-between border-b px-6 py-5">
          <button
            aria-label="Close Menu"
            onClick={() => setIsNavOpen(false)}
            className="transition-transform duration-200 hover:rotate-90"
          >
            <X size={26} />
          </button>
        </div>

        <div className="flex flex-col gap-6 px-6 py-8 text-xl font-semibold text-[#382F68] sm:text-2xl">
          <Link href="/" onClick={() => setIsNavOpen(false)}>
            Home
          </Link>

          <button onClick={() => goTo("services")} className="text-left">
            Our Work
          </button>

          <Link href="/about-us" onClick={() => setIsNavOpen(false)}>
            About Us
          </Link>

          <Link href="/membership" onClick={() => setIsNavOpen(false)}>
            Membership
          </Link>

          {!loading && !isLoggedIn && (
            <div className="mt-4 flex flex-col gap-4 border-t pt-6">
              <Link
                href="/login"
                onClick={() => setIsNavOpen(false)}
                className="rounded-full border px-4 py-2 text-center"
              >
                Login
              </Link>

              <Link
                href="/signup"
                onClick={() => setIsNavOpen(false)}
                className="rounded-full bg-[#234AFF] px-4 py-2 text-center text-white"
              >
                Signup
              </Link>
            </div>
          )}

          {!loading && isLoggedIn && (
            <div className="mt-4 flex flex-col gap-4 border-t pt-6">
              <Link
                href="/account"
                onClick={() => setIsNavOpen(false)}
                className="text-left"
              >
                My Account
              </Link>

              <button
                onClick={() => {
                  handleLogout();
                  setIsNavOpen(false);
                }}
                className="text-left text-red-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
