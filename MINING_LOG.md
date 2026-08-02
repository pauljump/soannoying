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

## Run 6: extended Codex round

- **Date:** 2026-08-01
- **Model:** `gpt-5.5` through the Codex CLI, low reasoning effort, read-only sandbox
- **Dense-model escalation:** disabled
- **Target:** 30 fresh pages per source, concurrency 1
- **Sources with fresh pages:** `mildlyinfuriating`; `CrappyDesign` had no fresh pages in this round
- **Successful output:** 19 additional source observations from 20 completed pages
- **Model calls:** 20
- **Input size:** 155,348 characters, approximately 38,837 input tokens
- **Failures:** 10 fetch failures; retryable
- **Corpus after run:** 1,541 observations in the private miner
- **Raw batch:** `data/mining-runs/2026-08-01-codex-batch-04.jsonl`

The round hit the stopping point: the failure rate rose to 33% of claimed pages and the yield fell to 0.95 observations per model call. Future runs should return to 10-page rounds or focus on retry recovery.

## Run 7: larger measured Codex pass

- **Date:** 2026-08-01
- **Model:** `gpt-5.5` through the Codex CLI, low reasoning effort, read-only sandbox
- **Dense-model escalation:** disabled
- **Target:** 30 fresh pages per source, concurrency 1
- **Sources with fresh pages:** `mildlyinfuriating`; the other six sources had no fresh pages in this round
- **Successful output:** 17 additional source observations from 22 completed pages
- **Model calls:** 22
- **Input size:** 169,084 characters, approximately 42,271 input tokens
- **Failures:** 8 fetch failures; retryable
- **Empty pages:** 7
- **Corpus after run:** 1,558 observations in the private miner
- **Raw batch:** `data/mining-runs/2026-08-01-codex-batch-05.jsonl`

This pass confirms that making the target larger does not improve yield: 0.77 observations per model call, with 8 fetch failures. Keep future work to smaller rounds or retry recovery until another source begins yielding.

## Run 8: retry recovery round

- **Date:** 2026-08-01
- **Model:** `gpt-5.5` through the Codex CLI, low reasoning effort, read-only sandbox
- **Dense-model escalation:** disabled
- **Target:** 10 fresh or previously failed pages per source, concurrency 1
- **Sources with fresh pages:** `mildlyinfuriating` and `CrappyDesign`
- **Successful output:** 21 raw source observations, representing 20 new mention rows, from 19 completed pages
- **Model calls:** 19
- **Input size:** 160,067 characters, approximately 40,017 input tokens
- **Failures:** 1 fetch failure; retryable
- **Empty pages:** 3
- **Corpus after run:** 1,579 observations in the private miner
- **Raw batch:** `data/mining-runs/2026-08-01-codex-batch-06.jsonl`

This recovery round restored the earlier yield: about 1.05 raw observations per model call, with only one page left to retry. The next useful move is another small recovery/source round, not a larger batch.

## Run 9: final broadening round

- **Date:** 2026-08-01
- **Model:** `gpt-5.5` through the Codex CLI, low reasoning effort, read-only sandbox
- **Dense-model escalation:** disabled
- **Target:** 10 fresh or previously failed pages per source, concurrency 1
- **Sources with fresh pages:** `mildlyinfuriating`, `CrappyDesign`, and `assholedesign`
- **Successful output:** 31 raw source observations from 21 completed pages
- **Model calls:** 21
- **Input size:** 185,014 characters, approximately 46,254 input tokens
- **Failures:** 9 fetch failures; retryable
- **Empty pages:** 4
- **Corpus after run:** 1,610 observations in the private miner
- **Raw batch:** `data/mining-runs/2026-08-01-codex-batch-07.jsonl`

This is the stopping point for the initial mining phase. The corpus now spans three yielding communities in the recent passes, and the next work should be filtering and grouping rather than spending more on archive recovery.

## Run 10: corpus-level candidate compilation

- **Date:** 2026-08-01
- **Model:** `gpt-5.5` through the Codex CLI, low reasoning effort
- **Input:** 270 raw rows from seven labeled mining batches, plus the existing screened candidates
- **Output:** 35 proposed patterns before provenance checks; 34 retained after removing a one-source lead and correcting malformed source pointers
- **Source check:** every retained evidence URL matches a published observation or mining-run row; every retained candidate has at least two evidence URLs
- **Output file:** `data/candidates/2026-08-01-big-annoyance-screen.jsonl`

This is still a screening result. It is not a prevalence ranking, a reviewed problem set, or a claim that AI is the right solution. The next stage is human review: merge overlaps, reject weak patterns, and promote only records with a clear task, failure mode, cost, and boundary.

## Run 11: targeted coverage experiment

- **Date:** 2026-08-02
- **Model:** `gpt-5.5` through the Codex CLI, low reasoning effort, concurrency 1
- **Target:** one small pass each for `badUX`, `Windows11`, `techsupport`, and `apple`
- **Result:** `badUX` had no fresh pages; `Windows11` returned 24 raw rows from repeated query variants of one Snipping Tool thread
- **Model calls:** 7 completed before stopping
- **Input size:** approximately 14,000 input characters
- **Stopping reason:** the archive filter was returning duplicate thread variants, so continuing would have spent calls without adding source coverage
- **Raw batch:** `data/mining-runs/2026-08-02-codex-coverage-01.jsonl`

These rows are retained for transparency but were not used to expand the screened candidate set. The next coverage pass needs URL canonicalization before it resumes `techsupport` or `apple`.

## Run 12: canonicalized coverage pass

- **Date:** 2026-08-02
- **Model:** `gpt-5.5` through the Codex CLI, low reasoning effort, concurrency 1
- **Target:** 10 pages each from `techsupport` and `apple`
- **Successful output:** 40 raw observations from 20 unique pages
- **Model calls:** 20
- **Input size:** 189,805 characters, approximately 47,452 input tokens
- **Failures:** 0
- **Empty pages:** 7
- **Raw batch:** `data/mining-runs/2026-08-02-codex-coverage-02.jsonl`

The URL canonicalization fix prevented query variants of the same Reddit thread from becoming separate model calls. This pass confirms that `techsupport` and `apple` are viable coverage sources.

## Run 13: delta candidate review

- **Date:** 2026-08-02
- **Model:** `gpt-5.5` through the Codex CLI, low reasoning effort
- **Input:** the existing 34 screened candidates plus 40 new `techsupport` and `apple` observations
- **Result:** 31 retained screened candidates
- **Change:** weak or narrow candidates were removed, overlapping candidates were merged, and three stronger technology patterns were added
- **Source check:** every retained candidate has 2 to 6 exact evidence URLs from the published corpus
- **Output:** `data/candidates/2026-08-01-big-annoyance-screen.jsonl`

This is still a screening result, not human-reviewed problem records. The new source coverage improved the shape of the list, but it did not justify expanding it mechanically.

## Filter

The cheap screen removes obvious one-offs, jokes, sensitive or irrelevant material, duplicates, and titles too thin to inspect. The judgment pass then applies [The Big Annoyance Test](BIG_ANNOYANCE_TEST.md): repetition, real cost, weak workaround, breadth beyond one narrow product, concrete wording, and a possible AI opening.

“Big” and “AI-solvable” stay separate. A candidate can be a big annoyance and still turn out to need a policy, physical, or non-AI solution.

## Result so far

The first three runs produced 15 screened candidate patterns in `data/candidates/`. They are leads for community review, not reviewed problem records. The next stopping point is after the candidate set is broad enough to cover the major annoyance shapes, not after the Wayback archive is exhausted.
