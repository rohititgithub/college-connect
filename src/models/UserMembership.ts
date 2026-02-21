import mongoose, { Schema, Document, Types } from "mongoose";

export interface IUserMembership extends Document {
  user: Types.ObjectId;
  membership: Types.ObjectId;
  startDate: Date;
  expiryDate: Date;
  isActive: boolean;
  paymentStatus: "PENDING" | "PAID" | "FAILED";
  createdAt: Date;
  updatedAt: Date;
}

/**
 * =========================================
 * USER MEMBERSHIP SCHEMA
 * =========================================
 * Tracks which membership a user has bought
 */

const userMembershipSchema = new Schema<IUserMembership>(
  {
    // 👤 User who bought the membership
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // 💎 Membership plan reference
    membership: {
      type: Schema.Types.ObjectId,
      ref: "Membership",
      required: true,
    },

    // ▶️ Membership start date
    startDate: {
      type: Date,
      required: true,
    },

    // ⏹️ Membership expiry date
    expiryDate: {
      type: Date,
      required: true,
    },

    // 🔄 Whether currently active
    isActive: {
      type: Boolean,
      default: true,
    },

    // 💳 Payment status
    paymentStatus: {
      type: String,
      enum: ["PENDING", "PAID", "FAILED"],
      default: "PAID",
    },
  },
  { timestamps: true },
);

// 🧯 Prevent model overwrite error during hot reloads
export default mongoose.models.UserMembership ||
  mongoose.model<IUserMembership>("UserMembership", userMembershipSchema);
