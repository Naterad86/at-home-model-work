import { useMemo, useState } from "react";
import "@fontsource-variable/inter";
import {
  Add16Regular,
  ArrowDownload20Regular,
  ArrowLeft20Regular,
  ArrowRight20Regular,
  BookOpen24Regular,
  Checkmark20Regular,
  CheckmarkCircle16Filled,
  Clock16Regular,
  Copy20Regular,
  Dismiss24Regular,
  DocumentText24Regular,
  GridDots24Regular,
  Headphones24Regular,
  Info16Regular,
  Lightbulb24Regular,
  MoreHorizontal24Regular,
  Open24Regular,
  Play16Filled,
  Sparkle24Regular,
  Warning16Filled,
} from "@fluentui/react-icons";

const transcript = [
  {
    id: 1,
    time: "00:00",
    speaker: "Customer",
    role: "customer",
    text: "Hello? Hello? Is anyone there?",
    section: "Opening",
  },
  {
    id: 2,
    time: "00:07",
    speaker: "Agent",
    role: "agent",
    text: "Can you spell your first and last name for me?",
    section: "Opening",
  },
  {
    id: 3,
    time: "00:13",
    speaker: "Customer",
    role: "customer",
    text: "I'm sorry - who am I speaking with?",
    section: "Opening",
  },
  {
    id: 4,
    time: "00:18",
    speaker: "Agent",
    role: "agent",
    text: "I'm calling about the auto quote you requested. Let me verify your date of birth and state.",
    section: "Opening",
  },
  {
    id: 5,
    time: "12:46",
    speaker: "Agent",
    role: "agent",
    text: "I hear you. Keeping the monthly payment manageable is the priority.",
    section: "Discovery",
  },
  {
    id: 6,
    time: "12:52",
    speaker: "Customer",
    role: "customer",
    text: "Exactly. I don't want to lose the coverage I need, though.",
    section: "Discovery",
  },
  {
    id: 7,
    time: "27:14",
    speaker: "Agent",
    role: "agent",
    text: "Before I change anything, let me explain what each coverage protects and where the trade-off is.",
    section: "Recommendation",
  },
  {
    id: 8,
    time: "45:31",
    speaker: "Agent",
    role: "agent",
    text: "I'll compare the auto-only option with the bundle so you can see the difference side by side.",
    section: "Recommendation",
  },
  {
    id: 9,
    time: "55:02",
    speaker: "Customer",
    role: "customer",
    text: "That works for me. Let's do the bundle.",
    section: "Close",
  },
  {
    id: 10,
    time: "58:10",
    speaker: "Agent",
    role: "agent",
    text: "Great. I'll confirm each selection before we finish so there are no surprises.",
    section: "Close",
  },
];

const methodSteps = [
  { label: "Define and select", short: "Define", detail: "Purpose + review set" },
  { label: "Observe", short: "Observe", detail: "Transcript evidence" },
  { label: "Judge", short: "Judge", detail: "Sufficiency + action" },
  { label: "Act and close", short: "Act", detail: "Priority + validation" },
];

const purposes = [
  {
    id: "monitoring",
    label: "Monitor",
    question: "What does performance generally look like?",
    selection: "Use normal work that can represent general performance.",
  },
  {
    id: "diagnostic",
    label: "Diagnose",
    question: "Is the suspected behavior occurring, and under what conditions?",
    selection: "Choose calls that can confirm, refine, or contradict the issue.",
  },
  {
    id: "validation",
    label: "Validate",
    question: "Did the targeted behavior change after coaching?",
    selection: "Choose a later call where the behavior had a fair opportunity to occur.",
  },
];

const sufficiencyOptions = [
  {
    id: "more",
    title: "Another call could change the decision",
    detail: "Select the next relevant interaction.",
    tone: "amber",
  },
  {
    id: "inadequate",
    title: "Evidence remains inadequate",
    detail: "Stop without forcing a conclusion.",
    tone: "red",
  },
  {
    id: "escalate",
    title: "Beyond authority or knowledge",
    detail: "Escalate the question with its source evidence.",
    tone: "amber",
  },
  {
    id: "enough",
    title: "Enough to act",
    detail: "Decide whether action is warranted.",
    tone: "green",
  },
];

function IconButton({ label, children, onClick }) {
  return (
    <button type="button" className="icon-button" aria-label={label} title={label} onClick={onClick}>
      {children}
    </button>
  );
}

function BoundaryModal({ type, onClose, handoff, onCopy }) {
  const boundaryCopy = {
    audio: {
      icon: <Headphones24Regular />,
      eyebrow: "Authoritative source",
      title: "Audio stays in the call platform",
      body: "In an enterprise version, this action opens the original call in its approved home environment. The Field Guide does not copy, host, or stream the recording.",
      footer: "Prototype behavior: the external destination is intentionally unconfigured.",
    },
    phub: {
      icon: <Open24Regular />,
      eyebrow: "Official record",
      title: "PHUB remains the destination",
      body: "The Field Guide can prepare a concise, evidence-linked handoff. PHUB remains the place where the Coaching Partner records and submits the official outcome.",
      footer: "Prototype behavior: no PHUB write, sync, or deep link is implied.",
    },
  };

  if (type === "tree") {
    return (
      <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
        <section className="modal-card tree-modal" role="dialog" aria-modal="true" aria-labelledby="tree-title" onMouseDown={(event) => event.stopPropagation()}>
          <header className="modal-header">
            <div className="modal-icon tree"><BookOpen24Regular /></div>
            <div>
              <span className="eyebrow">Physical companion</span>
              <h2 id="tree-title">The same method, one page</h2>
            </div>
            <IconButton label="Close decision tree" onClick={onClose}><Dismiss24Regular /></IconButton>
          </header>
          <p className="modal-lede">The printable decision tree is the stable method anchor. This prototype applies the same questions directly to a transcript.</p>
          <ol className="tree-question-list">
            <li><span>1</span><div><strong>Why am I reviewing?</strong><small>Monitoring, diagnosis, or validation changes what evidence belongs.</small></div></li>
            <li><span>2</span><div><strong>What evidence should I inspect?</strong><small>State why each call was selected.</small></div></li>
            <li><span>3</span><div><strong>What actually happened?</strong><small>Capture source, timestamp, words, actions, sequence, omission, and context.</small></div></li>
            <li><span>4</span><div><strong>What does the evidence collectively support?</strong><small>Keep findings traceable to the transcript.</small></div></li>
            <li><span>5</span><div><strong>Is it sufficient for this decision?</strong><small>Review more, stop, escalate, or continue.</small></div></li>
            <li><span>6</span><div><strong>What one action matters most?</strong><small>Prioritize impact, recurrence, and coachability.</small></div></li>
            <li><span>7</span><div><strong>What later evidence will establish resolution?</strong><small>Follow up where the behavior has a fair opportunity to occur.</small></div></li>
          </ol>
          <div className="modal-note"><ArrowDownload20Regular /><span>The printable PDF is delivered alongside this interactive prototype.</span></div>
        </section>
      </div>
    );
  }

  if (type === "handoff") {
    return (
      <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
        <section className="modal-card handoff-modal" role="dialog" aria-modal="true" aria-labelledby="handoff-title" onMouseDown={(event) => event.stopPropagation()}>
          <header className="modal-header">
            <div className="modal-icon success"><Checkmark20Regular /></div>
            <div>
              <span className="eyebrow">Manual handoff</span>
              <h2 id="handoff-title">Ready to carry into PHUB</h2>
            </div>
            <IconButton label="Close handoff" onClick={onClose}><Dismiss24Regular /></IconButton>
          </header>
          <div className="handoff-summary">
            <div><span>Review purpose</span><strong>Diagnostic</strong></div>
            <div><span>Primary target</span><strong>{handoff.target}</strong></div>
            <div><span>Commitment</span><strong>{handoff.commitment}</strong></div>
            <div><span>Validation condition</span><strong>{handoff.validation}</strong></div>
          </div>
          <div className="handoff-boundary"><Info16Regular /><span>Only the concise result moves forward. The transcript and audio remain in their approved source environments.</span></div>
          <div className="modal-actions">
            <button type="button" className="button secondary" onClick={onCopy}><Copy20Regular />Copy handoff</button>
            <button type="button" className="button primary" onClick={() => onClose("phub")}><Open24Regular />Continue to PHUB</button>
          </div>
        </section>
      </div>
    );
  }

  const content = boundaryCopy[type];
  if (!content) return null;
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="modal-card boundary-modal" role="dialog" aria-modal="true" aria-labelledby="boundary-title" onMouseDown={(event) => event.stopPropagation()}>
        <header className="modal-header">
          <div className="modal-icon">{content.icon}</div>
          <div>
            <span className="eyebrow">{content.eyebrow}</span>
            <h2 id="boundary-title">{content.title}</h2>
          </div>
          <IconButton label="Close" onClick={onClose}><Dismiss24Regular /></IconButton>
        </header>
        <p className="modal-lede">{content.body}</p>
        <div className="modal-note"><Info16Regular /><span>{content.footer}</span></div>
        <div className="modal-actions"><button type="button" className="button primary" onClick={onClose}>Understood</button></div>
      </section>
    </div>
  );
}

export function App() {
  const [purpose, setPurpose] = useState("diagnostic");
  const [activeStep, setActiveStep] = useState(1);
  const [selectedLines, setSelectedLines] = useState([1, 2, 3]);
  const [evidence, setEvidence] = useState([]);
  const [observationNote, setObservationNote] = useState("");
  const [finding, setFinding] = useState("The reviewed opening shows a repeatable orientation gap before data capture begins.");
  const [sufficiency, setSufficiency] = useState("");
  const [actionWarranted, setActionWarranted] = useState("");
  const [target, setTarget] = useState("Orient the customer before requesting quote information.");
  const [commitment, setCommitment] = useState("When a delivered call begins, I will identify myself, explain why we are connected, and confirm the customer is ready before data capture.");
  const [validation, setValidation] = useState("A later delivered call shows the agent orienting the customer before the first information request.");
  const [modal, setModal] = useState("");
  const [toast, setToast] = useState("");
  const [transcriptFilter, setTranscriptFilter] = useState("all");

  const selectedRows = useMemo(
    () => transcript.filter((line) => selectedLines.includes(line.id)),
    [selectedLines],
  );
  const selectedPurpose = purposes.find((item) => item.id === purpose);
  const visibleTranscript = useMemo(() => {
    if (transcriptFilter === "opening") return transcript.filter((line) => line.section === "Opening");
    if (transcriptFilter === "evidence") {
      const evidenceLineIds = evidence.flatMap((item) => item.lineIds);
      return transcript.filter((line) => evidenceLineIds.includes(line.id));
    }
    return transcript;
  }, [transcriptFilter, evidence]);

  function announce(message) {
    setToast(message);
  }

  function toggleLine(id) {
    setSelectedLines((current) =>
      current.includes(id) ? current.filter((lineId) => lineId !== id) : [...current, id].sort((a, b) => a - b),
    );
  }

  function captureEvidence() {
    if (!selectedRows.length) {
      announce("Select one or more transcript lines first.");
      return;
    }
    const first = selectedRows[0];
    const last = selectedRows[selectedRows.length - 1];
    const quote = selectedRows.map((line) => `${line.speaker}: “${line.text}”`).join(" ");
    const defaultObservation = selectedRows.some((line) => line.id <= 3)
      ? "The customer asks for orientation twice; the agent begins data capture; the customer then asks who is speaking."
      : "The selected transcript lines preserve the observable words and sequence for later interpretation.";
    const item = {
      id: Date.now(),
      lineIds: selectedRows.map((line) => line.id),
      range: first.time === last.time ? first.time : `${first.time}-${last.time}`,
      quote,
      observation: observationNote.trim() || defaultObservation,
    };
    setEvidence((current) => [...current, item]);
    setSelectedLines([]);
    setObservationNote("");
    announce("Observable evidence added. Interpretation remains separate.");
  }

  function removeEvidence(id) {
    setEvidence((current) => current.filter((item) => item.id !== id));
    announce("Evidence item removed.");
  }

  function goToStep(index) {
    if (index >= 2 && evidence.length === 0) {
      announce("Capture at least one observable evidence item before judging sufficiency.");
      return;
    }
    if (index === 3 && !(sufficiency === "enough" && actionWarranted === "yes")) {
      announce("Decide that evidence is sufficient and action is warranted before planning the action.");
      return;
    }
    setActiveStep(index);
  }

  function prepareHandoff() {
    if (!target.trim() || !commitment.trim() || !validation.trim()) {
      announce("Complete the target, commitment, and validation condition first.");
      return;
    }
    setModal("handoff");
  }

  async function copyHandoff() {
    const text = `Review purpose: Diagnostic\nPrimary target: ${target}\nCommitment: ${commitment}\nValidation condition: ${validation}`;
    try {
      await navigator.clipboard.writeText(text);
      announce("Handoff copied for manual entry.");
    } catch {
      announce("Copy was unavailable in this preview. The handoff remains visible.");
    }
  }

  function closeModal(next) {
    setModal("");
    if (next === "phub") setTimeout(() => setModal("phub"), 0);
  }

  const evidenceLineIds = evidence.flatMap((item) => item.lineIds);

  return (
    <div className="app-shell">
      <header className="suite-bar">
        <div className="suite-left">
          <IconButton label="App launcher"><GridDots24Regular /></IconButton>
          <span className="suite-product">SharePoint</span>
          <span className="suite-divider" />
          <span className="suite-site">Coaching Partner Resources</span>
        </div>
        <div className="suite-right">
          <span className="environment-chip">V1 practice prototype</span>
          <IconButton label="More options"><MoreHorizontal24Regular /></IconButton>
          <div className="avatar" aria-label="Signed in as Coaching Partner">CP</div>
        </div>
      </header>

      <section className="workspace-header">
        <div className="workspace-title">
          <div className="product-mark"><DocumentText24Regular /></div>
          <div>
            <div className="breadcrumb">Field Guide <span>/</span> Practice review</div>
            <h1>Call Review Companion</h1>
            <p>Transcript evidence with judgment support - not a new system of record</p>
          </div>
        </div>
        <div className="header-actions">
          <button type="button" className="button quiet" onClick={() => setModal("tree")}><BookOpen24Regular />Decision tree</button>
          <button type="button" className="button secondary" onClick={() => setModal("audio")}><Headphones24Regular />Open audio at source</button>
          <button type="button" className="button phub" onClick={() => setModal("phub")}><Open24Regular />PHUB <span>official record</span></button>
        </div>
      </section>

      <nav className="stage-bar" aria-label="Call review stages">
        {methodSteps.map((step, index) => {
          const completed = index < activeStep;
          const active = index === activeStep;
          return (
            <button
              type="button"
              key={step.label}
              className={`stage ${active ? "active" : ""} ${completed ? "completed" : ""}`}
              onClick={() => goToStep(index)}
            >
              <span className="stage-number">{completed ? <CheckmarkCircle16Filled /> : index + 1}</span>
              <span><strong>{step.label}</strong><small>{step.detail}</small></span>
              {index < methodSteps.length - 1 && <ArrowRight20Regular className="stage-arrow" />}
            </button>
          );
        })}
        <div className="boundary-reminder"><Info16Regular />Audio stays at source. PHUB owns the record.</div>
      </nav>

      <main className="review-layout">
        <aside className="method-rail">
          <div className="rail-section rail-purpose">
            <span className="rail-label">Review purpose</span>
            <div className="purpose-tabs" role="tablist" aria-label="Review purpose">
              {purposes.map((item) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={purpose === item.id}
                  className={purpose === item.id ? "selected" : ""}
                  onClick={() => {
                    setPurpose(item.id);
                    announce(`${item.label} purpose selected.`);
                  }}
                  key={item.id}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <strong className="purpose-question">{selectedPurpose.question}</strong>
            <p>{selectedPurpose.selection}</p>
          </div>

          <div className="rail-section">
            <div className="rail-heading"><span className="rail-label">Review set</span><button type="button" className="text-button" onClick={() => announce("The next call should be selected because it could change the decision.")}><Add16Regular />Add</button></div>
            <button type="button" className="call-card selected" onClick={() => setTranscriptFilter("all")}>
              <span className="call-index">01</span>
              <span><strong>Practice call</strong><small>1:02:18 • bundled sale</small></span>
              <CheckmarkCircle16Filled />
            </button>
            <p className="selection-rationale"><strong>Selected because:</strong> the call began with a visible orientation issue and still resulted in a sale.</p>
          </div>

          <div className="rail-section rail-map">
            <div className="rail-heading"><span className="rail-label">Method map</span><button type="button" className="text-button" onClick={() => setModal("tree")}>View</button></div>
            {methodSteps.map((step, index) => (
              <button type="button" key={step.label} className={`rail-step ${index === activeStep ? "active" : ""}`} onClick={() => goToStep(index)}>
                <span>{index + 1}</span><div><strong>{step.label}</strong><small>{step.detail}</small></div>
              </button>
            ))}
          </div>

          <div className="rail-guardrail">
            <Lightbulb24Regular />
            <div><strong>Keep the distinction</strong><p>Evidence is what happened. Explanation is what you think it means.</p></div>
          </div>
        </aside>

        <section className="transcript-surface" aria-label="Interactive call transcript">
          <header className="transcript-header">
            <div>
              <div className="transcript-kicker"><span className="live-dot" />Synthetic practice transcript</div>
              <h2>Call 01 - delivered quote request</h2>
              <p><Clock16Regular />1:02:18 <span /> Aug 14, 2026 <span /> Opportunity present: opening orientation</p>
            </div>
            <div className="transcript-header-actions">
              <button type="button" className="button compact" onClick={() => setModal("audio")}><Play16Filled />Audio at source</button>
              <IconButton label="Transcript options"><MoreHorizontal24Regular /></IconButton>
            </div>
          </header>

          <div className="transcript-toolbar">
            <div className="filter-tabs" role="tablist" aria-label="Transcript filters">
              <button type="button" className={transcriptFilter === "all" ? "active" : ""} onClick={() => setTranscriptFilter("all")}>Full transcript</button>
              <button type="button" className={transcriptFilter === "opening" ? "active" : ""} onClick={() => setTranscriptFilter("opening")}>Opening</button>
              <button type="button" className={transcriptFilter === "evidence" ? "active" : ""} onClick={() => setTranscriptFilter("evidence")}>Evidence <span>{evidence.length}</span></button>
            </div>
            <span className="selection-help">Select lines to preserve observable evidence</span>
          </div>

          <div className="transcript-scroll">
            {visibleTranscript.length === 0 ? (
              <div className="empty-state"><DocumentText24Regular /><strong>No evidence captured yet</strong><p>Return to the full transcript and select the lines another reviewer should be able to locate.</p><button type="button" className="button secondary" onClick={() => setTranscriptFilter("all")}>Show transcript</button></div>
            ) : (
              visibleTranscript.map((line, index) => {
                const selected = selectedLines.includes(line.id);
                const preserved = evidenceLineIds.includes(line.id);
                const showSection = index === 0 || visibleTranscript[index - 1]?.section !== line.section;
                return (
                  <div className="transcript-block" key={line.id}>
                    {showSection && <div className="section-divider"><span>{line.section}</span><i /></div>}
                    <button type="button" className={`transcript-line ${selected ? "selected" : ""} ${preserved ? "preserved" : ""}`} onClick={() => toggleLine(line.id)}>
                      <span className="line-selector">{selected || preserved ? <Checkmark20Regular /> : ""}</span>
                      <span className="timestamp">{line.time}</span>
                      <span className={`speaker-badge ${line.role}`}>{line.speaker === "Agent" ? "A" : "C"}</span>
                      <span className="line-copy"><strong>{line.speaker}</strong><span>{line.text}</span></span>
                      {preserved && <span className="evidence-tag">Evidence</span>}
                    </button>
                  </div>
                );
              })
            )}
          </div>

          {selectedRows.length > 0 && (
            <div className="selection-tray">
              <div><span>{selectedRows.length} line{selectedRows.length > 1 ? "s" : ""} selected</span><strong>{selectedRows[0].time} - {selectedRows[selectedRows.length - 1].time}</strong></div>
              <button type="button" className="button primary" onClick={captureEvidence}><Add16Regular />Add as evidence</button>
            </div>
          )}
        </section>

        <aside className="guide-panel" aria-label="Copilot judgment support">
          <header className="guide-header">
            <div className="copilot-mark"><Sparkle24Regular /></div>
            <div><span className="eyebrow">Copilot guidance</span><h2>{methodSteps[activeStep].label}</h2></div>
            <span className="human-chip">CP decides</span>
          </header>
          <div className="guide-boundary"><Info16Regular /><span>Guidance structures the review. It does not score the call or diagnose the agent.</span></div>

          <div className="guide-scroll">
            {activeStep === 0 && (
              <div className="guide-content">
                <span className="prompt-number">Decision 1</span>
                <h3>Why are you reviewing?</h3>
                <p className="guide-lede">Purpose controls selection. Do not use one interesting call to answer a population-level question.</p>
                <div className="purpose-choice-stack">
                  {purposes.map((item) => (
                    <button type="button" className={purpose === item.id ? "selected" : ""} onClick={() => setPurpose(item.id)} key={item.id}>
                      <span>{purpose === item.id ? <Checkmark20Regular /> : null}</span><div><strong>{item.label}</strong><small>{item.question}</small></div>
                    </button>
                  ))}
                </div>
                <label className="field-label">Selection rationale<textarea defaultValue="Selected because the opening can test the suspected orientation gap while later call behavior provides material context." /></label>
                <button type="button" className="button primary full" onClick={() => setActiveStep(1)}>Begin transcript review<ArrowRight20Regular /></button>
              </div>
            )}

            {activeStep === 1 && (
              <div className="guide-content">
                <span className="prompt-number">Decision 2</span>
                <h3>Capture what happened first</h3>
                <p className="guide-lede">Select the smallest passage another reviewer could locate and recognize without accepting your interpretation.</p>

                <div className={`selection-insight ${selectedRows.length ? "ready" : ""}`}>
                  <div className="insight-heading"><DocumentText24Regular /><span><strong>Current selection</strong><small>{selectedRows.length ? `${selectedRows[0].time} - ${selectedRows[selectedRows.length - 1].time}` : "No lines selected"}</small></span></div>
                  {selectedRows.length ? (
                    <>
                      <blockquote>{selectedRows.map((line) => line.text).join(" ")}</blockquote>
                      <div className="guide-check"><CheckmarkCircle16Filled /><span><strong>Guide check</strong> The source and sequence remain visible.</span></div>
                    </>
                  ) : (
                    <p>Choose one or more transcript lines. The selected passage will stay linked to its timestamps.</p>
                  )}
                </div>

                <label className="field-label">Observable note <span>optional</span><textarea value={observationNote} onChange={(event) => setObservationNote(event.target.value)} placeholder="Describe words, actions, sequence, omission, and necessary context - not motive." /></label>
                <button type="button" className="button primary full" disabled={!selectedRows.length} onClick={captureEvidence}><Add16Regular />Add as evidence</button>

                <div className="insight-card amber">
                  <div className="insight-heading"><Warning16Filled /><span><strong>Material context</strong><small>Do not discard the contradiction</small></span></div>
                  <p>Rapport improved later and the call produced a sale. Preserve that context, then ask what changed between the opening and later performance.</p>
                </div>

                <div className="evidence-stack">
                  <div className="stack-heading"><strong>Preserved evidence</strong><span>{evidence.length}</span></div>
                  {evidence.length === 0 ? (
                    <div className="mini-empty">Nothing preserved yet.</div>
                  ) : evidence.map((item, index) => (
                    <article className="evidence-card" key={item.id}>
                      <header><span>Evidence {index + 1}</span><time>{item.range}</time></header>
                      <p>{item.observation}</p>
                      <footer><button type="button" onClick={() => { setTranscriptFilter("evidence"); announce("Showing preserved transcript lines."); }}>Show in transcript</button><button type="button" onClick={() => removeEvidence(item.id)}>Remove</button></footer>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="guide-content">
                <button type="button" className="back-link" onClick={() => setActiveStep(1)}><ArrowLeft20Regular />Back to evidence</button>
                <span className="prompt-number">Decision 3</span>
                <h3>What does the evidence support?</h3>
                <p className="guide-lede">Synthesize across calls without erasing uncertainty or contradictory evidence.</p>
                <div className="trace-card">
                  <span>Evidence</span><ArrowRight20Regular /><span>Finding</span><ArrowRight20Regular /><span>Explanation</span>
                </div>
                <label className="field-label">Finding<textarea value={finding} onChange={(event) => setFinding(event.target.value)} /></label>
                <div className="alternative-prompt"><Lightbulb24Regular /><div><strong>What else could reasonably explain this?</strong><p>Connection delay, delivered-call confusion, or an isolated lapse remain possible. Use the next decision to test whether more evidence could change the action.</p></div></div>

                <span className="prompt-number">Decision 4</span>
                <h3>Is the evidence sufficient for this decision?</h3>
                <div className="sufficiency-grid">
                  {sufficiencyOptions.map((option) => (
                    <button type="button" className={`${option.tone} ${sufficiency === option.id ? "selected" : ""}`} onClick={() => setSufficiency(option.id)} key={option.id}>
                      <span>{sufficiency === option.id ? <Checkmark20Regular /> : null}</span><div><strong>{option.title}</strong><small>{option.detail}</small></div>
                    </button>
                  ))}
                </div>

                {sufficiency === "enough" && (
                  <div className="action-decision">
                    <span className="prompt-number">Decision 5</span>
                    <h3>Is action warranted?</h3>
                    <div className="binary-choice">
                      <button type="button" className={actionWarranted === "yes" ? "selected" : ""} onClick={() => setActionWarranted("yes")}><Checkmark20Regular />Yes - prioritize one action</button>
                      <button type="button" className={actionWarranted === "no" ? "selected" : ""} onClick={() => setActionWarranted("no")}>No - acknowledge or monitor</button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeStep === 3 && (
              <div className="guide-content">
                <button type="button" className="back-link" onClick={() => setActiveStep(2)}><ArrowLeft20Regular />Back to sufficiency</button>
                <span className="prompt-number">Decision 6</span>
                <h3>Choose one primary target</h3>
                <p className="guide-lede">Prioritize impact, recurrence, and coachability. Do not turn the session into an inventory of every defect.</p>
                <div className="priority-chips"><span>Impact</span><span>Recurrence</span><span>Coachability</span></div>
                <label className="field-label">Primary target<textarea value={target} onChange={(event) => setTarget(event.target.value)} /></label>
                <label className="field-label">Behavior + situation + commitment<textarea value={commitment} onChange={(event) => setCommitment(event.target.value)} /></label>
                <span className="prompt-number">Decision 7</span>
                <h3>What later evidence will show change?</h3>
                <label className="field-label">Validation condition<textarea value={validation} onChange={(event) => setValidation(event.target.value)} /></label>
                <div className="closure-options"><span>Resolved</span><span>Continue monitoring</span><span>Further action</span><span>Escalate</span><span>Insufficient evidence</span></div>
                <button type="button" className="button primary full" onClick={prepareHandoff}>Prepare PHUB handoff<ArrowRight20Regular /></button>
              </div>
            )}
          </div>

          <footer className="guide-footer">
            {activeStep === 1 && <button type="button" className="button primary full" disabled={!evidence.length} onClick={() => setActiveStep(2)}>Judge sufficiency<ArrowRight20Regular /></button>}
            {activeStep === 2 && sufficiency === "enough" && actionWarranted === "yes" && <button type="button" className="button primary full" onClick={() => setActiveStep(3)}>Plan one action<ArrowRight20Regular /></button>}
            {activeStep === 2 && sufficiency && sufficiency !== "enough" && <button type="button" className="button secondary full" onClick={() => setActiveStep(1)}>Return to selection</button>}
          </footer>
        </aside>
      </main>

      {toast && <div className="toast" role="status"><CheckmarkCircle16Filled /><span>{toast}</span><button type="button" aria-label="Dismiss notification" onClick={() => setToast("")}><Dismiss24Regular /></button></div>}
      {modal && <BoundaryModal type={modal} onClose={closeModal} handoff={{ target, commitment, validation }} onCopy={copyHandoff} />}
    </div>
  );
}
