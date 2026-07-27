/* global React */
const { Eyebrow, SlideFoot, SectionHead } = window;

const PLATES = [
  { n: "01", file: "01-digital-liver.png",  title: "The Digital Liver", sub: "metabolize · not archive",        notes: { motif: "liver", color: "gold", motto: "information that cannot be metabolized is composted." } },
  { n: "02", file: "02-sift.png",           title: "SIFT",              sub: "signal · integration · flow · threshold", notes: { motif: "four-letter spread", color: "multi", motto: "a personal knowledge metabolism framework" } },
  { n: "03", file: "03-arc.png",            title: "The Arc",           sub: "april 2026 → september 25, 2026", notes: { motif: "arc · timeline", color: "gold", motto: "one arc · one year · one voice" } },
  { n: "04", file: "04-layers.png",         title: "Layers",            sub: "soma · cognition · expression",   notes: { motif: "tri-stack", color: "blue · oxblood", motto: "where signal becomes pattern" } },
  { n: "05", file: "05-vault.png",          title: "The Vault",         sub: "a personal knowledge metabolism system", notes: { motif: "wheel · 8 nodes", color: "gold", motto: "information becomes insight through accumulated practice" } },
  { n: "06", file: "06-running.png",        title: "Running",           sub: "the body preconditions the mind", notes: { motif: "ECG", color: "oxblood", motto: "somatic practice as epistemic method" } },
  { n: "07", file: "07-relational.png",     title: "Relational Ontology", sub: "information is not an object · it is an event", notes: { motif: "constellation", color: "gold faint", motto: "nodes are secondary. the connections are primary." } },
  { n: "08", file: "08-say-the-thing.png",  title: "Say the Thing",     sub: "expression as practice · not performance", notes: { motif: "type only", color: "gold", motto: "the inside version · made public" } },
  { n: "09", file: "09-loop.png",           title: "Complete Loop",     sub: "entered at the bedside · returned at the systems level", notes: { motif: "split column", color: "blue · gold", motto: "children's hospital · cna → change management" } },
  { n: "10", file: "10-september-25.png",   title: "September 25",      sub: "one year sober",                  notes: { motif: "calendar numeric", color: "gold", motto: "the arc ends where it began" } },
];

// ============================================================
// SLIDE 19 — Section: Plates
// ============================================================
function SlideDividerPlates() {
  return (
    <section data-screen-label="19 Section: Plates" className="slide slide--cover">
      <SectionHead num="06 — plates" title="The Plates" sub="ten frames · one voice" />
      <SlideFoot left="the system, applied" right="19 / 24" />
    </section>
  );
}

// ============================================================
// SLIDE 20 — Plate index gallery
// ============================================================
function SlidePlateGallery() {
  return (
    <section data-screen-label="20 Plate Gallery" className="slide" style={{ paddingBottom: 110 }}>
      <Eyebrow num="rp · 20" label="ten plates · index" />
      <div className="rule" style={{ margin: "24px 0 32px" }}></div>
      <div className="gallery" style={{ gridTemplateColumns: "repeat(5, 1fr)", gap: 24 }}>
        {PLATES.map((p) => (
          <div key={p.n} className="gallery__item">
            <div className="gallery__frame">
              <img src={`assets/plates/${p.file}`} alt={p.title} />
            </div>
            <div className="gallery__caption">
              <span className="gallery__num">rp · {p.n}</span>
              <span>{p.title.toLowerCase()}</span>
            </div>
          </div>
        ))}
      </div>
      <SlideFoot left="hover any plate · click for detail" right="20 / 24" />
    </section>
  );
}

// ============================================================
// SLIDE 21 — Do / Don't
// ============================================================
function SlideDoDont() {
  return (
    <section data-screen-label="21 Do / Don't" className="slide">
      <Eyebrow num="rp · 21" label="discipline · do & don't" />
      <div className="rule" style={{ margin: "24px 0 48px" }}></div>
      <h2 className="h-display h-display--sm" style={{ marginBottom: 32 }}>Discipline</h2>
      <div className="dd-grid">
        <div className="dd">
          <div className="dd__head dd__head--do">— do</div>
          <ul className="dd__list">
            <li>start every plate from ink (#0E0B08), never pure black</li>
            <li>headline in display sans uppercase, subhead in serif italic — always</li>
            <li>bracket the title with two hairline rules</li>
            <li>keep one diagram per plate; let it carry the argument</li>
            <li>use gold for emphasis, blue/teal/oxblood only for semantic roles</li>
            <li>let chrome (mono, lowercase, 0.15em tracking) sit at the foot</li>
            <li>respect the 8-px rhythm — no off-grid spacing</li>
            <li>let negative space breathe; resist filling the field</li>
          </ul>
        </div>
        <div className="dd">
          <div className="dd__head dd__head--no">— don't</div>
          <ul className="dd__list">
            <li>introduce new colors outside the documented palette</li>
            <li>mix display and serif inside the same line</li>
            <li>use icons or emoji — diagrams are the visual vocabulary</li>
            <li>add gradients beyond the documented soma layer</li>
            <li>set body copy in display or serif — it's mono</li>
            <li>let footer chrome go uppercase or above 0.15em tracking</li>
            <li>animate without easing tokens; no linear motion</li>
            <li>scale a single plate to portrait + landscape — pick one frame</li>
          </ul>
        </div>
      </div>
      <SlideFoot left="restraint is the system" right="21 / 24" />
    </section>
  );
}

// ============================================================
// SLIDE 22 — Accessibility
// ============================================================
function SlideA11y() {
  return (
    <section data-screen-label="22 Accessibility" className="slide">
      <Eyebrow num="rp · 22" label="accessibility · contrast & motion" />
      <div className="rule" style={{ margin: "24px 0 48px" }}></div>
      <h2 className="h-display h-display--sm" style={{ marginBottom: 32 }}>Reading the field</h2>
      <div className="two-col" style={{ gap: 80 }}>
        <div>
          <div className="rp-mono" style={{ color: "var(--rp-accent)", marginBottom: 16 }}>contrast · wcag aa</div>
          <table className="tok-table">
            <thead><tr><th>pair</th><th>ratio</th><th>verdict</th></tr></thead>
            <tbody>
              <tr><td>oat on ink</td><td className="value">14.8 : 1</td><td>aaa</td></tr>
              <tr><td>oat-dim on ink</td><td className="value">8.9 : 1</td><td>aaa</td></tr>
              <tr><td>gold on ink</td><td className="value">6.2 : 1</td><td>aa large + body</td></tr>
              <tr><td>blue on ink</td><td className="value">5.4 : 1</td><td>aa</td></tr>
              <tr><td>mute on ink</td><td className="value">4.1 : 1</td><td>aa large only</td></tr>
              <tr><td>oxblood on ink</td><td className="value">3.0 : 1</td><td>large display only</td></tr>
            </tbody>
          </table>
          <p className="h-serif" style={{ fontSize: 18, marginTop: 24, color: "var(--rp-fg-dim)" }}>
            Mute and oxblood are reserved for chrome and headline; never set body copy in either.
          </p>
        </div>
        <div>
          <div className="rp-mono" style={{ color: "var(--rp-accent)", marginBottom: 16 }}>motion · reduced-motion</div>
          <ul className="dd__list" style={{ marginBottom: 32 }}>
            <li>all plate animations honor <code>prefers-reduced-motion</code></li>
            <li>no animation exceeds 1.2s except the breath cycle</li>
            <li>no parallax or auto-advance — always user-paced</li>
            <li>focus rings are 2px gold; never removed</li>
          </ul>
          <div className="rp-mono" style={{ color: "var(--rp-accent)", marginBottom: 16 }}>type · reading</div>
          <ul className="dd__list">
            <li>minimum body size 13px on screen, 24px in slides</li>
            <li>line length capped at 72ch for serif, 90ch for mono</li>
            <li>headlines tracking ≥ -0.01em, never tighter</li>
            <li>uppercase always tracked positively (≥ 0.05em)</li>
          </ul>
        </div>
      </div>
      <SlideFoot left="legibility is non-negotiable" right="22 / 24" />
    </section>
  );
}

// ============================================================
// SLIDE 23 — Motion language
// ============================================================
function SlideMotion() {
  const eases = [
    ["standard", "cubic-bezier(.2, 0, 0, 1)", "default · most enters"],
    ["emphasis", "cubic-bezier(.3, 0, 0, 1)", "key reveals · numerics"],
    ["exit",     "cubic-bezier(.4, 0, 1, 1)", "departures"],
    ["breath",   "cubic-bezier(.45, 0, .55, 1)", "looping · ambient"],
  ];
  const durs = [
    ["instant", 80, "state nudges"],
    ["quick",   180, "hover · taps"],
    ["base",    320, "most enters"],
    ["slow",    640, "headlines · rules"],
    ["breath",  1200, "ambient cycles"],
    ["glacial", 2400, "ground state"],
  ];
  return (
    <section data-screen-label="23 Motion" className="slide">
      <Eyebrow num="rp · 23" label="motion · timing & easing" />
      <div className="rule" style={{ margin: "24px 0 32px" }}></div>
      <h2 className="h-display h-display--sm" style={{ marginBottom: 8 }}>Breath</h2>
      <p className="h-serif h-serif--md" style={{ marginBottom: 32, maxWidth: 900 }}>
        Motion follows respiration: enters arrive, holds settle, exits release. No spring snaps. No bounce.
      </p>
      <div className="two-col" style={{ gap: 64 }}>
        <div>
          <div className="rp-mono" style={{ color: "var(--rp-accent)", marginBottom: 16 }}>durations</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {durs.map(([n, ms, use]) => (
              <div key={n} style={{ display: "grid", gridTemplateColumns: "120px 1fr 80px 1fr", gap: 16, alignItems: "center" }}>
                <span className="rp-mono" style={{ color: "var(--rp-accent)" }}>{n}</span>
                <div className="motion-bar"><div className="motion-bar__fill" style={{ width: `${(ms / 2400) * 100}%` }}></div></div>
                <span className="rp-mono">{ms} ms</span>
                <span className="rp-mono" style={{ color: "var(--rp-mute)" }}>{use}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="rp-mono" style={{ color: "var(--rp-accent)", marginBottom: 16 }}>easings</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {eases.map(([n, c, use]) => (
              <div key={n} style={{ paddingBottom: 14, borderBottom: "1px solid var(--rp-rule)" }}>
                <div className="rp-mono" style={{ color: "var(--rp-accent)" }}>{n}</div>
                <div className="rp-mono" style={{ fontSize: 11, color: "var(--rp-fg-dim)", marginTop: 4 }}>{c}</div>
                <div className="h-serif" style={{ fontSize: 16, marginTop: 4 }}>{use}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SlideFoot left="enter · hold · release" right="23 / 24" />
    </section>
  );
}

// ============================================================
// SLIDE 24 — Closing
// ============================================================
function SlideClosing() {
  return (
    <section data-screen-label="24 Closing" className="slide slide--cover">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 48, padding: "0 120px" }}>
        <div className="rp-mono" style={{ color: "var(--rp-accent)", letterSpacing: "0.3em" }}>rp · v 1.0 · 2026</div>
        <div className="h-display h-display--md" style={{ textAlign: "center", maxWidth: 1400 }}>
          ONE ARC · ONE YEAR · ONE VOICE.
        </div>
        <div className="rule" style={{ width: 240, background: "var(--rp-accent)" }}></div>
        <div className="h-serif h-serif--lg" style={{ textAlign: "center", maxWidth: 1100 }}>
          The system is small on purpose.<br />Restraint is what gives the work its weight.
        </div>
      </div>
      <SlideFoot left="rubinstein productions · design architecture" right="24 / 24" />
    </section>
  );
}

Object.assign(window, {
  SlideDividerPlates, SlidePlateGallery,
  SlideDoDont, SlideA11y, SlideMotion, SlideClosing,
});
