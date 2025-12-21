import type { Metadata } from "next";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "CreativezInk",
  description: "Software as a service - (SaaS) company. We build web applications that help businesses grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
