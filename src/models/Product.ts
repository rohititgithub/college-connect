import mongoose, { Document, Schema, Model, Types } from "mongoose";

export interface IProduct extends Document {
  productId: string;
  category: "COURSE";
  refId: Types.ObjectId;
}

const productSchema = new Schema<IProduct>(
  {
    productId: {
      type: String,
      required: true,
      unique: true,
    },

    category: {
      type: String,
      enum: ["COURSE"],
      required: true,
    },
    refId: {
      type: Schema.Types.ObjectId,
      required: true,
      refPath: "category",
    },
  },
  {
    timestamps: true,
  },
);

productSchema.index({ category: 1, refId: 1 }, { unique: true });

export default mongoose.model<IProduct>(
  "Product",
  productSchema,
) as Model<IProduct>;
