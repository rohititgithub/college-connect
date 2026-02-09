import { google } from "googleapis";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import FrontRowUser from "@/models/FrontRowUser";
import { generateMemberId } from "@/lib/generateMemberId";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, contact, college, city } = body;

    await connectDB();

    const user = await FrontRowUser.findOne({ email, contact });

    let memberId: string;
    let isNewUser = false; 

    if (user) {
      memberId = user.memberId;
    } else {
      memberId = generateMemberId();
      isNewUser = true;

      await FrontRowUser.create({
        email,
        contact,
        memberId,
      });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    if (isNewUser) {
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID!,
        range: "Sheet1!A:G",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[
            new Date().toISOString(),
            memberId,
            name,
            email,
            contact,
            college,
            city,
          ]],
        },
      });
    }

    return NextResponse.json({ memberId, isNewUser });

  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Signup failed" },
      { status: 500 }
    );
  }
}
