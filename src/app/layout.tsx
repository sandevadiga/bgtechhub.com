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
  metadataBase: new URL('https://bgthub.com'),
  title: {
    default: "BG THUB",
    template: "%s | BG THUB"
  },
  description:
    "BG THUB builds scalable websites, apps, and AI solutions for startups. Fast MVP delivery in 6 weeks. Custom web development, mobile app development & AI integration. Based in Bengaluru.",
  keywords: [
    "BG THUB",
    "web development company in Bengaluru",
    "AI solutions company India",
    "custom website development services",
    "Next.js development agency Bengaluru",
    "mobile app development company India",
    "AI development services India",
    "AI integration for startups",
    "MVP development services",
    "build MVP in 6 weeks",
    "tech partner for startups India",
    "industry-level projects for students",
    "app development",
    "website development",
    "software development",
    "UI/UX design",
    "custom software",
    "digital transformation",
    "startup tech partner",
    "Bengaluru software company"
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
    title: "Web Development Company in Bengaluru | BG THUB",
    description: "BG THUB builds scalable websites, apps, and AI solutions for startups. Fast MVP delivery in 6 weeks. Based in Bengaluru.",
    url: "/",
    siteName: "BG THUB",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BG THUB - Web Development & AI Solutions Company in Bengaluru",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Bengaluru | BG THUB",
    description: "BG THUB builds scalable websites, apps, and AI solutions for startups. Fast MVP delivery in 6 weeks. Based in Bengaluru.",
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
  icons: {
    icon: "/assets/images/favicon_image1.jpeg",
    apple: "/assets/images/favicon_image1.jpeg",
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
