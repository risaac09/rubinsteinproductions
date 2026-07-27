/* global React */
const {
  Eyebrow, SlideFoot, SectionHead, Swatch,
  GlyphLiver, GlyphArc, GlyphLayers, GlyphVault, GlyphSignal,
  GlyphConstellation, GlyphECG, GlyphLoop,
} = window;

// ============================================================
// SLIDE 01 — Cover
// ============================================================
function SlideCover() {
  return (
    <section data-screen-label="01 Cover" className="slide slide--cover">
      <div className="cover">
        <div style={{ position: "absolute", top: 60, left: 80, right: 80, display: "flex", justifyContent: "space-between" }}>
          <span className="rp-mono">Rubinstein Productions</span>
          <span className="rp-mono">v 1.0 · 2026</span>
        </div>
        <div className="cover__sub" style={{ marginBottom: 24 }}>visual & design architecture</div>
        <div className="cover__mark">
          <span style={{ fontFamily: "var(--rp-font-serif)", fontSize: 144, lineHeight: 1 }}>
            Say <span style={{ fontStyle: "italic" }}>Why</span>
          </span>
          <span className="underline"></span>
        </div>
        <div className="h-serif h-serif--md" style={{ marginTop: 32, maxWidth: 700, textAlign: "center" }}>
          a system for thinking, making, and making public.
        </div>
        <div className="cover__chrome">
          <span>derived from the ten plates</span>
          <span>april 2026 → september 25, 2026</span>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SLIDE 02 — Index
// ============================================================
function SlideIndex() {
  const sections = [
    ["00", "the field", "ground · grid · frame"],
    ["01", "color", "near-black · oat · umber-gold"],
    ["02", "type", "display · serif italic · monospace"],
    ["03", "tokens", "css variables · spacing · motion"],
    ["04", "components", "rule · plate · header · chrome · footer"],
    ["05", "motifs", "liver · arc · layers · vault · loop"],
    ["06", "the plates", "ten frames · one voice"],
    ["07", "do / don't", "discipline notes"],
    ["08", "accessibility", "contrast · motion · reading"],
    ["09", "motion", "timing · easing · breath"],
  ];
  return (
    <section data-screen-label="02 Index" className="slide">
      <Eyebrow num="rp · 02" label="contents" />
      <div className="rule" style={{ margin: "24px 0 56px" }}></div>
      <h2 className="h-display h-display--md" style={{ marginBottom: 56 }}>The Architecture</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px 80px" }}>
        {sections.map(([n, t, s]) => (
          <div key={n} style={{
            display: "grid", gridTemplateColumns: "60px 1fr", gap: 24,
            paddingBottom: 16, borderBottom: "1px solid var(--rp-rule)",
            alignItems: "baseline",
          }}>
            <span className="rp-mono" style={{ color: "var(--rp-accent)" }}>{n}</span>
            <div>
              <div style={{ fontFamily: "var(--rp-font-display)", fontSize: 32, fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.005em", color: "var(--rp-fg)" }}>{t}</div>
              <div className="h-serif" style={{ fontSize: 18 }}>{s}</div>
            </div>
          </div>
        ))}
      </div>
      <SlideFoot left="rubinstein productions · design architecture" right="02 / 24" />
    </section>
  );
}

// ============================================================
// SLIDE 03 — Section: Field
// ============================================================
function SlideDividerField() {
  return (
    <section data-screen-label="03 Section: Field" className="slide slide--cover">
      <SectionHead num="00 — first principle" title="The Field" sub="ground · grid · frame" />
      <SlideFoot left="every plate begins from the same dark ground" right="03 / 24" />
    </section>
  );
}

// ============================================================
// SLIDE 04 — The Field (anatomy)
// ============================================================
function SlideField() {
  return (
    <section data-screen-label="04 The Field" className="slide">
      <Eyebrow num="rp · 04" label="the field" />
      <div className="rule" style={{ margin: "24px 0 48px" }}></div>
      <div className="two-col" style={{ gap: 80 }}>
        <div style={{ position: "relative", height: 720, border: "1px solid var(--rp-rule)", background: "var(--rp-bg)" }} className="rp-grid-bg">
          {/* Demo plate frame */}
          <div style={{ position: "absolute", inset: 32, display: "flex", flexDirection: "column" }}>
            <div className="rule" style={{ marginBottom: 12 }}></div>
            <div style={{ textAlign: "center", padding: "12px 0" }}>
              <div className="h-display h-display--sm" style={{ fontSize: 36, marginBottom: 8 }}>PLATE TITLE</div>
              <div className="h-serif" style={{ fontSize: 18, lineHeight: 1.3 }}>quiet subhead</div>
            </div>
            <div className="rule" style={{ marginTop: 12 }}></div>
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 80, height: 80, borderRadius: "50%", border: "1px solid var(--rp-accent)", opacity: 0.7 }}></div>
            </div>
            <div className="rule" style={{ marginBottom: 12 }}></div>
            <div className="rp-mono" style={{ fontSize: 11, textAlign: "center" }}>footer · meta · chrome</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <h2 className="h-display h-display--sm">Ground · Grid · Frame</h2>
          <p className="h-serif h-serif--md" style={{ color: "var(--rp-fg-dim)", margin: 0 }}>
            Every plate is a single ovation: dark ground, blueprint grid beneath, hairline rules above and below the title, monospace chrome at the foot.
          </p>
          <div style={{ borderTop: "1px solid var(--rp-rule)", paddingTop: 24, display: "flex", flexDirection: "column", gap: 14 }}>
            <Spec k="format" v="3 : 4 portrait · 750 × 1000 baseline" />
            <Spec k="frame pad" v="56 px (portrait) · 80 px (landscape)" />
            <Spec k="rule" v="1 px · #2A2218" />
            <Spec k="grid" v="40 px · #1A1610 · 60% opacity" />
            <Spec k="ground" v="#0E0B08 · warm near-black" />
          </div>
        </div>
      </div>
      <SlideFoot left="ground · grid · frame" right="04 / 24" />
    </section>
  );
}

function Spec({ k, v }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 24 }}>
      <span className="rp-mono">{k}</span>
      <span className="rp-mono" style={{ color: "var(--rp-fg-dim)" }}>{v}</span>
    </div>
  );
}

// ============================================================
// SLIDE 05 — Section: Color
// ============================================================
function SlideDividerColor() {
  return (
    <section data-screen-label="05 Section: Color" className="slide slide--cover">
      <SectionHead num="01 — palette" title="Color" sub="near-black · oat · umber-gold" />
      <SlideFoot left="restraint is the system" right="05 / 24" />
    </section>
  );
}

// ============================================================
// SLIDE 06 — Core palette
// ============================================================
function SlideColorCore() {
  const core = [
    { name: "ink", hex: "#0E0B08", role: "ground", bg: "#0E0B08", border: true },
    { name: "ink-2", hex: "#141009", role: "panel", bg: "#141009", border: true },
    { name: "rule", hex: "#2A2218", role: "hairline", bg: "#2A2218" },
    { name: "oat", hex: "#E8DEC9", role: "primary text", bg: "#E8DEC9" },
    { name: "oat-dim", hex: "#B5A98F", role: "secondary", bg: "#B5A98F" },
    { name: "mute", hex: "#6E6450", role: "metadata", bg: "#6E6450" },
  ];
  return (
    <section data-screen-label="06 Color · Core" className="slide">
      <Eyebrow num="rp · 06" label="palette · neutrals" />
      <div className="rule" style={{ margin: "24px 0 48px" }}></div>
      <h2 className="h-display h-display--sm" style={{ marginBottom: 12 }}>Neutrals</h2>
      <p className="h-serif h-serif--md" style={{ marginBottom: 48, maxWidth: 800 }}>
        Six values from ground to oat. Everything else is an accent.
      </p>
      <div className="tok-grid">
        {core.map((c) => <Swatch key={c.name} {...c} />)}
      </div>
      <SlideFoot left="warmth in the dark · cream not white" right="06 / 24" />
    </section>
  );
}

// ============================================================
// SLIDE 07 — Accent palette
// ============================================================
function SlideColorAccents() {
  const accents = [
    { name: "gold", hex: "#C8922E", role: "primary accent", bg: "#C8922E" },
    { name: "gold-soft", hex: "#8E6820", role: "deep gold", bg: "#8E6820" },
    { name: "gold-glow", hex: "#E5B14A", role: "highlight", bg: "#E5B14A" },
    { name: "blue", hex: "#6B92B8", role: "practitioner · cognition", bg: "#6B92B8" },
    { name: "teal", hex: "#4F8A82", role: "flow · integration", bg: "#4F8A82" },
    { name: "oxblood", hex: "#8C3A2E", role: "threshold · soma", bg: "#8C3A2E" },
  ];
  return (
    <section data-screen-label="07 Color · Accents" className="slide">
      <Eyebrow num="rp · 07" label="palette · accents" />
      <div className="rule" style={{ margin: "24px 0 48px" }}></div>
      <h2 className="h-display h-display--sm" style={{ marginBottom: 12 }}>Accents</h2>
      <p className="h-serif h-serif--md" style={{ marginBottom: 48, maxWidth: 800 }}>
        Gold leads. Blue, teal, and oxblood are reserved for plate semantics — never decoration.
      </p>
      <div className="tok-grid">
        {accents.map((c) => <Swatch key={c.name} {...c} />)}
      </div>
      <SlideFoot left="gold leads · the rest carry meaning" right="07 / 24" />
    </section>
  );
}

// ============================================================
// SLIDE 08 — Color semantics
// ============================================================
function SlideColorSemantics() {
  const rows = [
    ["ground", "ink", "#0E0B08", "all backgrounds"],
    ["text · primary", "oat", "#E8DEC9", "headlines · key labels"],
    ["text · secondary", "oat-dim", "#B5A98F", "subheads · italic tags"],
    ["text · meta", "mute", "#6E6450", "monospace chrome · footer"],
    ["accent · primary", "gold", "#C8922E", "marks · numerals · key emphasis"],
    ["accent · cognition", "blue", "#6B92B8", "the practitioner · the cognitive layer"],
    ["accent · flow", "teal", "#4F8A82", "integration · flow · clinical-work node"],
    ["accent · soma", "oxblood", "#8C3A2E", "the body · threshold · running"],
    ["rule", "rule", "#2A2218", "hairlines · grid · borders"],
  ];
  return (
    <section data-screen-label="08 Color · Semantics" className="slide">
      <Eyebrow num="rp · 08" label="color · semantics" />
      <div className="rule" style={{ margin: "24px 0 48px" }}></div>
      <h2 className="h-display h-display--sm" style={{ marginBottom: 32 }}>Semantic roles</h2>
      <table className="tok-table">
        <thead>
          <tr><th>role</th><th>token</th><th>hex</th><th>where it appears</th></tr>
        </thead>
        <tbody>
          {rows.map(([role, tok, hex, where]) => (
            <tr key={role}>
              <td>{role}</td>
              <td className="value">--rp-{tok}</td>
              <td>{hex}</td>
              <td style={{ color: "var(--rp-mute)" }}>{where}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <SlideFoot left="every color does a job" right="08 / 24" />
    </section>
  );
}

Object.assign(window, {
  SlideCover, SlideIndex, SlideDividerField, SlideField,
  SlideDividerColor, SlideColorCore, SlideColorAccents, SlideColorSemantics,
});
