import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  // Reading the header also keeps this handler from being prerendered at build time.
  const providedSecret = req.headers.get("x-health-check-secret");

  if (process.env.NODE_ENV === "production") {
    const expected = process.env.DB_HEALTH_SECRET;
    if (!expected || providedSecret !== expected) {
      return NextResponse.json({ ok: false }, { status: 404 });
    }
  }

  try {
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ ok: true, database: "connected" });
  } catch (error) {
    console.error("Database health check failed", error);
    return NextResponse.json(
      { ok: false, database: "unreachable" },
      { status: 503 },
    );
  }
}
