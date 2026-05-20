import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const BASE_URL = "https://www.trenddeck.com.tr";

const description =
  "Trenddeck designs and manufactures decorative wall panels — stone, MDF and wood — milled in our own workshop and installed by our own crews. Turnkey, from sketch to surface.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Trenddeck — Premium decorative wall panels",
    template: "%s — Trenddeck",
  },
  description,
  applicationName: "Trenddeck",
  keywords: [
    "decorative wall panels",
    "interior wall panels",
    "MDF panels",
    "stone wall panels",
    "wood wall panels",
    "custom wall panels",
    "turnkey interior decor",
    "Trenddeck",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en",
    url: BASE_URL,
    siteName: "Trenddeck",
    title: "Trenddeck — Premium decorative wall panels",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Trenddeck",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f1ec" },
    { media: "(prefers-color-scheme: dark)", color: "#1f1c19" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
