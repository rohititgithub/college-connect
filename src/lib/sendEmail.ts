// import { Resend } from "resend";
// import React from "react";
// import ContactAutoReply from "@/emails/BaseEmail";
// import { getEmailContent, EmailType } from "./emailTemplates";

// const resend = new Resend(process.env.RESEND_API_KEY);

// type SendEmailProps = {
//   to: string;
//   name: string;
//   type: EmailType;
//   token: string;
// };

// export async function sendAuthEmail({ to, name, type, token }: SendEmailProps) {
//   const content = getEmailContent(type, token);

//   console.log("📧 Sending email to:", to);

//   await resend.emails.send({
//   from: `CollEdge Connect <${process.env.EMAIL_FROM}>`,
//   to: [to],
//   subject: content.title,
//   react: React.createElement(ContactAutoReply, {
//     name,
//     title: content.title,
//     message: content.message,
//     actionText: content.actionText,
//     actionUrl: content.actionUrl,
//   }),
// });
  

//   console.log("📨 Email sent successfully");
//   console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY?.slice(0, 8));
//   console.log("EMAIL_FROM:", process.env.EMAIL_FROM);
// }
