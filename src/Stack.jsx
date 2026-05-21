// Stack — tools, organized
import Icon from "./icons.jsx";
import { PORTFOLIO_DATA } from "./data.jsx";
import SectionHead from "./SectionHead.jsx";

const Stack = () => {
  const D = PORTFOLIO_DATA;
  return (
    <section id="stack" className="section" data-screen-label="Stack" style={{ background: 'var(--paper)' }}>
      <div className="container-x">
        <SectionHead
          num="05"
          eyebrow="Stack"
          title={<>Tools I reach for, <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>daily</em></>}
          sub="Not a list of everything I've touched. These are the technologies I'd happily own in production tomorrow morning."
        />

        <div style={{
          marginTop: 64,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {D.stack.map((cat, i) => (
            <div key={cat.cat} style={{
              border: '1px solid var(--line)', borderRadius: 12,
              background: 'var(--bg)', padding: 24,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                <span className="num-eyebrow">0{i+1} · {cat.cat}</span>
                <span className="accent">●</span>
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 10 }}>
                {cat.items.map((it) => (
                  <li key={it} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    fontSize: 14, color: 'var(--ink)',
                    borderBottom: '1px solid var(--line-2)', paddingBottom: 8,
                  }}>
                    <span style={{
                      width: 6, height: 6, borderRadius: 1,
                      background: 'var(--accent)',
                    }}/>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
