import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
// import EmailVerificationToken from "@/models/EmailVerificationToken";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
// import { generateToken, hashToken, tokenExpiry } from "@/lib/token";
// import { sendAuthEmail } from "@/lib/sendEmail";

export async function POST(req: Request) {
  await connectDB();

  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields required" },
        { status: 400 },
      );
    }

    const exists = await User.findOne({ email });
    if (exists) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 },
      );
    }

    if (!process.env.JWT_SECRET) {
      return NextResponse.json(
        { message: "JWT secret not configured" },
        { status: 500 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      emailVerified: false,
    });
    // console.log("SIGNUP API HIT");

    // const token = generateToken();
    // console.log("🧾 SAVING EMAIL VERIFICATION TOKEN");

    // const tokenHash = await hashToken(token);

    // await EmailVerificationToken.create({
    //   email,
    //   tokenHash,
    //   expiresAt: tokenExpiry(15),
    // });

    // await sendAuthEmail({
    //   to: email,
    //   name,
    //   type: "VERIFY_EMAIL",
    //   token,
    // });

    return NextResponse.json(
      { message: "Signup successful!", userId: user._id },
      { status: 201 },
    );
  } catch (err: unknown) {
    let errorMessage = "An internal server error occurred";

    if (err instanceof Error) {
      errorMessage = err.message;
    }
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
