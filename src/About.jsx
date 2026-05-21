// About / Recognition — a quieter section
import Icon from "./icons.jsx";
import { PORTFOLIO_DATA } from "./data.jsx";
import SectionHead from "./SectionHead.jsx";

const About = () => {
  const D = PORTFOLIO_DATA;
  return (
    <section id="about" className="section" data-screen-label="About" style={{ background: 'var(--paper)' }}>
      <div className="container-x">
        <SectionHead
          num="01"
          eyebrow="Profile"
          title={<>The <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>shape</em> of me</>}
        />

        <div style={{
          marginTop: 56,
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.4fr) minmax(280px, 1fr)',
          gap: 64,
          alignItems: 'flex-start',
        }} className="about-grid">

          <div>
            <p className="font-serif" style={{
              fontSize: 'clamp(24px, 2.4vw, 32px)',
              lineHeight: 1.3,
              letterSpacing: '-0.005em',
              margin: '0 0 28px',
            }}>
              Data &amp; ML Engineer with 4+ years building production-grade platforms across financial services, healthcare, and logistics. I turn raw, messy, regulated data into things that ship..
            </p>

            <div style={{ display: 'grid', gap: 20, color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.65, maxWidth: 720 }}>
              <p style={{ margin: 0 }}>
                I work end-to-end: ingestion and ETL with <span style={{ color: 'var(--ink)' }}>Airflow</span> and <span style={{ color: 'var(--ink)' }}>dbt</span>, warehouse modelling on <span style={{ color: 'var(--ink)' }}>Snowflake</span>, ML deployment on <span style={{ color: 'var(--ink)' }}>SageMaker, Lambda, and EKS</span>. I'm equally comfortable arguing about indexing strategy on Postgres as I am wiring <span style={{ color: 'var(--ink)' }}>RAG</span> over a private corpus with LangChain.
              </p>
              <p style={{ margin: 0 }}>
                I bring technical rigour and a craftsman's mindset. I like working with cross-functional teams, translating complex business asks into infrastructure that doesn't fall over at 3am, and writing the playbook so the next engineer doesn't get paged either.
              </p>
              <p style={{ margin: 0 }}>
                Based in Nairobi 🇰🇪. Happy working with teams anywhere in the world.
              </p>
            </div>

            <div style={{
              marginTop: 36, paddingTop: 28, borderTop: '1px solid var(--line)',
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24,
            }}>
              <Fact label="EDUCATION" value="BSc Computer Science" sub="Multimedia University of Kenya · 2022" />
              <Fact label="CERTIFICATION" value="Data Engineer" sub="DataCamp" />
            </div>
          </div>

          {/* Recognition */}
          <aside style={{
            border: '1px solid var(--line)', borderRadius: 14,
            padding: 28, background: 'var(--paper)',
          }}>
            <div className="label-eyebrow" style={{ marginBottom: 18 }}>Recognition</div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 16 }}>
              {D.recognition.map((r, i) => (
                <li key={i} style={{
                  display: 'grid', gridTemplateColumns: '24px 1fr', gap: 10,
                  paddingBottom: 16, borderBottom: i === D.recognition.length - 1 ? 'none' : '1px solid var(--line-2)',
                  fontSize: 14, lineHeight: 1.5,
                }}>
                  <span className="accent" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>★</span>
                  <span style={{ color: 'var(--ink-2)' }}>{r}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </div>
    </section>
  );
};

const Fact = ({ label, value, sub }) => (
  <div>
    <div className="num-eyebrow" style={{ fontSize: 10, marginBottom: 6 }}>{label}</div>
    <div style={{ fontSize: 15, color: 'var(--ink)', marginBottom: 2 }}>{value}</div>
    <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{sub}</div>
  </div>
);

export default About;
