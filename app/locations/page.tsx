import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

const branches = [
  {
    city: "Hyderabad (Head Office)",
    address: "Plot No. 6, Nilayam, Siva Sai Apartment, Khairatabad Rd, opp. SBI Bank, Khairatabad, Hyderabad 500004",
    phone: "+91 99969 09999",
  },
  {
    city: "Jubilee Hills",
    address: "2nd floor, Empire Square, S3, Rd Number 36, Jawahar Colony, Jubilee Hills, Hyderabad 500033",
    phone: "+91 91664 64916",
  },
  {
    city: "Kukatpally",
    address: "Plot no. 4-32-41/171/1, Sai Nagar East, Allwyn Colony, Kukatpally, Hyderabad 500072",
    phone: "+91 77710 77720",
  },
  {
    city: "Karwan",
    address: "Jaffar Guda, Satyanarayan Nagar, Karwan, Hyderabad 500006",
    phone: "+91 99969 09999",
  }
];

const locationsFaqs = [
  {
    "question": "Where is your head office located?",
    "answer": "Our head office is located at Plot No. 6, Nilayam, Siva Sai Apartment, Khairatabad Road, opposite SBI Bank, Khairatabad, Hyderabad - 500004."
  },
  {
    "question": "Do you have a branch in Karwan?",
    "answer": "Yes, our Karwan branch is located at Jaffar Guda, Satyanarayan Nagar, Karwan, Hyderabad - 500006."
  },
  {
    "question": "How can I contact your branches?",
    "answer": "You can contact our branches via phone: Head Office & Karwan - +91 99969 09999, Jubilee Hills - +91 91664 64916, Kukatpally - +91 77710 77720."
  },
  {
    "question": "Can I visit any branch for gold valuation?",
    "answer": "Yes, you can visit any of our branches for a free and transparent gold valuation in a secure environment."
  },
  {
    "question": "Do all branches provide the same services?",
    "answer": "Yes, all our branches offer gold valuation, selling services, and pledged gold release with the same level of transparency and security."
  }
]

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Header />
      
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-gold">
            Our Branches
          </p>
          <h1 className="mt-4 text-4xl font-bold text-text-primary lg:text-5xl">
            Find an S-Gold near you
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-tertiary">
            Visit any of our convenient locations for a free, transparent valuation in a highly secure environment.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
           {branches.map(branch => (
             <div key={branch.city} className="rounded-2xl border border-card-border bg-card-bg p-8 transition hover:border-card-border-hover hover:bg-card-bg-hover">
                <h3 className="text-xl font-semibold text-text-primary">{branch.city}</h3>
                <p className="mt-4 text-sm leading-relaxed text-text-tertiary">
                  {branch.address}
                </p>
                <a href={`tel:${branch.phone}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold hover:text-brand-gold-soft">
                   {branch.phone} →
                </a>
             </div>
           ))}
        </div>
      </section>
      <FAQSection faqs={locationsFaqs} />
      

      <Footer />
    </main>
  );
}
