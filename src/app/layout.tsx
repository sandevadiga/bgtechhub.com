import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bgthub.com'), // Replace with your actual domain
  title: {
    default: "BG THUB — From Idea to Impact",
    template: "%s | BG THUB"
  },
  description:
    "BG THUB is a technology company that designs, develops, and launches apps, websites, and AI-powered solutions for startups, businesses, and students.",
  keywords: [
    "BG THUB",
    "technology company",
    "app development",
    "website development",
    "AI solutions",
    "startups",
    "businesses",
    "student projects",
    "software development",
    "mobile app development",
    "web design",
    "UI/UX design",
    "tech agency",
    "custom software",
    "digital transformation",
    "innovation"
  ],
  authors: [{ name: "BG THUB", url: "https://bgthub.com" }],
  creator: "BG THUB",
  publisher: "BG THUB",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "BG THUB — From Idea to Impact",
    description: "BG THUB is a technology company that designs, develops, and launches apps, websites, and AI-powered solutions for startups, businesses, and students.",
    url: "/", 
    siteName: "BG THUB",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add an og-image.jpg to your public folder
        width: 1200,
        height: 630,
        alt: "BG THUB Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BG THUB — From Idea to Impact",
    description: "BG THUB is a technology company that designs, develops, and launches apps, websites, and AI-powered solutions for startups, businesses, and students.",
    images: ["/og-image.jpg"], 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
