import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { getUserFromRequest } from "@/lib/getUserFromRequest";
import Payment from "@/models/Payment";

export async function POST(req: Request) {
  try {
    await connectDB();

    // 🔐 Try to get logged-in user (may be null in Postman)
    const loggedInUser = await getUserFromRequest();

    const body = await req.json();
    const { userId, listing, type, quantity, totalAmount } = body;

    // ✅ Choose user source
    const finalUserId = loggedInUser?._id || userId;

    // ❌ If still no user → reject
    if (!finalUserId) {
      return NextResponse.json(
        { success: false, message: "User not provided" },
        { status: 400 },
      );
    }

    if (!listing || !type || !totalAmount) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 },
      );
    }

    // 💾 Create payment
    const payment = await Payment.create({
      user: finalUserId,
      listing,
      type,
      quantity,
      totalAmount,
      paymentStatus: "PAID",
    });

    return NextResponse.json({
      success: true,
      payment,
    });
  } catch (error) {
    console.error("CREATE PAYMENT ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
