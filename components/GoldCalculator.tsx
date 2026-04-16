"use client";

import { useEffect, useMemo, useState } from "react";

const purities = [
  { label: "24K", factor: 24 / 24 },
  { label: "22K", factor: 22 / 24 },
  { label: "20K", factor: 20 / 24 },
  { label: "18K", factor: 18 / 24 },
  { label: "14K", factor: 14 / 24 },
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
        ) : error ? (
          <p className="text-red-400">{error}</p>
        ) : (
          <>
            <p className="text-sm text-brand-gold-soft">Live 24K gold rate</p>
            <p className="mt-2 text-3xl font-semibold text-text-primary">
              ₹ {rate24k?.toFixed(2)} / gram
            </p>
            <p className="mt-1 text-sm text-text-tertiary">
              Estimated value for {gramsValue || 0}g at {purity}:{" "}
              <span className="font-semibold text-text-primary">
                ₹ {estimatedValue.toFixed(2)}
              </span>
            </p>
            <p className="mt-3 text-xs text-text-muted">
              Updated: {updatedAt ? new Date(updatedAt).toLocaleString() : "-"}
            </p>
          </>
        )}
      </div>
    </section>
  );
}
