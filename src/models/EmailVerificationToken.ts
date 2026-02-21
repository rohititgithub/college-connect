import { Schema, model, models } from "mongoose";

const EmailVerificationTokenSchema = new Schema(
  {
    email: { type: String, required: true },
    tokenHash: { type: String, required: true, unique: true },
    expiresAt: { type: Date, required: true },
  },
  { timestamps: true }
);

export default
  models.EmailVerificationToken ||
  model("EmailVerificationToken", EmailVerificationTokenSchema);
