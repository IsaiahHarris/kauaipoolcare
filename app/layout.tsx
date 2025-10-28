import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kauaipoolpros.com"),
  title: {
    default: "Kauai Pool Cleaning & Maintenance | Kauai Pool Pros",
    template: "%s | Kauai Pool Pros",
  },
  description:
    "Kauai Pool Pros delivers weekly pool cleaning, water chemistry balancing, and equipment maintenance for homes, resorts, and vacation rentals across Kauai, Hawaii.",
  keywords: [
    "Kauai pool cleaning",
    "Kauai pool maintenance",
    "Lihue pool service",
    "Princeville pool cleaning",
    "Poipu pool maintenance",
    "Kauai pool company",
    "Hawaii pool service",
  ],
  openGraph: {
    title: "Kauai Pool Cleaning & Maintenance | Kauai Pool Pros",
    description:
      "Kauai Pool Pros delivers weekly pool cleaning, water chemistry balancing, and equipment maintenance for homes, resorts, and vacation rentals across Kauai, Hawaii.",
    url: "https://kauaipoolpros.com",
    siteName: "Kauai Pool Pros",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kauai Pool Cleaning & Maintenance | Kauai Pool Pros",
    description:
      "Kauai Pool Pros delivers weekly pool cleaning, water chemistry balancing, and equipment maintenance for homes, resorts, and vacation rentals across Kauai, Hawaii.",
  },
  alternates: {
    canonical: "https://kauaipoolpros.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
