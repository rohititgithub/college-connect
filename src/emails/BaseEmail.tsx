import { Html, Body, Container, Text, Button } from "@react-email/components";

type ContactAutoReplyProps = {
  name: string;
  title: string;
  message: string;
  actionText?: string;
  actionUrl?: string;
};

export default function ContactAutoReply({
  name,
  title,
  message,
  actionText,
  actionUrl,
}: ContactAutoReplyProps) {
  return (
    <Html>
      <Body>
        <Container>
          <Text>Hi {name},</Text>

          <Text style={{ fontWeight: "bold" }}>{title}</Text>
          <Text>{message}</Text>
          
          {actionText && actionUrl && (
            <Button href={actionUrl}>{actionText}</Button>
          )}

          <Text>
            Regards,
            <br />
            INGLU Team
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
