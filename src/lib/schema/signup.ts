import { z } from "zod";

export const signupFormSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, "Name is required")
      .min(2, "Name must be at least 2 characters"),

    email: z.email("Enter a valid email address"),

    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(/[a-z]/, "Password must contain at least 1 lowercase letter")
      .regex(/[A-Z]/, "Password must conatain at least 1 uppercase letter")
      .regex(/[0-9]/, "password must conatain at least 1 number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least 1 special character",
      ),

    confirm: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirm, {
    path: ["confirm"],
    message: "Passwords do not match",
  });

export type SignupFormData = z.infer<typeof signupFormSchema>;
