# Mining Progress

**Checked 2026-08-03**

The public `v0.1` release has 1,340 raw observations. Since that release, the private mining run has continued through more Wayback-archived Reddit pages.

Current working list:

- `1,878` distinct raw annoyances
- `1,965` extracted mentions
- `2,460` archived sources
- `107` provisional categories
- `0` promoted problems, solution proposals, or validations

The current pass uses a local Qwen3 14B model over Tailscale. It is cheap to run and good enough for first-pass extraction. The model is not making final judgments. These are still rough leads, and the public release remains the smaller, reviewed boundary described in the README.

Mining is source-tracked and resumable. Completed pages are recorded so later passes can continue without intentionally re-mining the same page. The next release should include a deliberate filter and a manifest, not a rolling dump of whatever the miner happens to find.
