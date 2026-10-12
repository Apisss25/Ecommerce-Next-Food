import "./globals.css";
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

export default function RootLayout({ children }) {
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
        {children}
      </body>
    </html>
  );
}
