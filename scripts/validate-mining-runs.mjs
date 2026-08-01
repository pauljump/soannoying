import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const dir = join(root, "data", "mining-runs");
const required = ["url", "subreddit", "seen_at", "name", "plain_name", "category", "fixability", "evidence_excerpt", "source_type"];
const fixability = new Set(["software", "hardware-physical", "policy-social", "unclear"]);
const files = readdirSync(dir).filter((file) => file.endsWith(".jsonl")).sort();
let rows = 0;

for (const file of files) {
  const body = readFileSync(join(dir, file), "utf8");
  if (!body.endsWith("\n")) throw new Error(`${file}: must end with a newline`);
  for (const [index, line] of body.trimEnd().split("\n").entries()) {
    let row;
    try { row = JSON.parse(line); } catch { throw new Error(`${file}:${index + 1}: invalid JSON`); }
    if (Object.keys(row).sort().join("|") !== [...required].sort().join("|")) {
      throw new Error(`${file}:${index + 1}: unexpected fields`);
    }
    for (const key of required) {
      if (typeof row[key] !== "string" || !row[key].trim()) throw new Error(`${file}:${index + 1}: invalid ${key}`);
    }
    if (!row.url.startsWith("https://web.archive.org/")) throw new Error(`${file}:${index + 1}: source is not a Wayback URL`);
    if (row.source_type !== "reddit") throw new Error(`${file}:${index + 1}: unsupported source_type`);
    if (!fixability.has(row.fixability)) throw new Error(`${file}:${index + 1}: invalid fixability`);
    if (row.name.length > 500 || row.evidence_excerpt.length > 1000) throw new Error(`${file}:${index + 1}: source context is too long`);
    rows++;
  }
  console.log(`${file}: ${body.trimEnd().split("\n").length} rows`);
}

console.log(`validated ${rows} mining-run observations across ${files.length} file(s)`);
