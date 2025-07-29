import type { Metadata } from "next";
import { DM_Sans, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const dmSans = Montserrat({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});
/*
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

export const metadata: Metadata = {
  title: "StangHacks",
  description: "Stang Hacks is the Tri-Valley's premier hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
