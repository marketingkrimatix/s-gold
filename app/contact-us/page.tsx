import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";

const contactUsFaqs = [
  {
    question: "How can I contact SGold?",
    answer: "You can reach us through multiple channels: Phone & WhatsApp at +91 99969 09999 and +91 91664 64916, or email us at support@s-gold.in.",
  },
  {
    question: "What details are required in the contact form?",
    answer: "You need to provide your name, phone number, location, and whether you want to sell gold or release pledged gold."
  },
  {
    question: "Can I contact you on WhatsApp?",
    answer: "Yes, our provided phone numbers are available for WhatsApp communication for instant price estimates."
  },
  {
    question: "What kind of assistance can I expect when I contact you?",
    answer: "Our team of experts provides transparent advice on gold valuation, current market rates, and the scientific testing process."
  },
  {
    question: "Are your consultations free?",
    answer: "Yes, we provide 100% free consultations and scientific gold purity testing with no obligation to sell."
  }
];

const allBranches = [
  {
    city: "Biramguda / Ameenpur",
    address: "First floor, 65/B, House no 12, Ammenpur Biramguda Rd, opposite Mro office, Raghavendra Colony, Hyderabad, Telangana 502032",
    mapUrl: "https://maps.app.goo.gl/uMBfDzgBsW4NmTeW6"
  },
  {
    city: "Shamshabad",
    address: "H.No. 22-57/1/E/D, Shamshabad Village, above Radhe tiles & Sanitory, Rallaguda, Hyderabad, Telangana 501218",
    mapUrl: "https://maps.app.goo.gl/gfHoRNwdD8dw63VL7"
  },
  {
    city: "Manikonda",
    address: "Flat No. 402, 4th Floor, BRS Plaza, Lanco Hills Rd, Shivapuri Colony, Hanuman Nagar, Shirdi Sai Nagar, Manikonda, Hyderabad, Telangana 500089",
    mapUrl: "https://maps.app.goo.gl/hwD7SR3ZnNa5EfcY9"
  },
  {
    city: "Kukatpally (Phase VI)",
    address: "1st Floor, 15/24/12, LIG 39/4, Kukatpally Housing Board Colony, Phase VI LIG Flats, Kukatpally, Hyderabad, Telangana 500072",
    mapUrl: "https://maps.app.goo.gl/NAz6NrGR9W34j3ch8"
  },
  {
    city: "Dilshuknagar",
    address: "1st Floor, Sathya Sadhan, Pillar no 4-102, Durga Nagar, Krishna Nagar, Dilsukhnagar, Hyderabad, Telangana 500060",
    mapUrl: "https://maps.app.goo.gl/NvpfRG1Fx9eu9arq8"
  },
  {
    city: "Balkampet",
    address: "First floor, Shop No. 7, 1-393, Balkampet Rd, near Sr Nagar, Balkampet, Hyderabad, Telangana 500038",
    mapUrl: "https://maps.app.goo.gl/AQZi1kHpaiqQHVWcA"
  },
  {
    city: "Chaitanyapuri",
    address: "No.5, X, 13-16-29, 1st Floor, Shop, 103, Road, Chaitanyapuri Main Rd, opposite Sanjay Super Market, P & T Colony, Dilsukhnagar, Hyderabad, Telangana 500060",
    mapUrl: "https://maps.app.goo.gl/hAf8kgPSmHn9KqG59"
  },
  {
    city: "Narsingi",
    address: "Shop no 2, First Floor, X Road, opp. Muthoot Fincorp, Narsingi, Hyderabad, Telangana 500089",
    mapUrl: "https://maps.app.goo.gl/1MuGBWLAg6ECrxig6"
  },
  {
    city: "Uppal",
    address: "First floor, H.No. 10-26/1, Uppal Main Rd, opp. Sai Jyothi Eye Hospital, Beerappagadda, Uppal, Hyderabad, Telangana 500039",
    mapUrl: "https://maps.app.goo.gl/EAL8UbQenBwzWxNo8"
  },
  {
    city: "Chakripuram (ECIL)",
    address: "No.1 H, First Floor, Shutter, Chakripuram Rd, above Sri Raja Rajeshwari Book Depot, ECIL, Post, Kushaiguda, Hyderabad, Telangana 500062",
    mapUrl: "https://maps.app.goo.gl/TFfNykrHo4hgTVLV9"
  },
  {
    city: "Bowenpally",
    address: "Shop no. 10, 1st Floor, PNR Complex, above Mahaveera Tiffins & Meals, opp. Kotak Mahindra Bank, Trillinga Colony, Tar Bund, Bowenpally, Hyderabad, Secunderabad, Telangana 500009",
    mapUrl: "https://maps.app.goo.gl/Ghg3apE993Ah1645A"
  },
  {
    city: "Habsiguda",
    address: "1st Floor, 1-7-40/3, Street No. 8, above IFB Point, opp. Axis Bank, Satyanarayana Swamy Nagar, Habsiguda, Hyderabad, Telangana 500013",
    mapUrl: "https://maps.app.goo.gl/v9Dn81ti9xW8dFts5"
  },
  {
    city: "Serilingampalle",
    address: "First Floor, H.No, 5-5, opp. Sancta Maria International School, Adarsh Nagar, Serilingampalle (M), Hyderabad, Telangana 500019",
    mapUrl: "https://maps.app.goo.gl/Hr4dhKh5GJExpUki7"
  },
  {
    city: "Khairatabad",
    address: "Plot No. 6, nilayam, Siva Sai Apartment, 2-198/3, Khairatabad Rd, opp. SBI Bank, Anand Nagar Colony, Khairtabad, Hyderabad, Telangana 500004",
    mapUrl: "https://maps.app.goo.gl/WJWbu3sPitfnsFiN6"
  },
  {
    city: "Gudimalkapur",
    address: "Jafferguda, Satyanarayan Nagar, Gudimalkapur, Hyderabad, Telangana 500006",
    mapUrl: "https://maps.app.goo.gl/DiRmKX237pxHZPBc6"
  },
  {
    city: "Jubilee Hills",
    address: "2nd Floor, Road No. 36, Jawahar Colony, Jubilee Hills, Hyderabad, Telangana 500033",
    mapUrl: "https://maps.app.goo.gl/bfpNZj8n4J1zZt8v8"
  },
  {
    city: "Kukatpally (Shanthi Nagar)",
    address: "2, first, B J P Office, H.No. 5-1-27, beside Crystal Beauty and Wellness Spa, opp. Reliance Digital, Shanthi Nagar, Kukatpally, Hyderabad, Telangana 500072",
    mapUrl: "https://maps.app.goo.gl/HWx5bakDDDwE5y7y6"
  },
  {
    city: "Vanasthalipuram",
    address: "Ground Floor, 5-5-303, Plot No. 136, next to Tupper ware Shop, opp. to Vijaya Diagnostic Center, Vanasthalipuram, Hyderabad, Telangana 500070",
    mapUrl: "https://maps.app.goo.gl/JDbeLA7RqKa18gss5"
  },
  {
    city: "LB Nagar",
    address: "201 2nd Floor, Amritha Pride, Plot no. 11-14-518/1, Siris Rd, above HP Gas Samantha Shiva Sakthi Enterprises, Sirinagar Colony, Snehapuri Colony, L. B. Nagar, Hyderabad, Telangana 500074",
    mapUrl: "https://maps.app.goo.gl/M9u3kHMU2iBAC2Th8"
  },
  {
    city: "Kapra",
    address: "1-1-261/119, Post, Srinivasa Nagar Colony, Kapra, ECIL, Hyderabad, Telangana 500062",
    mapUrl: "https://maps.app.goo.gl/VTVtyn7k8w56XR9m9"
  },
  {
    city: "Suchitra",
    address: "27, Vennelagudda, H No. 6, Suchitra Rd, opp. to FB cakes, next to Green Trends Building, Suchitra, Godavari Homes, Quthbullapur, Hyderabad, Telangana 500067",
    mapUrl: "https://maps.app.goo.gl/KrkpXUoMD2zMMAYD6"
  },
  {
    city: "Shaikpet",
    address: "1st Floor, Shop no. 8, 8-1-284/OU/144, opposite Trusmile Dental Care, OU Colony, Shaikpet, Manikonda, Hyderabad, Telangana 500104",
    mapUrl: "https://maps.app.goo.gl/ur6G8LrrTmGVTnQF8"
  },
  {
    city: "Anandbagh",
    address: "H.No. 23-216, 1st Floor, Above Optical Planet, RK Nagar, X Road, Anandbagh, Malkajgiri, Hyderabad, Telangana 500047",
    mapUrl: "https://maps.app.goo.gl/M2KsmX2KRbD3J2kv7"
  }
];

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Header />

      {/* Hero & Form Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <p className="text-sm uppercase tracking-[0.25em] text-brand-gold">
              Contact Us
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-text-primary lg:text-5xl">
              Let's get in touch
            </h1>
            <p className="mt-6 text-lg text-text-tertiary leading-relaxed">
              Have questions about selling your gold or releasing pledged gold? Our team of experts is ready to help you with transparent advice and live market rates.
            </p>

            <div className="mt-12 space-y-10">
              <div className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gold/10 text-brand-gold">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary">Head Office</h3>
                  <p className="mt-2 text-text-tertiary text-sm leading-relaxed">
                    Plot No. 6, Nilayam, Siva Sai Apartment, 2-198/3, <br />
                    Khairatabad Rd, opp. SBI Bank, Khairtabad, <br />
                    Hyderabad, Telangana 500004
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gold/10 text-brand-gold">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary">Helpline & WhatsApp</h3>
                  <p className="mt-2 text-brand-gold font-bold text-lg">+91 999 690 9999</p>
                  <p className="text-brand-gold font-semibold">+91 916 646 4916 / 77710 77720</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gold/10 text-brand-gold">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary">Email Support</h3>
                  <p className="mt-2 text-text-tertiary font-medium">support@s-gold.in</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 rounded-[3rem] border border-card-border bg-card-bg p-8 lg:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-32 w-32 bg-brand-gold/5 blur-3xl rounded-full" />
            <h2 className="text-2xl font-bold text-text-primary">Request a Call Back</h2>
            <p className="mt-2 text-sm text-text-tertiary mb-10">Get a priority price estimate within minutes.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Main Map Section */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="h-[500px] w-full rounded-[3rem] border border-card-border bg-card-bg overflow-hidden shadow-2xl relative">
          <iframe
            src="https://maps.google.com/maps?q=%20V-Gold%2C%20Hyderabad&t=m&z=10&output=embed&iwloc=near"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Branches List Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-primary lg:text-4xl">Our Branches</h2>
          <p className="mt-4 text-text-tertiary">Visit any of our 20+ locations for instant gold valuation.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allBranches.map((branch, idx) => (
            <div key={idx} className="flex flex-col group rounded-[2rem] border border-card-border bg-card-bg p-8 transition hover:border-brand-gold/30 hover:bg-card-bg-hover">
              <h3 className="text-xl font-bold text-text-primary group-hover:text-brand-gold transition">{branch.city}</h3>
              <p className="mt-4 text-sm leading-relaxed text-text-tertiary flex-grow line-clamp-3">
                {branch.address}
              </p>
              <div className="mt-8">
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold hover:text-brand-gold-soft transition"
                >
                  View in Map
                  <svg className="h-4 w-4 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQSection faqs={contactUsFaqs} />

      <Footer />
    </main>
  );
}
