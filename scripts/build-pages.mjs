import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const observationsPath = join(root, "data/observations/2026-08-01-wayback-reddit.jsonl");
const outputPath = join(root, "docs/highlights.js");
const candidatesPath = join(root, "data/candidates/2026-08-09-codex-finalists.jsonl");
const citiesRegistryPath = join(root, "data/cities/registry.json");
const checkOnly = process.argv.includes("--check");

const rows = readFileSync(observationsPath, "utf8")
  .trim()
  .split("\n")
  .map((line) => JSON.parse(line));

const candidates = readFileSync(candidatesPath, "utf8")
  .trim()
  .split("\n")
  .map((line) => JSON.parse(line));

const citiesRegistry = JSON.parse(readFileSync(citiesRegistryPath, "utf8"));
const cities = citiesRegistry.cities.map((city) => ({
  ...city,
      finals: readFileSync(join(root, city.finalsPath), "utf8")
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line))
    .map((item) => ({
      id: item.finalistId,
      title: item.title,
      cityScope: item.city_scope,
      sharedKey: item.shared_key,
      whyBig: item.why_big,
      aiOpening: item.ai_opening,
      uncertainty: item.uncertainty,
      evidence: item.evidence.map((source) => ({
        sourceId: source.sourceId,
        archiveUrl: source.archiveUrl,
      })),
    })),
}));

const termGroups = [
  ["Subscriptions", ["subscription", "cancel", "unsubscribe", "billing", "charged", "stubs"]],
  ["Support", ["support", "customer", "operator", "agent", "phone system", "hold"]],
  ["Apps", ["app", "iphone", "android", "notification", "calendar", "permission"]],
  ["Websites", ["website", "login", "password", "button", "checkout", "search", "form"]],
  ["Files", ["file", "folder", "windows", "install", "update", "transfer", "settings"]],
  ["Design", ["label", "package", "menu", "screen", "keyboard", "printer", "delivery"]],
];

const blockedTerms = [
  "andrew tate",
  "adult website",
  "assault",
  "buy microsoft",
  "dead",
  "death",
  "drinking",
  "ex-classmate",
  "free update",
  "girlfriend",
  "husband",
  "killed",
  "nsfw",
  "promo code",
  "pregnant",
  "silly sheep",
  "whats the worst",
  "wife",
];

function cleanText(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .replace(/[^\x20-\x7e]/g, "'")
    .trim();
}

function matchesTerm(lowerText, term) {
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (term.includes(" ")) return lowerText.includes(term);
  return new RegExp(`\\b${escaped}\\b`, "i").test(lowerText);
}

function bucketFor(title) {
  const lower = title.toLowerCase();
  for (const [bucket, terms] of termGroups) {
    if (terms.some((term) => matchesTerm(lower, term))) return bucket;
  }
  return "Everyday";
}

const publishedFinals = candidates.map((item) => ({
  id: item.id,
  title: item.title,
  bucket: bucketFor(item.title),
  whyBig: item.why_big,
  aiOpening: item.ai_opening,
  uncertainty: item.uncertainty,
  evidence: item.evidence,
}));

function score(row) {
  const title = cleanText(row.name);
  const lower = title.toLowerCase();
  if (blockedTerms.some((term) => lower.includes(term))) return -1;
  if (title.length < 35 || title.length > 170) return -1;
  if (/\b(the|is|to|under|and|or|a)$/i.test(title)) return -1;

  let value = 0;
  for (const [, terms] of termGroups) {
    for (const term of terms) {
      if (matchesTerm(lower, term)) value += 3;
    }
  }
  if (["badUX", "assholedesign", "CrappyDesign", "Windows11", "techsupport", "apple"].includes(row.subreddit)) {
    value += 3;
  }
  if (/\b(no|not|can't|cannot|won't|forces|requires|hiding|trick|scam|wrong|error|problem|help)\b/i.test(title)) {
    value += 2;
  }
  if (/[?!]/.test(title)) value += 1;
  return value;
}

const seen = new Set();
const highlights = rows
  .map((row, index) => {
    const title = cleanText(row.name);
    return {
      id: createHash("sha1").update(`${row.url}\n${title}`).digest("hex").slice(0, 12),
      title,
      source: `r/${row.subreddit}`,
      sourceUrl: row.url,
      bucket: bucketFor(title),
      fixability: row.fixability,
      index,
      score: score(row),
    };
  })
  .filter((item) => {
    const key = item.title.toLowerCase();
    if (item.score < 4 || seen.has(key)) return false;
    seen.add(key);
    return true;
  })
  .sort((a, b) => b.score - a.score || a.index - b.index)
  .slice(0, 48)
  .map(({ score: _score, index: _index, ...item }) => item);

const countsBySource = rows.reduce((counts, row) => {
  const source = `r/${row.subreddit}`;
  counts[source] = (counts[source] ?? 0) + 1;
  return counts;
}, {});

const payload = {
  release: "v0.1",
  collectedAt: "2026-08-01",
  totalObservations: rows.length,
  sourceCount: Object.keys(countsBySource).length,
  countsBySource,
  publishedFinals,
  generalStats: {
    publishedCount: publishedFinals.length,
  },
  cities,
  cityStats: {
    rawLeads: cities.reduce((total, city) => total + city.candidateCount, 0),
    rawObservations: cities.reduce((total, city) => total + city.sourcePages, 0),
    finalCount: cities.reduce((total, city) => total + city.finals.length, 0),
  },
  highlights,
};

const content = `window.SO_ANNOYING_DATA = ${JSON.stringify(payload, null, 2)};\n`;

if (checkOnly) {
  const current = readFileSync(outputPath, "utf8");
  if (current !== content) {
    console.error("docs/highlights.js is out of date. Run npm run build:pages.");
    process.exit(1);
  }
    console.log(`docs/highlights.js is current with ${highlights.length} highlights, ${publishedFinals.length} published annoyances, and ${cities.length} cities`);
} else {
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, content);
  console.log(`wrote docs/highlights.js with ${highlights.length} highlights`);
}
