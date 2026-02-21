import { NextResponse } from "next/server";
import mongoose from "mongoose";
import UserMembership from "@/models/UserMembership";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI as string);
};

export async function GET(req: Request) {
  try {
    await connectDB();

    const userId = (req as any).user?.id;

    if (!userId) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 },
      );
    }

    const userMembership = await UserMembership.findOne({
      user: userId,
      isActive: true,
      paymentStatus: "PAID",
      expiryDate: { $gte: new Date() },
    }).populate("membership");

    if (!userMembership) {
      return NextResponse.json({
        success: true,
        data: null,
        message: "No active membership",
      });
    }

    return NextResponse.json({
      success: true,
      data: {
        userMembershipId: userMembership._id,
        startDate: userMembership.startDate,
        expiryDate: userMembership.expiryDate,
        isActive: userMembership.isActive,
        paymentStatus: userMembership.paymentStatus,
        membership: userMembership.membership,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
export async function POST(req: Request) {
  try {
    await connectDB();

    const userId = (req as any).user?.id;

    if (!userId) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 },
      );
    }

    const { membershipId, durationInDays } = await req.json();

    if (!membershipId || !durationInDays) {
      return NextResponse.json(
        { success: false, message: "membershipId and durationInDays required" },
        { status: 400 },
      );
    }

    const existingMembership = await UserMembership.findOne({
      user: userId,
      isActive: true,
      expiryDate: { $gte: new Date() },
    });

    if (existingMembership) {
      return NextResponse.json(
        { success: false, message: "User already has active membership" },
        { status: 409 },
      );
    }

    const startDate = new Date();
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + durationInDays);

    const userMembership = await UserMembership.create({
      user: userId,
      membership: membershipId,
      startDate,
      expiryDate,
      isActive: true,
      paymentStatus: "PAID",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Membership created successfully",
        data: userMembership,
      },
      { status: 201 },
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
