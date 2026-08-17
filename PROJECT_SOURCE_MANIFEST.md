# At-Home Model Work — Project Source Manifest

**Version:** 0.3  
**Date:** 2026-08-17  
**Purpose:** Identify the minimum set of authoritative sources required to preserve project continuity, especially for V1 development, without turning the entire chat history into a source-of-truth system.

## Status Key

- **CANONICAL** — Current authoritative source.
- **RETAINED** — Sufficiently represented in current project context.
- **REFERENCE-ONLY** — Existence/purpose is known, but the full source is not currently recoverable here.
- **NEEDS PROMOTION** — Content exists, but no single canonical version is established.
- **MUSEUM** — Historical/deprecated; useful for provenance, not current operation.
- **ENTERPRISE-BOUND** — Payload should remain in the authorized enterprise environment; only transferable structure should be preserved here.

## Core Manifest

| Source / Artifact | Role in Project | Current State | Canonical? | Preservation Risk | Required Action |
|---|---|---|---|---|---|
| Current At-Home Model Work project instructions | Governs project operating logic, delivery/development/discovery/preservation, Devan role, enterprise boundaries | RETAINED | Yes | Low | Keep as current governing instructions |
| V1 Call-Review Field Guide scope | Defines the current deliverable and prevents scope drift | RETAINED | Yes | Low | Treat as authoritative until explicitly superseded |
| V1 workflow: Scope → Build Review Set → Review Each Call ↻ → Synthesize → Coach / Confirm / Commit → Follow Up / Resolve | User-facing workflow spine for V1 | RETAINED | Yes | Low | Preserve verbatim in future V1 artifacts |
| 19-stage current-state workflow reconstruction | Evidence base supporting V1 design | CANONICAL | Yes | Low | Use the preserved V1 Call Review Transfer Package as the authoritative current-state reconstruction |
| `Download the V1 Call Review Transfer Package.md` | Canonical current-state evidence source containing the reconstructed call-review workflow and supporting findings | CANONICAL | Yes | Low | Preserve unchanged; use as the authoritative V1 current-state evidence source |
| V1 Call Review Interactive Companion prototype v0.1 | First verified interactive expression of the transcript-centered evidence-to-decision path | RETAINED — working prototype / preserved evidence | No | Low | Preserve source and QA unchanged; validate operationally before promoting behavior into canonical V1 |
| Stabilized V1 project proposal | Leadership-facing decision artifact for continued development/validation | NEEDS PROMOTION | Not yet | Medium | Once stabilized, designate one exact version as canonical |
| Devan Collaborator Space operating instructions / V3.0 | Defines collaborator role and technical-leapfrogging method | RETAINED | Current project instructions supersede portions | Low–Medium | Preserve only the latest useful version; older versions belong in Museum |
| Global Copilot personalization instructions | Carries Nate's operating style into the enterprise environment | NEEDS PROMOTION | Unclear | Medium | Preserve the exact deployed/current version when finalized |
| PHUB coaching template / coaching methodology extraction | Reusable coaching-process structure and diagnostic logic | REFERENCE-ONLY / partial | No | Medium–High | Preserve reconciled structure without agent/customer payload |
| Ideal user evidence / Coaching Partner process-friction observations | Grounds the target-user problem in real operational evidence | RETAINED as summary | No | Medium | Extract only the generalized evidence needed for V1 positioning and validation |
| HPT / CWA / JCS / KCS research | External methodology inputs used to improve problem diagnosis and human–AI boundaries | RETAINED as summaries | No | Low for V1, higher later | Keep summaries; preserve full research only if it becomes a direct V1 dependency |
| External model / Perplexity transfer outputs | Independent analysis and methodology backfill | PARTIAL / REFERENCE-ONLY | No | Medium | Promote only conclusions that materially affect V1; leave the rest as Museum/research evidence |
| Dashboard updates | Running state summaries across workspaces | RETAINED across project context but fragmented | No | Medium | Periodically produce one consolidated state snapshot; do not treat every dashboard update as canonical |
| Defunct / 💀 project threads | Development history and superseded approaches | MUSEUM | No | Low | Preserve only as provenance; do not reintroduce into live architecture |
| Enterprise customer/agent-specific payload | Operational evidence containing protected/internal information | ENTERPRISE-BOUND | No | Not a preservation gap | Keep inside enterprise tools; preserve only generalized structure, methods, and conclusions |

## Canonical V1 Current-State Evidence

**Source:** `Download the V1 Call Review Transfer Package.md`  
**Repository path:** `deliverables/v1-call-review-field-guide/evidence/Download the V1 Call Review Transfer Package.md`  
**Status:** CANONICAL  
**Preservation mode:** Source content preserved unchanged  
**Source SHA-256:** `ba3f2d322422e257796d84dfa7c9d2a808d187a51b04d6330b26743d9757dabd`  
**Preservation commit:** `1767df24931aabc0d6d46692980959250a301469`

This artifact is the authoritative current-state evidence source for V1 development. It contains the complete 19-stage workflow reconstruction together with inputs, tools, decisions, outputs, system/resource roles, formal-versus-informal distinctions, friction points, workflow variations, unresolved questions, improvement candidates, transferable structural insights, and the condensed V1 workflow.

The artifact is evidence, not permission to treat unresolved claims as verified requirements. Its internal evidence labels and unresolved questions remain authoritative parts of the source.

## Preserved V1 Interactive Prototype Checkpoint

**Artifact:** V1 Call Review Interactive Companion — prototype v0.1  
**Repository path:** `deliverables/v1-call-review-field-guide/prototypes/v0.1-interactive-companion/`  
**Status:** RETAINED — WORKING PROTOTYPE / PRESERVED EVIDENCE  
**Canonical:** No  
**Preservation commit:** `b2139d34f08f89da8bc9c1e7b649087b9693638d`  
**Live demonstration:** https://call-review-field-guide-coach.galipone86.chatgpt.site  
**Printable companion SHA-256:** `c46df2ab9dc5f65dd2eedc3c6ac1fec4fb0a8117dad4270a4b7827cac15ca859`  
**Verification:** `npm run build` PASS; `npm run test:sites` PASS (4/4)

This checkpoint preserves the runnable source, dependency lockfile, Sites build support, browser QA evidence, product-boundary instructions, and printable decision tree. It is an implementation hypothesis and reconstruction point—not the canonical Field Guide, operational validation, an enterprise integration, or authority to replace PHUB, the source audio platform, or Coaching Partner judgment.

## Current Source-of-Truth Hierarchy

1. **Current project instructions**
2. **Current V1 scope and workflow definition**
3. **Canonical V1 current-state evidence source:**
   - `deliverables/v1-call-review-field-guide/evidence/Download the V1 Call Review Transfer Package.md`
4. **Preserved prototypes and implementation evidence** (non-canonical)
5. **Current stabilized V1 proposal** once promoted
6. **Reusable methodology artifacts** after reconciliation
7. **Dashboard summaries**
8. **Museum / historical chats / exploratory research**

## Highest-Priority Gaps

### 1. Exact current versions of deployed instructions
The project retains the intent behind Copilot personalization and collaborator-space instructions, but exact deployed versions may diverge from the remembered design state.

**Action:** when a version becomes operational, preserve the exact deployed text and date/version it.

### 2. Coaching methodology reconciliation
PHUB/template-derived coaching structure appears valuable, but its canonical payload-free form is not yet clearly established.

**Action:** reconcile into one portable methodology artifact before building it into V1.

### 3. Stabilized V1 proposal
The leadership-facing proposal exists in project development but no exact repository version has yet been designated as canonical.

**Action:** once the proposal is stabilized, preserve and promote one exact version.

## Minimal Preservation Rule

Do **not** archive every chat.

Promote a source into the Library only when losing it would make it materially harder to:

- reconstruct V1,
- explain a consequential design decision,
- validate the workflow,
- reproduce a deployed operating mechanism,
- or transfer reusable methodology without relying on memory.

Everything else can remain in the Museum or in its original enterprise environment.

## Immediate Next State

The V1 current-state evidence gap is now closed. The complete transfer package and its 19-stage workflow reconstruction are preserved as the canonical V1 current-state evidence source.

The interactive companion prototype v0.1 is also preserved as a non-canonical working checkpoint. Its existence does not promote its interface decisions into the Field Guide; operational validation remains required.

The next preservation pass should focus on whichever artifact becomes operationally necessary first among:

- the coaching methodology/template reconciliation;
- the stabilized V1 proposal;
- the exact deployed Copilot instructions.

Future V1 design changes should distinguish clearly between:

- what the canonical current-state evidence says;
- what has been verified since that evidence was collected;
- what is a proposed improvement;
- and what has been adopted into the user-facing V1 Field Guide.
