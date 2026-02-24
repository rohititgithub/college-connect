import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import ToastContainer from "@/components/Toast";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Coll-Edge Connect",
    template: "%s | Coll-Edge Connect",
  },
  description: "India's fastest bridge between Colleges & Brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <AuthProvider>
          <CartProvider>
            <Header />
            {children}
            <ToastContainer />
            <Footer />
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
