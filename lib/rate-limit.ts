type Bucket = { hits: number; resetAt: number };
const buckets = new Map<string, Bucket>();

export function rateLimitOk(key: string, opts?: { windowMs?: number; max?: number }) {
  const windowMs = opts?.windowMs ?? 60_000;
  const max = opts?.max ?? 8;
  const now = Date.now();
  const b = buckets.get(key);
  if (!b || now > b.resetAt) {
    buckets.set(key, { hits: 1, resetAt: now + windowMs });
    return true;
  }
  if (b.hits >= max) return false;
  b.hits += 1;
  return true;
}
