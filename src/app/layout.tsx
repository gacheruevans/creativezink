import type { Metadata } from "next"
import "./globals.css"
import Footer from "./components/Footer"

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
