import mongoose, { Schema, Document, Types } from "mongoose";

export interface IPayment extends Document {
  user: Types.ObjectId;
  // listing: Types.ObjectId;
  listing: string;
  type: "EVENT" | "COURSE";
  quantity: number;
  totalAmount: number;
  paymentStatus: "PAID" | "PENDING" | "FAILED";
}

/**
 * =========================================
 * PURCHASE SCHEMA
 * =========================================
 * Stores event tickets & course purchases
 */
const PaymentSchema = new Schema<IPayment>(
  {
    // 👤 Buyer
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // 🎟️ Event / Course Reference
    listing: {
      // type: Schema.Types.ObjectId,
      type: String,
      // ref: "Listing",
      required: true,
    },

    // 🏷️ Listing type (EVENT or COURSE)
    type: {
      type: String,
      enum: ["EVENT", "COURSE"],
      required: true,
    },

    // 🔢 Quantity
    quantity: {
      type: Number,
      required: true,
    },

    // 💰 Total price paid
    totalAmount: {
      type: Number,
      required: true,
    },

    // 💳 Payment status
    paymentStatus: {
      type: String,
      enum: ["PAID", "PENDING", "FAILED"],
      default: "PAID",
    },
  },
  { timestamps: true },
);
export default mongoose.models.Payment ||
  mongoose.model<IPayment>("Payment", PaymentSchema);
