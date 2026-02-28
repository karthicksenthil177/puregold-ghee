import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PureGold Ghee | Pure. Golden. Timeless.",
  description:
    "Experience the finest handcrafted ghee made from pure A2 milk. PureGold Ghee — where tradition meets purity.",
  keywords: ["ghee", "A2 ghee", "organic ghee", "bilona ghee", "pure ghee", "premium ghee"],
  openGraph: {
    title: "PureGold Ghee | Pure. Golden. Timeless.",
    description:
      "Experience the finest handcrafted ghee made from pure A2 milk.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
