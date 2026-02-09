export function generateMemberId() {
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();

  return `FRONT-ROW-${random}`;
}