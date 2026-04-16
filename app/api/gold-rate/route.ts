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

    const url = `https://api.metalpriceapi.com/v1/latest?api_key=${apiKey}&base=XAU&currencies=INR`;

    const res = await fetch(url, {
      next: { revalidate: 600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch live gold rate");
    }

    const data = await res.json();

    if (!data?.rates?.INR) {
      throw new Error("Invalid API response");
    }

    const inrPerOunce24K = Number(data.rates.INR);
    const inrPerGram24K = inrPerOunce24K / OUNCE_TO_GRAMS;

    return NextResponse.json(
      {
        success: true,
        currency: "INR",
        unit: "gram",
        purity: "24K",
        rate24kPerGram: Number(inrPerGram24K.toFixed(2)),
        ratePerOunce: Number(inrPerOunce24K.toFixed(2)),
        updatedAt: new Date().toISOString(),
        source: "MetalpriceAPI",
      },
      {
        headers: {
          "Cache-Control": "s-maxage=600, stale-while-revalidate=300",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
