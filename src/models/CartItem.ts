import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface ICartItem extends Document {
  cart_id: Types.ObjectId;
  product_id: Types.ObjectId;
  quantity: number;

  createdAt: Date;
  updatedAt: Date;
}

const cartItemSchema: Schema<ICartItem> = new Schema(
  {
    cart_id: {
      type: Schema.Types.ObjectId,
      ref: "Cart",
      required: true,
    },

    product_id: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { timestamps: true },
);

cartItemSchema.index({ cart_id: 1, product_id: 1 }, { unique: true });

const CartItem: Model<ICartItem> =
  mongoose.models.CartItem ||
  mongoose.model<ICartItem>("CartItem", cartItemSchema);

export default CartItem;
