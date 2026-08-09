# So Annoying

An open project for collecting everyday annoyances that AI might finally make fixable.

The goal is not to make a giant list of complaints. The goal is to find the big annoyances people keep running into: things that repeat, have a real cost, resist easy workarounds, and still feel weirdly unsolved. Then we can ask whether stronger AI could help: reading the mess, remembering the context, taking a step, checking the result, or making the next move cheaper.

This repo is the source trail. It keeps these things separate:

```
source observation -> reviewed problem -> solution proposal -> validation result
```

That matters. A post title shows someone hit an annoyance. It does not prove the problem is common, important, or solvable. A reviewed problem says we understand the problem well enough to name it. A solution proposal says how AI might help. A validation result says whether it worked.

The filter we care about is in [The Big Annoyance Test](BIG_ANNOYANCE_TEST.md). “Big” and “AI-solvable” are separate judgments. Mosquitoes can be a genuinely big annoyance even if the best solution has nothing to do with AI.

## Current release

`v0.1` has 1,340 unreviewed observations from public Reddit thread titles saved by the Internet Archive Wayback Machine. They were collected on 2026-08-01.

Treat this as raw material, not truth. It is not a complete annoyance catalog, and it is not proof that any product idea will work.

- Sources: `r/mildlyinfuriating`, `r/CrappyDesign`, `r/assholedesign`, `r/badUX`, `r/Windows11`, `r/techsupport`, and `r/apple`
- Collection: public Wayback snapshots only; no logged-in scraping and no live platform scraping
- Release data: [data/observations/2026-08-01-wayback-reddit.jsonl](data/observations/2026-08-01-wayback-reddit.jsonl)
- Format and release rules: [DATA.md](DATA.md)
- Source rules: [SOURCES.md](SOURCES.md)
- First screened candidates: [data/candidates/2026-08-01-big-annoyance-screen.jsonl](data/candidates/2026-08-01-big-annoyance-screen.jsonl)
- Mining method and stopping points: [MINING_LOG.md](MINING_LOG.md)
- Autonomous mining contract: [AUTONOMY.md](AUTONOMY.md)
- Subject registry and pass ledger: [data/subjects/registry.json](data/subjects/registry.json) and [data/mining-passes/](data/mining-passes/)

## Mining progress

The public release is still `v0.1`, but the source-tracked mining work has continued privately. The working list now has `1,878` rough annoyances from `2,460` archived sources across `107` provisional categories. See the [progress note](data/PROGRESS.md) for what that number means. It is not a new public release or a claim that all of these are big annoyances.

The latest Codex screening pass produced `50` stronger published annoyances from the private corpus. They passed a source audit: every record points to real corpus evidence, and every record has multiple distinct source URLs. They are the current public list on the [public page](https://pauljump.github.io/soannoying/). Published means the record passed the current source check and Big Annoyance Test. It does not mean the annoyance is solved, universally measured, or already a reviewed problem record.

The raw leads and screened candidate work stay in the repo, but they are not homepage cards. The public page also has a separate city layer: the first release has `31` published annoyances from San Francisco. City records are not used to filter or redefine the general list.

## What belongs here

Something is worth moving forward when it is specific enough to inspect:

- Someone is trying to do something and keeps losing time, money, access, confidence, or control.
- We can say who is affected and what is going wrong without jumping straight to an app idea.
- AI could plausibly observe, explain, act, or check part of the loop.
- We can say what better would look like, and what would make the fix bad or unsafe.

Repeated complaints are a clue, not a verdict. A rare problem can still matter. A common complaint can still be the wrong thing to automate.

## Use the data

Browse the lightweight public page: https://pauljump.github.io/soannoying/

```bash
node scripts/validate-release.mjs
```

Read [PROJECT_PLAN.md](PROJECT_PLAN.md) and [The Big Annoyance Test](BIG_ANNOYANCE_TEST.md) before adding big batches or turning raw observations into problem records. The contribution path is in [CONTRIBUTING.md](CONTRIBUTING.md).

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

This is an early public release. The current observations are broad raw leads, not a finished list of big annoyances. The next phase is subject-by-subject mining with bounded, source-tracked passes. The trust contract makes the model, budget, stop point, and promotion boundary explicit before a worker runs unattended.

The point is not to collect every annoyance. The point is to build a public trail from "this keeps bothering people" to "this is a real problem" to "this fix actually worked."

## License and source material

Code and project-written docs are MIT-licensed. The release includes short excerpts and links to public third-party material. That material still belongs to its authors and platforms. See [DATA_POLICY.md](DATA_POLICY.md) before redistributing the data or adding new source material.
