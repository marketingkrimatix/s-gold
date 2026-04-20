import { NextResponse } from "next/server";

const OUNCE_TO_GRAMS = 31.1034768;

export async function GET() {
  try {
    const apiKey = process.env.METALPRICE_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing METALPRICE_API_KEY" },
        { status: 500 }
      );
    }

    // Free tier allows up to 30 days max for historical, we get last 30 days.
    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 3);

    const endDate = today.toISOString().split("T")[0];
    const startDate = thirtyDaysAgo.toISOString().split("T")[0];
    
    // Querying base=XAU natively
    const url = `https://api.metalpriceapi.com/v1/timeframe?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}&base=XAU&currencies=INR`;
    const res = await fetch(url, {
      next: { revalidate: 1 }, // Cache at CDN level for 1 hour to prevent API hits
    });
console.log(res);
    if (!res.ok) {
      const errorText = await res.text();
      console.error("Metalprice API Error:", errorText);
      throw new Error(`Failed to fetch historical gold rate: ${res.statusText}`);
    }

    const data = await res.json();
    console.log("Parsed Metalprice Data:", JSON.stringify(data, null, 2));

    if (!data.success || !data.rates) {
      throw new Error(data?.error?.message || "Invalid API response");
    }

    // Metalprice timeframe rates format: "2024-03-24": {"XAU": ..., "INR": ...}
    // We convert this into a sorted array of points [{date, price}]
    const historicalData = Object.entries(data.rates)
      .map(([dateStr, rates]: [string, any]) => {
        // API returns INR rate per 1 XAU
        const inrPerOunce = Number(rates.INR);
        
        let pricePerGram24K = 0;
        if (inrPerOunce) {
          pricePerGram24K = inrPerOunce / OUNCE_TO_GRAMS;
        }

        return {
          date: dateStr,
          price: Number(pricePerGram24K.toFixed(2)),
        };
      })
      .filter((item) => item.price > 0)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return NextResponse.json(
      {
        success: true,
        data: historicalData,
      },
      {
        headers: {
          "Cache-Control": "s-maxage=3600, stale-while-revalidate=7200",
        },
      }
    );
  } catch (error) {
    console.error("Error in /api/gold-history:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        data: [],
      },
      { status: 500 }
    );
  }
}
