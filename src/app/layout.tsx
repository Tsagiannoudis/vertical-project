import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import FooterPage from "@/components/Footer";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import "./globals.css";
import ScrollToTopButton from "@/components/extraComponents/ScrollToTopButton";


const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vertical Project",
  description: "Trainings Teachers and Workshops",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
        <FooterPage />
        <CookieConsentBanner />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
