// import { Html, Body, Container, Text, Hr, Link } from "@react-email/components";

// type Props = {
//   firstName: string;
//   ticketId: string;
// };

// export default function TicketConfirmationEmail({
//   firstName,
//   ticketId,
// }: Props) {
//   return (
//     <Html>
//       <Body style={{ fontFamily: "Arial, sans-serif" }}>
//         <Container>
//           <Text>Hey {firstName},</Text>

//           <Text style={{ fontWeight: "bold", fontSize: "18px" }}>
//             BOOM 💥 You’re officially IN for HOLI BASH 🌈🔥
//           </Text>

//           <Text>Your ticket has been successfully confirmed.</Text>

//           <Hr />

//           <Text style={{ fontWeight: "bold" }}>🎟 Ticket Details</Text>

//           <Text>
//             Event: HOLI BASH Season - 5 <br />
//             Date: 18 February 2026 <br />
//             Venue: PUBG FARMS, Behind AMITY NOIDA <br />
//             Entry Time: 12:00 PM
//           </Text>

//           <Hr />

//           <Text style={{ fontWeight: "bold", fontSize: "16px" }}>
//             🎫 Your Ticket Link:
//           </Text>

//           <Link
//             href={`${process.env.APP_URL}/ticket?id=${ticketId}`}
//             style={{
//               fontSize: "20px",
//               fontWeight: "bold",
//               backgroundColor: "#f4f4f4",
//               padding: "10px",
//               textAlign: "center",
//               letterSpacing: "2px",
//             }}
//           >
//             VIEW YOUR TICKET
//           </Link>

//           <Text>👉 Please carry this Ticket ID at the entry gate.</Text>

//           <Hr />

//           <Text>
//             See you in the colors, <br />
//             Team INGLU 🌈🔥
//           </Text>
//         </Container>
//       </Body>
//     </Html>
//   );
// }
