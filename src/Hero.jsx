// Hero — big editorial headline with terminal/identity card on right
import Icon from "./icons.jsx";
import { PORTFOLIO_DATA } from "./data.jsx";

const Hero = () => {
  const D = PORTFOLIO_DATA;
  return (
    <section id="top" style={{ position: 'relative', overflow: 'hidden' }} data-screen-label="Hero">
      <div className="grid-faint" style={{
        position: 'absolute', inset: 0,
        maskImage: 'radial-gradient(ellipse at 30% 30%, black 30%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 30% 30%, black 30%, transparent 75%)',
        pointerEvents: 'none',
      }}/>
      <div className="container-x" style={{ position: 'relative', paddingTop: 64, paddingBottom: 88 }}>

        {/* eyebrow availability strip */}
        <div className="fade-in" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px',
            border: '1px solid var(--line)', borderRadius: 999, background: 'var(--paper)',
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: 999, background: 'oklch(0.65 0.16 145)',
              boxShadow: '0 0 0 4px oklch(0.65 0.16 145 / 0.18)',
            }}/>
            <span className="num-eyebrow">{D.status}</span>
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 56 }}>
          {/* Headline */}
          <div className="fade-in" style={{ animationDelay: '0.05s' }}>
            <div className="label-eyebrow" style={{ marginBottom: 24 }}>
              <span className="accent">●</span> &nbsp;{D.location} &nbsp;·&nbsp; available remote
            </div>
            <h1 className="font-serif" style={{
              fontSize: 'clamp(56px, 11vw, 168px)',
              lineHeight: 0.92,
              letterSpacing: '-0.025em',
              margin: 0,
            }}>
              I design <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>data systems</em>,<br/>
              and ship the <em style={{ fontStyle: 'italic' }}>ML</em> that runs on top.
            </h1>
          </div>

          {/* Sub-grid: lede + identity card */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(280px, 1fr)',
            gap: 56, alignItems: 'flex-start',
          }} className="hero-grid">

            <div className="fade-in" style={{ animationDelay: '0.15s' }}>
              <p style={{
                fontSize: 'clamp(18px, 1.6vw, 22px)',
                lineHeight: 1.5,
                maxWidth: 640,
                color: 'var(--ink-2)',
                margin: '0 0 32px 0',
              }}>
                I'm Stephen, a Data &amp; ML Engineer in Nairobi. At Prospect33 I build LLM agents, transaction anomaly-detection models, and the regulated-grade pipelines that feed them. On the side, I take on a handful of freelance projects in pipelines, ML deployment, LLM &amp; RAG integration, and chatbots.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="#work" className="btn btn-primary">
                  See projects <Icon name="arrow-down" size={14} />
                </a>
                <a href="#services" className="btn btn-ghost">
                  ML services I offer
                </a>
                <a href={`mailto:${D.email}`} className="btn btn-ghost">
                  <Icon name="mail" size={14} /> Email
                </a>
              </div>
            </div>

            {/* Identity card */}
            <div className="fade-in" style={{ animationDelay: '0.25s' }}>
              <IdentityCard />
            </div>
          </div>
        </div>
      </div>

      {/* tech marquee */}
      <div className="marquee" style={{
        borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
        padding: '14px 0', background: 'var(--paper)',
      }}>
        <div className="marquee-track">
          {[...D.marquee, ...D.marquee].map((t, i) => (
            <span key={i} className="num-eyebrow" style={{
              display: 'inline-flex', alignItems: 'center', gap: 12, color: 'var(--ink-2)',
              fontSize: 13, whiteSpace: 'nowrap',
            }}>
              <span className="accent">✱</span> {t}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
};

const IdentityCard = () => {
  const D = PORTFOLIO_DATA;
  return (
    <div style={{
      border: '1px solid var(--line)', borderRadius: 14,
      background: 'var(--paper)', padding: 0, overflow: 'hidden',
      boxShadow: '0 1px 0 oklch(0.92 0.012 70 / 1)',
    }}>
      {/* terminal */}
      <div style={{
        background: 'oklch(0.20 0.012 60)', color: 'oklch(0.88 0.014 65)',
        padding: '12px 16px 18px',
        fontFamily: "'JetBrains Mono', monospace", fontSize: 12, lineHeight: 1.7,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
          <span style={{ width: 9, height: 9, borderRadius: 999, background: 'oklch(0.62 0.16 25)' }}/>
          <span style={{ width: 9, height: 9, borderRadius: 999, background: 'oklch(0.78 0.14 90)' }}/>
          <span style={{ width: 9, height: 9, borderRadius: 999, background: 'oklch(0.65 0.16 145)' }}/>
          <span style={{ marginLeft: 8, fontSize: 10, color: 'oklch(0.65 0.014 65)' }}>~/portfolio/whoami</span>
        </div>
        <div><span style={{ color: 'var(--accent)' }}>$</span> whoami</div>
        <div style={{ color: 'oklch(0.94 0.008 80)' }}>stephen_kamau</div>
        <div><span style={{ color: 'var(--accent)' }}>$</span> uname -a</div>
        <div style={{ color: 'oklch(0.78 0.014 65)', fontSize: 11 }}>
          DataEngineer 3.1 nairobi-ke<br/>
          #1 SMP build (regulated-grade)
        </div>
        <div><span style={{ color: 'var(--accent)' }}>$</span> echo $STACK</div>
        <div style={{ color: 'oklch(0.94 0.008 80)', fontSize: 11 }}>
          airflow:dbt:snowflake:aws:python<span className="blink">▌</span>
        </div>
      </div>

      <div style={{ padding: 20, display: 'grid', gap: 10 }}>
        <Row label="ROLE" value="Data &amp; ML Engineer" />
        <Row label="LOC"  value={D.location} />
        <Row label="EMAIL" value={D.email} href={`mailto:${D.email}`} />
        <Row label="GIT"   value="@Stephen-Kamau" href={D.github} />
        <Row label="IN"    value="stiveckamash" href={D.linkedin} />
      </div>

      <div style={{
        padding: '14px 20px 18px',
        borderTop: '1px solid var(--line-2)',
        background: 'var(--bg-2)',
      }}>
        <div className="num-eyebrow" style={{ marginBottom: 6 }}>NOW</div>
        <div style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.5 }}>
          Architecting regulated-grade data + ML platforms at Prospect33. Taking on a small number of consulting engagements on the side.
        </div>
      </div>
    </div>
  );
};

const Row = ({ label, value, href }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: 12, alignItems: 'baseline' }}>
    <span className="num-eyebrow" style={{ fontSize: 10 }}>{label}</span>
    {href ? (
      <a href={href} target="_blank" rel="noreferrer" className="link-underline" style={{ fontSize: 13 }} dangerouslySetInnerHTML={{ __html: value }}/>
    ) : (
      <span style={{ fontSize: 13 }} dangerouslySetInnerHTML={{ __html: value }}/>
    )}
  </div>
);

export default Hero;
