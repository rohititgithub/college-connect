import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { cookies } from "next/headers";
import { signToken } from "@/lib/token";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email, name, googleId, avatar } = await req.json();

    if (!email || !googleId) {
      return NextResponse.json(
        { message: "Invalid Google data" },
        { status: 400 },
      );
    }

    let user = await User.findOne({
      $or: [{ googleId }, { email }],
    });

    if (!user) {
      user = await User.create({
        name,
        email,
        googleId,
        profilePic: avatar || null,
        emailVerified: true,
        role: "USER",
      });
    }

    if (user && !user.googleId) {
      user.googleId = googleId;
      if (!user.profilePic && avatar) {
        user.profilePic = avatar;
      }
      user.emailVerified = true;
      await user.save();
    }

    const token = signToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    });

    const cookieStore = await cookies();
    cookieStore.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return NextResponse.json(
      {
        message: "Google login successful",
        accessToken: token,
        user,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("GOOGLE LOGIN ERROR:", error);
    return NextResponse.json(
      { message: "Google login failed" },
      { status: 500 },
    );
  }
}
