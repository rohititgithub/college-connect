import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const JWT_SECRET = process.env.JWT_SECRET!;

export interface JWTPayload {
  userId: string;
  role: "OWNER" | "SUPER_ADMIN" | "ADMIN" | "USER";
  email: string;
}

export function signToken(payload: JWTPayload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string): JWTPayload {
  return jwt.verify(token, JWT_SECRET) as JWTPayload;
}


// here crypto is used fro generate raw token
export function generateToken()
{
  return crypto.randomBytes(32).toString("hex")
}

export async function hashToken(token: string)
{
  return bcrypt.hash(token, 10);
}

export async function verifyHashedToken(
  rawToken: string,
  storedHash: string
)
{
  return bcrypt.hash(rawToken, storedHash);
}

export function tokenExpiry(minutes= 15)
{
  return new Date(Date.now() + minutes * 60 * 1000)
}