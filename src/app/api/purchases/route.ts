import { NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";

export async function POST(req: Request) {
  try {
    const token = req.headers.get("authorization") || "";
    const body = await req.json();

    const response = await fetch(`${BACKEND_URL}/api/purchases`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { message: "Purchase API proxy error", error: String(error) },
      { status: 500 },
    );
  }
}

export async function GET(req: Request) {
  try {
    const token = req.headers.get("authorization") || "";

    const response = await fetch(`${BACKEND_URL}/api/purchases/my`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { message: "Purchase API proxy error", error: String(error) },
      { status: 500 },
    );
  }
}
