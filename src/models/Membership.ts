import mongoose, { Schema, Document, Model, Types } from "mongoose";

/**
 * =========================================
 * MEMBERSHIP SCHEMA
 * =========================================
 * Stores membership plans shown in frontend
 */

/* Here are all the required data */
export interface IMembership extends Document {
  name: string;
  price: number;
  duration: number;
  durationUnit: "DAYS" | "MONTHS" | "YEARS";
  bonusDuration: number;
  features: string[];
  isRecommended: boolean;
  isActive: boolean;
  sortOrder: number;
  createdBy: Types.ObjectId;
  createdByEmail: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * For Membership schema
 */
const membershipSchema: Schema<IMembership> = new Schema(
  {
    // 🏷️ Plan name (Monthly, Quarterly, Yearly)
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    // 💰 Price shown in UI
    price: {
      type: Number,
      required: true,
      min: 0,
    },

    // ⏳ Duration value
    // Monthly = 1, Quarterly = 3, Yearly = 12
    duration: {
      type: Number,
      required: true,
      min: 1,
    },

    // 📆 Duration unit
    durationUnit: {
      type: String,
      enum: ["DAYS", "MONTHS", "YEARS"],
      required: true,
    },

    // 🎁 Bonus duration (free months)
    bonusDuration: {
      type: Number,
      default: 0,
    },

    // 📝 Features list
    features: {
      type: [String],
      default: [],
    },

    // ⭐ Recommended badge
    isRecommended: {
      type: Boolean,
      default: false,
    },

    // 🔄 Enable / disable membership
    isActive: {
      type: Boolean,
      default: true,
    },

    // ↕️ Sorting order
    sortOrder: {
      type: Number,
      default: 0,
    },

    // 👤 Who created this membership
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // 📧 Creator email
    createdByEmail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

/**
 *  Exporting model here
 */
const Membership: Model<IMembership> =
  mongoose.models.Membership ||
  mongoose.model<IMembership>("Membership", membershipSchema);

export default Membership;
