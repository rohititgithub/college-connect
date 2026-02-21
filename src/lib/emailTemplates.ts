export type EmailType =
  | "VERIFY_EMAIL"
  | "RESET_PASSWORD"
  | "TWO_FACTOR"
  | "AUTO_REPLY";

export function getEmailContent(type: EmailType, token: string) {
  switch (type) {
    case "VERIFY_EMAIL":
      return {
        title: "Verify your email address",
        message:
          "Please confirm your email address by clicking the button below.",
        actionText: "Verify Email",
        actionUrl: `${process.env.APP_URL}/verify-email?token=${token}`,
      };

    case "RESET_PASSWORD":
      return {
        title: "Reset your password",
        message:
          "We received a request to reset your password. Click below to continue.",
        actionText: "Reset Password",
        actionUrl: `${process.env.APP_URL}/reset-password?token=${token}`,
      };

    case "TWO_FACTOR":
      return {
        title: "Your 2FA verification code",
        message: "Ue this code to complete you login.",
        actionText: undefined,
        actionUrl: undefined,
      };

    case "AUTO_REPLY":
      return {
        title: "",
        message:
          "Thanks for contacting us. We have received your message and will get back to you shortly.",
        actionText: "Verify Email",
        actionUrl: `${process.env.APP_URL}/verify-email?token=${token}`,
      };
  }
}
