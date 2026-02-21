import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Membership from "@/models/Membership";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI as string);
};

export async function GET() {
  try {
    await connectDB();

    const memberships = await Membership.find({
      isActive: true,
    }).sort({ sortOrder: 1, price: 1 });

    return NextResponse.json({
      success: true,
      data: memberships,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
