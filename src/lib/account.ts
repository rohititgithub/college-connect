import { z } from "zod";

/* 🔹 Update payload schema */
export const accountUpdateSchema = z.object({
  field: z.enum(["email", "mobile"]),
  value: z.string().min(1, "Value is required"),
});

/* 🔹 Email schema */
export const emailSchema = z.string().email("Invalid email address");

/* 🔹 Indian mobile schema */
export const mobileSchema = z
  .string()
  .regex(/^[6-9]\d{9}$/, "Invalid Indian mobile number");
