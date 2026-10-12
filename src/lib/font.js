import {
  Alegreya,
  Bitter,
  Inter,
  Lora,
  Merriweather,
  Nunito,
  Poppins,
  Raleway,
  Roboto,
  Slabo_27px,
} from "next/font/google";

export const alegreya = Alegreya({
  subsets: ["latin"],
  variable: "--font-alegreya",
});

export const bitter = Bitter({
  subsets: ["latin"],
  variable: "--font-bitter",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const slabo = Slabo_27px({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-slabo",
});