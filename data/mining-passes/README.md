# Mining Passes

This directory is the handoff ledger for bounded subject passes.

Before a pass, copy the subject id and approved limits from `data/subjects/registry.json` into a manifest. After the pass, add the measured result and link the raw batch. A pass is not complete until its stop reason and next action are recorded.

Use [AUTONOMY.md](../../AUTONOMY.md) for the trust boundary. Use [BIG_ANNOYANCE_TEST.md](../../BIG_ANNOYANCE_TEST.md) only when compiling or reviewing; mining itself should preserve raw evidence.

The ledger is intentionally separate from `data/candidates/`. A new pass can add evidence without silently changing the public candidate set.
