# Working Agreement for AI Contributors

This repository treats AI output as a claim that needs a location and a status.

1. Never convert a source observation directly into a solution claim.
2. Preserve source pointers and state whether text is quoted, extracted, or reviewer-written.
3. Mark low-context or ambiguous entries as unreviewed; do not resolve uncertainty by making up detail.
4. Do not collect content through accounts, cookies, private APIs, or access-control workarounds.
5. Do not add personal data or reproduce more source text than necessary to identify the friction.
6. A proposal must name its AI capability, action boundary, consent boundary, success metric, and harm risks.
7. A validation result may be negative or inconclusive. Do not hide either.

Before submitting data, run `node scripts/validate-release.mjs`.
