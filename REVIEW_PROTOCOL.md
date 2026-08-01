# Open Review Protocol

## Status vocabulary

`unreviewed` means source-backed but not yet interpreted. `reviewed` means the problem statement was accepted through this protocol. `proposed` means a solution hypothesis exists. `validated`, `inconclusive`, and `failed` describe outcome evidence. No label is honorary.

## Problem review

Before a problem review, apply the [Big Annoyance Test](BIG_ANNOYANCE_TEST.md). A problem can be clearly evidenced and still be too small, too narrow, or too easy to work around for this project.

An open review should assess five things independently:

1. Provenance: do the cited observations actually support the stated friction?
2. Big annoyance fit: does it repeat, carry a real cost, resist an obvious workaround, and extend beyond one narrow product or incident?
3. Boundary: is this one bounded problem rather than a catch-all complaint category?
4. Mechanism: are task, context, failure mode, and loss distinguishable?
5. Uncertainty: does the record preserve disagreement, missing context, and alternative explanations?

A reviewed problem needs two independent approving reviewers, one of whom checks provenance and one of whom checks big-annoyance fit. A maintainer records the decision and links the review discussion. Rejections and requested changes remain visible.

## Proposal review

A proposal is reviewed separately from its problem. Reviewers ask whether its claimed AI capability matches the actual work, whether the system has a legitimate control point, whether user consent and recourse are defined, and whether the outcome metric would distinguish genuine help from superficial activity.

## Validation review

Validation must report the setting, method, comparison or baseline, result, failures, and limitations. Evidence can support `validated`, `inconclusive`, or `failed`; the latter two are valuable outcomes and remain published.

## Conflicts and reversals

Reviewers should disclose relevant commercial or implementation interests. Records can be superseded as new evidence arrives, but their historical status and linked source material stay traceable unless a privacy removal is necessary.
