import mongoose, { Schema, Document, Types } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  mobile?: string;
  profilePic?: string;
  college?: string;
  role: "OWNER" | "SUPER_ADMIN" | "ADMIN" | "USER";
  googleId?: string;
  emailVerified: boolean;
  emailOtp?: string | null;
  emailOtpExpiry?: Date | null;
  createdBy?: Types.ObjectId | null;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
    },

    mobile: {
      type: String,
      unique: true,
      sparse: true,
    },

    profilePic: {
      type: String,
      default: null,
    },

    college: {
      type: String,
      default: null,
    },

    role: {
      type: String,
      enum: ["OWNER", "SUPER_ADMIN", "ADMIN", "USER"],
      default: "USER",
    },

    googleId: {
      type: String,
    },

    emailVerified: {
      type: Boolean,
      default: false,
    },

    emailOtp: {
      type: String,
      default: null,
    },
    emailOtpExpiry: {
      type: Date,
      default: null,
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  { timestamps: true },
);

export default mongoose.models.User ||
  mongoose.model<IUser>("User", userSchema);
