import mongoose, { Schema } from "mongoose";
import { NOTIFICATION_TYPES } from "@/lib/notificationTypes";

const NotificationSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      enum: NOTIFICATION_TYPES,
      required: true,
      index: true,
    },

    status: {
      type: String,
      enum: ["READ", "UNREAD"],
      default: "UNREAD",
      index: true,
    },

    relatedId: {
      type: Schema.Types.ObjectId,
    },

    relatedModel: {
      type: String,
    },

    actionUrl: {
      type: String,
    },
  },
  { timestamps: true },
);

// Indexes
NotificationSchema.index({ userId: 1, createdAt: -1 });
NotificationSchema.index({ userId: 1, status: 1 });

export default mongoose.models.Notification ||
  mongoose.model("Notification", NotificationSchema);
