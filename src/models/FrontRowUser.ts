import mongoose from "mongoose";

const FrontRowUserSchema = new mongoose.Schema(
  {
    memberId: { type: String, required: true, unique: true },

    name: { type: String },
    email: { type: String, required: true },
    contact: { type: String, required: true },

    college: { type: String },
    city: { type: String },

    source: {
      type: String,
      enum: ["signup", "sheet"],
      default:"signup",
    },
  },
  { timestamps: true }
);

FrontRowUserSchema.index(
  { email: 1, contact: 1 },
  { unique: true }
);

export default mongoose.models.FrontRowUser ||
  mongoose.model("FrontRowUser", FrontRowUserSchema);
