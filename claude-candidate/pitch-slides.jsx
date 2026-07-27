/* global React */

const TOTAL_PD = 10;
const ftrPD = (n) => (
  <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 16, borderTop: "1px solid var(--rp-rule)" }}>
    <span className="rp-mono">rubinstein productions · pitch</span>
    <span className="rp-mono">{n} / {TOTAL_PD}</span>
  </div>
);
const hdrPD = (n, t) => (
  <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 16, borderBottom: "1px solid var(--rp-rule)" }}>
    <span className="rp-mono" style={{ color: "var(--rp-accent)" }}>{n}</span>
    <span className="rp-mono">{t}</span>
  </div>
);

// 01 — Title
function P01() {
  return (
    <div className="slide-pad" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="rp-mono">rubinstein productions</span>
        <span className="rp-mono">[venue · date]</span>
      </div>
      <div>
        <div className="rp-mono" style={{ color: "var(--rp-accent)", marginBottom: 32, letterSpacing: "0.3em" }}>a talk · 2027</div>
        <div style={{ fontFamily: "var(--rp-font-display)", fontSize: 200, fontWeight: 700, lineHeight: 0.9, letterSpacing: "-0.02em", textTransform: "uppercase" }}>
          Say<br /><span style={{ fontFamily: "var(--rp-font-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--rp-accent)", textTransform: "none" }}>Why.</span>
        </div>
        <div style={{ width: 320, height: 2, background: "var(--rp-accent)", margin: "40px 0" }}></div>
        <div className="h-serif" style={{ fontSize: 32, color: "var(--rp-fg-dim)", maxWidth: 900 }}>
          knowledge metabolism, somatic practice, and the seam where institutions meet the body.
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="rp-mono">isaac rubinstein</span>
        <span className="rp-mono">01 / 10</span>
      </div>
    </div>
  );
}

// 02 — The thesis
function P02() {
  return (
    <div className="slide-pad" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {hdrPD("02 · thesis", "the claim")}
      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <div className="h-serif" style={{ fontSize: 56, lineHeight: 1.35, fontStyle: "italic", color: "var(--rp-fg)", maxWidth: 1500 }}>
          information is not an object. it is <span style={{ color: "var(--rp-accent)" }}>an event</span> — and the systems we build for it should look like livers, not libraries.
        </div>
      </div>
      {ftrPD("02")}
    </div>
  );
}

// 03 — The four operations
function P03() {
  const ops = [
    { n: "01", t: "Signal", d: "what is even worth catching." },
    { n: "02", t: "Integration", d: "what fits with what's already metabolized." },
    { n: "03", t: "Flow", d: "what wants to keep moving." },
    { n: "04", t: "Threshold", d: "what crosses out of you, into the world." },
  ];
  return (
    <div className="slide-pad" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {hdrPD("03 · framework", "the four operations")}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, padding: "48px 0" }}>
        {ops.map((o) => (
          <div key={o.n} style={{ background: "var(--rp-ink-2)", border: "1px solid var(--rp-rule)", padding: 32, display: "flex", flexDirection: "column", gap: 16 }}>
            <span className="rp-num" style={{ fontSize: 64 }}>{o.n}</span>
            <div style={{ fontFamily: "var(--rp-font-display)", fontSize: 44, fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.005em" }}>{o.t}</div>
            <div className="h-serif" style={{ fontSize: 20, color: "var(--rp-fg-dim)", lineHeight: 1.4 }}>{o.d}</div>
          </div>
        ))}
      </div>
      {ftrPD("03")}
    </div>
  );
}

// 04 — Plate hero
function P04() {
  return (
    <div className="slide-pad" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {hdrPD("04 · plate", "the digital liver")}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, padding: "48px 0", alignItems: "center" }}>
        <div style={{ background: "var(--rp-ink-2)", border: "1px solid var(--rp-rule)", aspectRatio: "4/5", overflow: "hidden" }}>
          <img src="assets/plates/01-digital-liver.png" alt="digital liver" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div>
          <div className="rp-mono" style={{ color: "var(--rp-accent)", marginBottom: 16 }}>plate 01</div>
          <div style={{ fontFamily: "var(--rp-font-display)", fontSize: 88, fontWeight: 700, lineHeight: 0.95, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: 32 }}>
            The Digital<br />Liver
          </div>
          <div className="h-serif" style={{ fontSize: 28, fontStyle: "italic", color: "var(--rp-fg)", lineHeight: 1.4, paddingLeft: 24, borderLeft: "2px solid var(--rp-accent)" }}>
            information that cannot be metabolized is composted.
          </div>
        </div>
      </div>
      {ftrPD("04")}
    </div>
  );
}

// 05 — Body / Practitioner
function P05() {
  return (
    <div className="slide-pad" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {hdrPD("05 · body", "somatic precondition")}
      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <div className="h-serif" style={{ fontSize: 60, lineHeight: 1.3, fontStyle: "italic", color: "var(--rp-fg)", maxWidth: 1500 }}>
          the body <span style={{ color: "var(--rp-accent)" }}>preconditions</span> the mind. <br/>
          change management is a somatic skill before it is a managerial one.
        </div>
      </div>
      {ftrPD("05")}
    </div>
  );
}

// 06 — The arc
function P06() {
  return (
    <div className="slide-pad" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {hdrPD("06 · arc", "april 2026 → september 25, 2027")}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <window.ArcTimeline />
        <div className="h-serif" style={{ fontSize: 28, color: "var(--rp-fg-dim)", textAlign: "center", marginTop: 64, fontStyle: "italic" }}>
          seventeen months · ten plates · one voice located.
        </div>
      </div>
      {ftrPD("06")}
    </div>
  );
}

// 07 — Three layers
function P07() {
  return (
    <div className="slide-pad" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {hdrPD("07 · the stack", "soma · cognition · expression")}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, padding: "48px 0" }}>
        {[
          { t: "Soma", d: "the body as substrate · the floor of the system." },
          { t: "Cognition", d: "the workshop · pattern integration · sense-making." },
          { t: "Expression", d: "the public surface · saying the thing." },
        ].map((l, i) => (
          <div key={l.t} style={{ background: "var(--rp-ink-2)", border: "1px solid var(--rp-rule)", padding: 40, display: "flex", flexDirection: "column", gap: 24 }}>
            <span className="rp-mono" style={{ color: "var(--rp-accent)" }}>layer · 0{i + 1}</span>
            <div style={{ fontFamily: "var(--rp-font-display)", fontSize: 64, fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.005em" }}>{l.t}</div>
            <div className="h-serif" style={{ fontSize: 22, lineHeight: 1.45, color: "var(--rp-fg-dim)" }}>{l.d}</div>
          </div>
        ))}
      </div>
      {ftrPD("07")}
    </div>
  );
}

// 08 — Quote / breath
function P08() {
  return (
    <div className="slide-pad" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {hdrPD("08 · breath", "say the thing")}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", maxWidth: 1500 }}>
          <div className="h-serif" style={{ fontSize: 88, lineHeight: 1.2, fontStyle: "italic", color: "var(--rp-fg)" }}>
            "the inside version,<br /><span style={{ color: "var(--rp-accent)" }}>made public.</span>"
          </div>
          <div className="rp-mono" style={{ marginTop: 48, color: "var(--rp-mute)", letterSpacing: "0.3em" }}>↳ expression as practice · not performance.</div>
        </div>
      </div>
      {ftrPD("08")}
    </div>
  );
}

// 09 — Invitation
function P09() {
  return (
    <div className="slide-pad" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {hdrPD("09 · invitation", "what to do with this")}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 32 }}>
        {[
          { n: "01", t: "Read", d: "the plates publish in sequence · subscribe to the dispatch." },
          { n: "02", t: "Run", d: "build your own metabolism · we open frameworks under license." },
          { n: "03", t: "Reach out", d: "speaking · workshops · institutional engagements · 2027 calendar opens may." },
        ].map((s) => (
          <div key={s.n} style={{ display: "grid", gridTemplateColumns: "120px 320px 1fr", gap: 32, alignItems: "baseline" }}>
            <span className="rp-num" style={{ fontSize: 88 }}>{s.n}</span>
            <span style={{ fontFamily: "var(--rp-font-display)", fontSize: 56, fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.01em" }}>{s.t}</span>
            <span className="h-serif" style={{ fontSize: 26, color: "var(--rp-fg-dim)", lineHeight: 1.4 }}>{s.d}</span>
          </div>
        ))}
      </div>
      {ftrPD("09")}
    </div>
  );
}

// 10 — Close
function P10() {
  return (
    <div className="slide-pad" style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="rp-mono">rubinstein productions</span>
        <span className="rp-mono">10 · close</span>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "var(--rp-font-display)", fontSize: 220, fontWeight: 700, lineHeight: 0.9, letterSpacing: "-0.02em", textTransform: "uppercase" }}>
          Thank <span style={{ fontFamily: "var(--rp-font-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--rp-accent)", textTransform: "none" }}>You.</span>
        </div>
        <div style={{ width: 320, height: 2, background: "var(--rp-accent)", margin: "48px auto" }}></div>
        <div className="rp-mono" style={{ fontSize: 18, letterSpacing: "0.35em", color: "var(--rp-fg-dim)" }}>
          isaac@rubinsteinproductions.com · rubinsteinproductions.com
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="rp-mono">v 1.0 · 2027</span>
        <span className="rp-mono">arc closes · september 25, 2027</span>
      </div>
    </div>
  );
}

window.PitchSlides = [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10];
window.PitchLabels = ["01 Title", "02 Thesis", "03 Operations", "04 Plate", "05 Body", "06 Arc", "07 Stack", "08 Breath", "09 Invite", "10 Close"];
