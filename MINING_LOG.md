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

## Run 14: healthcare access subject pass

- **Date:** 2026-08-02
- **Subject:** healthcare access
- **Model:** `gpt-5.5` through the Codex CLI, low reasoning effort, concurrency 1
- **Scope:** appointments, referrals, forms, billing, coverage, queues, records, and finding care; no diagnosis or treatment advice
- **Sources:** `HealthInsurance` and `healthcare`, 10 pages each
- **Successful output:** 31 subject-focused raw observations from 20 unique pages
- **Model calls:** 20
- **Input size:** 122,198 characters, approximately 30,550 input tokens
- **Failures:** 0
- **Empty pages:** 9
- **Manifest:** `data/mining-passes/2026-08-02-healthcare-access-01.json`
- **Raw batch:** `data/mining-runs/2026-08-02-codex-healthcare-access-01.jsonl`

This is a collection result only. The next action is another bounded healthcare source chunk or a later subject-level compile; no candidate promotion happened automatically.

## Run 15: housing and landlords subject pass

- **Date:** 2026-08-02
- **Subject:** housing and landlords
- **Model:** `gpt-5.5` through the Codex CLI, low reasoning effort, concurrency 1
- **Scope:** repairs, deposits, lease friction, building conditions, maintenance, and tenant recourse; no legal advice
- **Sources:** `Tenant` and `Apartmentliving`, 10 pages each
- **Successful output:** 75 subject-focused raw observations from 20 unique pages
- **Model calls:** 20
- **Input size:** 106,130 characters, approximately 26,533 input tokens
- **Failures:** 0
- **Empty pages:** 0
- **Manifest:** `data/mining-passes/2026-08-02-housing-landlords-01.json`
- **Raw batch:** `data/mining-runs/2026-08-02-codex-housing-landlords-01.jsonl`

This is a collection result only. The first runner attempt was discarded because of a local Codex configuration error; the successful retry produced the reported batch. No candidate promotion happened automatically.

## Run 16: travel and transportation subject pass

- **Date:** 2026-08-02
- **Subject:** travel and transportation
- **Model:** `gpt-5.5` through the Codex CLI, low reasoning effort, concurrency 1
- **Scope:** delays, cancellations, transfers, luggage, parking, and disruption recovery; no travel advice
- **Sources:** `travel` and `Flights`, 10 pages each
- **Successful output:** 42 subject-focused raw observations from 20 unique pages
- **Model calls:** 20
- **Input size:** 153,720 characters, approximately 38,430 input tokens
- **Failures:** 0
- **Empty pages:** 0
- **Manifest:** `data/mining-passes/2026-08-02-travel-transportation-01.json`
- **Raw batch:** `data/mining-runs/2026-08-02-codex-travel-transportation-01.jsonl`

This is a collection result only. No candidate promotion happened automatically.

## Run 17: retail, delivery, and returns subject pass

- **Date:** 2026-08-02
- **Subject:** retail, delivery, and returns
- **Model:** `gpt-5.5` through the Codex CLI, low reasoning effort, concurrency 1
- **Scope:** wrong items, missing items, returns, refunds, delivery handoffs, and hidden costs; no shopping advice
- **Sources:** `CustomerService` and `Amazon`, 10 pages each
- **Successful output:** 12 subject-focused raw observations from 20 unique pages
- **Model calls:** 20
- **Input size:** 103,943 characters, approximately 25,986 input tokens
- **Failures:** 0
- **Empty pages:** 0
- **Manifest:** `data/mining-passes/2026-08-02-retail-delivery-returns-01.json`
- **Raw batch:** `data/mining-runs/2026-08-02-codex-retail-delivery-returns-01.jsonl`

This was a low-yield pass. `CustomerService` produced most of the useful material; the `Amazon` slice was mostly off-topic. The next action is to change sources before compiling this subject.

## Run 18: accessibility subject pass

- **Date:** 2026-08-02
- **Subject:** accessibility
- **Model:** `gpt-5.5` through the Codex CLI, low reasoning effort, concurrency 1
- **Scope:** physical and digital barriers that prevent ordinary access or use; no medical diagnosis or treatment advice
- **Sources:** `disability` and `accessibility`, 10 pages each
- **Successful output:** 35 subject-focused raw observations from 20 unique pages
- **Model calls:** 20
- **Input size:** 132,637 characters, approximately 33,159 input tokens
- **Failures:** 0
- **Empty pages:** 0
- **Manifest:** `data/mining-passes/2026-08-02-accessibility-01.json`
- **Raw batch:** `data/mining-runs/2026-08-02-codex-accessibility-01.jsonl`

This is a collection result only. No candidate promotion happened automatically.

## Run 19: physical products and design subject pass

- **Date:** 2026-08-02
- **Subject:** physical products and design
- **Model:** `gpt-5.5` through the Codex CLI, low reasoning effort, concurrency 1
- **Scope:** recurring product failures, misleading labels, awkward use, repair, and maintenance; no product recommendations
- **Sources:** `CrappyDesign` and `BuyItForLife`, 10 pages each
- **Successful output:** 37 subject-focused raw observations from 20 pages
- **Model calls:** 19
- **Input size:** 169,798 characters, approximately 42,450 input tokens
- **Failures:** 0
- **Empty pages:** 1
- **Manifest:** `data/mining-passes/2026-08-02-physical-products-01.json`
- **Raw batch:** `data/mining-runs/2026-08-02-codex-physical-products-01.jsonl`

This is a collection result only. No candidate promotion happened automatically.

## Run 20: neighborhoods, waste, and pests subject pass

- **Date:** 2026-08-02
- **Subject:** neighborhoods, waste, and pests
- **Model:** `gpt-5.5` through the Codex CLI, low reasoning effort, concurrency 1
- **Scope:** noise, trash, junk mail, mosquitoes, shared spaces, and local nuisance resolution; no pest diagnosis or treatment advice
- **Sources:** `mildlyinfuriating` and `whatsthisbug`, 10 pages each
- **Successful output:** 8 subject-focused raw observations from 20 unique pages
- **Model calls:** 20
- **Input size:** 193,553 characters, approximately 48,388 input tokens
- **Failures:** 0
- **Empty pages:** 0
- **Manifest:** `data/mining-passes/2026-08-02-neighborhoods-waste-pests-01.json`
- **Raw batch:** `data/mining-runs/2026-08-02-codex-neighborhoods-waste-pests-01.jsonl`

This was a low-yield pass. `mildlyinfuriating` produced no in-scope rows in this slice, while `whatsthisbug` produced eight. The next action is to change sources before compiling this subject.

## Run 21: public-service bureaucracy subject pass

- **Date:** 2026-08-02
- **Subject:** public-service bureaucracy
- **Model:** `gpt-5.5` through the Codex CLI, low reasoning effort, concurrency 1
- **Scope:** forms, permits, benefits, public offices, queues, and administrative access; no legal or financial advice
- **Sources:** `AskNYC` and `Adulting`, 10 pages each
- **Successful output:** 23 subject-focused raw observations from 20 unique pages
- **Model calls:** 20
- **Input size:** 168,440 characters, approximately 42,110 input tokens
- **Failures:** 0
- **Empty pages:** 0
- **Manifest:** `data/mining-passes/2026-08-02-public-services-bureaucracy-01.json`
- **Raw batch:** `data/mining-runs/2026-08-02-codex-public-services-bureaucracy-01.jsonl`

This was a mixed-source pass with some off-topic material. The next action is to change sources before compiling this subject.

## Filter

The cheap screen removes obvious one-offs, jokes, sensitive or irrelevant material, duplicates, and titles too thin to inspect. The judgment pass then applies [The Big Annoyance Test](BIG_ANNOYANCE_TEST.md): repetition, real cost, weak workaround, breadth beyond one narrow product, concrete wording, and a possible AI opening.

“Big” and “AI-solvable” stay separate. A candidate can be a big annoyance and still turn out to need a policy, physical, or non-AI solution.

## Result so far

The first three runs produced 15 screened candidate patterns in `data/candidates/`. They are leads for community review, not reviewed problem records. The next stopping point is after the candidate set is broad enough to cover the major annoyance shapes, not after the Wayback archive is exhausted.
