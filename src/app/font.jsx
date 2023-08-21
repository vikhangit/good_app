import { Lexend_Deca, Open_Sans } from "next/font/google";

const LexendDeca = Lexend_Deca({
  weight: ["100","200","300", "400","500", "600", "700", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--laxendDecA-font",
});

const open_sans = Open_Sans({
  weight: "variable",
  style: ["italic", "normal"],
  display: "swap",
  subsets: ["latin"],
  variable: "--open-sans-font",
});

export { LexendDeca, open_sans };
