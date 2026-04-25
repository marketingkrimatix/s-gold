import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

const branches = [
  {
    city: "Khairatabad (Head Office)",
    address: "Plot No. 6-2-198/3, Siva Sai Nilayam, Khairatabad, Hyderabad. Opposite SBI Bank",
    phone: "+91 99969 09999",
    slug: "khairatabad"
  },
  {
    city: "Kukatpally",
    address: "H.No. 5-1-27/2, 1st Floor, Near BJP Office, Beside Crystal Beauty and Wellness Spa, Kukatpally, Hyderabad. Opposite Reliance Digital",
    phone: "+91 77710 77720",
    slug: "kukatpally"
  },
  {
    city: "Jubilee Hills",
    address: "2nd Floor, Empire Square Building, Rd No-36, Jubilee Hills, Hyderabad, Telangana 500033",
    phone: "+91 91664 64916",
    slug: "jubilee-hills"
  },
  {
    city: "Manikonda",
    address: "1st Floor, Shop no. 8, 8-1-284/OU/144, O U Colony, Shaikpet, Manikonda, Hyderabad. Opposite Trusmile Dental Care",
    phone: "+91 99969 09999",
    slug: "manikonda"
  },
  {
    city: "Nallagandla",
    address: "H.No. 5-5, 1st Floor, Adarsh Nagar Colony, Serilingampally Mandal, Hyderabad. Opposite Sancta Maria International School",
    phone: "+91 99969 09999",
    slug: "nallagandla"
  },
  {
    city: "As Rao Nagar",
    address: "1-1-261/119, Srinivas Nagar, Kapra, ECIL Post, Hyderabad, Telangana 500062",
    phone: "+91 99969 09999",
    slug: "as-rao-nagar"
  },
  {
    city: "Dilshuknagar",
    address: "Pillar no 4-102, 1st Floor, Sathya Sadhan, Durga Nagar, Krishna Nagar, Dilshuknagar, Hyderabad, Telangana 500060",
    phone: "+91 99969 09999",
    slug: "dilshuknagar"
  },
  {
    city: "Uppal",
    address: "H.No. 10-26/1, 1st Floor, Opp. Sai Jyothi Eye Hospital, Uppal Main road, Hyderabad, Telangana 500039",
    phone: "+91 99969 09999",
    slug: "uppal"
  },
  {
    city: "Vanasthalipuram",
    address: "# 5-5-303, Plot No. 136, Ground Floor, Next to Tupperware Shop, Opp. to Vijaya Diagnostic Center, Vanasthalipuram, Hyderabad, Telangana 500070",
    phone: "+91 99969 09999",
    slug: "vanasthalipuram"
  },
  {
    city: "Anandbagh",
    address: "H.No. 23-216, 1st Floor, Above Optical Planet, RK Nagar, Anand Bagh X Road, Malkajgiri, Hyderabad, Telangana 500047",
    phone: "+91 99969 09999",
    slug: "anandbagh"
  },
  {
    city: "Bowenpally",
    address: "Shop no. 10, 1st Floor, Above Mahaveera Tiffins & Meals, PNR Complex, Opp. Kotak Mahindra Bank, Thadbun, Bowenpally, Hyderabad, Telangana 500011",
    phone: "+91 99969 09999",
    slug: "bowenpally"
  },
  {
    city: "Karwan",
    address: "Jaffar Guda, Satnarayan Nagar, Karwan, Hyderabad, Telangana 500006",
    phone: "+91 99969 09999",
    slug: "karwan"
  },
  {
    city: "Shamshabad",
    address: "H.No. 22-57/1/E/D, Above Radhe Tiles & Sanitary, Rallaguda, Shamshabad Village, Hyderabad, Telangana 501218",
    phone: "+91 99969 09999",
    slug: "shamshabad"
  },
  {
    city: "Somajiguda",
    address: "Plot 6, 3-1104/1, 2nd Floor, Priya Apartment, Ayyappa Temple Rd, Somajiguda, Hyderabad, Telangana 500082",
    phone: "+91 99969 09999",
    slug: "somajiguda"
  },
  {
    city: "Narsingi",
    address: "Shop no 2, 1st Floor, Narsingi X Road, Manchirevula, Opp. Muthoot Fincorp, Hyderabad, Telangana 500075",
    phone: "+91 99969 09999",
    slug: "narsingi"
  },
  {
    city: "Chakripuram",
    address: "H.No. 1-10-218/7, 1st Floor, Shutter No.1, Above Sri Raja Rajeshwari Book Depot, Chakripuram, Kushaiguda, ECIL Post, Hyderabad, Telangana 500062",
    phone: "+91 99969 09999",
    slug: "chakripuram"
  },
  {
    city: "Habsiguda",
    address: "#1-7-40/3, 1st Floor, Above IFB Point, Opp. Axis Bank, Street No.8, Habsiguda, Hyderabad, Telangana 500017",
    phone: "+91 99969 09999",
    slug: "habsiguda"
  },
  {
    city: "Champapet",
    address: "H No. 9-5-1, Survey No 1 to 7 Ward No.5, Block No.9, 1st Floor Beside D Mart, Upstair Medplus, Opp. to Union Bank of India, Saroornagar Mandal, Champapet, Hyderabad, Telangana 500079",
    phone: "+91 99969 09999",
    slug: "champapet"
  },
  {
    city: "Suchitra",
    address: "H No. 6-27, Vennelagudda, Opp. to FB Cakes, Next to Green Trends Building, Suchitra Road, Quthubullapur, Hyderabad, Telangana 500067",
    phone: "+91 99969 09999",
    slug: "suchitra"
  },
  {
    city: "LB Nagar",
    address: "Plot no. 11-14-518/1, 201 2nd Floor, Amritha Pride, Siri Nagar Colony, Above HP Gas Samantha Shiva Sakthi Enterprises, Siris Road, LB Nagar, Hyderabad, Telangana 500074",
    phone: "+91 99969 09999",
    slug: "lb-nagar"
  },
];

const locationsFaqs = [
  {
    "question": "Where is your head office located?",
    "answer": "Our head office is located at Plot No. 6-2-198/3, Siva Sai Nilayam, Khairatabad, Hyderabad. Opposite SBI Bank."
  },
  {
    "question": "How many branches does SGold have in Hyderabad?",
    "answer": "We have 20+ branches across Hyderabad, including major areas like Khairatabad, Kukatpally, Jubilee Hills, Manikonda, Dilshuknagar, and LB Nagar."
  },
  {
    "question": "How can I contact your branches?",
    "answer": "You can contact our main helpline at +91 99969 09999 or visit any of our branches directly for a free valuation."
  },
  {
    "question": "Can I visit any branch for gold valuation?",
    "answer": "Yes, you can visit any of our 20+ branches for a free and transparent gold valuation in a secure environment."
  },
  {
    "question": "Do all branches provide the same services?",
    "answer": "Yes, all our branches offer gold valuation, selling services, and pledged gold release with the same level of transparency and security."
  }
]

import Link from "next/link";

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
            Find an SGold near you
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-tertiary">
            Visit any of our convenient locations for a free, transparent valuation in a highly secure environment.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {branches.map(branch => (
            <div key={branch.city} className="flex flex-col rounded-2xl border border-card-border bg-card-bg p-8 transition hover:border-card-border-hover hover:bg-card-bg-hover">
              <h3 className="text-xl font-semibold text-text-primary">{branch.city}</h3>
              <p className="mt-4 text-sm leading-relaxed text-text-tertiary flex-grow">
                {branch.address}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a href={`tel:${branch.phone}`} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-gold hover:text-brand-gold-soft">
                  {branch.phone}
                </a>
                {branch.slug && (
                  <Link href={`/locations/${branch.slug}`} className="text-sm font-medium text-text-primary underline decoration-brand-gold/40 underline-offset-4 hover:decoration-brand-gold">
                    View Details →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-24 max-w-7xl">
          <h2 className="text-2xl font-bold text-text-primary text-center">Other Cities</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { city: "Tirupati", slug: "tirupati", address: "Bairagi Patteda, Kesavayana Gunta, Tirupati, Andhra Pradesh 517501" },
              { city: "Warangal", slug: "warangal", address: "Adalath Centre, Hanamkonda, Warangal, Telangana 506001" },
              { city: "Karimnagar", slug: "karimnagar", address: "Mukarampura, Karimnagar, Telangana 505001" }
            ].map(city => (
              <Link
                key={city.city}
                href={`/locations/${city.slug}`}
                className="group rounded-2xl border border-card-border bg-card-bg p-6 transition hover:border-brand-gold/30 hover:bg-card-bg-hover"
              >
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-brand-gold transition">{city.city}</h3>
                <p className="mt-2 text-xs text-text-tertiary leading-relaxed">{city.address}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-brand-gold opacity-0 group-hover:opacity-100 transition">View City Page →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqs={locationsFaqs} />


      <Footer />
    </main>
  );
}
