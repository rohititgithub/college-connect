import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Cart } from "@/models/Cart";
import type { CartItem } from "@/types/cart";

export async function GET(req: Request) {
  const userId = req.headers.get("x-user-id");
  if (!userId) {
    return NextResponse.json({ items: [] });
  }

  await connectDB();

  const cart = await Cart.findOne({ userId }).lean();

  return NextResponse.json(cart ?? { userId, items: [] });
}

export async function POST(req: Request) {
  const userId = req.headers.get("x-user-id");
  if (!userId) {
    return NextResponse.json({ message: "Missing user id" }, { status: 400 });
  }

  const item: CartItem = await req.json();
  await connectDB();

  const cart =
    (await Cart.findOne({ userId })) ??
    (await Cart.create({ userId, items: [] }));

  const existingItem = cart.items.find(
    (i: CartItem) => i.productId === item.productId,
  );

  if (existingItem) {
    existingItem.quantity += item.quantity;
  } else {
    cart.items.push(item);
  }

  await cart.save();

  return NextResponse.json(cart);
}

export async function PUT(req: Request) {
  const userId = req.headers.get("x-user-id");
  if (!userId) {
    return NextResponse.json(null, { status: 400 });
  }

  const body: { productId: string; quantity: number } = await req.json();

  await connectDB();

  const cart = await Cart.findOne({ userId });
  if (!cart) return NextResponse.json({ userId, items: [] });

  if (body.quantity <= 0) {
    cart.items = cart.items.filter(
      (item: CartItem) => item.productId !== body.productId,
    );
  } else {
    const item = cart.items.find(
      (i: CartItem) => i.productId === body.productId,
    );
    if (item) item.quantity = body.quantity;
  }

  await cart.save();

  return NextResponse.json(cart);
}

export async function DELETE(req: Request) {
  const userId = req.headers.get("x-user-id");
  if (!userId) {
    return NextResponse.json(null, { status: 400 });
  }

  const body: { productId: string } = await req.json();
  await connectDB();

  const cart = await Cart.findOne({ userId });
  if (!cart) return NextResponse.json({ userId, items: [] });

  cart.items = cart.items.filter(
    (item: CartItem) => item.productId !== body.productId,
  );

  await cart.save();

  return NextResponse.json(cart);
}
