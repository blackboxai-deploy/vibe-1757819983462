import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Bloom Wellness - Weight Loss & Self-Care for Women",
  description: "Empowering women through holistic wellness, sustainable weight loss, and self-care practices. Join our supportive community and transform your life from the inside out.",
  keywords: "women wellness, weight loss, self-care, holistic health, women empowerment, lifestyle transformation",
  authors: [{ name: "Bloom Wellness" }],
  creator: "Bloom Wellness",
  openGraph: {
    title: "Bloom Wellness - Weight Loss & Self-Care for Women",
    description: "Empowering women through holistic wellness, sustainable weight loss, and self-care practices.",
    type: "website",
    locale: "en_US",
    siteName: "Bloom Wellness",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloom Wellness - Weight Loss & Self-Care for Women",
    description: "Empowering women through holistic wellness, sustainable weight loss, and self-care practices.",
  },
  robots: "index, follow",
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body 
        className={cn(
          "min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 font-sans antialiased",
          playfair.variable,
          inter.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}