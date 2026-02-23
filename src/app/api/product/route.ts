import { NextResponse } from "next/server";
import Product from "@/models/Product";
import { v4 as uuidv4 } from "uuid";
import { connectDB } from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const { category, refId } = body;

    if (!category || !refId) {
      return NextResponse.json(
        { success: false, message: "Category and refId are required." },
        { status: 400 },
      );
    }

    const product = await Product.create({
      productId: uuidv4(),
      category,
      refId,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Product created successfully",
        data: product,
      },
      { status: 201 },
    );
  } catch (error: unknown) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 409 },
    );
  }
}

export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("productId");

    if (!productId) {
      const products = await Product.findOne({ productId });

      if (!products) {
        return NextResponse.json(
          {
            success: false,
            message: "No products found",
          },
          { status: 404 },
        );
      }

      return NextResponse.json({
        success: true,
        data: products,
      });
    }

    const product = await Product.find().sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: product });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

export async function DELETE(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("productId");

    if (!productId) {
      return NextResponse.json(
        { success: false, message: "productId is required" },
        { status: 400 },
      );
    }

    const deleted = await Product.findOneAndDelete({ productId });

    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
