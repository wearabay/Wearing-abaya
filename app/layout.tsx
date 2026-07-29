import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Toast from "@/components/ui/Toast";
import BackToTop from "@/components/ui/BackToTop";

import { CartProvider } from "@/context/CartContext";
import { CheckoutProvider } from "@/context/CheckoutContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "Wearing.abaya",
    template: "%s | Wearing.abaya",
  },

  description:
    "Luxury modest fashion crafted for the modern Muslimah.",

  keywords: [
    "abaya",
    "modest fashion",
    "muslim fashion",
    "wearing abaya",
    "premium abaya",
    "luxury abaya",
    "muslimah clothing",
    "indonesia abaya",
  ],

  authors: [
    {
      name: "Wearing.abaya",
    },
  ],

  creator: "Wearing.abaya",

  publisher: "Wearing.abaya",

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Wearing.abaya",
    url: baseUrl,
  },

  twitter: {
    card: "summary_large_image",
    creator: "@wearingabaya",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <CheckoutProvider>
            <Toast />

            <Navbar />

            <main className="flex-1">
              {children}
            </main>

            <Footer />

            <BackToTop />
          </CheckoutProvider>
        </CartProvider>
      </body>
    </html>
  );
}