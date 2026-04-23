import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ayrton Creative",
  description: "Ayrton Creative - Premium Animation & VFX Studio",
};

import Preloader from "@/components/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased dark ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-brand-black text-brand-white" suppressHydrationWarning>
        <Preloader />
        <Navigation />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
