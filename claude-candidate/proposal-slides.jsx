/* global React */
const { useState } = React;

// ============================================================
// PROPOSAL TEMPLATE — 12 slides
// All copy is bracketed [like-this] for swap-in
// ============================================================

const sectionLabel = (n, t) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 16, borderBottom: "1px solid var(--rp-rule)" }}>
    <span className="rp-mono" style={{ color: "var(--rp-accent)" }}>{n}</span>
    <span className="rp-mono">{t}</span>
  </div>
);
const footerChrome = (n, total) => (
  <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 16, borderTop: "1px solid var(--rp-rule)" }}>
    <span className="rp-mono">rubinstein productions · proposal</span>
    <span className="rp-mono">{n} / {total}</span>
  </div>
);

const TOTAL = 12;

// 01 — Cover
function S01() {
  return (
    <div className="slide-pad" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="rp-mono">rubinstein productions</span>
        <span className="rp-mono">proposal · v 1.0</span>
      </div>
      <div>
        <div className="rp-mono" style={{ color: "var(--rp-accent)", marginBottom: 32, letterSpacing: "0.3em" }}>for · [client name]</div>
        <div style={{ fontFamily: "var(--rp-font-display)", fontSize: 112, fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.015em", textTransform: "uppercase", color: "var(--rp-fg)" }}>
          A System for<br />
          <span style={{ color: "var(--rp-accent)" }}>Saying Why.</span>
        </div>
        <div style={{ width: 280, height: 2, background: "var(--rp-accent)", margin: "40px 0" }}></div>
        <div className="h-serif h-serif--md" style={{ maxWidth: 800, fontSize: 32 }}>
          a scope of work · the three layers · timeline · investment.
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="rp-mono">[month, 2027]</span>
        <span className="rp-mono">isaac rubinstein</span>
        <span className="rp-mono">01 · cover</span>
      </div>
    </div>
  );
}

// 02 — Summary
function S02() {
  return (
    <div className="slide-pad" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {sectionLabel("02 · summary", "the work in one paragraph")}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 0" }}>
        <div className="h-serif" style={{ fontSize: 36, lineHeight: 1.4, fontStyle: "italic", color: "var(--rp-fg)", maxWidth: 1500 }}>
          [client name] is engaging Rubinstein Productions to <span style={{ color: "var(--rp-accent)" }}>[one-line outcome]</span> — through a scope spanning <span style={{ color: "var(--rp-accent)" }}>[layer 1]</span>, <span style={{ color: "var(--rp-accent)" }}>[layer 2]</span>, and <span style={{ color: "var(--rp-accent)" }}>[layer 3]</span>. delivered across [N] months · closing [date].
        </div>
      </div>
      {footerChrome("02", TOTAL)}
    </div>
  );
}

// 03 — The Three Layers
function S03() {
  const layers = [
    { n: "01", t: "Soma", d: "the body as instrument · somatic practice as epistemic method · the substrate." },
    { n: "02", t: "Cognition", d: "the mind as workshop · sense-making · pattern integration · the workshop floor." },
    { n: "03", t: "Expression", d: "the public surface · the inside version made public · saying the thing." },
  ];
  return (
    <div className="slide-pad" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {sectionLabel("03 · approach", "the three layers")}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, padding: "48px 0" }}>
        {layers.map((l) => (
          <div key={l.n} style={{ background: "var(--rp-ink-2)", border: "1px solid var(--rp-rule)", padding: 40, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div className="rp-mono" style={{ color: "var(--rp-accent)", marginBottom: 16 }}>layer · {l.n}</div>
              <div style={{ fontFamily: "var(--rp-font-display)", fontSize: 64, fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.005em", marginBottom: 24 }}>{l.t}</div>
            </div>
            <div className="h-serif" style={{ fontSize: 22, lineHeight: 1.4, color: "var(--rp-fg-dim)" }}>{l.d}</div>
          </div>
        ))}
      </div>
      {footerChrome("03", TOTAL)}
    </div>
  );
}

// 04 — Scope
function S04() {
  const scope = [
    "[deliverable 01 — short, concrete name]",
    "[deliverable 02]",
    "[deliverable 03]",
    "[deliverable 04]",
    "[deliverable 05]",
    "[deliverable 06]",
  ];
  return (
    <div className="slide-pad" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {sectionLabel("04 · scope", "what you receive")}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, padding: "48px 0" }}>
        {scope.map((s, i) => (
          <div key={i} style={{ display: "flex", gap: 24, alignItems: "baseline", padding: "16px 0", borderBottom: "1px solid var(--rp-rule)" }}>
            <span className="rp-mono" style={{ color: "var(--rp-accent)", minWidth: 32 }}>{String(i + 1).padStart(2, "0")}</span>
            <span style={{ fontFamily: "var(--rp-font-display)", fontSize: 28, fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.005em", color: "var(--rp-fg)" }}>{s}</span>
          </div>
        ))}
      </div>
      {footerChrome("04", TOTAL)}
    </div>
  );
}

// 05 — Deliverables detail
function S05() {
  return (
    <div className="slide-pad" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {sectionLabel("05 · deliverables", "depth & format")}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, padding: "48px 0" }}>
        {[1, 2, 3].map((i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "120px 1fr 200px", gap: 32, paddingBottom: 24, borderBottom: "1px solid var(--rp-rule)", alignItems: "baseline" }}>
            <span className="rp-mono" style={{ color: "var(--rp-accent)" }}>0{i} · format</span>
            <div>
              <div style={{ fontFamily: "var(--rp-font-display)", fontSize: 36, fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.005em" }}>[deliverable {i}]</div>
              <div className="h-serif" style={{ fontSize: 18, color: "var(--rp-fg-dim)", marginTop: 4 }}>[short description · what it is, who it's for, how it's used]</div>
            </div>
            <span className="rp-mono" style={{ textAlign: "right", color: "var(--rp-fg-dim)" }}>[duration / depth]</span>
          </div>
        ))}
      </div>
      {footerChrome("05", TOTAL)}
    </div>
  );
}

// 06 — Timeline (uses ArcTimeline component)
function S06() {
  return (
    <div className="slide-pad" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {sectionLabel("06 · timeline", "the 17-month arc")}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "48px 0" }}>
        <window.ArcTimeline />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, marginTop: 80 }}>
          {[
            { p: "phase 01", t: "discovery", w: "weeks 1–4" },
            { p: "phase 02", t: "construction", w: "weeks 5–32" },
            { p: "phase 03", t: "publication", w: "weeks 33–60" },
            { p: "phase 04", t: "close", w: "sept 25, 2027" },
          ].map((p) => (
            <div key={p.p} style={{ borderTop: "2px solid var(--rp-accent)", paddingTop: 16 }}>
              <div className="rp-mono" style={{ color: "var(--rp-accent)" }}>{p.p}</div>
              <div style={{ fontFamily: "var(--rp-font-display)", fontSize: 32, fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.005em", marginTop: 4 }}>{p.t}</div>
              <div className="h-serif" style={{ fontSize: 16, color: "var(--rp-fg-dim)", marginTop: 4 }}>{p.w}</div>
            </div>
          ))}
        </div>
      </div>
      {footerChrome("06", TOTAL)}
    </div>
  );
}

// 07 — Process
function S07() {
  return (
    <div className="slide-pad" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {sectionLabel("07 · process", "how we work together")}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "48px 0" }}>
        {[
          { n: "01", t: "Listen", d: "intake interviews · context mapping · the existing system rendered." },
          { n: "02", t: "Sift", d: "signal vs noise · what wants to live · what wants to compost." },
          { n: "03", t: "Build", d: "deliverables drafted · iterated weekly · revised against the manifesto." },
          { n: "04", t: "Ship", d: "publication · handoff · the system in your hands, not mine." },
        ].map((step) => (
          <div key={step.n} style={{ display: "grid", gridTemplateColumns: "120px 280px 1fr", gap: 32, alignItems: "baseline", padding: "20px 0", borderBottom: "1px solid var(--rp-rule)" }}>
            <span className="rp-num" style={{ fontSize: 56 }}>{step.n}</span>
            <span style={{ fontFamily: "var(--rp-font-display)", fontSize: 40, fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.005em" }}>{step.t}</span>
            <span className="h-serif" style={{ fontSize: 22, color: "var(--rp-fg-dim)", lineHeight: 1.4 }}>{step.d}</span>
          </div>
        ))}
      </div>
      {footerChrome("07", TOTAL)}
    </div>
  );
}

// 08 — Investment
function S08() {
  return (
    <div className="slide-pad" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {sectionLabel("08 · investment", "what it costs")}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, padding: "48px 0" }}>
        {[
          { tier: "essentials", price: "[$X]", note: "[scope summary]", primary: false },
          { tier: "complete", price: "[$Y]", note: "[scope summary]", primary: true },
          { tier: "extended", price: "[$Z]", note: "[scope summary]", primary: false },
        ].map((t) => (
          <div key={t.tier} style={{
            background: t.primary ? "var(--rp-ink-3)" : "var(--rp-ink-2)",
            border: `1px solid ${t.primary ? "var(--rp-accent)" : "var(--rp-rule)"}`,
            padding: 40,
            display: "flex", flexDirection: "column", gap: 24
          }}>
            <div className="rp-mono" style={{ color: t.primary ? "var(--rp-accent)" : "var(--rp-mute)" }}>{t.tier}</div>
            <div className="rp-num" style={{ fontSize: 96 }}>{t.price}</div>
            <div className="h-serif" style={{ fontSize: 18, color: "var(--rp-fg-dim)" }}>{t.note}</div>
            {t.primary ? <div className="rp-mono" style={{ color: "var(--rp-accent)", marginTop: "auto" }}>↳ recommended</div> : null}
          </div>
        ))}
      </div>
      {footerChrome("08", TOTAL)}
    </div>
  );
}

// 09 — Terms
function S09() {
  return (
    <div className="slide-pad" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {sectionLabel("09 · terms", "the agreement")}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, padding: "48px 0" }}>
        {[
          { t: "payment", d: "50% on signing · 25% at midpoint · 25% on close. wire or ACH." },
          { t: "revisions", d: "two rounds included per deliverable. additional rounds at [$X]/round." },
          { t: "ip & ownership", d: "client owns final deliverables. RP retains right to portfolio use unless waived." },
          { t: "kill fee", d: "if cancelled mid-arc, work-to-date is invoiced. no further obligation either way." },
        ].map((t) => (
          <div key={t.t} style={{ paddingBottom: 16, borderBottom: "1px solid var(--rp-rule)" }}>
            <div style={{ fontFamily: "var(--rp-font-display)", fontSize: 32, fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.005em", marginBottom: 12 }}>{t.t}</div>
            <div className="h-serif" style={{ fontSize: 20, lineHeight: 1.4, color: "var(--rp-fg-dim)" }}>{t.d}</div>
          </div>
        ))}
      </div>
      {footerChrome("09", TOTAL)}
    </div>
  );
}

// 10 — Why RP
function S10() {
  return (
    <div className="slide-pad" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {sectionLabel("10 · why rp", "the case")}
      <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "48px 0" }}>
        <div className="h-serif" style={{ fontSize: 40, lineHeight: 1.45, fontStyle: "italic", color: "var(--rp-fg)", maxWidth: 1300 }}>
          I entered medicine at the bedside and returned at the systems level. <span style={{ color: "var(--rp-accent)" }}>change management is a somatic skill.</span> the work I do across institutions is one continuous loop — practitioner ↔ patient · the inside version made public · the body preconditioning the mind.
        </div>
      </div>
      {footerChrome("10", TOTAL)}
    </div>
  );
}

// 11 — Next steps
function S11() {
  return (
    <div className="slide-pad" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {sectionLabel("11 · next", "to begin")}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "48px 0", gap: 32 }}>
        {[
          { n: "01", t: "Sign", d: "countersign this proposal · returns it to the agreement state." },
          { n: "02", t: "Wire", d: "first installment lands · the engagement opens." },
          { n: "03", t: "Begin", d: "intake interview within seven days · the arc starts." },
        ].map((s) => (
          <div key={s.n} style={{ display: "grid", gridTemplateColumns: "100px 280px 1fr", gap: 32, alignItems: "baseline" }}>
            <span className="rp-num" style={{ fontSize: 80 }}>{s.n}</span>
            <span style={{ fontFamily: "var(--rp-font-display)", fontSize: 56, fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.01em" }}>{s.t}</span>
            <span className="h-serif" style={{ fontSize: 24, color: "var(--rp-fg-dim)", lineHeight: 1.4 }}>{s.d}</span>
          </div>
        ))}
      </div>
      {footerChrome("11", TOTAL)}
    </div>
  );
}

// 12 — Close
function S12() {
  return (
    <div className="slide-pad" style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="rp-mono">rubinstein productions</span>
        <span className="rp-mono">12 · close</span>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "var(--rp-font-display)", fontSize: 200, fontWeight: 700, lineHeight: 0.9, letterSpacing: "-0.015em", textTransform: "uppercase" }}>
          Say <span style={{ fontFamily: "var(--rp-font-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--rp-accent)", textTransform: "none" }}>Why.</span>
        </div>
        <div style={{ width: 320, height: 2, background: "var(--rp-accent)", margin: "48px auto" }}></div>
        <div className="rp-mono" style={{ fontSize: 16, letterSpacing: "0.3em", color: "var(--rp-fg-dim)" }}>
          isaac@rubinsteinproductions.com · rubinsteinproductions.com
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="rp-mono">v 1.0 · 2027</span>
        <span className="rp-mono">17-month arc · ends september 25, 2027</span>
      </div>
    </div>
  );
}

window.ProposalSlides = [S01, S02, S03, S04, S05, S06, S07, S08, S09, S10, S11, S12];
window.ProposalLabels = ["01 Cover", "02 Summary", "03 Layers", "04 Scope", "05 Deliverables", "06 Timeline", "07 Process", "08 Investment", "09 Terms", "10 Why RP", "11 Next", "12 Close"];
