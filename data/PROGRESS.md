# Mining Progress

**Checked 2026-08-08**

The public `v0.1` release has 1,340 raw observations. Since that release, the private mining run has continued through more Wayback-archived Reddit pages.

Current working list:

- `5,761` distinct raw annoyances
- `5,855` extracted mentions
- `6,421` archived sources
- `484` provisional categories
- `0` promoted problems, solution proposals, or validations

The current mining pass uses Gemini 3.6 Flash Low through the Antigravity subscription. It is cheap to run and good enough for first-pass extraction. The model is not making final judgments. These are still rough leads, and the public release remains the smaller boundary described in the README.

## Latest filter pass

On August 9, 2026, Codex `gpt-5.5` at low reasoning effort screened the repeated leads and merged the strongest patterns into `50` finalist records. This used the Codex subscription path, not a separate provider API.

The 50 records passed a source audit. Every evidence ID resolved to a real corpus row with evidence text and an archived URL, and every record has multiple distinct source URLs. They are now the published annoyance list for the public page. That is a publishing decision, not a claim that they are reviewed problem records, solution proposals, or validations.

Mining is source-tracked and resumable. Completed pages are recorded so later passes can continue without intentionally re-mining the same page. The next release should include a deliberate filter and a manifest, not a rolling dump of whatever the miner happens to find.
