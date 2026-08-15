import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: {
    default: "Uttara Adhunik Medical College",
    template: "%s | Uttara Adhunik Medical College"
  },
  applicationName: "Uttara Adhunik Medical College",
  description:
    "Official website of Uttara Adhunik Medical College, featuring admissions, facilities, academic information, notices, and institutional updates.",
  openGraph: {
    title: "Uttara Adhunik Medical College",
    description:
      "Official website of Uttara Adhunik Medical College, featuring admissions, facilities, academic information, notices, and institutional updates.",
    siteName: "Uttara Adhunik Medical College",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Uttara Adhunik Medical College",
    description:
      "Official website of Uttara Adhunik Medical College, featuring admissions, facilities, academic information, notices, and institutional updates."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>{children}</body>
    </html>
  );
}
