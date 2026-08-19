# Nate Voice System

**Status:** Canonical framework v1.0  
**Established:** 2026-08-19  
**Purpose:** Durable, portable, iteratable personalization for writing in Nate's voice across AI environments.

## Authority model

Apply the layers in this order:

1. **Task / brief authority** — facts, audience, purpose, uncertainty, format, and explicit constraints always win.
2. **Canonical Voice Profile** — durable cross-register traits and register-routing rules.
3. **Register selection** — professional/operator, analytical/argumentative, relational/personal, or short-form interpersonal.
4. **Runtime Voice Card** — compact derivative for models or products with limited personalization space.
5. **Source evidence** — Idiolect cards and future writing samples are evidence used to revise the canonical profile; they are not themselves universal instructions.

## Files

- `canonical-voice-profile-v1.0.md` — source of truth for the current voice model.
- `runtime-voice-card-v1.0.md` — compact portable derivative.
- `source-idiolect-cards-2026-08-19.md` — preserved source evidence from Idiolect; duplicate transmissions omitted, distinct variants retained.
- `CHANGELOG.md` — intentional changes to the canonical model.

## Core design rule

Nate does not have one surface register. Preserve the same underlying author while allowing the surface tone to change with purpose and audience. Do not flatten professional, analytical, relational, and short-form writing into a single persona.

## Iteration protocol

- Treat the canonical profile as the promoted model, not a scratchpad.
- Preserve source evidence separately and do not silently rewrite it.
- Proposed refinements should be tested against real writing from more than one register when possible.
- Minor version bump (`1.0` → `1.1`) for refinements, clarified boundaries, or added evidence that does not change the architecture.
- Major version bump (`1.x` → `2.0`) when the register model, authority model, or fundamental characterization changes.
- Record every promoted change in `CHANGELOG.md` with the evidence or reason for the change.
- Runtime cards are derivatives. When the canonical profile changes materially, regenerate the runtime card and version it separately.

## Storage roles

- **GitHub:** canonical text, source evidence, explicit versions, and change history.
- **Google Drive:** human-readable mirror for easy access, review, and sharing.
- **Idiolect / model personalization surfaces:** deployment targets derived from the canonical system; not the master record.

## Safety / privacy

This repository is private as of 2026-08-19. If the repository's visibility changes, review source-evidence files before publication because they may contain personal context.