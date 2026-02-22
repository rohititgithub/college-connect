import {
  BookOpenCheck,
  CalendarClock,
  CreditCard,
  MailCheck,
  Megaphone,
  MessageSquareReply,
  PackagePlus,
  PhoneCall,
  QrCode,
  Ticket,
} from "lucide-react";
import { NotificationType } from "./notificationTypes";

export const NOTIFICATION_ICONS: Record<NotificationType, React.ElementType> = {
  NEW_PRODUCT_ADDED: PackagePlus,
  EMAIL_VERIFIED: MailCheck,
  PHONE_VERIFIED: PhoneCall,
  COURSE_UPDATED: BookOpenCheck,
  REFUND_PROCESSED: CreditCard,
  QR_CODE_GENERATED: QrCode,
  TICKETS_ALMOST_SOLD_OUT: Ticket,
  CONTACT_FORM_REPLY: MessageSquareReply,
  QUERY_FORM_REPLY: MessageSquareReply,
  CLASS_SCHEDULE_CHANGED: CalendarClock,
  NEW_ANNOUNCEMENT: Megaphone,
};
