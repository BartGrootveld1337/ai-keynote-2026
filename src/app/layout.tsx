import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Je Volgende Collega Is Geen Mens — NLdigital Ondernemersdag 2026",
  description:
    "AI Keynote door Bart Grootveld — NLdigital Ondernemersdag, 15 april 2026",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className="overflow-hidden h-screen w-screen">{children}</body>
    </html>
  );
}
