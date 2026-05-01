/* global React */
const { useState } = React;

// ============================================================
// ARC TIMELINE — reusable across bio, proposal, deck
// 17-month strip: april 2026 → september 25, 2027
// ============================================================
function ArcTimeline({ compact = false }) {
  const months = [
    { m: "apr 26", label: "start", milestone: true },
    { m: "may 26" }, { m: "jun 26" }, { m: "jul 26" },
    { m: "aug 26", label: "first plate", milestone: true },
    { m: "sep 26" }, { m: "oct 26" }, { m: "nov 26" },
    { m: "dec 26", label: "midpoint", milestone: true },
    { m: "jan 27" }, { m: "feb 27" }, { m: "mar 27" },
    { m: "apr 27", label: "year one sober", milestone: true },
    { m: "may 27" }, { m: "jun 27" }, { m: "jul 27" },
    { m: "aug 27" },
    { m: "sep 27", label: "sept 25 · close", milestone: true, end: true },
  ];
  return (
    <div style={{ width: "100%", padding: compact ? "16px 0" : "32px 0" }}>
      {!compact ? (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, fontFamily: "var(--rp-font-mono)", fontSize: 11, letterSpacing: "0.2em", color: "var(--rp-mute)", textTransform: "lowercase" }}>
          <span>the arc</span>
          <span>17 months · april 2026 → september 25, 2027</span>
        </div>
      ) : null}
      <div style={{ position: "relative", height: compact ? 44 : 80 }}>
        {/* baseline */}
        <div style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 1, background: "var(--rp-rule)" }}></div>
        <div style={{ display: "flex", justifyContent: "space-between", height: "100%", position: "relative" }}>
          {months.map((mo, i) => (
            <div key={i} style={{ flex: 1, position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div style={{
                width: mo.milestone ? 8 : 2,
                height: mo.milestone ? 8 : 6,
                background: mo.end ? "var(--rp-accent)" : mo.milestone ? "var(--rp-fg-dim)" : "var(--rp-mute-2)",
                borderRadius: mo.milestone ? "50%" : 0,
                position: "absolute",
                top: "50%",
                transform: "translate(-50%, -50%)",
                left: "50%",
                boxShadow: mo.end ? "0 0 12px var(--rp-accent)" : "none"
              }}></div>
              {mo.milestone && !compact ? (
                <div style={{
                  position: "absolute",
                  top: i % 2 === 0 ? "calc(50% + 12px)" : "auto",
                  bottom: i % 2 === 1 ? "calc(50% + 12px)" : "auto",
                  fontFamily: "var(--rp-font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  color: mo.end ? "var(--rp-accent)" : "var(--rp-fg-dim)",
                  whiteSpace: "nowrap",
                  textTransform: "lowercase"
                }}>{mo.label}</div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      {!compact ? (
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, fontFamily: "var(--rp-font-mono)", fontSize: 10, letterSpacing: "0.15em", color: "var(--rp-mute-2)", textTransform: "lowercase" }}>
          <span>2026</span>
          <span style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}></span>
          <span>2027</span>
        </div>
      ) : null}
    </div>
  );
}

// expose globally
window.ArcTimeline = ArcTimeline;
