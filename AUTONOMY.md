# Autonomous Mining Contract

This is the contract for handing a mining pass to an automated worker.

## Default permissions

An autonomous worker may:

- Read the repository and the approved public sources for one subject.
- Use Codex `gpt-5.5` at low reasoning effort.
- Run one bounded pass at a time.
- Write raw, source-linked observations and a pass report.
- Run validators and build the local Pages artifact.

An autonomous worker may not:

- Use Claude or another paid API path.
- Increase the model, reasoning level, page cap, concurrency, or token budget.
- Add a source that is not in the subject registry.
- Turn observations into candidates, problems, proposals, or claims without a separate review step.
- Push to GitHub or publish without explicit approval for that pass.

## Default pass budget

- One subject per pass.
- At most 10 pages per approved source.
- Concurrency 1.
- At most 20 model calls.
- Stop near 50,000 input tokens.
- Stop on a fetch failure rate above 25%.
- Stop after two consecutive low-yield batches: fewer than 0.75 new raw observations per model call.

The worker records actual usage. These are guardrails, not price estimates.

## Required handoff

Every pass must leave:

1. A manifest naming the subject, sources, model, caps, and stop rules.
2. Raw observations with exact source URLs.
3. A result report showing pages, failures, empty pages, model calls, input tokens, and new rows.
4. A clear recommendation: continue, change sources, compile, or stop.

The next worker reads the last report before doing anything. A missing report is a stop condition.

## Promotion rule

Mining and judgment are separate. A worker can collect evidence autonomously, but candidate compilation and public publication require a deliberate review of provenance, duplicates, uncertainty, and the Big Annoyance Test.
