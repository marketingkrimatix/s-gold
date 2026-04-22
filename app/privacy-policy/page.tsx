import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect information that you provide directly to us, including contact information (name, phone number, email) and documentation required for gold valuation and legal compliance (Aadhaar, PAN, Bank Details). We may also collect technical data such as your IP address, browser type, and device identifiers when you interact with our website."
    },
    {
      title: "2. How We Use Your Information",
      content: "Your information is used to process transactions, comply with government regulations for gold buying, provide you with a transparent valuation of your assets, improve our website performance, and occasionally send you service-related updates."
    },
    {
      title: "3. Data Retention",
      content: "We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements as mandated by Indian financial regulations."
    },
    {
      title: "4. Cookies and Tracking",
      content: "We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent."
    },
    {
      title: "5. Information Sharing & Disclosure",
      content: "We do not sell your personal data. We only share information with government authorities when legally required or with trusted service providers who assist in our operations (e.g., bank transfer processing and identity verification services)."
    },
    {
      title: "6. Third-party Links",
      content: "Our website may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit."
    },
    {
      title: "7. Children's Privacy",
      content: "Our services are not intended for use by children under the age of 18. We do not knowingly collect personally identifiable information from anyone under the age of 18."
    },
    {
      title: "8. Security",
      content: "The security of your data is important to us. We implement robust security measures to protect your data. All physical documentation is stored securely, and digital data is encrypted. However, no method of transmission over the Internet or method of electronic storage is 100% secure."
    }
  ];

  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Header />

      <section className="relative overflow-hidden px-6 py-20 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-10%] top-0 h-96 w-96 rounded-full bg-brand-gold/10 blur-[100px]" />
          <div className="absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-brand-primary/10 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold">Legal</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">Privacy Policy</h1>
          <p className="mt-6 text-lg text-text-secondary">
            Your privacy is important to us. This policy explains how S Gold collects, uses, and protects your information.
          </p>

          <div className="mt-16 space-y-12">
            {sections.map((section) => (
              <div key={section.title} className="rounded-3xl border border-card-border bg-card-bg p-8 backdrop-blur-xl">
                <h2 className="text-xl font-bold text-text-primary">{section.title}</h2>
                <p className="mt-4 leading-8 text-text-secondary">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-gold-accent-border bg-gold-accent-bg p-8 text-center">
            <p className="text-text-primary font-medium">Questions about our privacy practices?</p>
            <p className="mt-2 text-text-secondary">Contact us at <a href="mailto:support@s-gold.in" className="text-brand-gold underline">support@s-gold.in</a></p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
