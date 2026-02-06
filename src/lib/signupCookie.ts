import Cookies from "js-cookie";

const COOKIE_NAME = "front-row-signup";

export type SignupCookieData = {
  memberId: string;
  name: string;
  email: string;
  contact: string;
  college: string;
  city: string;
};

function generateMemberId() {
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();

  return `FRONT-ROW-${random}`;
}

export function saveSignupToCookie(
  data: Omit<SignupCookieData, "memberId">,
): SignupCookieData {
  const payload: SignupCookieData = {
    memberId: generateMemberId(),
    ...data,
  };

  Cookies.set(COOKIE_NAME, JSON.stringify(payload), {
    expires: 7,
    secure: true,
    sameSite: "strict",
  });
  return payload;
}

export function getSignupFromCookie():
SignupCookieData | null {
    const cookie = Cookies.get(COOKIE_NAME);
    return cookie? (JSON.parse(cookie) as SignupCookieData): null;
}
