"use client";
import AccountHeader from "./_components/AccountHeader";
import AccountDetails from "./_components/AccountDetails";
import TicketSection from "./_components/TicketSection";
import AccountPayments from "./_components/AccountPayments";

export default function ProfilePage() {
  return (
    <div className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <AccountHeader />

        <AccountDetails />

        <TicketSection />
        <AccountPayments />
      </div>
    </div>
  );
}
