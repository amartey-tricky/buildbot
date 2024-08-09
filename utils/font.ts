import { Josefin_Sans, Platypi, Timmana, Bitter } from "next/font/google";

export const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  weight: ["400", "600", "700"],
  fallback: ["sans-serif"],
});

export const platypi = Platypi({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  fallback: ["monserrat", "sans-serif"],
});

export const timmana = Timmana({
  weight: ["400"],
  subsets: ["latin"],
});

export const bitter = Bitter({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  fallback: ["sans-serif"],
});
