# Project Plan

## Purpose

Build the public evidence layer for a specific class of AI opportunity: recurring annoyances that were previously too context-heavy, fragmented, or expensive to solve, but may now be tractable because models can interpret messy inputs, coordinate work, and verify results.

The project does not measure general dissatisfaction. It looks for big annoyances: recurring burdens with real costs, weak workarounds, and a shape that can be inspected. It then produces problem records and tests whether proposed interventions reduce the original friction.

## The unit of progress

The repository advances an item through four states:

| State | Claim | Required evidence |
| --- | --- | --- |
| Observation | A person encountered a friction. | A source pointer and a short, policy-compliant excerpt. |
| Reviewed problem | Multiple or strong observations describe a bounded user problem. | Clear task, context, loss, failure mode, and source links. |
| Solution proposal | An AI-enabled intervention might reduce that problem. | Capability, control point, limits, and a falsifiable success metric. |
| Validation | The intervention improved the outcome without unacceptable harm. | Reproducible test, result, and limitations. |

No state implies the next one. This is the core integrity rule of the project.

## Definitions and publication

The website is a view of the work, not a fifth lifecycle state.

- An **observation** is one source-backed example of friction.
- A **candidate pattern** groups observations that may describe the same larger burden.
- A **published annoyance** is a candidate that passed a source check and the Big Annoyance Test. It is what appears on the public page. It is not yet a formal problem record, solution proposal, or validation.
- A **reviewed problem** is the next formal step. It names the affected task, context, failure, cost, evidence, and uncertainty clearly enough for other people to inspect.

The publication decision is deliberately narrower than a product or research claim. We publish a record when the evidence supports calling it a real annoyance and the description is useful. We do not publish it as proof of prevalence, as a solution, or as a promise that AI can fix it. A published annoyance can later be merged, corrected, rejected, or promoted into a reviewed problem without rewriting the original observations.

## Why now

Many annoyances stayed unsolved because the work required reading an ambiguous message, remembering a user's context, comparing scattered information, completing an action across a boundary, or checking the result. Modern AI can sometimes perform those tasks. It cannot make bad incentives disappear, override policy, or make a physical constraint vanish. The corpus should make that distinction visible.

## Milestones

### 0.1: Public seed and operating contract

Ship the initial 1,340 observations with source provenance, a validation script, a collection policy, and contribution paths for problems and solutions. This release establishes what the corpus is and what it refuses to claim.

Exit criteria: every published row validates; every row identifies its source and collection method; contributors can tell where observations, problems, proposals, and results belong.

### 0.2: Big annoyance review set

Review a small, diverse sample before scaling volume. Apply the [Big Annoyance Test](BIG_ANNOYANCE_TEST.md) before asking whether AI can help. Create reviewed problem records only when a reviewer can state the affected task, failure mode, repeated burden, and real cost from the evidence. Record merges, rejections, and uncertainty instead of silently rewriting source observations.

Exit criteria: 50 reviewed problems across several friction types, with documented inter-reviewer disagreements and a repeatable review rubric.

### 0.3: Opportunity briefs

For reviewed problems, write compact briefs that ask: what capability is newly possible, where can an agent safely act, what must remain under human control, and how would success be measured?

Exit criteria: 20 proposals with an explicit non-AI alternative, a failure/harm analysis, and a measurable test.

### 0.4: Validated solutions

Accept implementation evidence: prototypes, user studies, operational measurements, or carefully bounded case studies. A proposal only becomes a validated solution when the reported outcome is traceable to the original problem record.

Exit criteria: at least five independently reproducible validations, including negative or inconclusive results.

## Mining strategy

Mine breadth only until quality constraints are clear. The current source set is not near exhaustion, but exhaustiveness is not the goal. The next collection pass should be chosen to fill a deliberate coverage gap, not because an archive still has pages.

Priority dimensions:

1. Big annoyance fit: repeated burden, meaningful cost, weak workaround, and more than one narrow situation.
2. Friction type: information, coordination, paperwork, access, configuration, physical interaction, and deceptive or coercive design.
3. Population and stakes: avoid making a corpus that only reflects technically fluent consumer complaints.
4. AI leverage: separately prioritize cases where interpretation plus action or verification may change the cost structure.
5. Source quality: prefer public, stable, attributable source material that can be cited without an account or scraping workaround.

### Subject lanes

The next mining phase runs one subject at a time: healthcare access, housing and landlords, travel and transportation, retail and delivery, accessibility, physical products, and neighborhoods, waste, and pests. Each lane gets its own source plan, bounded raw pass, stop report, and later candidate review. Technology is a separate lane so it does not quietly dominate the corpus.

An autonomous worker follows [the mining contract](AUTONOMY.md) and [the subject registry](data/subjects/registry.json). It can collect and validate raw evidence within the approved limits, but it cannot change the candidate set or publish without a separate review decision.

## Success measures

- A reviewer can inspect why a problem record exists without trusting a model summary.
- A contributor can propose a solution without relabeling it as evidence.
- Rejected and failed ideas are retained as useful negative knowledge.
- The corpus produces a growing set of well-specified, testable AI interventions, not a large undifferentiated complaint pile.

## Non-goals

- A complete catalog of human annoyances.
- Automated ranking of what people should build.
- Publishing personally identifying, sensitive, or account-linked source material.
- Treating popularity as a proxy for severity, desirability, or commercial value.
