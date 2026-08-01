# So Annoying

An open project for collecting everyday annoyances that AI might finally make fixable.

The goal is not to make a giant list of complaints. The goal is to find the stuff people keep running into where an AI system could actually help: reading the mess, remembering the context, taking a step, checking the result, or making the next move cheaper.

This repo is the source trail. It keeps these things separate:

```
source observation -> reviewed problem -> solution proposal -> validation result
```

That matters. A post title shows someone hit an annoyance. It does not prove the problem is common, important, or solvable. A reviewed problem says we understand the problem well enough to name it. A solution proposal says how AI might help. A validation result says whether it worked.

## Current release

`v0.1` has 1,340 unreviewed observations from public Reddit thread titles saved by the Internet Archive Wayback Machine. They were collected on 2026-08-01.

Treat this as raw material, not truth. It is not a complete annoyance catalog, and it is not proof that any product idea will work.

- Sources: `r/mildlyinfuriating`, `r/CrappyDesign`, `r/assholedesign`, `r/badUX`, `r/Windows11`, `r/techsupport`, and `r/apple`
- Collection: public Wayback snapshots only; no logged-in scraping and no live platform scraping
- Release data: [data/observations/2026-08-01-wayback-reddit.jsonl](data/observations/2026-08-01-wayback-reddit.jsonl)
- Format and release rules: [DATA.md](DATA.md)
- Source rules: [SOURCES.md](SOURCES.md)

## What belongs here

Something is worth moving forward when it is specific enough to inspect:

- Someone is trying to do something and keeps losing time, money, access, confidence, or control.
- We can say who is affected and what is going wrong without jumping straight to an app idea.
- AI could plausibly observe, explain, act, or check part of the loop.
- We can say what better would look like, and what would make the fix bad or unsafe.

Repeated complaints are a clue, not a verdict. A rare problem can still matter. A common complaint can still be the wrong thing to automate.

## Use the data

```bash
node scripts/validate-release.mjs
```

Read [PROJECT_PLAN.md](PROJECT_PLAN.md) before adding big batches or turning raw observations into problem records. The contribution path is in [CONTRIBUTING.md](CONTRIBUTING.md).

For new work, open one of these issue types:

- a source-backed [problem review](.github/ISSUE_TEMPLATE/problem-review.yml)
- an [AI solution proposal](.github/ISSUE_TEMPLATE/solution-proposal.yml)

## Principles

1. Keep the source trail. Do not turn a post into a claim it does not support.
2. Keep uncertainty visible. `unreviewed`, `proposed`, and `validated` mean different things.
3. Name the actual problem. Who is trying to do what, where does it fail, and why does it matter?
4. Do not treat AI as magic dust. Say what the model or agent needs to do.
5. Check for harm. Faster is not better if it removes privacy, choice, appeal, or control.

## Project status

This is an early public release. The next job is to review the first batch and turn the strongest observations into real problem records.

The point is not to collect every annoyance. The point is to build a public trail from "this keeps bothering people" to "this is a real problem" to "this fix actually worked."

## License and source material

Code and project-written docs are MIT-licensed. The release includes short excerpts and links to public third-party material. That material still belongs to its authors and platforms. See [DATA_POLICY.md](DATA_POLICY.md) before redistributing the data or adding new source material.
