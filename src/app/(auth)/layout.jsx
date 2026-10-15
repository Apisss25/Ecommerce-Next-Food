import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/session";
import { AuthBackground } from "@/components/auth/AuthBackground";

export default async function AuthLayout({ children }) {
  const user = await getCurrentUser();
  if (user) redirect("/");

  return <AuthBackground>{children}</AuthBackground>;
}
