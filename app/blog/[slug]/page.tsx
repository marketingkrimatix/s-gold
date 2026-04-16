import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock content payload
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Header />
      
      <article className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <div className="mb-12 border-b border-divider pb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-gold">
            Category • April 10, 2026
          </p>
          <h1 className="mt-6 text-3xl font-bold leading-tight text-text-primary sm:text-5xl">
             {slug.split("-").join(" ")}
          </h1>
        </div>
        
        <div className="prose prose-invert prose-lg max-w-none text-text-secondary">
           <p className="lead text-xl text-text-primary/90">
              When it comes to selling gold or releasing pledged jewelry, knowledge is power. 
              Understanding how valuations work ensures you get the absolute best price for your precious metals.
           </p>
           <p>
              Many local pawnshops and traditional buyers still use the touchstone method to test gold. 
              While this has historical value, it involves rubbing your gold on a stone, which can lead to minor material loss. 
              More importantly, it relies heavily on the evaluator's subjective judgment.
           </p>
           <h2 className="text-text-primary mt-10 mb-4 text-2xl font-semibold">The XRF Testing Advantage</h2>
           <p>
              X-ray Fluorescence (XRF) technology is a non-destructive analytical technique used to determine the exact elemental composition of materials. 
              Here at S-Gold, our German-engineered XRF machines scan your jewelry without any damage, giving us a 100% accurate reading of the total karatage.
           </p>
           <ul className="list-disc pl-6 space-y-2 mt-4 mb-8">
              <li>No melting or acid scratching required.</li>
              <li>Readings are displayed on a screen right in front of you.</li>
              <li>Immediate clarity on the value based on live global gold rates.</li>
           </ul>
           <p>
              Always insist on transparent testing before committing to sell. Your assets deserve premium treatment.
           </p>
        </div>
      </article>

      <Footer />
    </main>
  );
}
