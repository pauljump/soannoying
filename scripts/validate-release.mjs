import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const dir = join(root, "data", "observations");
const required = ["url", "subreddit", "seen_at", "name", "plain_name", "category", "fixability", "evidence_excerpt", "source_type"];
const fixability = new Set(["software", "hardware-physical", "policy-social", "unclear"]);
const files = readdirSync(dir).filter((file) => file.endsWith(".jsonl")).sort();
const manifest = JSON.parse(readFileSync(join(root, "data", "release-manifest.v0.1.0.json"), "utf8"));
const manifestFiles = new Map(manifest.files.map((file) => [file.path.replace("data/observations/", ""), file]));
let rows = 0;

for (const file of files) {
  const body = readFileSync(join(dir, file), "utf8");
  const releaseFile = manifestFiles.get(file);
  if (!releaseFile) throw new Error(`${file}: missing from release manifest`);
  const lines = body.trimEnd().split("\n");
  if (!body.endsWith("\n")) throw new Error(`${file}: must end with a newline`);
  for (const [index, line] of lines.entries()) {
    let row;
    try { row = JSON.parse(line); } catch { throw new Error(`${file}:${index + 1}: invalid JSON`); }
    const keys = Object.keys(row).sort();
    if (keys.join("|") !== [...required].sort().join("|")) throw new Error(`${file}:${index + 1}: unexpected fields`);
    for (const key of required) if (typeof row[key] !== "string" || !row[key].trim()) throw new Error(`${file}:${index + 1}: invalid ${key}`);
    if (!row.url.startsWith("https://web.archive.org/")) throw new Error(`${file}:${index + 1}: source is not a Wayback URL`);
    if (row.source_type !== "reddit") throw new Error(`${file}:${index + 1}: unsupported source_type`);
    if (!fixability.has(row.fixability)) throw new Error(`${file}:${index + 1}: invalid fixability`);
    if (row.name.length > 500 || row.evidence_excerpt.length > 1000) throw new Error(`${file}:${index + 1}: source context is too long`);
    rows++;
  }
  const sha256 = createHash("sha256").update(body).digest("hex");
  if (releaseFile.rows !== lines.length) throw new Error(`${file}: manifest row count does not match`);
  if (releaseFile.sha256 !== sha256) throw new Error(`${file}: manifest SHA-256 does not match`);
  console.log(`${file}: ${lines.length} rows sha256 ${sha256}`);
}

if (!files.length) throw new Error("no observation files found");
if (manifestFiles.size !== files.length) throw new Error("release manifest contains an untracked observation file");
console.log(`validated ${rows} observations across ${files.length} file(s)`);
