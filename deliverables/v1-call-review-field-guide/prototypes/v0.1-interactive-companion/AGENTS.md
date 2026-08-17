# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Prototype-specific product decisions

- This is a method layer inside an eventual SharePoint / enterprise Copilot environment, not a new case-management system.
- PHUB remains the official record and final destination. The prototype may prepare a handoff but must not imply a working integration.
- Audio remains in the enterprise call platform. The prototype may offer an "open at source" handoff but must not host, copy, or stream the recording.
- The transcript is the primary evidence surface. Guidance and insights sit beside it and preserve Coaching Partner judgment; there is no automated scoring or diagnosis.
- A separate printable decision tree is the stable method anchor. The interactive experience mirrors its decision gates: purpose, selection, opportunity, observation, contradiction, sufficiency, priority, commitment, and validation.
- Use synthetic, anonymized practice content only.
