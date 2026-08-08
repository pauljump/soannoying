# Mining Progress

**Checked 2026-08-08**

The public `v0.1` release has 1,340 raw observations. Since that release, the private mining run has continued through more Wayback-archived Reddit pages.

Current working list:

- `4,932` distinct raw annoyances
- `5,024` extracted mentions
- `5,578` archived sources
- `346` provisional categories
- `0` promoted problems, solution proposals, or validations

The current mining pass uses Gemini 3.6 Flash Low through the Antigravity subscription. It is cheap to run and good enough for first-pass extraction. The model is not making final judgments. These are still rough leads, and the public release remains the smaller boundary described in the README.

## Latest filter pass

On August 8, 2026, Codex `gpt-5.5` at low reasoning effort screened the repeated leads and merged the strongest patterns into `54` finalist drafts. This used the Codex subscription path, not a separate provider API.

The 54 drafts passed a source audit. Every evidence ID resolved to a real corpus row with evidence text and an archived URL; 52 have multiple distinct source URLs, while 2 rely on one unusually strong source. They are published as a new screened-candidate file for community review. They are not reviewed problems, solution proposals, or validations.

Mining is source-tracked and resumable. Completed pages are recorded so later passes can continue without intentionally re-mining the same page. The next release should include a deliberate filter and a manifest, not a rolling dump of whatever the miner happens to find.
