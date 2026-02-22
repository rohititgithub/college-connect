import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import Notification from "@/models/Notification";

export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const userId = searchParams.get("userId");
    const search = searchParams.get("search");
    const unreadParam = searchParams.get("unread");

    if (!userId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return NextResponse.json({ error: "Invalid userId" }, { status: 400 });
    }

    const query: any = {
      userId: new mongoose.Types.ObjectId(userId),
    };

    if (unreadParam === "true") {
      query.status = "UNREAD";
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { message: { $regex: search, $options: "i" } },
      ];
    }

    const notifications = await Notification.find(query)
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ notifications });
  } catch (err) {
    console.error("GET NOTIFICATIONS ERROR:", err);
    return NextResponse.json(
      { error: "Failed to fetch notifications" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const { userId, title, message, type, relatedId, actionUrl } = body;

    if (!userId || !title || !message || !type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return NextResponse.json({ error: "Invalid userId" }, { status: 400 });
    }

    let cleanRelatedId = relatedId;
    if (cleanRelatedId && !mongoose.Types.ObjectId.isValid(cleanRelatedId)) {
      cleanRelatedId = undefined;
    }

    const notification = await Notification.create({
      userId: new mongoose.Types.ObjectId(userId),
      title,
      message,
      type,
      relatedId: cleanRelatedId
        ? new mongoose.Types.ObjectId(cleanRelatedId)
        : undefined,
      actionUrl,
      status: "UNREAD",
    });

    return NextResponse.json({ notification }, { status: 201 });
  } catch (err) {
    console.error("CREATE NOTIFICATION ERROR:", err);
    return NextResponse.json(
      { error: "Failed to create notification" },
      { status: 500 },
    );
  }
}

export async function PATCH(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const { notificationId } = body;

    if (!notificationId) {
      return NextResponse.json(
        { error: "Missing notificationId" },
        { status: 400 },
      );
    }

    if (!mongoose.Types.ObjectId.isValid(notificationId)) {
      return NextResponse.json(
        { error: "Invalid notificationId" },
        { status: 400 },
      );
    }

    const updated = await Notification.findByIdAndUpdate(
      new mongoose.Types.ObjectId(notificationId),
      { status: "READ" },
      { new: true },
    );

    return NextResponse.json({ notification: updated });
  } catch (err) {
    console.error("MARK READ ERROR:", err);
    return NextResponse.json(
      { error: "Failed to update notification" },
      { status: 500 },
    );
  }
}
