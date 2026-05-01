import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  icons: {
    icon: "/images/logo/nvbar.png",
    shortcut: "/images/logo/nvbar.png",
    apple: "/images/logo/nvbar.png",
  },
  keywords: [
    "psikologi",
    "asesmen psikologis",
    "konseling",
    "pendidikan",
    "karir",
    "holistic",
    "educare",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.siteUrl,
    type: "website",
    locale: "id_ID",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/globe.svg",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} Open Graph Image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: ["/globe.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
