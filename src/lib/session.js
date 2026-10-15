import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { apiFetch, TOKEN_COOKIE } from "@/lib/api";

export const getCurrentUser = cache(async () => {
  const token = (await cookies()).get(TOKEN_COOKIE)?.value;
  if (!token) return null;

  const { ok, data } = await apiFetch("/me");
  return ok ? data.user : null;
});

export const requireRole = async (...roles) => {
  const user = await getCurrentUser();

  if (!user) redirect("/login");
  if (!roles.includes(user.role)) redirect("/");

  return user;
};
