// import { contactFormSchema } from "./schema/contact";
// import { queriesFormSchema } from "./schema/queries";
import { signupFormSchema } from "./schema/signup";
import { loginSchema } from "./schema/login";
import { accountUpdateSchema, emailSchema, mobileSchema } from "@/lib/account";

// export function validateContactForm(formData: unknown) {
//   const result = contactFormSchema.safeParse(formData);

//   if (result.success) {
//     return {};
//   }

//   const errors: Record<string, string> = {};
//   result.error.issues.forEach((issue) => {
//     const path = issue.path[0] as string;
//     if (!errors[path]) {
//       errors[path] = issue.message;
//     }
//   });
//   return errors;
// }

// export function validatequeriesForm(formData: unknown) {
//   const result = queriesFormSchema.safeParse(formData);

//   if (result.success) {
//     return {};
//   }

//   const errors: Record<string, string> = {};

//   result.error.issues.forEach((issue) => {
//     const field = issue.path[0] as string;

//     if (!errors[field]) {
//       errors[field] = issue.message;
//     }
//   });

//   return errors;
// }

export function validateSignupForm(formData: unknown) {
  const result = signupFormSchema.safeParse(formData);

  if (result.success) {
    return {
      isValid: true,
      errors: {} as Record<string, string>,
    };
  }

  const errors: Record<string, string> = {};

  result.error.issues.forEach((issue) => {
    const field = issue.path[0] as string;
    if (!errors[field]) {
      errors[field] = issue.message;
    }
  });

  return {
    isValid: false,
    errors,
  };
}

export function validateLoginForm(formData: unknown) {
  const result = loginSchema.safeParse(formData);

  if (result.success) {
    return {
      isValid: true,
      errors: {} as Record<string, string>,
    };
  }

  const errors: Record<string, string> = {};

  result.error.issues.forEach((issue) => {
    const field = issue.path[0] as string;
    if (!errors[field]) {
      errors[field] = issue.message;
    }
  });

  return {
    isValid: false,
    errors,
  };
}
export function validateAccountPayload(data: unknown) {
  return accountUpdateSchema.parse(data);
}

/* 🔹 Validate specific field */
export function validateAccountField(field: "email" | "mobile", value: string) {
  const result =
    field === "email"
      ? emailSchema.safeParse(value)
      : mobileSchema.safeParse(value);

  return result;
}
