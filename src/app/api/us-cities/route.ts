import { NextResponse, type NextRequest } from "next/server";
import { getUsCities, getUsStateName } from "@/lib/us-locations";

export const runtime = "nodejs";

// The city list is static data, so browsers and CDNs can cache it for a day.
const CACHE_HEADERS = {
  "Cache-Control": "public, max-age=86400, s-maxage=86400",
};

export function GET(req: NextRequest) {
  const state = req.nextUrl.searchParams.get("state") ?? "";
  if (!getUsStateName(state)) {
    return NextResponse.json(
      { status: false, code: 400, message: "Please select a valid state." },
      { status: 400 },
    );
  }

  return NextResponse.json(
    { status: true, code: 200, cities: getUsCities(state) },
    { headers: CACHE_HEADERS },
  );
}
