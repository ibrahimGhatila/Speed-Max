import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.speedmax.my"),
  title: {
    default: "Speedmax — Network infrastructure, engineered for uptime",
    template: "%s — Speedmax",
  },
  description:
    "Since 2010, Speedmax has designed, built and maintained the cabling, networks, telephony and accounting systems that keep Malaysian businesses running.",
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
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
