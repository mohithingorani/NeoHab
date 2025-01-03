import { gothamFont, gothamFontLight, ralewayFont } from "@/fonts";


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
