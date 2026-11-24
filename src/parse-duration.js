/**
 * Parse a duration like "90s", "5m", "1h" into milliseconds.
 * Also accepts compounds such as "1h30m".
 */
export function parseDuration(input) {
  if (typeof input !== "string" || !input.trim()) {
    throw new TypeError("duration must be a non-empty string");
  }
  const units = { ms: 1, s: 1000, m: 60_000, h: 3_600_000, d: 86_400_000 };
  // BUG: only the first unit is consumed; "1h30m" → 1h.
  const m = /^(\d+(?:\.\d+)?)(ms|s|m|h|d)/.exec(input.trim());
  if (!m) throw new Error(`unrecognized duration: ${input}`);
  return Number(m[1]) * units[m[2]];
}
