import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { getUserFromRequest } from "@/lib/getUserFromRequest";
import User from "@/models/User";

export async function PATCH(req: Request) {
  try {
    await connectDB();

    const user = await getUserFromRequest();

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 },
      );
    }

    const { field, value } = await req.json();

    const allowedFields = ["name", "email", "mobile"];

    if (!allowedFields.includes(field)) {
      return NextResponse.json(
        { success: false, message: "Invalid field" },
        { status: 400 },
      );
    }

    if (!value || typeof value !== "string") {
      return NextResponse.json(
        { success: false, message: "Invalid value" },
        { status: 400 },
      );
    }
    if (field === "email") {
      const existing = await User.findOne({ email: value });

      if (existing && existing._id.toString() !== user._id.toString()) {
        return NextResponse.json(
          { success: false, message: "Email already in use" },
          { status: 400 },
        );
      }
    }

    await User.findByIdAndUpdate(user._id, { [field]: value });

    return NextResponse.json({
      success: true,
      message: "Profile updated successfully",
    });
  } catch (error) {
    console.error("ACCOUNT UPDATE ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
