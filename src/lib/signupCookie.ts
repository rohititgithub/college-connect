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

export function saveSignupToCookie(data: SignupCookieData) {
  Cookies.set(COOKIE_NAME, JSON.stringify(data), {
    expires: 7,
    secure: true,
    sameSite: "strict",
  });
}

export function getSignupFromCookie(): SignupCookieData | null {
  const cookie = Cookies.get(COOKIE_NAME);
  return cookie ? (JSON.parse(cookie) as SignupCookieData) : null;
}
