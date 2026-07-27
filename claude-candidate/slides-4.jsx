/* global React */
const { Eyebrow, SlideFoot } = window;

const PLATE_DETAILS = [
  {
    n: "01", file: "01-digital-liver.png",
    title: "The Digital Liver", sub: "metabolize · not archive",
    motto: "information that cannot be metabolized is composted.",
    anatomy: [
      ["motif", "ovoid · concentric umber rings · inner network"],
      ["palette", "gold on ink · interior brown gradient"],
      ["chrome", "named november 29, 2025"],
      ["argument", "the body of work as organ, not vault"],
    ],
  },
  {
    n: "02", file: "02-sift.png",
    title: "SIFT", sub: "signal · integration · flow · threshold",
    motto: "a personal knowledge metabolism framework",
    anatomy: [
      ["motif", "four-letter spread · one diagram per letter"],
      ["palette", "oxblood · blue · teal · oxblood — one per stage"],
      ["chrome", "rubinstein productions · 2026"],
      ["argument", "four stages, four glyphs, one process"],
    ],
  },
  {
    n: "03", file: "03-arc.png",
    title: "The Arc", sub: "april 2026 → september 25, 2026",
    motto: "one arc · one year · one voice",
    anatomy: [
      ["motif", "single parabolic arc · seven dated nodes"],
      ["palette", "gold rule · oat labels · mute dates"],
      ["chrome", "begin → 1 year"],
      ["argument", "the year as a single gesture"],
    ],
  },
  {
    n: "04", file: "04-layers.png",
    title: "Layers", sub: "soma · cognition · expression",
    motto: "where signal becomes pattern",
    anatomy: [
      ["motif", "three vertically stacked strata · upward arrows"],
      ["palette", "oat · blue grid · oxblood gradient (bottom)"],
      ["chrome", "labeled at the gutter — expression, cognition, soma"],
      ["argument", "the body conditions thought conditions speech"],
    ],
  },
  {
    n: "05", file: "05-vault.png",
    title: "The Vault", sub: "a personal knowledge metabolism system",
    motto: "information becomes insight through accumulated practice",
    anatomy: [
      ["motif", "wheel · 8 satellite nodes · gold center"],
      ["palette", "muted · semantic per-node colors"],
      ["chrome", "centered footer motto"],
      ["argument", "every practice feeds the same metabolism"],
    ],
  },
  {
    n: "06", file: "06-running.png",
    title: "Running", sub: "the body preconditions the mind",
    motto: "somatic practice as epistemic method",
    anatomy: [
      ["motif", "ECG pulse train · ambient waveform behind"],
      ["palette", "oxblood pulse on near-black"],
      ["chrome", "6:00 am · daily · providence ri"],
      ["argument", "rhythm as cognition's prerequisite"],
    ],
  },
  {
    n: "07", file: "07-relational.png",
    title: "Relational Ontology", sub: "information is not an object · it is an event",
    motto: "nodes are secondary. the connections are primary.",
    anatomy: [
      ["motif", "constellation · faint links · scattered points"],
      ["palette", "near-monochrome gold dust"],
      ["chrome", "after whitehead · deleuze · pratītyasamutpāda"],
      ["argument", "relation as ontological primitive"],
    ],
  },
  {
    n: "08", file: "08-say-the-thing.png",
    title: "Say the Thing", sub: "expression as practice · not performance",
    motto: "the inside version · made public",
    anatomy: [
      ["motif", "type only · stacked headline · gold period"],
      ["palette", "gradient oat → gold across three lines"],
      ["chrome", "april 2026 → september 25, 2026"],
      ["argument", "the manifesto plate"],
    ],
  },
  {
    n: "09", file: "09-loop.png",
    title: "Complete Loop", sub: "entered at the bedside · returned at the systems level",
    motto: "children's hospital · cna → change management",
    anatomy: [
      ["motif", "split column · practitioner | patient · vertical seam"],
      ["palette", "blue (left) · gold (right) · gold seam arrow"],
      ["chrome", "footer attribution"],
      ["argument", "two readings of one career, one person"],
    ],
  },
  {
    n: "10", file: "10-september-25.png",
    title: "September 25", sub: "one year sober",
    motto: "the arc ends where it began.",
    anatomy: [
      ["motif", "calendar numeric · large gold 25"],
      ["palette", "gold display · oat-dim secondary · faint radial rays"],
      ["chrome", "april 2026 ↓ · 3 dated milestones"],
      ["argument", "the marker — single date as monument"],
    ],
  },
];

function PlateDetail({ p, index, total }) {
  return (
    <section data-screen-label={`${21 + index} Plate · ${p.title}`} className="slide" style={{ paddingBottom: 110 }}>
      <Eyebrow num={`rp · ${p.n}`} label={`plate · ${p.title.toLowerCase()}`} />
      <div className="rule" style={{ margin: "20px 0 32px" }}></div>
      <div className="plate-zoom">
        <img className="plate-zoom__img" src={`assets/plates/${p.file}`} alt={p.title} />
        <div className="plate-zoom__meta">
          <div className="plate-zoom__num">rp · plate {p.n}</div>
          <h2 className="plate-zoom__title">{p.title}</h2>
          <div className="plate-zoom__sub">{p.sub}</div>
          <div className="rule" style={{ margin: "8px 0" }}></div>
          <div className="plate-zoom__notes">
            {p.anatomy.map(([k, v]) => (
              <div key={k} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 16, padding: "6px 0" }}>
                <span style={{ color: "var(--rp-mute)" }}>{k}</span>
                <span><b>·</b> {v}</span>
              </div>
            ))}
          </div>
          <div className="h-serif" style={{ fontSize: 22, fontStyle: "italic", color: "var(--rp-fg-dim)", marginTop: 8, lineHeight: 1.4 }}>
            “{p.motto}”
          </div>
        </div>
      </div>
      <SlideFoot left={p.motto} right={`${21 + index} / ${total}`} />
    </section>
  );
}

function PlateDetailSlides() {
  const total = 24 + PLATE_DETAILS.length + 4; // approximate updated total
  return PLATE_DETAILS.map((p, i) => <PlateDetail key={p.n} p={p} index={i} total={total} />);
}

// ============================================================
// Brand mark study
// ============================================================
function SlideBrandMark() {
  return (
    <section data-screen-label="Brand Mark" className="slide">
      <Eyebrow num="rp · brand" label="say why · the lockup" />
      <div className="rule" style={{ margin: "24px 0 48px" }}></div>
      <h2 className="h-display h-display--sm" style={{ marginBottom: 12 }}>The mark</h2>
      <p className="h-serif h-serif--md" style={{ marginBottom: 48, maxWidth: 1000 }}>
        Cormorant Garamond · regular for "Say" · italic for "Why" · gold rule beneath. The rule is the whole brand: a line drawn under a question.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
        {/* Primary */}
        <div style={{ background: "var(--rp-ink-2)", border: "1px solid var(--rp-rule)", padding: 40, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: 320 }}>
          <div style={{ fontFamily: "var(--rp-font-serif)", fontSize: 72, lineHeight: 1.1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <span>Say <span style={{ fontStyle: "italic" }}>Why</span></span>
            <span style={{ width: 140, height: 2, background: "var(--rp-accent)" }}></span>
          </div>
          <div className="rp-mono" style={{ marginTop: 20 }}>primary · centered</div>
        </div>
        {/* Stacked */}
        <div style={{ background: "var(--rp-ink-2)", border: "1px solid var(--rp-rule)", padding: 40, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: 320, gap: 12 }}>
          <div style={{ fontFamily: "var(--rp-font-serif)", fontSize: 60, lineHeight: 1.05, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span>Say</span>
            <span style={{ fontStyle: "italic", color: "var(--rp-accent)" }}>Why</span>
          </div>
          <span style={{ width: 50, height: 1, background: "var(--rp-accent-soft)" }}></span>
          <div className="rp-mono">stacked · for portrait surfaces</div>
        </div>
        {/* Mono lockup */}
        <div style={{ background: "var(--rp-ink-2)", border: "1px solid var(--rp-rule)", padding: 40, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: 320 }}>
          <div className="rp-mono" style={{ fontSize: 16, color: "var(--rp-fg)", letterSpacing: "0.3em" }}>RUBINSTEIN PRODUCTIONS</div>
          <div style={{ width: 200, height: 1, background: "var(--rp-accent)", margin: "14px 0" }}></div>
          <div className="rp-mono" style={{ fontSize: 12, letterSpacing: "0.25em" }}>say · why · 2026</div>
        </div>
        {/* Inverse */}
        <div style={{ background: "var(--rp-oat)", padding: 40, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: 320 }}>
          <div style={{ fontFamily: "var(--rp-font-serif)", fontSize: 72, lineHeight: 1.1, color: "#1A140A", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <span>Say <span style={{ fontStyle: "italic" }}>Why</span></span>
            <span style={{ width: 140, height: 2, background: "var(--rp-accent-soft)" }}></span>
          </div>
          <div className="rp-mono" style={{ marginTop: 20, color: "#5C4818" }}>inverse · for press / print</div>
        </div>
      </div>
      <SlideFoot left="four lockups · one identity" right="brand · 01" />
    </section>
  );
}

// Clear space
function SlideBrandClearSpace() {
  return (
    <section data-screen-label="Brand Clear Space" className="slide">
      <Eyebrow num="rp · brand" label="clear space · sizing" />
      <div className="rule" style={{ margin: "24px 0 48px" }}></div>
      <div className="two-col" style={{ gap: 80 }}>
        <div>
          <h2 className="h-display h-display--sm" style={{ marginBottom: 16 }}>Clear space</h2>
          <p className="h-serif h-serif--md" style={{ marginBottom: 32 }}>
            One cap-height of clear space on every side. The rule is sacred — never crop, never extend.
          </p>
          <ul className="dd__list">
            <li>min lockup width — 96 px screen / 32 mm print</li>
            <li>cap-height defines all surrounding clearance</li>
            <li>never set the mark in any color outside the palette</li>
            <li>never break the lockup over two lines except in stacked form</li>
            <li>the gold rule is part of the mark — not optional decoration</li>
          </ul>
        </div>
        <div style={{ background: "var(--rp-ink-2)", border: "1px solid var(--rp-rule)", padding: 64, position: "relative", aspectRatio: "4/3" }}>
          {/* Outer guides */}
          <div style={{ position: "absolute", inset: 64, border: "1px dashed var(--rp-mute-2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "absolute", inset: 60, border: "1px dashed var(--rp-accent-soft)", opacity: 0.5 }}></div>
            <div style={{ fontFamily: "var(--rp-font-serif)", fontSize: 80, lineHeight: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <span>Say <span style={{ fontStyle: "italic" }}>Why</span></span>
              <span style={{ width: 150, height: 2, background: "var(--rp-accent)" }}></span>
            </div>
            <span className="rp-mono" style={{ position: "absolute", top: -28, left: 0, fontSize: 11 }}>x</span>
            <span className="rp-mono" style={{ position: "absolute", bottom: -28, right: 0, fontSize: 11 }}>x</span>
            <span className="rp-mono" style={{ position: "absolute", left: -28, top: "50%", fontSize: 11 }}>x</span>
            <span className="rp-mono" style={{ position: "absolute", right: -28, top: "50%", fontSize: 11 }}>x</span>
          </div>
        </div>
      </div>
      <SlideFoot left="x = cap-height of 'S'" right="brand · 02" />
    </section>
  );
}

Object.assign(window, { PlateDetailSlides, SlideBrandMark, SlideBrandClearSpace });
