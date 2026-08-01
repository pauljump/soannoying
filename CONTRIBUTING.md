# Contributing

Start by deciding which claim you are making. This keeps the repository useful.

| You found... | Contribute... |
| --- | --- |
| A public example of friction | An observation, with source pointer and minimal context. |
| Several examples of the same bounded problem | A problem review. |
| A way AI could help | A solution proposal linked to a reviewed problem. |
| Evidence that a proposal helped or failed | A validation record. |

## Review standard

For a problem to advance from observation to reviewed, a contributor must be able to write all of the following without adding facts that the sources do not support:

- Who is trying to do what?
- What gets in the way?
- What does it cost them?
- In what context does the failure occur?
- What evidence supports grouping the observations?
- What remains uncertain or disputed?

## Solution standard

Solution proposals need a capability and a control point. “Use AI” is neither. Name what the system would observe, what it could do, what requires user approval, how success would be measured, and what could go wrong.

## Data contributions

Do not submit sensitive or account-linked data. Follow [SOURCES.md](SOURCES.md), validate JSONL before opening a pull request, and keep observation files append-only. New source adapters require a documented collection method and a small reviewed sample before a bulk import.

## Pull requests

Keep one kind of change per pull request. Explain whether the change adds evidence, interprets evidence, proposes a solution, or reports a validation result. Do not rewrite an observation to make it fit a preferred solution.
