import mongoose from "mongoose";

const FrontRowUserSchema = new mongoose.Schema(
  {
    memberId: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
  },
  { timestamps: true }
);

FrontRowUserSchema.index(
  { email: 1, contact: 1 },
  { unique: true }
);

export default mongoose.models.FrontRowUser ||
  mongoose.model("FrontRowUser", FrontRowUserSchema);
