# Mining Log

This is the record of how the public corpus was made. The point is to show the scale, the cheap filter, the model choice, and where the stopping point was.

## Run 1: public seed

- **Date:** 2026-08-01
- **Sources:** Wayback snapshots of seven public Reddit communities
- **Scale:** 1,340 source observations
- **Extraction:** title-derived, unreviewed
- **Model spend:** none for the public seed
- **Release:** `data/observations/2026-08-01-wayback-reddit.jsonl`

## Run 2: bounded Haiku batch

- **Date:** 2026-08-01
- **Model:** `claude-haiku-4-5-20251001` through the Claude subscription CLI
- **Dense-model escalation:** disabled
- **Target:** 100 fresh pages per target, concurrency 5
- **Successful output:** 89 additional source observations from 17 source pages
- **Corpus after run:** 1,429 observations in the private miner
- **Stopping point:** stopped after Wayback fetch failures and repeated Claude CLI failures made the batch inefficient
- **Raw batch:** `data/mining-runs/2026-08-01-haiku-batch-01.jsonl`

The Haiku batch is kept separate from the original release because one archived page can produce several extracted patterns. Those rows are useful mining output, but they are not automatically independent evidence and are not silently merged into the v0.1 release.

## Run 3: bounded Codex batch

- **Date:** 2026-08-01
- **Model:** `gpt-5.5` through the Codex CLI, low reasoning effort, read-only sandbox
- **Dense-model escalation:** disabled
- **Target:** 25 fresh pages per target, concurrency 2
- **Successful output:** 38 additional source observations from 34 pages
- **Corpus after run:** 1,467 observations in the private miner
- **Stopping point:** the batch completed, with 16 later pages failing to fetch and remaining retryable
- **Raw batch:** `data/mining-runs/2026-08-01-codex-batch-01.jsonl`

## Run 4: measured gradual Codex batch

- **Date:** 2026-08-01
- **Model:** `gpt-5.5` through the Codex CLI, low reasoning effort, read-only sandbox
- **Dense-model escalation:** disabled
- **Target:** 10 fresh pages per source, concurrency 1
- **Sources with fresh pages:** `mildlyinfuriating` and `CrappyDesign`
- **Successful output:** 31 additional source observations from 19 pages
- **Model calls:** 19
- **Input size:** 161,624 characters, approximately 40,406 input tokens
- **Failures:** 1 fetch failure; retryable
- **Corpus after run:** 1,498 observations in the private miner
- **Raw batch:** `data/mining-runs/2026-08-01-codex-batch-02.jsonl`

This is the current burn baseline: about 2,127 input characters per successful model call on this source mix. It is a measurement, not a price estimate; account usage and billing depend on the Codex plan and model accounting.

## Run 5: clean measured Codex batch

- **Date:** 2026-08-01
- **Model:** `gpt-5.5` through the Codex CLI, low reasoning effort, read-only sandbox
- **Dense-model escalation:** disabled
- **Target:** 10 fresh pages per source, concurrency 1
- **Sources with fresh pages:** `mildlyinfuriating` and `CrappyDesign`
- **Successful output:** 24 additional source observations from 20 pages
- **Model calls:** 20
- **Input size:** 159,763 characters, approximately 39,941 input tokens
- **Failures:** 0
- **Corpus after run:** 1,522 observations in the private miner
- **Raw batch:** `data/mining-runs/2026-08-01-codex-batch-03.jsonl`

This clean round is a better planning baseline than the earlier mixed batch: about 1,998 input characters per model call, with no retry waste.

## Filter

The cheap screen removes obvious one-offs, jokes, sensitive or irrelevant material, duplicates, and titles too thin to inspect. The judgment pass then applies [The Big Annoyance Test](BIG_ANNOYANCE_TEST.md): repetition, real cost, weak workaround, breadth beyond one narrow product, concrete wording, and a possible AI opening.

“Big” and “AI-solvable” stay separate. A candidate can be a big annoyance and still turn out to need a policy, physical, or non-AI solution.

## Result so far

The first three runs produced 15 screened candidate patterns in `data/candidates/`. They are leads for community review, not reviewed problem records. The next stopping point is after the candidate set is broad enough to cover the major annoyance shapes, not after the Wayback archive is exhausted.
