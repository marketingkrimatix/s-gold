// lib/seo.ts
import type { Metadata } from "next";

type SEOInput = {
  title: string;
  description: string;
  keywords: string[];
  url: string;
  image?: string;
};

export function createSEO({
  title,
  description,
  keywords,
  url,
  image = "/og-default.jpg",
}: SEOInput): Metadata {
  const fullTitle = `${title} | SGold`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      title: fullTitle,
      description,
      url,
      images: [image],
    },
  };
}