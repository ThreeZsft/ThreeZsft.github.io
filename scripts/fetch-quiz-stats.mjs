// Pulls the Titan quiz event counts from GoatCounter and writes them to
// public/titan-quiz/stats.json, which the results page at /titan-quiz/stats/ reads.
//
// Runs in the deploy workflow before the site is built. Needs a GoatCounter API
// key with read-only statistics access in the GOATCOUNTER_TOKEN secret. Without
// one it leaves the file alone, so the build never fails because of stats.

import { writeFile } from "node:fs/promises";

const SITE = "https://temper-titans.goatcounter.com";
const START = "2026-11-25T00:00:00Z"; // the day the quiz launched
const OUT = new URL("../public/titan-quiz/stats.json", import.meta.url);

const token = process.env.GOATCOUNTER_TOKEN;
if (!token) {
  console.log("GOATCOUNTER_TOKEN is not set, skipping quiz stats.");
  process.exit(0);
}

const end = new Date();
end.setUTCMinutes(0, 0, 0);
end.setUTCHours(end.getUTCHours() + 1);

const counts = {};
const seen = [];
try {
  for (let page = 0; page < 10; page++) {
    const q = new URLSearchParams({ start: START, end: end.toISOString(), limit: "100" });
    for (const id of seen) q.append("exclude_paths", String(id));
    const res = await fetch(`${SITE}/api/v0/stats/hits?${q}`, {
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      signal: AbortSignal.timeout(30_000),
    });
    console.log(`GoatCounter page ${page + 1}: HTTP ${res.status}`);
    if (!res.ok) throw new Error(`GoatCounter answered ${res.status}: ${await res.text()}`);
    const body = await res.json();
    for (const h of body.hits ?? []) {
      seen.push(h.path_id);
      const path = String(h.path).replace(/^\//, "");
      if (path.startsWith("quiz/")) counts[path.slice(5)] = (counts[path.slice(5)] ?? 0) + h.count;
    }
    if (!body.more) break;
  }
} catch (err) {
  console.warn(`Could not fetch quiz stats, the results page will show no numbers this build. ${err.message}`);
  process.exit(0);
}

await writeFile(OUT, JSON.stringify({ updated: new Date().toISOString(), counts }, null, 2) + "\n");
console.log(`Wrote ${Object.keys(counts).length} quiz stats to public/titan-quiz/stats.json`);
