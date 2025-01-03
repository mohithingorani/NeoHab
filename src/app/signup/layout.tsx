import localfont from "next/font/local";
import { Raleway } from "next/font/google";

export const ralewayFont = Raleway({
  subsets: ["latin"], // Specify the subsets you need
  weight: ["400", "700"], // Specify the weights you need
});

export const gothamFont = localfont({
  src: "/Gotham-Bold.otf",
});
export const gothamFontLight = localfont({
  src: "/Gotham-Light.otf",
});
export default function SignUpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      style={{
        backgroundImage: `url("background new svg.svg")`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
}
