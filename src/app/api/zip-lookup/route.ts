import { NextResponse, type NextRequest } from "next/server";
import { getUsStateName, matchUsCity } from "@/lib/us-locations";

export const runtime = "nodejs";

const ZIP_PATTERN = /^\d{5}$/;

interface ZippopotamResponse {
  places?: Array<{
    "place name"?: string;
    "state abbreviation"?: string;
  }>;
}

function reply(code: number, message: string) {
  return NextResponse.json({ status: false, code, message }, { status: code });
}

// Looks up a ZIP code's state and city so the contact form can fill them in.
// The city is only returned when it matches an entry in the City dropdown.
export async function GET(req: NextRequest) {
  const zip = req.nextUrl.searchParams.get("zip") ?? "";
  if (!ZIP_PATTERN.test(zip)) {
    return reply(400, "Enter a valid 5-digit ZIP code.");
  }

  let data: ZippopotamResponse;
  try {
    const res = await fetch(`https://api.zippopotam.us/us/${zip}`, {
      next: { revalidate: 60 * 60 * 24 },
      signal: AbortSignal.timeout(5000),
    });
    if (res.status === 404) return reply(404, "ZIP code not found.");
    if (!res.ok) throw new Error(`Zippopotam responded ${res.status}`);
    data = await res.json();
  } catch (error) {
    console.error("ZIP lookup failed", error);
    return reply(502, "Unable to look up ZIP code.");
  }

  const place = data.places?.[0];
  const state = place?.["state abbreviation"] ?? "";
  if (!getUsStateName(state)) {
    return reply(404, "ZIP code not found.");
  }

  const city = place?.["place name"] ? matchUsCity(state, place["place name"]) : undefined;
  return NextResponse.json({ status: true, code: 200, state, city: city ?? null });
}
