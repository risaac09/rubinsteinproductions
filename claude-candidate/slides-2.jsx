/* global React */
const {
  Eyebrow, SlideFoot, SectionHead,
  GlyphLiver, GlyphArc, GlyphLayers, GlyphVault, GlyphSignal,
  GlyphConstellation, GlyphECG, GlyphLoop,
} = window;

// ============================================================
// SLIDE 09 — Section: Type
// ============================================================
function SlideDividerType() {
  return (
    <section data-screen-label="09 Section: Type" className="slide slide--cover">
      <SectionHead num="02 — type" title="Type" sub="display · serif italic · monospace" />
      <SlideFoot left="three voices · one register" right="09 / 24" />
    </section>
  );
}

// ============================================================
// SLIDE 10 — Type triad
// ============================================================
function SlideTypeTriad() {
  return (
    <section data-screen-label="10 Type Triad" className="slide">
      <Eyebrow num="rp · 10" label="type · the triad" />
      <div className="rule" style={{ margin: "24px 0 32px" }}></div>
      <h2 className="h-display h-display--sm" style={{ marginBottom: 8 }}>Three voices</h2>
      <p className="h-serif h-serif--md" style={{ marginBottom: 32, maxWidth: 900 }}>
        The plates speak in three registers. Each has a job. Mixing them is the whole grammar.
      </p>
      <div className="spec-row">
        <div className="spec-label">display · oswald</div>
        <div className="h-display" style={{ fontSize: 80 }}>SAY THE THING</div>
        <div className="spec-meta">700 · uppercase · -0.01em</div>
      </div>
      <div className="spec-row">
        <div className="spec-label">serif · cormorant</div>
        <div className="h-serif" style={{ fontSize: 56 }}>expression as practice</div>
        <div className="spec-meta">italic 400 · 0em</div>
      </div>
      <div className="spec-row">
        <div className="spec-label">mono · jetbrains</div>
        <div className="rp-mono" style={{ fontSize: 22, color: "var(--rp-fg-dim)" }}>apr 15 — essay 01 publishes</div>
        <div className="spec-meta">400 · lowercase · 0.15em</div>
      </div>
      <SlideFoot left="display loud · serif breathes · mono whispers" right="10 / 24" />
    </section>
  );
}

// ============================================================
// SLIDE 11 — Type roles & scale
// ============================================================
function SlideTypeScale() {
  const scale = [
    ["display · xl", "180px", "display 700", "poster numerals (e.g. 25)"],
    ["display · lg", "128px", "display 700", "section dividers"],
    ["display · md", "88px", "display 700", "plate headlines"],
    ["display · sm", "56px", "display 700", "slide headlines"],
    ["serif · xl", "64px", "serif italic", "manifesto lines"],
    ["serif · md", "28px", "serif italic", "plate subheads · breath"],
    ["body / mono", "15px", "mono 400", "body · meta"],
    ["meta", "13px", "mono 400", "chrome · labels"],
    ["chrome", "11px", "mono 400", "footer · plate index"],
  ];
  return (
    <section data-screen-label="11 Type Scale" className="slide">
      <Eyebrow num="rp · 11" label="type · scale & roles" />
      <div className="rule" style={{ margin: "24px 0 48px" }}></div>
      <h2 className="h-display h-display--sm" style={{ marginBottom: 32 }}>Scale & roles</h2>
      <table className="tok-table">
        <thead>
          <tr><th>role</th><th>size</th><th>family</th><th>used for</th></tr>
        </thead>
        <tbody>
          {scale.map(([r, s, f, u]) => (
            <tr key={r}>
              <td className="value">{r}</td>
              <td>{s}</td>
              <td>{f}</td>
              <td style={{ color: "var(--rp-mute)" }}>{u}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <SlideFoot left="modular · anchored · uppercase for headlines" right="11 / 24" />
    </section>
  );
}

// ============================================================
// SLIDE 12 — Section: Tokens
// ============================================================
function SlideDividerTokens() {
  return (
    <section data-screen-label="12 Section: Tokens" className="slide slide--cover">
      <SectionHead num="03 — tokens" title="Tokens" sub="css variables · spacing · motion" />
      <SlideFoot left="the system in code" right="12 / 24" />
    </section>
  );
}

// ============================================================
// SLIDE 13 — Tokens snapshot
// ============================================================
function SlideTokens() {
  const json = `{
  "color": {
    "ink":      "#0E0B08",
    "oat":      "#E8DEC9",
    "mute":     "#6E6450",
    "rule":     "#2A2218",
    "accent":   { "gold": "#C8922E", "blue": "#6B92B8",
                  "teal": "#4F8A82", "oxblood": "#8C3A2E" }
  },
  "type": {
    "display":  "Oswald, sans-serif",
    "serif":    "Cormorant Garamond, serif",
    "mono":     "JetBrains Mono, monospace"
  },
  "space":    [4, 8, 12, 16, 24, 32, 48, 64, 96, 128],
  "rule":     { "weight": "1px", "color": "rule" },
  "motion": {
    "dur":  { "quick": 180, "base": 320, "slow": 640, "breath": 1200 },
    "ease": { "standard": "cubic-bezier(.2,0,0,1)",
              "breath":   "cubic-bezier(.45,0,.55,1)" }
  }
}`;
  return (
    <section data-screen-label="13 Tokens" className="slide">
      <Eyebrow num="rp · 13" label="tokens · json" />
      <div className="rule" style={{ margin: "24px 0 48px" }}></div>
      <div className="two-col">
        <div>
          <h2 className="h-display h-display--sm" style={{ marginBottom: 16 }}>tokens.json</h2>
          <p className="h-serif h-serif--md" style={{ marginBottom: 32 }}>
            One source. The deck, the website, and any future surface read from the same file.
          </p>
          <ul className="dd__list">
            <li>colors are hex; semantic roles are aliases</li>
            <li>spacing is an 8-px scale (with one 4-px step)</li>
            <li>motion exposes durations in ms and named eases</li>
            <li>type families are stacks; weights live with the role</li>
          </ul>
        </div>
        <pre style={{
          background: "var(--rp-ink-2)", border: "1px solid var(--rp-rule)", padding: 28,
          fontFamily: "var(--rp-font-mono)", fontSize: 13, lineHeight: 1.65,
          color: "var(--rp-fg-dim)", margin: 0, whiteSpace: "pre-wrap",
        }}>{json}</pre>
      </div>
      <SlideFoot left="one source · many surfaces" right="13 / 24" />
    </section>
  );
}

// ============================================================
// SLIDE 14 — Spacing
// ============================================================
function SlideSpacing() {
  const steps = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128];
  return (
    <section data-screen-label="14 Spacing" className="slide">
      <Eyebrow num="rp · 14" label="spacing scale" />
      <div className="rule" style={{ margin: "24px 0 48px" }}></div>
      <h2 className="h-display h-display--sm" style={{ marginBottom: 12 }}>Spacing</h2>
      <p className="h-serif h-serif--md" style={{ marginBottom: 48 }}>
        An 8-pixel rhythm with one half-step. No off-grid values.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {steps.map((s, i) => (
          <div key={s} style={{ display: "grid", gridTemplateColumns: "120px 1fr 120px", gap: 24, alignItems: "center" }}>
            <span className="rp-mono" style={{ color: "var(--rp-accent)" }}>--rp-s-{i + 1}</span>
            <div style={{ height: 18, background: "var(--rp-ink-2)", border: "1px solid var(--rp-rule)", position: "relative" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${(s / 128) * 100}%`, background: "linear-gradient(90deg, var(--rp-accent-soft), var(--rp-accent))" }}></div>
            </div>
            <span className="rp-mono">{s} px</span>
          </div>
        ))}
      </div>
      <SlideFoot left="rhythm before composition" right="14 / 24" />
    </section>
  );
}

// ============================================================
// SLIDE 15 — Section: Components
// ============================================================
function SlideDividerComponents() {
  return (
    <section data-screen-label="15 Section: Components" className="slide slide--cover">
      <SectionHead num="04 — components" title="Components" sub="rule · header · chrome · footer" />
      <SlideFoot left="small parts · made consistent" right="15 / 24" />
    </section>
  );
}

// ============================================================
// SLIDE 16 — Components grid
// ============================================================
function SlideComponents() {
  return (
    <section data-screen-label="16 Components" className="slide">
      <Eyebrow num="rp · 16" label="components" />
      <div className="rule" style={{ margin: "24px 0 32px" }}></div>
      <h2 className="h-display h-display--sm" style={{ marginBottom: 32 }}>Six small parts</h2>
      <div className="comp-grid">
        <Comp name="rule">
          <div style={{ width: "100%" }}>
            <div className="rule"></div>
            <div style={{ height: 12 }}></div>
            <div className="rule rule--accent"></div>
          </div>
          <p className="comp__desc">1px hairlines bracket every plate header. Accent variant for emphasis.</p>
        </Comp>
        <Comp name="plate header">
          <div style={{ textAlign: "center", width: "100%" }}>
            <div className="h-display" style={{ fontSize: 28, marginBottom: 8 }}>THE VAULT</div>
            <div className="h-serif" style={{ fontSize: 14, lineHeight: 1.3 }}>a personal knowledge metabolism system</div>
          </div>
          <p className="comp__desc">Display headline + italic serif subhead. Always centered, always between rules.</p>
        </Comp>
        <Comp name="eyebrow">
          <Eyebrow num="rp · 04" label="the field" />
          <p className="comp__desc">Mono dot + index + label. Sets context at the top of every interior slide.</p>
        </Comp>
        <Comp name="footer chrome">
          <div style={{ width: "100%", borderTop: "1px solid var(--rp-rule)", paddingTop: 12, display: "flex", justifyContent: "space-between" }}>
            <span className="rp-mono">somatic practice as epistemic method</span>
            <span className="rp-mono">06 / 10</span>
          </div>
          <p className="comp__desc">Motto on the left, plate index on the right. Lowercase mono.</p>
        </Comp>
        <Comp name="numeric callout">
          <span className="rp-num" style={{ fontSize: 96 }}>25</span>
          <p className="comp__desc">Display numerals in gold for dates, counts, or markers of significance.</p>
        </Comp>
        <Comp name="tag pair">
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span className="rp-mono">apr 2026</span>
            <span style={{ color: "var(--rp-mute)" }}>→</span>
            <span className="rp-mono">sep 2026</span>
          </div>
          <p className="comp__desc">Date or label pairs joined by an arrow or middle-dot. Pure mono.</p>
        </Comp>
      </div>
      <SlideFoot left="rule · header · eyebrow · footer · numeric · tag" right="16 / 24" />
    </section>
  );
}

function Comp({ name, children }) {
  const [demo, ...rest] = React.Children.toArray(children);
  return (
    <div className="comp">
      <div className="comp__name">{name}</div>
      <div className="comp__demo">{demo}</div>
      {rest}
    </div>
  );
}

// ============================================================
// SLIDE 17 — Section: Motifs
// ============================================================
function SlideDividerMotifs() {
  return (
    <section data-screen-label="17 Section: Motifs" className="slide slide--cover">
      <SectionHead num="05 — motifs" title="Motifs" sub="liver · arc · layers · vault · loop" />
      <SlideFoot left="diagrammatic · drawn from the body of the work" right="17 / 24" />
    </section>
  );
}

// ============================================================
// SLIDE 18 — Motifs grid
// ============================================================
function SlideMotifs() {
  return (
    <section data-screen-label="18 Motifs" className="slide">
      <Eyebrow num="rp · 18" label="motifs · the visual lexicon" />
      <div className="rule" style={{ margin: "24px 0 32px" }}></div>
      <h2 className="h-display h-display--sm" style={{ marginBottom: 8 }}>Eight glyphs</h2>
      <p className="h-serif h-serif--md" style={{ marginBottom: 32, maxWidth: 900 }}>
        Each plate carries one diagram. The diagrams are the argument; the type just labels them.
      </p>
      <div className="glyph-grid">
        <Glyph name="liver" role="metabolize, not archive"><GlyphLiver /></Glyph>
        <Glyph name="signal" role="what arrives before attention"><GlyphSignal /></Glyph>
        <Glyph name="arc" role="one year, marked"><GlyphArc /></Glyph>
        <Glyph name="layers" role="soma · cognition · expression"><GlyphLayers /></Glyph>
        <Glyph name="vault" role="metabolism system"><GlyphVault /></Glyph>
        <Glyph name="ecg" role="the body preconditions the mind"><GlyphECG /></Glyph>
        <Glyph name="constellation" role="connections are primary"><GlyphConstellation /></Glyph>
        <Glyph name="loop" role="practitioner ↔ patient"><GlyphLoop /></Glyph>
      </div>
      <SlideFoot left="the diagrams are the argument" right="18 / 24" />
    </section>
  );
}

function Glyph({ name, role, children }) {
  return (
    <div className="glyph">
      {children}
      <div className="glyph__name">{name}</div>
      <div className="glyph__role">{role}</div>
    </div>
  );
}

Object.assign(window, {
  SlideDividerType, SlideTypeTriad, SlideTypeScale,
  SlideDividerTokens, SlideTokens, SlideSpacing,
  SlideDividerComponents, SlideComponents,
  SlideDividerMotifs, SlideMotifs,
});
