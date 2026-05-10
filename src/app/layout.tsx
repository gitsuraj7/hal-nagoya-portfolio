import type { Metadata } from "next";
import { Syncopate, Space_Grotesk } from "next/font/google";
import "./globals.css";

const syncopate = Syncopate({
  variable: "--font-syncopate",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SURAJ DAS | ZERO FORMAL TRAINING",
  description: "Portfolio of Suraj Das, builder and MEXT scholarship candidate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syncopate.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
