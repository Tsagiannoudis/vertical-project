import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import FooterPage from "@/components/Footer";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import "./globals.css";
import ScrollToTopButton from "@/components/extraComponents/ScrollToTopButton";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Analytics } from '@vercel/analytics/next';
config.autoAddCss = false;


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
        <Analytics />
        <FooterPage />
        <CookieConsentBanner />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
