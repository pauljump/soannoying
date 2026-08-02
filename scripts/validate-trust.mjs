import { readFileSync } from "node:fs";

const registry = JSON.parse(readFileSync("data/subjects/registry.json", "utf8"));
const budget = registry.default_budget;
const errors = [];

if (registry.default_model !== "gpt-5.5") errors.push("default model must remain gpt-5.5");
if (registry.default_reasoning !== "low") errors.push("default reasoning must remain low");
if (registry.claude_enabled !== false) errors.push("Claude must remain disabled by default");
if (budget.concurrency !== 1) errors.push("default concurrency must remain 1");
if (budget.pages_per_source > 10) errors.push("pages_per_source exceeds the autonomous cap");
if (budget.max_model_calls > 20) errors.push("max_model_calls exceeds the autonomous cap");
if (budget.max_input_tokens > 50000) errors.push("max_input_tokens exceeds the autonomous cap");

const ids = new Set();
for (const subject of registry.subjects) {
  if (!subject.id || ids.has(subject.id)) errors.push(`duplicate or missing subject id: ${subject.id}`);
  ids.add(subject.id);
  if (!subject.label || !subject.source_notes) errors.push(`incomplete subject: ${subject.id}`);
}

if (errors.length) {
  console.error(errors.map(error => `ERROR ${error}`).join("\n"));
  process.exit(1);
}

console.log(`trust contract valid: ${registry.subjects.length} subjects; model ${registry.default_model}; concurrency ${budget.concurrency}`);
