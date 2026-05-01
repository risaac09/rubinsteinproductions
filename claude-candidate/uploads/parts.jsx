/* global React */
const { Fragment } = React;

// ============================================================
// Reusable building blocks for RP slides
// ============================================================

function Eyebrow({ num, label }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow__dot"></span>
      <span className="eyebrow__num">{num}</span>
      <span>·</span>
      <span>{label}</span>
    </div>
  );
}

function SlideFoot({ left, right }) {
  return (
    <div className="slide-foot">
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
}

function SectionHead({ num, title, sub }) {
  return (
    <div className="divider">
      <div className="divider__num">{num}</div>
      <h1 className="divider__title">{title}</h1>
      {sub ? <div className="divider__sub">{sub}</div> : null}
    </div>
  );
}

function Swatch({ name, hex, role, bg, border }) {
  return (
    <div className="tok">
      <div className="tok__chip" style={{ background: bg, border: border ? "1px solid var(--rp-rule)" : undefined }}></div>
      <div className="tok__name">{name}</div>
      <div className="tok__hex">{hex}</div>
      {role ? <div className="tok__role">{role}</div> : null}
    </div>
  );
}

// ——— Glyph SVGs (reusable motif primitives) ———————————

function GlyphLiver() {
  // Ovoid liver — concentric umber rings + inner network
  return (
    <svg className="glyph__svg" viewBox="0 0 200 200">
      <defs>
        <radialGradient id="liver" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6E5018" />
          <stop offset="60%" stopColor="#3A2A0E" />
          <stop offset="100%" stopColor="#1A1208" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="85" ry="65" fill="url(#liver)" stroke="#C8922E" strokeWidth="0.8" opacity="0.9" />
      <ellipse cx="100" cy="100" rx="65" ry="48" fill="none" stroke="#8E6820" strokeWidth="0.5" opacity="0.6" />
      <ellipse cx="100" cy="100" rx="42" ry="30" fill="none" stroke="#8E6820" strokeWidth="0.5" opacity="0.4" />
      {/* network */}
      <g stroke="#C8922E" strokeWidth="0.5" fill="#C8922E" opacity="0.85">
        <circle cx="100" cy="100" r="2.5" />
        <circle cx="80" cy="92" r="1.5" />
        <circle cx="118" cy="108" r="1.5" />
        <circle cx="92" cy="115" r="1.2" />
        <circle cx="115" cy="88" r="1.2" />
        <circle cx="70" cy="105" r="1" />
        <circle cx="130" cy="98" r="1" />
        <line x1="100" y1="100" x2="80" y2="92" />
        <line x1="100" y1="100" x2="118" y2="108" />
        <line x1="100" y1="100" x2="92" y2="115" />
        <line x1="100" y1="100" x2="115" y2="88" />
        <line x1="80" y1="92" x2="70" y2="105" />
        <line x1="118" y1="108" x2="130" y2="98" />
      </g>
    </svg>
  );
}

function GlyphArc() {
  return (
    <svg className="glyph__svg" viewBox="0 0 200 200">
      <path d="M 20 160 Q 100 30, 180 160" fill="none" stroke="#C8922E" strokeWidth="1" />
      {[0.05, 0.2, 0.35, 0.5, 0.65, 0.8, 0.95].map((t, i) => {
        const x = 20 + (180 - 20) * t;
        const y = 160 - Math.sin(t * Math.PI) * 130;
        return <circle key={i} cx={x} cy={y} r="2.5" fill="#C8922E" />;
      })}
    </svg>
  );
}

function GlyphLayers() {
  return (
    <svg className="glyph__svg" viewBox="0 0 200 200">
      <rect x="20" y="30" width="160" height="44" fill="none" stroke="#E8DEC9" strokeWidth="0.5" opacity="0.5" />
      <text x="100" y="58" textAnchor="middle" fill="#E8DEC9" fontSize="14" fontFamily="var(--rp-font-display)" fontWeight="700">EXPR</text>
      <rect x="20" y="78" width="160" height="44" fill="none" stroke="#6B92B8" strokeWidth="0.5" opacity="0.5" />
      <text x="100" y="106" textAnchor="middle" fill="#6B92B8" fontSize="14" fontFamily="var(--rp-font-display)" fontWeight="700">COG</text>
      <rect x="20" y="126" width="160" height="44" fill="none" stroke="#B14A3A" strokeWidth="0.5" opacity="0.5" />
      <text x="100" y="154" textAnchor="middle" fill="#B14A3A" fontSize="14" fontFamily="var(--rp-font-display)" fontWeight="700">SOMA</text>
      <path d="M 100 78 L 100 70 M 96 74 L 100 70 L 104 74" stroke="#6B92B8" strokeWidth="0.8" fill="none" />
      <path d="M 100 126 L 100 118 M 96 122 L 100 118 L 104 122" stroke="#B14A3A" strokeWidth="0.8" fill="none" />
    </svg>
  );
}

function GlyphVault() {
  return (
    <svg className="glyph__svg" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="70" fill="none" stroke="#3A2D14" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="45" fill="none" stroke="#3A2D14" strokeWidth="0.5" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const a = (i * Math.PI * 2) / 8 - Math.PI / 2;
        const x = 100 + Math.cos(a) * 70;
        const y = 100 + Math.sin(a) * 70;
        const colors = ["#B14A3A", "#5FA59B", "#C8922E", "#3A2D14", "#C8922E", "#3A2D14", "#3A2D14", "#C8922E"];
        return <g key={i}>
          <line x1="100" y1="100" x2={x} y2={y} stroke="#3A2D14" strokeWidth="0.5" />
          <circle cx={x} cy={y} r="6" fill="var(--rp-bg)" stroke={colors[i]} strokeWidth="1.2" />
        </g>;
      })}
      <circle cx="100" cy="100" r="14" fill="var(--rp-bg)" stroke="#C8922E" strokeWidth="1.2" />
    </svg>
  );
}

function GlyphSignal() {
  // sine wave
  const path = [];
  for (let i = 0; i <= 200; i += 2) {
    const y = 100 + Math.sin((i / 200) * Math.PI * 6) * 30;
    path.push(`${i === 0 ? "M" : "L"} ${i} ${y}`);
  }
  return (
    <svg className="glyph__svg" viewBox="0 0 200 200">
      <path d={path.join(" ")} fill="none" stroke="#C8922E" strokeWidth="1" />
    </svg>
  );
}

function GlyphConstellation() {
  const pts = [
    [50, 60], [80, 90], [120, 70], [150, 110], [70, 130], [110, 150], [160, 60], [40, 120]
  ];
  return (
    <svg className="glyph__svg" viewBox="0 0 200 200">
      {pts.map(([x, y], i) =>
        pts.slice(i + 1).map(([x2, y2], j) => {
          const d = Math.hypot(x - x2, y - y2);
          if (d < 60) return <line key={`${i}-${j}`} x1={x} y1={y} x2={x2} y2={y2} stroke="#8E6820" strokeWidth="0.4" opacity="0.6" />;
          return null;
        })
      )}
      {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={1.5 + Math.random()} fill="#E8DEC9" />)}
    </svg>
  );
}

function GlyphECG() {
  // ECG pulse
  let path = "M 0 100";
  for (let i = 0; i < 6; i++) {
    const x = 10 + i * 32;
    path += ` L ${x} 100 L ${x + 4} 80 L ${x + 8} 130 L ${x + 12} 60 L ${x + 16} 100`;
  }
  path += " L 200 100";
  return (
    <svg className="glyph__svg" viewBox="0 0 200 200">
      <path d={path} fill="none" stroke="#B14A3A" strokeWidth="1" />
    </svg>
  );
}

function GlyphLoop() {
  return (
    <svg className="glyph__svg" viewBox="0 0 200 200">
      <line x1="100" y1="20" x2="100" y2="180" stroke="#3A2D14" strokeWidth="0.5" />
      <g fontFamily="var(--rp-font-display)" fontSize="11" fontWeight="700" textAnchor="middle">
        <text x="55" y="80" fill="#6B92B8">PRACT.</text>
        <text x="145" y="80" fill="#C8922E">PATIENT</text>
      </g>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <line x1="20" y1={110 + i * 18} x2="80" y2={110 + i * 18} stroke="#6B92B8" strokeWidth="0.4" opacity="0.5" />
          <line x1="120" y1={110 + i * 18} x2="180" y2={110 + i * 18} stroke="#C8922E" strokeWidth="0.4" opacity="0.5" />
        </g>
      ))}
    </svg>
  );
}

Object.assign(window, {
  Eyebrow, SlideFoot, SectionHead, Swatch,
  GlyphLiver, GlyphArc, GlyphLayers, GlyphVault, GlyphSignal,
  GlyphConstellation, GlyphECG, GlyphLoop,
});
