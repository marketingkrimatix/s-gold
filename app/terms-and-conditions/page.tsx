import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
  const sections = [
    {
      title: "1. Ownership of Gold",
      content: "By offering gold to S-Gold, you represent and warrant that you are the legal and rightful owner of the gold and that it is free from all encumbrances and claims. You agree to indemnify S-Gold against any third-party claims regarding ownership."
    },
    {
      title: "2. Identification Requirements",
      content: "In compliance with Indian anti-money laundering regulations and local laws, sellers must provide valid government-issued photo identification (Aadhaar/PAN) and address proof. S-Gold reserves the right to refuse service if documentation is insufficient or suspicious."
    },
    {
      title: "3. Valuation & Testing",
      content: "All gold is tested using non-destructive XRF technology. You agree that the valuation provided by S-Gold is based on current live market rates minus deductions for impurities, stones, and administrative costs. The final offer provided is based on these objective technical findings."
    },
    {
      title: "4. Payment Terms",
      content: "Payments are made via Cash (within statutory limits), IMPS, RTGS, or UPI. Once payment is accepted and processed, the transaction is considered final and irreversible. S-Gold is not responsible for delays caused by banking system failures."
    },
    {
      title: "5. Intellectual Property",
      content: "All content on this website, including text, graphics, logos, and software, is the property of S-Gold and is protected by copyright and intellectual property laws. Unauthorized use or reproduction is strictly prohibited."
    },
    {
      title: "6. Limitation of Liability",
      content: "S-Gold shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services or website, even if S-Gold has been advised of the possibility of such damages."
    },
    {
      title: "7. Termination",
      content: "We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms."
    },
    {
      title: "8. Governing Law",
      content: "These Terms shall be governed and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana."
    },
    {
      title: "9. Changes to Terms",
      content: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms."
    }
  ];

  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Header />
      
      <section className="relative overflow-hidden px-6 py-20 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-10%] top-0 h-96 w-96 rounded-full bg-brand-gold/10 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold">Legal</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">Terms & Conditions</h1>
          <p className="mt-6 text-lg text-text-secondary">
            Please read these terms carefully before transacting with S-Gold.
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
