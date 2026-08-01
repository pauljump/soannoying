# Sources and Collection Policy

## Current source

The initial release uses the Internet Archive Wayback Machine's public CDX index and archived `old.reddit.com` thread pages. Collection is unauthenticated and does not use live-platform scraping, browser cookies, user accounts, private APIs, or account-linked data.

The release preserves a Wayback source pointer for each observation so that a reviewer can inspect the original public context where available.

## Admission rules

A source must be public, stable enough to cite, and collectible without bypassing access controls. Collection should capture the minimum necessary source context. It must not collect private groups, direct messages, account-linked feeds, paywalled material, or content behind authentication.

## Redaction rules

Do not submit usernames, contact details, precise locations, medical/legal/financial details about a private person, minors' information, or material that meaningfully increases exposure of a vulnerable person. When a source has a sensitive detail but the friction is useful, contribute a reviewer-written paraphrase to a future problem record and retain only the minimally necessary source pointer.

Report a problematic published row through the issue tracker. Maintainers may remove a row from future releases while retaining a minimal, non-sensitive correction note in the changelog.

## Current limitations

The `v0.1` observations are title-derived. They are useful for discovery but frequently lack context, can be duplicates, may not be representative, and include noisy or joking posts. They are not a statistically sampled population and must not be used to estimate how common a problem is.

## Future sources

Candidate source families include public product-support forums, public issue trackers, public accessibility discussions, and consumer-rights or service-complaint archives. Each new adapter requires a source-specific policy note, a reproducible collector, a failure-mode description, and a sample reviewed for privacy and bias before bulk collection.
