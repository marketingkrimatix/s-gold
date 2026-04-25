"use client";

import { useEffect, useMemo, useState } from "react";

const purities = [
  { label: "24K", factor: 0.999, description: "99.9% Pure" },
  { label: "22K", factor: 0.916, description: "91.6% Pure (916 Hallmark)" },
  { label: "20K", factor: 0.833, description: "83.3% Pure" },
  { label: "18K", factor: 0.750, description: "75.0% Pure" },
];

export default function GoldCalculator() {
  const [grams, setGrams] = useState("10");
  const [purity, setPurity] = useState("22K");
  const [rate24k, setRate24k] = useState<number | null>(null);
  const [updatedAt, setUpdatedAt] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRate = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch("/api/gold-rate");
        const data = await res.json();

        if (!res.ok || !data.success) {
          throw new Error(data.error || "Failed to load rate");
        }

        setRate24k(data.rate24kPerGram);
        setUpdatedAt(data.updatedAt);
      } catch (err) {
        // TODO : Remove this when the API is working, its just for demo purpose
        setRate24k(14508);
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchRate();
  }, []);

  const selectedPurity = purities.find((p) => p.label === purity) ?? purities[1];
  const gramsValue = Number(grams) || 0;

  const estimatedValue = useMemo(() => {
    if (!rate24k) return 0;
    return gramsValue * rate24k * selectedPurity.factor;
  }, [gramsValue, rate24k, selectedPurity.factor]);

  return (
    <section className="rounded-[2rem] border border-card-border bg-card-bg p-6 backdrop-blur-xl">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold">
          Gold Calculator
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-text-primary">
          Estimate your gold value
        </h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-text-secondary">Weight (grams)</label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={grams}
            onChange={(e) => setGrams(e.target.value)}
            className="w-full rounded-2xl border border-card-border bg-input-bg px-4 py-3 text-text-primary outline-none placeholder:text-text-muted"
            placeholder="Enter grams"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-text-secondary">Purity</label>
          <select
            value={purity}
            onChange={(e) => setPurity(e.target.value)}
            className="w-full rounded-2xl border border-card-border bg-input-bg px-4 py-3 text-text-primary outline-none"
          >
            {purities.map((item) => (
              <option key={item.label} value={item.label}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-gold-accent-border bg-gold-accent-bg p-5">
        {loading ? (
          <p className="text-text-secondary">Loading live gold rate...</p>
        ) : 
        // error ? (
        //   <p className="text-red-400">{error}</p>
        // ) : 
        (
          <>
            <div className="flex items-center justify-between">
              <p className="text-sm text-brand-gold-soft font-medium uppercase tracking-wider">Live 24K Gold Rate</p>
              <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            </div>
            <p className="mt-1 text-3xl font-semibold text-text-primary">
              ₹ {rate24k?.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / gram
            </p>
            
            <div className="mt-6 space-y-3 pt-6 border-t border-gold-accent-border/30">
              <div className="flex justify-between text-sm">
                <span className="text-text-tertiary">Gross Weight</span>
                <span className="text-text-primary font-medium">{gramsValue}g</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-tertiary">Purity ({purity})</span>
                <span className="text-text-primary font-medium">{(selectedPurity.factor * 100).toFixed(1)}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-tertiary">Net Gold Weight</span>
                <span className="text-brand-gold-soft font-semibold">{(gramsValue * selectedPurity.factor).toFixed(3)}g</span>
              </div>
              
              <div className="pt-4 mt-2 border-t border-dashed border-gold-accent-border/50">
                <p className="text-xs text-text-tertiary uppercase tracking-widest mb-1">Estimated Payout</p>
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-gold-rich to-brand-gold">
                  ₹ {estimatedValue.toLocaleString("en-IN", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </p>
              </div>
            </div>

            <p className="mt-6 text-[10px] text-text-muted leading-relaxed italic">
              * This is an estimate based on live MCX spot rates. Actual payout is calculated after precise XRF testing at our branch.
            </p>
            <p className="mt-2 text-[10px] text-text-muted">
              Last Updated: {updatedAt ? new Date(updatedAt).toLocaleTimeString() : "-"}
            </p>
          </>
        )}
      </div>
    </section>
  );
}
