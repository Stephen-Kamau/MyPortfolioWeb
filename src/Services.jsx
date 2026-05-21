// Services / What I do — grid of offerings
import { useState } from "react";
import Icon from "./icons.jsx";
import { PORTFOLIO_DATA } from "./data.jsx";
import SectionHead from "./SectionHead.jsx";

const Services = () => {
  const D = PORTFOLIO_DATA;
  return (
    <section id="services" className="section" data-screen-label="Services">
      <div className="container-x">
        <SectionHead
          num="02"
          eyebrow="Services"
          title={<>What I can <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>build</em> for you</>}
          sub="From the warehouse layer to the chatbot a customer talks to, I work across the full data + ML stack. Engagements range from short retainers to embedded delivery."
        />

        <div style={{
          display: 'grid', gap: 1, marginTop: 56,
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden',
        }}>
          {D.services.map((s) => (
            <ServiceCard key={s.id} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ s }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? 'var(--paper)' : 'var(--bg)',
        padding: '32px 28px',
        transition: 'background .25s ease',
        position: 'relative', minHeight: 280,
        display: 'flex', flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
        <span className="num-eyebrow">{s.id} / Service</span>
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 30, height: 30, borderRadius: 999, border: '1px solid var(--line)',
          color: hover ? 'var(--accent)' : 'var(--ink-3)', transition: 'color .25s, transform .25s',
          transform: hover ? 'translate(2px, -2px)' : 'none',
        }}>
          <Icon name="arrow-up-right" size={14}/>
        </span>
      </div>

      <h3 className="font-serif" style={{ fontSize: 28, lineHeight: 1.1, margin: '0 0 14px', letterSpacing: '-0.01em' }}
          dangerouslySetInnerHTML={{ __html: s.title }} />

      <p style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.5, margin: '0 0 22px', flex: 1 }}>
        {s.summary}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {s.tools.map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>
    </div>
  );
};

export default Services;
