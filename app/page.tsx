import Home from "@/components/pages/Home";
import { createSEO } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = createSEO({
  title: "Sell Gold for Instant Cash in Hyderabad | SGold — Trusted Gold Buyers",
  description:
    "SGold is Hyderabad&#39;s most trusted gold buyer. Sell old gold jewellery, release pledged gold, and get instant cash or bank transfer in 15 minutes. XRF-tested, 100% transparent. Visit a branch today.",
  keywords: [
    "gold buyers in Hyderabad",
    "sell gold Hyderabad",
    "release pledged gold Hyderabad",
    "cash for gold Hyderabad",
    "old gold buyers Hyderabad",
    "sell jewellery for cash Hyderabad",
  ],
  url: "https://s-gold.in",
});

export default function HomePage() {
  return <Home />;
}
