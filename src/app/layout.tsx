import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Closing from "@/components/Closing";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const BASE_URL = "https://www.speedmax.my";

const description =
  "Since 2010, Speedmax Solutions has built the structured cabling, networks, IP telephony, security and AutoCount accounting systems Malaysian businesses depend on. Headquartered in Johor Bahru, serving Malaysia and Singapore.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Speedmax — Network infrastructure for businesses that can't afford downtime",
    template: "%s — Speedmax",
  },
  description,
  applicationName: "Speedmax",
  authors: [{ name: "Speedmax Solutions Sdn Bhd", url: BASE_URL }],
  creator: "Speedmax Solutions Sdn Bhd",
  publisher: "Speedmax Solutions Sdn Bhd",
  keywords: [
    "Speedmax",
    "Speedmax Solutions",
    "structured cabling Malaysia",
    "structured cabling Johor Bahru",
    "Cat6A installation",
    "fibre optic installation",
    "system integration Malaysia",
    "IP telephony Malaysia",
    "IP PBX",
    "SIP trunk Malaysia",
    "CCTV installation Johor",
    "access control Malaysia",
    "AutoCount Johor Bahru",
    "AutoCount partner Malaysia",
    "ICT contractor Johor",
    "extra-low-voltage contractor",
    "network infrastructure Malaysia",
  ],
  category: "Technology Services",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: BASE_URL,
    siteName: "Speedmax",
    title:
      "Speedmax — Network infrastructure for businesses that can't afford downtime",
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Speedmax — Network infrastructure, engineered for uptime",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Speedmax",
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: [{ url: "/logo.png" }],
  },
  // verification: { google: "REPLACE_WITH_VERIFICATION_TOKEN" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1428" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-MY" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ink text-white">
        <StructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <Closing />
      </body>
    </html>
  );
}
