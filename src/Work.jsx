// Work — selected projects, with project-specific geometric "proof" visuals
const Work = () => {
  const D = window.PORTFOLIO_DATA;
  return (
    <section id="work" className="section" data-screen-label="Work" style={{ background: 'var(--paper)' }}>
      <div className="container-x">
        <SectionHead
          num="03"
          eyebrow="Projects"
          title={<>Code that <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>actually</em> ships</>}
          sub="Hand-picked open-source projects from my Machine-Learning-Based-Projects portfolio. Each cover maps to the real architecture or output."
        />

        <div style={{ marginTop: 64, display: 'grid', gap: 28 }}>
          {D.projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} idx={i}/>
          ))}
        </div>

        <div style={{ marginTop: 48, textAlign: 'center' }}>
          <a href="https://github.com/Stephen-Kamau/Machine-Learning-Based-Projects" target="_blank" rel="noreferrer" className="btn btn-ghost">
            <Icon name="github" size={14}/> View the full ML portfolio repo <Icon name="arrow-up-right" size={14}/>
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ p, idx }) => {
  const reverse = idx % 2 === 1;
  return (
    <a
      href={p.link}
      target="_blank"
      rel="noreferrer"
      className="card-hover project-card"
      style={{
        display: 'grid',
        gridTemplateColumns: reverse ? 'minmax(0, 1fr) 460px' : '460px minmax(0, 1fr)',
        gap: 0,
        border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      {!reverse && <ProjectVisual p={p}/>}

      <div style={{
        padding: 36,
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        minWidth: 0,
        borderLeft: reverse ? 'none' : '1px solid var(--line)',
        borderRight: reverse ? '1px solid var(--line)' : 'none',
      }} className="project-card-body">

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22, flexWrap: 'wrap' }}>
            <span className="num-eyebrow">{p.id}</span>
            <span style={{ width: 4, height: 4, borderRadius: 999, background: 'var(--line)' }}/>
            <span className="num-eyebrow">{p.year}</span>
            <span style={{ width: 4, height: 4, borderRadius: 999, background: 'var(--line)' }}/>
            <span className="num-eyebrow" style={{ color: 'var(--accent)' }}>● open-source</span>
          </div>

          <h3 className="font-serif" style={{
            fontSize: 'clamp(26px, 2.6vw, 34px)', lineHeight: 1.05,
            letterSpacing: '-0.015em', margin: '0 0 8px',
          }} dangerouslySetInnerHTML={{ __html: p.title }} />

          <div className="num-eyebrow" style={{ marginBottom: 18 }}>{p.client}</div>

          <p style={{
            color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.55,
            margin: '0 0 22px',
          }}>{p.summary}</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 28 }}>
            {p.stack.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--ink-2)' }}>
            <Icon name="github" size={14}/> github.com/Stephen-Kamau
          </span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 38, height: 38, borderRadius: 999, border: '1px solid var(--line)',
            color: 'var(--ink-2)',
          }}>
            <Icon name="arrow-up-right" size={14}/>
          </span>
        </div>
      </div>

      {reverse && <ProjectVisual p={p}/>}

      <style>{`
        @media (max-width: 900px) {
          .project-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </a>
  );
};

const ProjectVisual = ({ p }) => (
  <div style={{
    background: 'var(--visual-bg)',
    minHeight: 360,
    padding: 28,
    display: 'flex', flexDirection: 'column', justifyContent: 'center',
    position: 'relative', overflow: 'hidden',
  }}>
    {p.visual === 'sentiment' && <VisualSentiment/>}
    {p.visual === 'bias' && <VisualBias/>}
    {p.visual === 'studio' && <VisualStudio/>}
    {p.visual === 'recommender' && <VisualRecommender/>}

    <div style={{
      position: 'absolute', top: 16, left: 16,
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '4px 10px', background: 'var(--paper)',
      border: '1px solid var(--line)', borderRadius: 999,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--accent)' }}/>
      <span className="num-eyebrow" style={{ fontSize: 10 }}>{p.id} · {p.visual}</span>
    </div>
  </div>
);

// ============== visuals ==============

// (1) Sentiment Analysis: model comparison + sentiment distribution
const VisualSentiment = () => {
  const models = [
    { name: 'BERT',     f1: 0.895, best: true },
    { name: 'RoBERTa',  f1: 0.889 },
    { name: 'XGBoost',  f1: 0.866 },
    { name: 'LogReg',   f1: 0.835 },
  ];
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div className="num-eyebrow" style={{ textAlign: 'center', fontSize: 10, color: 'var(--ink-3)' }}>
        F1 SCORE · 12k flipkart reviews
      </div>

      <div style={{
        border: '1px solid var(--line)', borderRadius: 8,
        background: 'var(--paper)', padding: '14px 16px',
        display: 'flex', flexDirection: 'column', gap: 10,
      }}>
        {models.map((m) => (
          <div key={m.name} style={{
            display: 'grid', gridTemplateColumns: '78px 1fr 46px',
            alignItems: 'center', gap: 10,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              {m.best && <span className="accent" style={{ fontSize: 10 }}>★</span>}
              <span className="font-mono" style={{
                fontSize: 12, color: m.best ? 'var(--accent)' : 'var(--ink)',
                fontWeight: m.best ? 600 : 400,
              }}>{m.name}</span>
            </div>
            <div style={{
              height: 10, background: 'var(--line-2)', borderRadius: 2, overflow: 'hidden',
            }}>
              <div style={{
                width: `${m.f1 * 100}%`, height: '100%',
                background: m.best ? 'var(--accent)' : 'var(--ink-3)',
                transition: 'width .5s ease',
              }}/>
            </div>
            <span className="font-mono" style={{ fontSize: 11, textAlign: 'right', color: 'var(--ink-2)' }}>
              {m.f1.toFixed(3)}
            </span>
          </div>
        ))}
      </div>

      {/* sentiment distribution bar */}
      <div style={{
        border: '1px solid var(--line)', borderRadius: 8,
        background: 'var(--paper)', padding: '12px 16px',
      }}>
        <div className="num-eyebrow" style={{ fontSize: 9, marginBottom: 10 }}>
          SENTIMENT DISTRIBUTION
        </div>
        <div style={{
          height: 14, display: 'flex', borderRadius: 99, overflow: 'hidden',
          border: '1px solid var(--line)',
        }}>
          <div style={{ flex: 61, background: 'oklch(0.65 0.13 145)' }}/>
          <div style={{ flex: 22, background: 'var(--ink-3)' }}/>
          <div style={{ flex: 17, background: 'oklch(0.62 0.16 25)' }}/>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, flexWrap: 'wrap', gap: 8 }}>
          <DistLegend swatch="oklch(0.65 0.13 145)" label="positive 61%"/>
          <DistLegend swatch="oklch(0.78 0.014 65)" label="neutral 22%"/>
          <DistLegend swatch="oklch(0.62 0.16 25)" label="negative 17%"/>
        </div>
      </div>
    </div>
  );
};

const DistLegend = ({ swatch, label }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
    <span style={{ width: 8, height: 8, borderRadius: 99, background: swatch }}/>
    <span className="num-eyebrow" style={{ fontSize: 9 }}>{label}</span>
  </div>
);

// (2) Bias audit: grouped bars across age brackets, 4 models
const VisualBias = () => {
  const ages = ['Child', 'Youth', 'Adult', 'Mid', 'Senior'];
  const series = [
    { name: 'SVM',     color: 'var(--accent)',          values: [0.62, 0.83, 0.84, 0.80, 0.71], highlight: true },
    { name: 'RandFor', color: 'var(--ink-3)',   values: [0.58, 0.82, 0.83, 0.79, 0.69] },
    { name: 'ResNet',  color: 'oklch(0.70 0.10 240)',   values: [0.42, 0.66, 0.68, 0.62, 0.40] },
    { name: 'CNN',     color: 'var(--ink-3)',   values: [0.20, 0.36, 0.40, 0.34, 0.18] },
  ];
  const maxBarHeight = 90;
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div className="num-eyebrow" style={{ textAlign: 'center', fontSize: 10, color: 'var(--ink-3)' }}>
        F1 BY AGE BRACKET · UTKFace
      </div>
      <div style={{
        border: '1px solid var(--line)', borderRadius: 8,
        background: 'var(--paper)', padding: 14,
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: `repeat(${ages.length}, 1fr)`,
          gap: 12, alignItems: 'flex-end', height: maxBarHeight + 24,
        }}>
          {ages.map((age, i) => (
            <div key={age} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: maxBarHeight }}>
                {series.map((s) => (
                  <div key={s.name} style={{
                    width: 9, height: `${s.values[i] * maxBarHeight}px`,
                    background: s.color, borderRadius: '2px 2px 0 0',
                  }}/>
                ))}
              </div>
              <span className="num-eyebrow" style={{ fontSize: 9 }}>{age}</span>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 12, paddingTop: 10, borderTop: '1px solid var(--line-2)',
          display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center',
        }}>
          {series.map((s) => (
            <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{ width: 9, height: 9, background: s.color, borderRadius: 2 }}/>
              <span className="num-eyebrow" style={{ fontSize: 9, color: s.highlight ? 'var(--accent)' : 'var(--ink-2)' }}>
                {s.highlight && '★ '}{s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="num-eyebrow" style={{ fontSize: 9, color: 'var(--ink-3)', textAlign: 'center' }}>
        SVM + Random Forest the most balanced across groups
      </div>
    </div>
  );
};

// (3) App Analyser: Streamlit-like UI mockup
const VisualStudio = () => {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div className="num-eyebrow" style={{ textAlign: 'center', fontSize: 10, color: 'var(--ink-3)' }}>
        STREAMLIT · app_analyser.py
      </div>
      <div style={{
        border: '1px solid var(--line)', borderRadius: 8, overflow: 'hidden',
        background: 'var(--paper)',
      }}>
        {/* window chrome */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '8px 12px', borderBottom: '1px solid var(--line)',
          background: 'var(--bg-2)',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: 99, background: 'oklch(0.62 0.16 25)' }}/>
          <span style={{ width: 8, height: 8, borderRadius: 99, background: 'oklch(0.78 0.14 90)' }}/>
          <span style={{ width: 8, height: 8, borderRadius: 99, background: 'oklch(0.65 0.16 145)' }}/>
          <span className="num-eyebrow" style={{ marginLeft: 8, fontSize: 9 }}>App Analyser · localhost:8501</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', minHeight: 220 }}>
          {/* sidebar */}
          <div style={{
            background: 'var(--bg-2)', padding: 12,
            borderRight: '1px solid var(--line)',
            display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            <div className="num-eyebrow" style={{ fontSize: 9 }}>STEPS</div>
            {['1 · Upload', '2 · Explore', '3 · Encode', '4 · Train', '5 · Evaluate', '6 · Export'].map((s, i) => (
              <div key={s} style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                color: i === 3 ? 'var(--accent)' : 'var(--ink-2)',
                fontWeight: i === 3 ? 500 : 400,
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                {i === 3 && <span style={{ width: 4, height: 4, borderRadius: 99, background: 'var(--accent)' }}/>}
                {s}
              </div>
            ))}
          </div>

          {/* main */}
          <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div className="font-serif" style={{ fontSize: 16, lineHeight: 1.2 }}>
              Train + compare models
            </div>

            {/* fake dataset preview */}
            <div style={{ border: '1px solid var(--line)', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1,
                background: 'var(--line-2)',
              }}>
                {['id', 'age', 'income', 'churn'].map((h) => (
                  <div key={h} style={{
                    padding: '4px 8px', fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 9, color: 'var(--ink-3)', background: 'var(--visual-bg)',
                  }}>{h}</div>
                ))}
              </div>
              {[
                ['001', '42', '64k', '0'],
                ['002', '31', '38k', '1'],
                ['003', '57', '92k', '0'],
              ].map((row, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1,
                  background: 'var(--line-2)',
                }}>
                  {row.map((v, j) => (
                    <div key={j} style={{
                      padding: '4px 8px', fontFamily: 'JetBrains Mono, monospace',
                      fontSize: 9, background: 'var(--paper)', color: 'var(--ink-2)',
                    }}>{v}</div>
                  ))}
                </div>
              ))}
            </div>

            {/* fake model accuracy strip */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[
                { n: 'RandomForest', v: 0.91, best: true },
                { n: 'XGBoost',      v: 0.89 },
                { n: 'LogReg',       v: 0.82 },
              ].map((m) => (
                <div key={m.n} style={{ display: 'grid', gridTemplateColumns: '88px 1fr 38px', alignItems: 'center', gap: 6 }}>
                  <span className="font-mono" style={{ fontSize: 9, color: m.best ? 'var(--accent)' : 'var(--ink-2)' }}>
                    {m.best && '★ '}{m.n}
                  </span>
                  <div style={{ height: 5, background: 'var(--line-2)', borderRadius: 99 }}>
                    <div style={{ width: `${m.v * 100}%`, height: '100%', background: m.best ? 'var(--accent)' : 'var(--ink-3)', borderRadius: 99 }}/>
                  </div>
                  <span className="font-mono" style={{ fontSize: 9, textAlign: 'right' }}>{m.v.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// (4) Recommender: 1 source product → top-3 recommended with similarity scores
const VisualRecommender = () => {
  const recs = [
    { sim: 0.92, label: 'rec_1', stripes: 'stripes' },
    { sim: 0.81, label: 'rec_2', stripes: 'stripes-warm' },
    { sim: 0.74, label: 'rec_3', stripes: 'stripes' },
  ];
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div className="num-eyebrow" style={{ textAlign: 'center', fontSize: 10, color: 'var(--ink-3)' }}>
        GET /api/predict/pid_4837
      </div>

      <div style={{
        border: '1px solid var(--line)', borderRadius: 8, padding: 14,
        background: 'var(--paper)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {/* source product card */}
          <div style={{ flexShrink: 0, width: 78, textAlign: 'center' }}>
            <div className="stripes" style={{
              aspectRatio: '1', borderRadius: 6, border: '1px solid var(--line)',
              position: 'relative',
            }}>
              <span style={{
                position: 'absolute', top: 4, right: 4,
                width: 16, height: 16, borderRadius: 99, background: 'var(--accent)',
                fontSize: 9, color: 'white', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'JetBrains Mono, monospace',
              }}>★</span>
            </div>
            <div className="num-eyebrow" style={{ fontSize: 9, marginTop: 6 }}>pid_4837</div>
            <div className="num-eyebrow" style={{ fontSize: 8, color: 'var(--ink-3)' }}>source</div>
          </div>

          {/* arrow */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <svg width="40" height="20" viewBox="0 0 40 20">
              <line x1="0" y1="10" x2="32" y2="10" stroke="var(--line)" strokeWidth="1.5"/>
              <path d="M32 4 L38 10 L32 16" fill="none" stroke="var(--line)" strokeWidth="1.5"/>
            </svg>
            <span className="num-eyebrow" style={{ fontSize: 8, color: 'var(--ink-3)', marginTop: 2 }}>k-NN</span>
          </div>

          {/* recommendations */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, flex: 1, minWidth: 0 }}>
            {recs.map((r, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div className={r.stripes} style={{
                  aspectRatio: '1', borderRadius: 6, border: '1px solid var(--line)',
                  position: 'relative',
                }}>
                  <span style={{
                    position: 'absolute', bottom: 4, left: 4,
                    background: 'var(--paper)', border: '1px solid var(--line)',
                    borderRadius: 99, padding: '1px 6px',
                    fontFamily: 'JetBrains Mono, monospace', fontSize: 8, color: 'var(--ink-2)',
                  }}>{r.sim.toFixed(2)}</span>
                </div>
                <div className="num-eyebrow" style={{ fontSize: 9, marginTop: 6 }}>{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* response sample */}
      <div style={{
        padding: '10px 14px', borderRadius: 8,
        background: 'oklch(0.20 0.012 60)', color: 'oklch(0.88 0.014 65)',
        fontFamily: 'JetBrains Mono, monospace', fontSize: 10, lineHeight: 1.6,
      }}>
        <div style={{ color: 'oklch(0.70 0.014 65)' }}>// response · 200 OK</div>
        <div>[<span style={{ color: 'oklch(0.78 0.14 90)' }}>{'{'}</span><span style={{ color: 'var(--accent)' }}>"sim"</span>:0.92, <span style={{ color: 'var(--accent)' }}>"id"</span>:"…"<span style={{ color: 'oklch(0.78 0.14 90)' }}>{'}'}</span>, …]</div>
      </div>
    </div>
  );
};

window.Work = Work;
