import { Schema, models, model } from "mongoose";

const CartItemSchema = new Schema(
  {
    productId: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    image: { type: String, required: true },
    rating: { type: Number, default: 0 },
  },
  { _id: false },
);

const CartSchema = new Schema(
  {
    userId: { type: String, required: true },
    items: { type: [CartItemSchema], default: [] },
  },
  { timestamps: true },
);

export const Cart = models.Cart || model("Cart", CartSchema);
