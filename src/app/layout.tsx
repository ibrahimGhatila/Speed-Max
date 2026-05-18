import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import UtilityBar from "@/components/UtilityBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.speedmax.my"),
  title: {
    default: "Speedmax — One-Stop Technology Solutions in Johor",
    template: "%s | Speedmax",
  },
  description:
    "Speedmax Solutions provides structured cabling, system integration, IP PBX, security & access control, and AutoCount accounting software for businesses across Malaysia.",
  openGraph: {
    title: "Speedmax — One-Stop Technology Solutions",
    description:
      "Structured cabling, system integration, IP PBX, security & access control, and AutoCount accounting software — built for Malaysian businesses since 2010.",
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
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy-900">
        <UtilityBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
