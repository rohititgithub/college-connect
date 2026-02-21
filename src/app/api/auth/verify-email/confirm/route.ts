import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import EmailVerificationToken from "@/models/EmailVerificationToken";
import User from "@/models/User";
import { verifyHashedToken } from "@/lib/token";

export async function POST(req: Request) {
  const { token } = await req.json();

  if (!token) {
    return NextResponse.json(
      { error: "Token missing" },
      { status: 400 }
    );
  }

  await connectDB();

  const record = await EmailVerificationToken.findOne();

  if (!record) {
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 400 }
    );
  }

  const isValid = await verifyHashedToken(token, record.tokenHash);

  if (!isValid || record.expiresAt < new Date()) {
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 400 }
    );
  }

  await User.updateOne(
    { email: record.email },
    { emailVerified: true }
  );

  await EmailVerificationToken.deleteOne({ _id: record._id });

  return NextResponse.json({ success: true });
}
