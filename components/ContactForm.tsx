'use client';

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    service: "Sell Gold & Get Cash for Gold",
  });
  const [errors, setErrors] = useState<{ phone?: string; email?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors and validate
    setErrors({});
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneDigits = formData.phone.replace(/[^0-9]/g, '');
    
    const newErrors: { phone?: string; email?: string } = {};
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (phoneDigits.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        location: "",
        service: "Sell Gold & Get Cash for Gold",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center fade-up">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-green-500">
          <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-text-primary">Message Sent!</h2>
        <p className="mt-4 text-text-tertiary">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-bold uppercase tracking-widest text-brand-gold hover:text-brand-gold-soft transition"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-text-tertiary block mb-2 ml-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-2xl border border-card-border bg-input-bg px-5 py-4 text-text-primary placeholder-text-muted outline-none focus:border-brand-gold/50 transition shadow-inner"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-text-tertiary block mb-2 ml-1">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className={`w-full rounded-2xl border ${errors.phone ? 'border-red-500/50' : 'border-card-border'} bg-input-bg px-5 py-4 text-text-primary placeholder-text-muted outline-none focus:border-brand-gold/50 transition shadow-inner`}
            placeholder="+91 00000 00000"
          />
          {errors.phone && <p className="mt-1.5 ml-1 text-xs text-red-500 font-medium">{errors.phone}</p>}
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-text-tertiary block mb-2 ml-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={`w-full rounded-2xl border ${errors.email ? 'border-red-500/50' : 'border-card-border'} bg-input-bg px-5 py-4 text-text-primary placeholder-text-muted outline-none focus:border-brand-gold/50 transition shadow-inner`}
            placeholder="Your email address"
          />
          {errors.email && <p className="mt-1.5 ml-1 text-xs text-red-500 font-medium">{errors.email}</p>}
        </div>
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-text-tertiary block mb-2 ml-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full rounded-2xl border border-card-border bg-input-bg px-5 py-4 text-text-primary placeholder-text-muted outline-none focus:border-brand-gold/50 transition shadow-inner"
            placeholder="e.g. Khairatabad"
          />
        </div>
      </div>
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-text-tertiary block mb-3 ml-1">Do you want to?</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full rounded-2xl border border-card-border bg-input-bg px-5 py-4 text-text-primary outline-none focus:border-brand-gold/50 transition shadow-inner appearance-none cursor-pointer"
        >
          <option>Sell Gold & Get Cash for Gold</option>
          <option>Release Pledged Gold</option>
          <option>General Inquiry</option>
        </select>
      </div>

      {status === "error" && (
        <p className="text-red-500 text-sm ml-1">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-4 rounded-full bg-gradient-to-r from-[#F6E7A1] via-[#E9C962] to-[#D4AF37] px-8 py-5 font-bold text-[#330164] shadow-lg shadow-brand-gold/10 transition hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
