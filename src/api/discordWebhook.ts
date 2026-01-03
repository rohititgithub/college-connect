type ContactFormData = {
  name: string;
  email: string;
  contact: string;
  organization: string;
  message: string;
};

const DISCORD_WEBHOOK_URL =
  "https://discord.com/api/webhooks/1449291181086474321/_nxRXeech4ZmXoZHKoV6bjB2nKSIY3WQcnPUtvCBQtq97okavUtdBfWE7rI5qeCpb20M";

export async function sendToDiscord(formData: ContactFormData) {
  const payload = {
    content: `
📩 **New Contact Form Submission**

👤 **Name:** ${formData.name}
🏢 **Organization:** ${formData.organization}
📧 **Email:** ${formData.email}
📞 **Contact:** ${formData.contact}

📝 **Message:**
${formData.message}
    `,
  };

  const res = await fetch(DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to send Discord webhook");
  }
}
