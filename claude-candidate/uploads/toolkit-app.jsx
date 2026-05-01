/* global React */
const { DesignCanvas, DCSection, DCArtboard } = window;

// ============================================================
// 1. EMAIL SIGNATURE — three sizes
// ============================================================
function SigFull() {
  return (
    <div style={{ width: 480, padding: "20px 0", fontFamily: "var(--rp-font-mono)", fontSize: 13, color: "var(--rp-fg)", background: "var(--rp-ink)", borderTop: "1px solid var(--rp-rule)", borderBottom: "1px solid var(--rp-rule)" }}>
      <table cellPadding="0" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={{ verticalAlign: "top", paddingRight: 24, borderRight: "1px solid var(--rp-rule)" }}>
              <div style={{ fontFamily: "var(--rp-font-serif)", fontSize: 28, lineHeight: 1, color: "var(--rp-fg)" }}>
                Say <span style={{ fontStyle: "italic" }}>Why</span>
              </div>
              <div style={{ width: 50, height: 1, background: "var(--rp-accent)", marginTop: 4 }}></div>
            </td>
            <td style={{ verticalAlign: "top", paddingLeft: 24 }}>
              <div style={{ fontFamily: "var(--rp-font-display)", fontSize: 16, fontWeight: 700, letterSpacing: "-0.005em", color: "var(--rp-fg)", textTransform: "uppercase" }}>Isaac Rubinstein</div>
              <div style={{ fontFamily: "var(--rp-font-serif)", fontStyle: "italic", fontSize: 13, color: "var(--rp-fg-dim)", marginTop: 2 }}>Rubinstein Productions</div>
              <div style={{ height: 8 }}></div>
              <div style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--rp-mute)", textTransform: "lowercase" }}>isaac@rubinsteinproductions.com</div>
              <div style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--rp-mute)", textTransform: "lowercase" }}>rubinsteinproductions.com · providence ri</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function SigCompact() {
  return (
    <div style={{ width: 380, padding: 16, fontFamily: "var(--rp-font-mono)", fontSize: 12 }}>
      <div style={{ fontFamily: "var(--rp-font-display)", fontSize: 14, fontWeight: 700, letterSpacing: "-0.005em", color: "var(--rp-fg)", textTransform: "uppercase" }}>Isaac Rubinstein</div>
      <div style={{ width: 40, height: 1, background: "var(--rp-accent)", margin: "6px 0" }}></div>
      <div style={{ fontFamily: "var(--rp-font-serif)", fontStyle: "italic", fontSize: 13, color: "var(--rp-fg-dim)" }}>Rubinstein Productions · Say Why</div>
      <div style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--rp-mute)", marginTop: 6, textTransform: "lowercase" }}>isaac@rubinsteinproductions.com</div>
    </div>
  );
}

function SigOneLine() {
  return (
    <div style={{ padding: 12, fontFamily: "var(--rp-font-mono)", fontSize: 12, letterSpacing: "0.15em", color: "var(--rp-mute)", textTransform: "lowercase", display: "flex", gap: 16, alignItems: "center" }}>
      <span style={{ color: "var(--rp-fg)" }}>isaac rubinstein</span>
      <span style={{ color: "var(--rp-rule)" }}>·</span>
      <span style={{ fontFamily: "var(--rp-font-serif)", fontStyle: "italic", color: "var(--rp-fg-dim)", textTransform: "none", letterSpacing: 0 }}>Say Why</span>
      <span style={{ color: "var(--rp-rule)" }}>·</span>
      <span>rubinsteinproductions.com</span>
    </div>
  );
}

// ============================================================
// 2. LETTERHEAD (A-Letter portrait)
// ============================================================
function Letterhead() {
  return (
    <div style={{ width: 850, height: 1100, background: "var(--rp-ink)", color: "var(--rp-fg)", padding: 64, display: "flex", flexDirection: "column", fontFamily: "var(--rp-font-mono)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", paddingBottom: 16, borderBottom: "1px solid var(--rp-rule)" }}>
        <div>
          <div style={{ fontFamily: "var(--rp-font-serif)", fontSize: 36, lineHeight: 1 }}>Say <span style={{ fontStyle: "italic" }}>Why</span></div>
          <div style={{ width: 60, height: 1, background: "var(--rp-accent)", marginTop: 4 }}></div>
        </div>
        <div className="rp-mono" style={{ fontSize: 11, textAlign: "right" }}>
          <div>rubinstein productions</div>
          <div style={{ color: "var(--rp-mute-2)" }}>providence · ri · 2026</div>
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="h-serif" style={{ fontSize: 22, color: "var(--rp-mute)", textAlign: "center", maxWidth: 420 }}>
          [letter body · serif italic for openings, mono for the rest · 1.6 line-height]
        </div>
      </div>
      <div style={{ paddingTop: 16, borderTop: "1px solid var(--rp-rule)", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--rp-mute-2)" }}>isaac@rubinsteinproductions.com</span>
        <span style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--rp-mute-2)" }}>rubinsteinproductions.com</span>
      </div>
    </div>
  );
}

// ============================================================
// 3. PROPOSAL COVER (16:9)
// ============================================================
function ProposalCover() {
  return (
    <div style={{ width: 1280, height: 720, background: "var(--rp-ink)", color: "var(--rp-fg)", padding: 80, display: "flex", flexDirection: "column", justifyContent: "space-between", fontFamily: "var(--rp-font-mono)" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="rp-mono">Rubinstein Productions</span>
        <span className="rp-mono">proposal · v 1.0</span>
      </div>
      <div>
        <div className="rp-mono" style={{ color: "var(--rp-accent)", marginBottom: 24, letterSpacing: "0.3em" }}>for · [client name]</div>
        <div style={{ fontFamily: "var(--rp-font-display)", fontSize: 96, fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.01em", textTransform: "uppercase" }}>
          A System for<br />Saying Why.
        </div>
        <div style={{ width: 200, height: 2, background: "var(--rp-accent)", margin: "32px 0" }}></div>
        <div className="h-serif h-serif--md" style={{ maxWidth: 700 }}>
          a scope of work · the three layers · timeline · investment.
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="rp-mono">april 2026</span>
        <span className="rp-mono">isaac rubinstein</span>
        <span className="rp-mono">01 / cover</span>
      </div>
    </div>
  );
}

// ============================================================
// 4. OUTREACH CARD (4:5 — IG / LinkedIn)
// ============================================================
function OutreachCard() {
  return (
    <div style={{ width: 600, height: 750, background: "var(--rp-ink)", color: "var(--rp-fg)", padding: 56, display: "flex", flexDirection: "column", fontFamily: "var(--rp-font-mono)" }}>
      <div style={{ paddingBottom: 16, borderBottom: "1px solid var(--rp-rule)" }}>
        <div style={{ fontFamily: "var(--rp-font-serif)", fontSize: 36, lineHeight: 1 }}>Say <span style={{ fontStyle: "italic" }}>Why</span></div>
        <div style={{ width: 60, height: 1, background: "var(--rp-accent)", marginTop: 4 }}></div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 24 }}>
        <div className="rp-mono" style={{ color: "var(--rp-accent)", letterSpacing: "0.3em" }}>rp · introduction</div>
        <div style={{ fontFamily: "var(--rp-font-display)", fontSize: 56, fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.01em", textTransform: "uppercase" }}>
          Isaac<br />Rubinstein.
        </div>
        <div className="h-serif" style={{ fontSize: 22, color: "var(--rp-fg-dim)", lineHeight: 1.4 }}>
          practitioner · writer · maker.<br />
          <span style={{ color: "var(--rp-accent-soft)" }}>change management at the bedside, returned at the systems level.</span>
        </div>
        <div style={{ borderTop: "1px solid var(--rp-rule)", paddingTop: 16, display: "flex", flexDirection: "column", gap: 6 }}>
          <div className="rp-mono" style={{ fontSize: 12 }}>↳ ten plates · one arc · published september 25, 2026</div>
          <div className="rp-mono" style={{ fontSize: 12, color: "var(--rp-mute)" }}>rubinsteinproductions.com</div>
        </div>
      </div>
      <div style={{ paddingTop: 16, borderTop: "1px solid var(--rp-rule)", display: "flex", justifyContent: "space-between" }}>
        <span className="rp-mono" style={{ fontSize: 10 }}>isaac@rubinsteinproductions.com</span>
        <span className="rp-mono" style={{ fontSize: 10, color: "var(--rp-mute-2)" }}>rp · outreach · 01</span>
      </div>
    </div>
  );
}

// ============================================================
// 5. SOCIAL PLATE (1:1) — recipe shown with one plate
// ============================================================
function SocialSquare({ plate, n, title, sub }) {
  return (
    <div style={{ width: 600, height: 600, background: "var(--rp-ink)", padding: 48, display: "flex", flexDirection: "column", fontFamily: "var(--rp-font-mono)", color: "var(--rp-fg)" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="rp-mono" style={{ color: "var(--rp-accent)" }}>rp · {n}</span>
        <span className="rp-mono">say why</span>
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 0" }}>
        <img src={`assets/plates/${plate}`} alt={title} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
      </div>
      <div style={{ borderTop: "1px solid var(--rp-rule)", paddingTop: 12 }}>
        <div style={{ fontFamily: "var(--rp-font-display)", fontSize: 28, fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.005em" }}>{title}</div>
        <div className="h-serif" style={{ fontSize: 16 }}>{sub}</div>
      </div>
    </div>
  );
}

// ============================================================
// 6. SOCIAL PLATE (9:16) — story / TikTok
// ============================================================
function SocialStory({ plate, n, title, sub, motto }) {
  return (
    <div style={{ width: 405, height: 720, background: "var(--rp-ink)", padding: 32, display: "flex", flexDirection: "column", fontFamily: "var(--rp-font-mono)", color: "var(--rp-fg)" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="rp-mono" style={{ color: "var(--rp-accent)", fontSize: 11 }}>rp · {n}</span>
        <span className="rp-mono" style={{ fontSize: 11 }}>say why</span>
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 0" }}>
        <img src={`assets/plates/${plate}`} alt={title} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
      </div>
      <div style={{ borderTop: "1px solid var(--rp-rule)", paddingTop: 12 }}>
        <div style={{ fontFamily: "var(--rp-font-display)", fontSize: 26, fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.005em", lineHeight: 1 }}>{title}</div>
        <div className="h-serif" style={{ fontSize: 14, marginTop: 4 }}>{sub}</div>
        {motto ? <div className="h-serif" style={{ fontSize: 12, color: "var(--rp-accent-soft)", marginTop: 8, fontStyle: "italic" }}>"{motto}"</div> : null}
      </div>
    </div>
  );
}

// ============================================================
// 7. PRESS KIT BIO (3 lengths)
// ============================================================
function BioCard() {
  return (
    <div style={{ width: 800, padding: 48, background: "var(--rp-ink-2)", border: "1px solid var(--rp-rule)", color: "var(--rp-fg)", fontFamily: "var(--rp-font-mono)", fontSize: 13, lineHeight: 1.6 }}>
      <div className="rp-mono" style={{ color: "var(--rp-accent)", marginBottom: 16 }}>press · bio</div>
      <div style={{ marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid var(--rp-rule)" }}>
        <div className="rp-mono" style={{ fontSize: 11, color: "var(--rp-mute)", marginBottom: 8 }}>50 words</div>
        <div className="h-serif" style={{ fontSize: 17, color: "var(--rp-fg-dim)", fontStyle: "italic", lineHeight: 1.5 }}>
          Isaac Rubinstein is a practitioner, writer, and maker working at the seam between somatic practice and systems change. Rubinstein Productions is his publishing project — ten plates, one arc, published september 25, 2026.
        </div>
      </div>
      <div style={{ marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid var(--rp-rule)" }}>
        <div className="rp-mono" style={{ fontSize: 11, color: "var(--rp-mute)", marginBottom: 8 }}>150 words</div>
        <div style={{ color: "var(--rp-fg-dim)" }}>
          Isaac Rubinstein entered medicine at the bedside and returned at the systems level. He works as a practitioner and change agent across public health, institutions, and the framework. Rubinstein Productions is the publishing arm of his ongoing inquiry — a personal knowledge metabolism system rendered as ten design plates and a year of writing. The project frames information not as object but as event: signal, integration, flow, threshold. Each plate carries one diagram. Each diagram carries one argument. The arc begins April 15, 2026 and closes September 25, 2026 — one year sober, one essay published, one voice located.
        </div>
      </div>
      <div>
        <div className="rp-mono" style={{ fontSize: 11, color: "var(--rp-mute)", marginBottom: 8 }}>tagline</div>
        <div className="h-serif" style={{ fontSize: 22, color: "var(--rp-accent)", fontStyle: "italic" }}>expression as practice · not performance.</div>
      </div>
    </div>
  );
}

// ============================================================
// 8. NAMING / VOCAB CARD
// ============================================================
function VocabCard() {
  const terms = [
    ["the digital liver", "metabolize · not archive"],
    ["sift", "signal · integration · flow · threshold"],
    ["the arc", "april 2026 → september 25, 2026"],
    ["the stack", "soma · cognition · expression"],
    ["the vault", "personal knowledge metabolism system"],
    ["the loop", "practitioner ↔ patient"],
    ["the inside version, made public", "say the thing"],
    ["one arc · one year · one voice", "rp · 2026"],
  ];
  return (
    <div style={{ width: 600, padding: 48, background: "var(--rp-ink)", border: "1px solid var(--rp-rule)", color: "var(--rp-fg)", fontFamily: "var(--rp-font-mono)" }}>
      <div className="rp-mono" style={{ color: "var(--rp-accent)", marginBottom: 24 }}>rp · vocabulary</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {terms.map(([t, d]) => (
          <div key={t} style={{ paddingBottom: 12, borderBottom: "1px solid var(--rp-rule)" }}>
            <div style={{ fontFamily: "var(--rp-font-display)", fontSize: 20, fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.005em" }}>{t}</div>
            <div className="h-serif" style={{ fontSize: 14, color: "var(--rp-fg-dim)" }}>{d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// 9. INSTRUCTIONS / HOW TO USE
// ============================================================
function HowTo() {
  return (
    <div style={{ width: 700, padding: 48, background: "var(--rp-ink-2)", border: "1px solid var(--rp-rule)", color: "var(--rp-fg)", fontFamily: "var(--rp-font-mono)", fontSize: 13, lineHeight: 1.6 }}>
      <div className="rp-mono" style={{ color: "var(--rp-accent)", marginBottom: 24, letterSpacing: "0.3em" }}>rp · operations · how to use</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Step n="01" t="email signature">paste the inline HTML into Gmail → Settings → Signature, or Apple Mail → Preferences → Signatures (HTML mode).</Step>
        <Step n="02" t="letterhead / proposal cover">screenshot the artboard or open this file → print → save-as-PDF for letter-size output.</Step>
        <Step n="03" t="outreach card">screenshot the 4:5 artboard. drop into LinkedIn DM, IG bio link card, or attach to cold email.</Step>
        <Step n="04" t="social plates">use the 1:1 for IG feed, 9:16 for TikTok / IG stories. screenshot at 2x for retina export.</Step>
        <Step n="05" t="press kit bio">copy any of the three lengths into press emails, podcast intros, or speaker pages.</Step>
        <Step n="06" t="vocabulary">single source of truth for naming. when in doubt, this is the dictionary.</Step>
      </div>
      <div style={{ borderTop: "1px solid var(--rp-rule)", marginTop: 24, paddingTop: 16 }}>
        <div className="h-serif" style={{ fontSize: 16, fontStyle: "italic", color: "var(--rp-fg-dim)" }}>
          everything here reads from <span style={{ color: "var(--rp-accent)" }}>tokens.css</span> — change the token, change the world.
        </div>
      </div>
    </div>
  );
}

function Step({ n, t, children }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 16, alignItems: "baseline" }}>
      <span className="rp-mono" style={{ color: "var(--rp-accent)" }}>{n}</span>
      <div>
        <div className="rp-mono" style={{ color: "var(--rp-fg)", marginBottom: 4 }}>{t}</div>
        <div style={{ color: "var(--rp-fg-dim)" }}>{children}</div>
      </div>
    </div>
  );
}

// ============================================================
// CANVAS APP
// ============================================================
function App() {
  return (
    <DesignCanvas title="Rubinstein Productions · Operations Toolkit" subtitle="publish-ready · drop into vault, email, outreach">
      <DCSection id="how" title="00 · how to use">
        <DCArtboard id="howto" label="instructions" width={700} height={620}><HowTo /></DCArtboard>
      </DCSection>

      <DCSection id="email" title="01 · email signature">
        <DCArtboard id="sig-full" label="full · 480px" width={480} height={140}><SigFull /></DCArtboard>
        <DCArtboard id="sig-compact" label="compact · 380px" width={380} height={130}><SigCompact /></DCArtboard>
        <DCArtboard id="sig-line" label="one-liner" width={520} height={50}><SigOneLine /></DCArtboard>
      </DCSection>

      <DCSection id="docs" title="02 · letterhead & proposal">
        <DCArtboard id="letter" label="letterhead · 8.5×11" width={850} height={1100}><Letterhead /></DCArtboard>
        <DCArtboard id="prop" label="proposal cover · 16:9" width={1280} height={720}><ProposalCover /></DCArtboard>
      </DCSection>

      <DCSection id="outreach" title="03 · outreach card">
        <DCArtboard id="outreach-card" label="4:5 · linkedin / ig" width={600} height={750}><OutreachCard /></DCArtboard>
      </DCSection>

      <DCSection id="social-square" title="04 · social · 1:1 (instagram feed)">
        <DCArtboard id="sq-1" label="01 · digital liver" width={600} height={600}>
          <SocialSquare n="01" plate="01-digital-liver.png" title="The Digital Liver" sub="metabolize · not archive" />
        </DCArtboard>
        <DCArtboard id="sq-3" label="03 · the arc" width={600} height={600}>
          <SocialSquare n="03" plate="03-arc.png" title="The Arc" sub="april 2026 → september 25, 2026" />
        </DCArtboard>
        <DCArtboard id="sq-8" label="08 · say the thing" width={600} height={600}>
          <SocialSquare n="08" plate="08-say-the-thing.png" title="Say the Thing" sub="expression as practice" />
        </DCArtboard>
        <DCArtboard id="sq-10" label="10 · september 25" width={600} height={600}>
          <SocialSquare n="10" plate="10-september-25.png" title="September 25" sub="one year sober" />
        </DCArtboard>
      </DCSection>

      <DCSection id="social-story" title="05 · social · 9:16 (tiktok / stories)">
        <DCArtboard id="st-1" label="01 · digital liver" width={405} height={720}>
          <SocialStory n="01" plate="01-digital-liver.png" title="Digital Liver" sub="metabolize · not archive" motto="information that cannot be metabolized is composted." />
        </DCArtboard>
        <DCArtboard id="st-6" label="06 · running" width={405} height={720}>
          <SocialStory n="06" plate="06-running.png" title="Running" sub="the body preconditions the mind" motto="somatic practice as epistemic method" />
        </DCArtboard>
        <DCArtboard id="st-7" label="07 · relational" width={405} height={720}>
          <SocialStory n="07" plate="07-relational.png" title="Relational" sub="information is an event" motto="the connections are primary." />
        </DCArtboard>
      </DCSection>

      <DCSection id="press" title="06 · press kit bio">
        <DCArtboard id="bio" label="bio · three lengths" width={800} height={620}><BioCard /></DCArtboard>
      </DCSection>

      <DCSection id="vocab" title="07 · vocabulary · single source">
        <DCArtboard id="vocab-card" label="naming dictionary" width={600} height={620}><VocabCard /></DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
