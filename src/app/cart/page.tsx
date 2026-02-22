import { Metadata } from "next";
import ItemsSection from "./_components/ItemsSection";

export const metadata: Metadata = { title: "Cart" };

export default function MyCartPage() {
  return (
    <main className="mx-auto mb-16 flex w-full max-w-7xl flex-col items-center gap-10 px-4 py-6 sm:gap-16 sm:px-0 sm:py-8">
      <ItemsSection />
    </main>
  );
}
