import { google } from "googleapis";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import FrontRowUser from "@/models/FrontRowUser";

export async function POST() {
  try {
    await connectDB();

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: "Sheet1!A:G",
    });

    const rows = response.data.values;
    if (!rows || rows.length <= 1) {
      return NextResponse.json({ message: "No rows found" });
    }

    const dataRows = rows.slice(1);

    let inserted = 0;
    let skipped = 0;

    for (const row of dataRows) {
      const [timestamp, memberId, name, email, contact, college, city] = row;

      if (!email || !contact || !memberId) {
        skipped++;
        continue;
      }

      const normalizedEmail = email.toLowerCase().trim();
      const normalizedContact = contact.replace(/\D/g, "");

      try {
        await FrontRowUser.create({
          memberId,
          name,
          email: normalizedEmail,
          contact: normalizedContact,
          college,
          city,
          source: "sheet",
        });
        inserted++;
      } catch (err: unknown) {
        if (
          typeof err === "object" &&
          err !== null &&
          "code" in err &&
          (err as { code?: number }).code === 11000
        ) {
          skipped++;
        } else {
          throw err;
        }
      }
    }

    return NextResponse.json({
      success: true,
      inserted,
      skipped,
    });
  } catch (error) {
    console.error("Sheet sync error:", error);
    return NextResponse.json({ error: "Sheet sync failed" }, { status: 500 });
  }
}
