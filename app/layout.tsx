import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Toast from "@/components/ui/Toast";
import BackToTop from "@/components/ui/BackToTop";

import { CartProvider } from "@/context/CartContext";
import { CheckoutProvider } from "@/context/CheckoutContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wearing Abaya | Premium Modest Fashion",
  description:
    "Luxury Abaya, Dress, Mukena & Modest Fashion for Modern Muslimah.",

  keywords: [
    "abaya",
    "dress muslimah",
    "mukena",
    "modest fashion",
    "wearing abaya",
  ],

  authors: [
    {
      name: "Wearing Abaya",
    },
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
  <CheckoutProvider>
    <Toast />

    {children}

    <BackToTop />
  </CheckoutProvider>
</CartProvider>
      </body>
    </html>
  );
}