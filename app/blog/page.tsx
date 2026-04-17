import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";

const blogPosts = [
  {
    slug: "how-to-check-gold-purity-at-home",
    title: "How to check gold purity at home before selling",
    excerpt: "Learn the easy and safe methods to get an idea of your gold's purity before you take it to a professional buyer.",
    date: "April 10, 2026",
    category: "Guides"
  },
  {
    slug: "understanding-xrf-technology",
    title: "Why XRF testing is the most secure way to value gold",
    excerpt: "Discover why melting gold is a thing of the past and how XRF machines preserve your jewelry.",
    date: "March 25, 2026",
    category: "Technology"
  },
  {
    slug: "releasing-pledged-gold-guide",
    title: "A step-by-step guide to releasing pledged gold",
    excerpt: "Stuck with high pawnbroker interest rates? Here is how to legally and safely release and sell your pledged gold.",
    date: "March 15, 2026",
    category: "Finance"
  }
];

const blogFaqs = [
  {
    question: "How do I know if my gold is pure?",
    answer: "You can check gold purity at home using simple methods like the magnet test, acid test, or by checking for hallmark stamps. For precise results, visit a professional gold buyer like S-Gold."
  },
  {
    question: "What is XRF technology?",
    answer: "XRF (X-ray Fluorescence) technology is a non-destructive method used to determine the exact composition and purity of gold without melting or damaging it."
  },
  {
    question: "Can I sell pledged gold?",
    answer: "Yes, you can sell pledged gold. You need to clear the outstanding loan amount with the lender to release the gold, after which you can sell it to a buyer like S-Gold."
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Header />
      
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-gold">
            Resources
          </p>
          <h1 className="mt-4 text-4xl font-bold text-text-primary lg:text-5xl">
            S-Gold Journal
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-text-tertiary">
            Insights, guides, and transparency reports from the gold buying industry.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
           {blogPosts.map(post => (
             <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col rounded-2xl border border-card-border bg-card-bg p-6 transition hover:border-card-border-hover hover:bg-card-bg-hover">
                <div className="mb-4 inline-flex self-start rounded-full bg-gold-accent-bg px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold">
                  {post.category}
                </div>
                <h3 className="text-xl font-semibold text-text-primary transition group-hover:text-brand-gold-soft">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-tertiary">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-divider pt-4">
                  <p className="text-xs text-text-muted">{post.date}</p>
                  <span className="text-brand-gold font-medium text-sm transition group-hover:translate-x-1">Read →</span>
                </div>
             </Link>
           ))}
        </div>
      </section>
      <FAQSection faqs={blogFaqs} />

      <Footer />
    </main>
  );
}
