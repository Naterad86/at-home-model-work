# Library

This directory contains current, reusable, portable project knowledge.

Promote material here only when losing it would materially impair reconstruction, explanation of consequential design decisions, validation, reproduction of a deployed operating mechanism, or transfer of reusable methodology.

Typical contents may include:

- methodologies;
- operating principles;
- workflow architectures;
- prompt structures;
- specifications;
- generalized lessons;
- reusable decision frameworks.

Library material should represent current guidance, not raw exploration or historical evidence.

## Current promoted systems

### Nate Voice System

Path: [`voice-system/`](./voice-system/)

Durable, version-controlled personalization architecture for writing in Nate's voice across AI environments. The subsystem separates the canonical cross-register voice model, compact runtime card, preserved Idiolect source evidence, and explicit changelog so personalization can be iterated without losing provenance or silently drifting.

Use `voice-system/canonical-voice-profile-v1.0.md` as the current promoted voice authority. Use `voice-system/runtime-voice-card-v1.0.md` when a target model or product has limited personalization space.
