At-Home Model Work

This repository is the durable, version-controlled preservation layer for the At-Home Model Work project.

The project itself is developed primarily through ChatGPT and related working environments. GitHub is used to preserve the parts of that work that have become authoritative, reusable, operationally important, or necessary to reconstruct the project later.

Purpose

The broader project develops practical AI-enabled workflows, systems, methodologies, and artifacts while improving the ability to:

- identify useful AI leverage;
- define operational problems accurately;
- choose appropriate technical and nontechnical mechanisms;
- design workflows and systems others can actually use;
- understand enough technical substrate to make sound decisions;
- diagnose failures at the correct layer;
- preserve reusable knowledge without preserving unnecessary raw context;
- and finish useful deliverables.

The current primary deliverable is the V1 Coaching Partner Call-Review Field Guide, organized around the workflow:

Scope → Build Review Set → Review Each Call ↻ → Synthesize → Coach / Confirm / Commit → Follow Up / Resolve

Repository Role

This repository is a source of truth for promoted project material, not a transcript archive.

ChatGPT and other AI environments may contain active reasoning, experiments, incomplete ideas, and exploratory work.

Material should be promoted here when it becomes one or more of the following:

- canonical project guidance;
- a reusable methodology or framework;
- an important specification or architecture;
- a meaningful project artifact;
- a stable workflow or template;
- evidence necessary to understand project development;
- or a deliverable that should survive individual chats and AI environments.

Planned Structure

/
├── README.md
├── PROJECT_SOURCE_MANIFEST.md
├── library/
├── museum/
└── deliverables/
    └── v1-call-review-field-guide/

"PROJECT_SOURCE_MANIFEST.md"

Tracks authoritative project sources, important artifacts, current status, and where canonical material lives.

"library/"

Contains current, reusable, portable knowledge.

Examples:

- methodologies;
- operating principles;
- workflow architectures;
- prompt structures;
- specifications;
- generalized lessons;
- reusable decision frameworks.

Library material should represent what the project currently believes is useful and transferable.

"museum/"

Contains historical material worth preserving because it documents how the project developed.

Examples:

- deprecated architectures;
- superseded instructions;
- significant earlier versions;
- experiments that materially influenced later decisions.

Museum material is evidence, not current guidance.

"deliverables/"

Contains artifacts being built for actual use.

The current primary deliverable is:

"deliverables/v1-call-review-field-guide/"

Preservation Principle

AI memory is a cache, not the source of truth.

Useful project continuity should come from explicit artifacts, version history, source manifests, and reproducible structure rather than depending on any individual conversation retaining perfect context.

Information Boundary

This repository should preserve STRUCTURE rather than protected PAYLOAD.

Appropriate content includes:

- generalized workflows;
- methodologies;
- sanitized examples;
- reusable reasoning;
- schemas;
- specifications;
- project-created artifacts.

Do not place customer information, protected enterprise information, proprietary internal content, credentials, secrets, or other restricted data in this repository.

Enterprise systems may reason over authorized enterprise information inside their approved environment. This repository preserves only transferable project structures and appropriately sanitized artifacts.

Development Principle

Prefer the smallest durable structure that supports useful work.

Do not create folders, frameworks, abstractions, or infrastructure merely because they may become useful later.

New structure should be added when the project produces a concrete need for it.

---

Current status: Repository initialized as the durable preservation layer for At-Home Model Work.# at-home-model-work
Durable, version-controlled home for At-Home Model Work: preserving canonical methodologies, workflows, project architecture, reusable AI practices, and deliverables. Active experimentation happens elsewhere; GitHub holds promoted project knowledge, history, and artifacts intended to survive individual AI sessions.
