import { headers } from "next/headers";
import { auth } from "./auth";

export const getSession = async () => {
  return auth.api.getSession({ headers: await headers() });
};

export const requireRole = async (...roles) => {
  const session = await getSession();

  if (!session || !roles.includes(session.user.role)) {
    throw new Error("Tidak diizinkan");
  }

  return session;
};
