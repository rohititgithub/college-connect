import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import FrontRowUser from "@/models/FrontRowUser";

export async function POST(req: Request) {
  try {
    const cookie = await req.json();
    const { email, contact, memberId, name, college, city } = cookie;

    await connectDB();

    const normalizedEmail = email.toLowerCase().trim();
    const normalizedContact = contact.replace(/\D/g, "");

    let user = await FrontRowUser.findOne({
      email: normalizedEmail,
      contact: normalizedContact,
    });

    if (user) {
      if (user.memberId !== memberId) {
      }

      return NextResponse.json({
        memberId: user.memberId,
      });
    }

    user = await FrontRowUser.create({
      email: normalizedEmail,
      contact: normalizedContact,
      memberId,
      name: name ?? "",
      college: college ?? "",
      city: city ?? "",
      source: "signup",
    });

    return NextResponse.json({ memberId: user.memberId });
  } catch (err) {
    console.error("Auth sync error:", err);
    return NextResponse.json({ error: "Sync failed" }, { status: 500 });
  }
}
