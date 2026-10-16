import "./globals.css";
import { getCurrentUser } from "@/lib/session";
import { AuthProvider } from "@/components/auth/AuthProvider";

import {
  alegreya,
  bitter,
  inter,
  lora,
  merriweather,
  nunito,
  poppins,
  raleway,
  roboto,
  slabo,
} from "../lib/font";

export const metadata = {
  title: "Food Ecommerce",
};

export default async function RootLayout({ children }) {
  const user = await getCurrentUser();

  return (
    <html lang="en">
      <body
        className={`min-h-full bg-[#F8FDFC]         
        ${alegreya.variable}
        ${bitter.variable}
        ${inter.variable}
        ${lora.variable}
        ${merriweather.variable}
        ${nunito.variable}
        ${poppins.variable}
        ${raleway.variable}
        ${roboto.variable}
        ${slabo.variable}
      `}
      >
        <AuthProvider user={user}>{children}</AuthProvider>
      </body>
    </html>
  );
}
