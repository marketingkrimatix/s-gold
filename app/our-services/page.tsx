'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";

export default function OurServicesPage() {
  return (
    <main className="min-h-screen bg-transparent text-text-primary">
      <Header />
      <ServicesSection />
      <Footer />
    </main>
  );
}