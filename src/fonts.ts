// fonts.ts
import localFont from "next/font/local";
import { Raleway } from "next/font/google";

export const ralewayFont = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const gothamFont = localFont({
  src: "/Gotham-Bold.otf",
});

export const gothamFontLight = localFont({
  src: "/Gotham-Light.otf",
});
    