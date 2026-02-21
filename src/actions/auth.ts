"use client";

type LoginFormData = {
  email: string;
  password: string;
};

/* ============================= */
/* LOGIN */
/* ============================= */
export async function login(formData: LoginFormData) {
  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // important for cookies
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        error: data?.message || "Login failed. Please try again.",
      };
    }

    return data;
  } catch (err) {
    console.error("Login error:", err);

    return {
      error: "An unexpected error occurred.",
    };
  }
}

/* ============================= */
/* AUTH CHECK */
/* ============================= */
export async function authenticate() {
  try {
    const res = await fetch("/api/auth/me", {
      credentials: "include",
    });

    if (!res.ok) return null;

    const user = await res.json();

    console.log("AUTH USER:", user);

    return user;
  } catch (err) {
    console.error("Auth check failed:", err);
    return null;
  }
}

/* ============================= */
/* LOGOUT */
/* ============================= */
export async function logoutAction() {
  const res = await fetch("/api/auth/logout", {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Logout failed");
  }

  return true;
}
