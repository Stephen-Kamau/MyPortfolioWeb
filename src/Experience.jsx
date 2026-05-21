// Experience timeline
import { useState } from "react";
import Icon from "./icons.jsx";
import { PORTFOLIO_DATA } from "./data.jsx";
import SectionHead from "./SectionHead.jsx";

const Experience = () => {
  const D = PORTFOLIO_DATA;
  return (
    <section id="experience" className="section" data-screen-label="Experience">
      <div className="container-x">
        <SectionHead
          num="04"
          eyebrow="Experience"
          title={<>Four years, <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>three rooms</em></>}
          sub="Financial services, logistics, healthcare. Different domains, same hard problems: making data trustworthy, fast, and useful in production."
        />

        <div style={{ marginTop: 64, position: 'relative' }}>
          {D.experience.map((exp, i) => (
            <ExpRow key={i} exp={exp} idx={i} isLast={i === D.experience.length - 1}/>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExpRow = ({ exp, idx, isLast }) => {
  const [open, setOpen] = useState(idx === 0);
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '160px 1fr',
      gap: 32,
      paddingTop: 32,
      paddingBottom: 32,
      borderTop: '1px solid var(--line)',
      borderBottom: isLast ? '1px solid var(--line)' : 'none',
    }} className="exp-row">
      <div>
        <div className="num-eyebrow" style={{ marginBottom: 6 }}>{exp.period}</div>
        <span className="chip" style={{ fontSize: 10 }}>
          <Icon name="pin" size={10}/> {idx === 0 ? 'Now' : 'Past'}
        </span>
      </div>

      <div>
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
            background: 'transparent', border: 'none', padding: 0, width: '100%',
            cursor: 'pointer', color: 'inherit', textAlign: 'left', gap: 24,
          }}
        >
          <div>
            <div className="font-serif" style={{
              fontSize: 'clamp(28px, 3.2vw, 42px)', lineHeight: 1.05,
              letterSpacing: '-0.015em',
            }}>
              {exp.role} <span style={{ color: 'var(--ink-3)' }}>·</span> <span style={{ color: 'var(--accent)' }}>{exp.company}</span>
            </div>
            <div style={{ marginTop: 8, color: 'var(--ink-2)', fontSize: 15, maxWidth: 600 }}>
              {exp.context}
            </div>
          </div>
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 32, height: 32, borderRadius: 999, border: '1px solid var(--line)',
            color: 'var(--ink-2)', flexShrink: 0,
          }}>
            <Icon name={open ? "minus" : "plus"} size={14}/>
          </span>
        </button>

        {open && (
          <ul style={{
            margin: '24px 0 0 0', padding: 0, listStyle: 'none',
            display: 'grid', gap: 10,
          }}>
            {exp.bullets.map((b, j) => (
              <li key={j} style={{
                display: 'grid', gridTemplateColumns: '20px 1fr', gap: 8,
                fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.55,
              }}>
                <span className="accent" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, paddingTop: 4 }}>0{j+1}</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <style>{`
        @media (max-width: 720px) {
          .exp-row { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </div>
  );
};

export default Experience;
