import localfont from "next/font/local";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";

const ralewayFont = Raleway({
  subsets: ["latin"], // Specify the subsets you need
  weight: ["400", "700"], // Specify the weights you need
});

const gothamFont = localFont({
  src: "/Gotham-Bold.otf",
});
const gothamFontLight = localFont({
  src: "/Gotham-Light.otf",
});

export default function SignUpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${gothamFont.className} ${gothamFontLight.className} ${ralewayFont.className} antialiased`}
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
