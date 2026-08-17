# V1 Call Review Interactive Companion — Prototype v0.1

**Artifact classification:** PRESERVED EVIDENCE / WORKING PROTOTYPE  
**Authority status:** Non-canonical  
**Preserved:** 2026-08-17

This directory preserves the first verified interactive checkpoint derived from the V1 Coaching Partner Call-Review Field Guide.

## Live Demonstration

https://call-review-field-guide-coach.galipone86.chatgpt.site

The hosted demonstration and this source checkpoint represent the same product direction: a transcript-centered method layer that helps a Coaching Partner move from timestamped evidence through sufficiency, one warranted action, validation, and a manual PHUB handoff.

## What This Prototype Is

- A testable expression of the V1 method and interface direction.
- A reconstruction point for future experiments and validation.
- Preserved evidence of design decisions, implementation, build verification, and browser QA.

## What This Prototype Is Not

- It is not the canonical Field Guide or an approved enterprise system.
- It does not replace Coaching Partner judgment.
- It does not write to, synchronize with, or replace PHUB.
- It does not host, copy, or stream call audio; audio remains in its authoritative source system.
- It does not create a shadow case database, automated score, or agent diagnosis.

## Contents

- `src/` — React interface and interaction logic.
- `worker/`, `scripts/`, `tests/`, `.openai/` — verified Sites runtime and build support.
- `qa/` and `design-qa.md` — visual comparison and interaction-verification evidence.
- `docs/V1_Call_Review_Decision_Tree_Prototype_v0.1.pdf` — printable decision-tree companion.
- `package.json` and `package-lock.json` — reproducible dependency definition.

Generated `dist/` output and `node_modules/` are intentionally excluded because they can be recreated from the preserved source and lockfile.

## Run and Verify

```bash
npm ci
npm run build
npm run test:sites
npm run dev
```

The preserved checkpoint passed both `npm run build` and `npm run test:sites`. The browser-verified journey and remaining open questions are recorded in `design-qa.md`.

## Promotion Boundary

Treat findings from this prototype as hypotheses or preserved implementation evidence until operational testing establishes what should be adopted into the user-facing V1 Field Guide. The canonical project evidence and current V1 scope remain authoritative over this interface.
