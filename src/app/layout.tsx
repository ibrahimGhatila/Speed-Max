import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Closing from "@/components/Closing";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.speedmax.my"),
  title: {
    default: "Speedmax — Network infrastructure for businesses that can't afford downtime",
    template: "%s — Speedmax",
  },
  description:
    "Since 2010, Speedmax has built the cabling, networks, telephony, security and accounting systems Malaysian businesses depend on.",
  openGraph: {
    title: "Speedmax",
    description:
      "Network infrastructure, engineered for uptime — for businesses across Malaysia.",
    siteName: "Speedmax",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ink text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Closing />
      </body>
    </html>
  );
}
