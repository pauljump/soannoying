# Data Contract

## Release layout

```
data/
  observations/  append-only source observations
  mining-runs/   separately labeled extraction batches and run artifacts
  candidates/    screened patterns and the source trail behind published finals
  cities/        separate city-specific final collections
  problems/      reviewed canonical problem records
  proposals/     AI solution hypotheses
  validations/   evidence about outcomes
```

`observations/`, `mining-runs/`, `candidates/`, and `cities/` are populated in the current development state. Mining runs are not automatically part of the v0.1 release. The public page's published final set is a release view over source-audited candidate records and city final records. It is not the same thing as a reviewed problem record, a solution proposal, or a validation result. Empty `problems/`, `proposals/`, and `validations/` directories are intentional: no later-stage record should be fabricated merely to make the repository look complete.

## Observation schema

Each line in `data/observations/*.jsonl` is a standalone JSON object:

| Field | Meaning |
| --- | --- |
| `url` | Public Wayback snapshot used as the source pointer. |
| `subreddit` | Source community at collection time. |
| `seen_at` | Time the observation was collected. |
| `name` | Short extracted expression of the friction. In v0.1, this is title-derived and unreviewed. |
| `plain_name` | Short display form of `name`. |
| `category` | Provisional collection-time category. |
| `fixability` | Provisional collection-time hypothesis: `software`, `hardware-physical`, `policy-social`, or `unclear`. |
| `evidence_excerpt` | Short source context. In v0.1, this is title-derived and unreviewed. |
| `source_type` | Source format, currently `reddit`. |

The `category` and `fixability` fields are not human-reviewed taxonomy. Do not use them as labels for training, prevalence estimates, or product claims without additional review.

## Problem record requirements

A future record in `data/problems/` must have a stable ID, state (`reviewed`), source observation IDs or pointers, a task, context, failure mode, user loss, reviewer attribution, and an uncertainty note. It must not overwrite or delete an observation.

## Proposal record requirements

A future record in `data/proposals/` must link to a reviewed problem and name the AI capability, action/control point, user control and consent boundary, non-AI alternative, success metric, and likely harms. `proposed` means unproven.

## Validation record requirements

A future record in `data/validations/` must link to a proposal and report method, sample/context, outcome, failure cases, and limitations. Negative and inconclusive results are first-class records.

## Versioning

Observation files are append-only. Corrections are separate records or a documented release note; they do not rewrite historical evidence in place. Every release should include a manifest with row count, SHA-256, collection method, and known limitations.
