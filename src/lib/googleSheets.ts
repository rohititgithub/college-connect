import { google } from "googleapis";

// Create Google Auth using Service Account credentials
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS!),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

// Create authenticated Sheets client
const sheets = google.sheets({
  version: "v4",
  auth,
});

// Type for contact data
type ContactData = {
  name: string;
  contact: string;
  email: string;
  reason: string;
  message: string;
};

type CollaborationData = {
  fullName: string;
  brandName: string;
  email: string;
  phone: string;
  links?: string;
  category: string;
  physicalStore: string;
  exhibitedBefore: string;
};

// Main function to append contact to Google Sheets
export async function syncContactToGoogleSheets(contact: ContactData) {
  try {
    console.log("Appending to Spreadsheet ID:", process.env.SPREADSHEET_ID);

    // (Optional but great for debugging access)
    await sheets.spreadsheets.get({
      spreadsheetId: process.env.SPREADSHEET_ID!,
    });
    console.log("Spreadsheet access confirmed");

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID!,
      range: "A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            contact.name,
            contact.contact,
            contact.email,
            contact.reason,
            contact.message,
            new Date().toISOString(),
          ],
        ],
      },
    });

    console.log(" Google Sheets append success. Status:", response.status);
    return response;
  } catch (error: any) {
    console.error("Google Sheets API ERROR");
    console.error("Message:", error?.message);
    console.error("Errors:", error?.errors);
    console.error("Response:", error?.response?.data);
    throw error;
  }
}
export async function syncQueriesToGoogleSheets(query: {
  name: string;
  email: string;
  message: string;
}) {
  console.log("QUERIES_SHEET_ID:", process.env.QUERIES_SHEET_ID);

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.QUERIES_SHEET_ID!,
    range: "A:D",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [query.name, query.email, query.message, new Date().toISOString()],
      ],
    },
  });
}
export async function syncCollaborationToGoogleSheets(data: CollaborationData) {
  try {
    console.log("COLLAB_SHEET_ID:", process.env.COLLAB_SHEET_ID);

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.COLLAB_SHEET_ID!,
      range: "A:I",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            data.fullName,
            data.brandName,
            data.email,
            data.phone,
            data.links || "",
            data.category,
            data.physicalStore,
            data.exhibitedBefore,
            new Date().toISOString(),
          ],
        ],
      },
    });

    console.log("Collaboration Google Sheets append success");
  } catch (error: any) {
    console.error("Collaboration Google Sheets API ERROR");
    console.error("Message:", error?.message);
    console.error("Response:", error?.response?.data);
    throw error;
  }
}
