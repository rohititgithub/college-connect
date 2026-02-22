import { NextRequest } from "next/server";
import mongoose from "mongoose";
import Notification from "@/models/Notification";
import { connectDB } from "@/lib/mongodb";

export async function GET(req: NextRequest) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  const since = searchParams.get("since");

  if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
    return new Response("Invalid userId", { status: 400 });
  }

  let lastTimestamp = since ? new Date(since) : new Date();

  const stream = new ReadableStream({
    async start(controller) {
      const send = (data: any) => {
        controller.enqueue(`data: ${JSON.stringify(data)}\n\n`);
      };

      const interval = setInterval(async () => {
        const notifications = await Notification.find({
          userId: new mongoose.Types.ObjectId(userId),
          status: "UNREAD",
          createdAt: { $gt: lastTimestamp },
        })
          .sort({ createdAt: 1 })
          .lean();

        if (notifications.length > 0) {
          lastTimestamp = notifications[notifications.length - 1].createdAt;
          send(notifications);
        }
      }, 2000);

      req.signal.addEventListener("abort", () => {
        clearInterval(interval);
        controller.close();
      });
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
