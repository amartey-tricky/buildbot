import { Josefin_Sans, Platypi } from "next/font/google";

export const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  weight: ["400", "600", "700"],
});

export const platypi = Platypi({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});
