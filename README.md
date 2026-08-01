# So Annoying

An open, source-tracked corpus of everyday frictions that may now be solvable with AI.

Most complaint datasets stop at sentiment. This project is interested in a narrower and more useful question: where does a recurring human frustration have enough context, an actionable control point, and a measurable outcome for an AI system to actually reduce it?

The repository is an evidence commons, not a list of startup ideas. It keeps four things distinct:

```
source observation -> reviewed problem -> solution proposal -> validation result
```

An observation says that someone encountered a friction. A reviewed problem says multiple observations describe the same thing. A proposal says how a system might help. A validation result says whether it did. Those are different claims and must remain separately attributable.

## Current release

`v0.1` contains 1,340 unreviewed observations from public, Wayback-captured Reddit thread titles, collected on 2026-08-01. The data is a seed set for review, not a canonical catalog and not evidence that any specific product idea will work.

- Sources: `r/mildlyinfuriating`, `r/CrappyDesign`, `r/assholedesign`, `r/badUX`, `r/Windows11`, `r/techsupport`, and `r/apple`
- Acquisition: public Internet Archive Wayback snapshots only; no logged-in or live-platform collection
- Release data: [data/observations/2026-08-01-wayback-reddit.jsonl](data/observations/2026-08-01-wayback-reddit.jsonl)
- Format and release rules: [DATA.md](DATA.md)
- Collection and redaction policy: [SOURCES.md](SOURCES.md)

## What belongs here

An entry is worth advancing when the user-facing friction is concrete enough to investigate:

- Someone is trying to accomplish something and repeatedly loses time, money, agency, access, or confidence.
- The failure mode and affected person can be stated without inventing a solution.
- An AI system could plausibly observe, explain, act, or verify part of the loop.
- A contributor could define what improvement would look like and what would make the intervention unsafe or unacceptable.

Recurring complaints are a discovery signal, not proof of importance. A rare but severe friction can matter; a common complaint can still be impossible, harmful, or not worth automating.

## Use the corpus

```bash
node scripts/validate-release.mjs
```

Read [PROJECT_PLAN.md](PROJECT_PLAN.md) before adding large batches or canonicalizing entries. The intended contribution flow is in [CONTRIBUTING.md](CONTRIBUTING.md).

For new work, open one of these issue types:

- a source-backed [problem review](.github/ISSUE_TEMPLATE/problem-review.yml)
- an [AI solution proposal](.github/ISSUE_TEMPLATE/solution-proposal.yml)

## Principles

1. Evidence first. Keep source observations separate from interpretation.
2. Preserve uncertainty. `unreviewed`, `proposed`, and `validated` are meaningful states, not missing polish.
3. Prefer mechanisms over vibes. A useful problem record names the task, friction, context, and failure mode.
4. AI is a capability hypothesis, not an answer. Name the required capability and the control point.
5. Validation must include harm. A faster workflow that removes agency, privacy, or recourse is not automatically an improvement.

## Project status

This is an early public release. The immediate job is to make the first 1,340 source observations reviewable and to establish a disciplined path from source evidence to peer-reviewed solutions. It is deliberately not trying to enumerate every annoyance people have.

## License and source material

Code and project-authored documentation are MIT-licensed. The release contains short excerpts and links to third-party public material; ownership of that material remains with its authors and platforms. See [DATA_POLICY.md](DATA_POLICY.md) before redistributing the dataset or submitting new source material.
