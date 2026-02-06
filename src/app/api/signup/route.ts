export const runtime = "nodejs";

import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("SHEET ID:", process.env.GOOGLE_SHEET_ID);

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: "Sheet1!A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          new Date().toISOString(),
          body.memberId,
          body.name,
          body.email,
          body.contact,
          body.college,
          body.city,
        ]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Google Sheet error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
