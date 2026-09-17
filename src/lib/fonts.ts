import localFont from "next/font/local";

// Display font — large headlines and editorial statements.
export const fontDisplay = localFont({
  src: "../assets/fonts/BASSET.ttf",
  variable: "--fd",
  display: "swap",
});

// Body font — paragraphs, navigation, buttons, labels.
export const fontBody = localFont({
  src: "../assets/fonts/FUTRST.ttf",
  variable: "--fb",
  display: "swap",
});
