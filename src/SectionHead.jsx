const SectionHead = ({ num, eyebrow, title, sub }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
      gap: 56,
      alignItems: "end",
    }}
    className="sec-head-grid"
  >
    <div>
      <div className="label-eyebrow" style={{ marginBottom: 24 }}>
        <span className="accent">{num}</span>&nbsp;&nbsp;·&nbsp;&nbsp;{eyebrow}
      </div>
      <h2
        className="font-serif"
        style={{
          fontSize: "clamp(40px, 5.5vw, 72px)",
          lineHeight: 1.0,
          margin: 0,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>
    </div>
    {sub && (
      <p style={{ color: "var(--ink-2)", fontSize: 17, lineHeight: 1.5, margin: 0, maxWidth: 460 }}>
        {sub}
      </p>
    )}
    <style>{`
      @media (max-width: 900px) {
        .sec-head-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
      }
    `}</style>
  </div>
);

export default SectionHead;
