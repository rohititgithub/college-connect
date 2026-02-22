import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { getUserFromRequest } from "@/lib/getUserFromRequest";
import Payment from "@/models/Payment";

export async function GET() {
  try {
    await connectDB();

    // 🔐 Logged-in user
    const user = await getUserFromRequest();

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 },
      );
    }

    // 📦 Get user payments
    const payments = await Payment.find({ user: user._id })
      .sort({ createdAt: -1 })
      .lean();

    // 📊 Stats
    const totalPayments = payments.length;
    const totalSpent = payments.reduce(
      (sum, p) => sum + (p.totalAmount || 0),
      0,
    );

    return NextResponse.json({
      success: true,
      payments,
      totalPayments,
      totalSpent,
    });
  } catch (error) {
    console.error("PAYMENT MY ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
