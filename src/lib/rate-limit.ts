const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 8;

// Best-effort, in-memory limiter. On Vercel each serverless instance keeps
// its own copy, so this slows down casual abuse rather than guaranteeing a
// hard global limit.
const hits = new Map<string, number[]>();

export function getClientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || headers.get("x-real-ip")?.trim() || "unknown";
}

export function checkRateLimit(
  form: string,
  ip: string,
): { allowed: true } | { allowed: false; retryAfterSeconds: number } {
  const key = `${form}:${ip}`;
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    hits.set(key, recent);
    const retryAfterMs = WINDOW_MS - (now - recent[0]);
    return { allowed: false, retryAfterSeconds: Math.ceil(retryAfterMs / 1000) };
  }

  recent.push(now);
  hits.set(key, recent);

  // Drop stale keys occasionally so the map can't grow without bound.
  if (hits.size > 5000) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
  }

  return { allowed: true };
}
