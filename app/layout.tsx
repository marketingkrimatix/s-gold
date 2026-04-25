import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import FloatingContactButtons from "@/components/FloatingContactButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://s-gold.in"),
  title: {
    default: "SGold",
    template: "%s | SGold",
  },
  description:
    "SGold is Hyderabad’s trusted gold buyer for instant cash, pledged gold release, and transparent XRF-tested evaluation.",
  keywords: [
    "gold buyers in Hyderabad",
    "sell gold Hyderabad",
    "release pledged gold Hyderabad",
    "cash for gold Hyderabad",
    "old gold buyers Hyderabad",
    "sell jewellery for cash Hyderabad",
  ],
  openGraph: {
    type: "website",
    siteName: "SGold",
    title: "SGold",
    description:
      "Trusted gold buyers in Hyderabad offering instant cash, bank transfer, and transparent evaluation.",
    url: "https://s-gold.in",
    images: ["/og-default.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
          <FloatingContactButtons />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
