import { readFileSync, readdirSync } from "node:fs";

const screenDir = "data/candidates/subject-screens";
const runDir = "data/mining-runs";
const sourceUrls = new Set(readdirSync(runDir).filter(file => file.endsWith(".jsonl")).flatMap(file => readFileSync(`${runDir}/${file}`, "utf8").trim().split("\n").filter(Boolean).map(line => JSON.parse(line).url)));
const rows = readdirSync(screenDir).filter(file => file.endsWith(".jsonl")).flatMap(file => readFileSync(`${screenDir}/${file}`, "utf8").trim().split("\n").filter(Boolean).map(line => JSON.parse(line)));
const errors = [];
const ids = new Set();
for (const row of rows) {
  if (!row.id || ids.has(row.id)) errors.push(`duplicate or missing id: ${row.id}`);
  ids.add(row.id);
  if (row.status !== "screened") errors.push(`${row.id}: status must be screened`);
  if (!row.subject) errors.push(`${row.id}: missing subject`);
  if (!Array.isArray(row.evidence) || row.evidence.length < 2 || row.evidence.length > 6) errors.push(`${row.id}: evidence must contain 2 to 6 URLs`);
  for (const url of row.evidence ?? []) if (!sourceUrls.has(url)) errors.push(`${row.id}: evidence URL is not in mining runs: ${url}`);
}
if (errors.length) {
  console.error(errors.map(error => `ERROR ${error}`).join("\n"));
  process.exit(1);
}
console.log(`validated ${rows.length} subject-screen candidates with exact source evidence`);
