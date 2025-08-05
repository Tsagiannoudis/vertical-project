import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import FooterPage from "@/components/Footer";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";

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
      <body className={inter.className}>
        <Navbar />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <FooterPage />
      </body>
    </html>
  );
}
