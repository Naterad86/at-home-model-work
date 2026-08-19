# Cross-Model Execution Controls

Status: Current reusable guidance  
Last updated: 2026-08-19

## Purpose

Preserve the smallest durable set of controls learned from cross-model work without turning the repository into a chat archive.

## Controls

### 1. Route model effort to task difficulty
- Use lighter reasoning for bounded review, audit, extraction, and straightforward edits.
- Escalate for multi-constraint artifact construction, difficult debugging, or self-validation where many requirements must remain satisfied at once.
- A stronger mode is not automatically required for every project task; escalate when the failure mode justifies it.

### 2. Authority is not recency
- Authority comes from declared jurisdiction and source-of-truth status, not recency, polish, filename similarity, or model memory.
- When sources conflict, identify the disputed component and determine which source controls it.
- Preserve unresolved conflicts explicitly; do not silently reconcile them.

### 3. Distinguish source authority from source availability
- A referenced artifact is not the same as an artifact actually available to the model.
- Before execution, verify that required inputs are present and readable.
- If an authoritative input is missing, stop at planning or proceed only under a clearly labeled reversible assumption when permitted.

### 4. Treat canonical source artifacts as immutable inputs
- Do not reconstruct, reduce, rename, summarize, or rewrite controlled JSON, schemas, prompts, identifiers, or approved source content for implementation convenience.
- Application code may read only the fields it needs, but the source artifact itself remains intact.
- If a transport fallback is required, preserve the canonical payload verbatim and label the fallback as transport, not as a new source.

### 5. Keep build scope exact
- Execute only the currently authorized build step.
- Do not wire production behavior through states or components that are intentionally unbuilt.
- Temporary debug or validation controls must be labeled as such and must not masquerade as production flow.

### 6. Generated code is not validated code
- Do not claim a build is validated merely because code was generated or looks plausible.
- Validation requires the relevant artifact to be executed or otherwise inspected against its stopping condition.
- If runtime execution is unavailable, report `NOT RUNTIME VALIDATED` and provide the runnable artifact instead.

### 7. Diagnose failure at the correct layer
Separate:
- governance / authority failure;
- source-availability failure;
- source-fidelity failure;
- scope-control failure;
- implementation failure;
- runtime / validation failure.

Do not collapse all weak outputs into "the model failed." The layer matters because the correction and model-routing decision depend on it.

## Reusable routing lesson

A model can reason correctly about governance yet still fail during implementation by mutating controlled inputs, expanding scope, or overstating validation. Evaluate artifact fidelity and execution behavior separately from planning quality.
