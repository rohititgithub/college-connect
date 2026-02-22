import { cookies } from "next/headers";
import { verifyToken } from "@/lib/token";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function getUserFromRequest() {
  await connectDB();

  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) return null;

  try {
    const decoded = verifyToken(token);
    const user = await User.findById(decoded.userId).select("-password");

    return user || null;
  } catch {
    return null;
  }
}
