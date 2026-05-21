// Contact — big editorial CTA + form
import { useState } from "react";
import Icon from "./icons.jsx";
import { PORTFOLIO_DATA } from "./data.jsx";

const Contact = () => {
  const D = PORTFOLIO_DATA;
  const [form, setForm] = useState({ name: "", email: "", kind: "Project enquiry", msg: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${form.kind}: ${form.name || 'New enquiry'}`);
    const body = encodeURIComponent(
      `Hi Stephen,\n\n${form.msg}\n\n---\nFrom: ${form.name} <${form.email}>\nType: ${form.kind}`
    );
    window.location.href = `mailto:${D.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section" data-screen-label="Contact" style={{
      background: 'var(--ink)', color: 'var(--ink-inv)', borderTop: 'none',
    }}>
      <div className="container-x">
        <div style={{
          display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
          gap: 64, alignItems: 'flex-start',
        }} className="contact-grid">

          <div>
            <div className="label-eyebrow" style={{ marginBottom: 24, color: 'oklch(0.70 0.014 65)' }}>
              <span className="accent">06</span>&nbsp;&nbsp;·&nbsp;&nbsp;Contact
            </div>

            <h2 className="font-serif" style={{
              fontSize: 'clamp(48px, 7vw, 112px)',
              lineHeight: 0.95, letterSpacing: '-0.025em',
              margin: 0,
            }}>
              Got a <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>pipeline</em><br/>
              or a <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>model</em><br/>
              that needs shipping?
            </h2>

            <p style={{
              marginTop: 32, fontSize: 18, lineHeight: 1.5, maxWidth: 520,
              color: 'oklch(0.78 0.014 65)',
            }}>
              I take on a small number of consulting engagements alongside my role at Prospect33. Best for: data platforms, ML deployment, LLM/RAG integration, and chatbots. Drop a note and I'll reply within two business days.
            </p>

            <div style={{ marginTop: 40, display: 'grid', gap: 14, maxWidth: 460 }}>
              <ContactLink dark icon="mail" label={D.email} href={`mailto:${D.email}`} />
              <ContactLink dark icon="github" label="github.com/Stephen-Kamau" href={D.github} />
              <ContactLink dark icon="linkedin" label="linkedin.com/in/stiveckamash" href={D.linkedin} />
              <ContactLink dark icon="phone" label={D.phone} href={`tel:${D.phone.replace(/\s/g, '')}`} />
              <ContactLink dark icon="pin" label={`${D.location} · remote-friendly`} />
            </div>
          </div>

          {/* form */}
          <form onSubmit={submit} style={{
            border: '1px solid oklch(0.30 0.014 60)',
            borderRadius: 14, padding: 28,
            background: 'oklch(0.24 0.014 60)',
            display: 'grid', gap: 18,
          }}>
            <div className="num-eyebrow" style={{ color: 'oklch(0.65 0.014 65)', marginBottom: 4 }}>
              SEND A MESSAGE
            </div>

            <Field label="Your name">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jane Doe"
                style={fieldStyle}
              />
            </Field>

            <Field label="Email">
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@company.com"
                style={fieldStyle}
              />
            </Field>

            <Field label="Type of engagement">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['Project enquiry', 'Consulting', 'Hiring', 'Other'].map((k) => (
                  <button
                    type="button"
                    key={k}
                    onClick={() => setForm({ ...form, kind: k })}
                    style={{
                      padding: '8px 12px', borderRadius: 999, fontSize: 12,
                      border: '1px solid ' + (form.kind === k ? 'var(--accent)' : 'oklch(0.34 0.014 60)'),
                      background: form.kind === k ? 'var(--accent)' : 'transparent',
                      color: form.kind === k ? 'var(--ink)' : 'oklch(0.85 0.014 65)',
                      cursor: 'pointer', transition: 'all .2s ease',
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    }}
                  >{k}</button>
                ))}
              </div>
            </Field>

            <Field label="What are you working on?">
              <textarea
                value={form.msg}
                onChange={(e) => setForm({ ...form, msg: e.target.value })}
                placeholder="Tell me a bit about the problem, your timeline, and what success looks like."
                rows={5}
                style={{ ...fieldStyle, resize: 'vertical', minHeight: 120 }}
              />
            </Field>

            <button type="submit" className="btn" style={{
              background: 'var(--accent)', color: 'var(--ink)',
              justifyContent: 'center', padding: '14px 18px',
              fontWeight: 500,
            }}>
              {sent ? 'Opening your mail client…' : 'Send enquiry'} <Icon name="arrow-up-right" size={14}/>
            </button>

            <div style={{ fontSize: 11, color: 'oklch(0.65 0.014 65)', fontFamily: "'JetBrains Mono', monospace" }}>
              By submitting, you'll open your email client with the message pre-filled.
            </div>
          </form>
        </div>

        <Footer />

        <style>{`
          @media (max-width: 900px) {
            .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </div>
    </section>
  );
};

const fieldStyle = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: 8,
  border: '1px solid oklch(0.34 0.014 60)',
  background: 'oklch(0.20 0.012 60)',
  color: 'var(--ink-inv)',
  fontSize: 14,
  fontFamily: "'Geist', sans-serif",
  outline: 'none',
};

const Field = ({ label, children }) => (
  <div>
    <div className="num-eyebrow" style={{ color: 'oklch(0.78 0.014 65)', marginBottom: 6, fontSize: 10 }}>
      {label}
    </div>
    {children}
  </div>
);

const ContactLink = ({ dark, icon, label, href }) => {
  const inner = (
    <span style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '12px 0',
      borderBottom: '1px solid ' + (dark ? 'oklch(0.30 0.014 60)' : 'var(--line)'),
      transition: 'color .25s ease',
    }}
    onMouseEnter={(e) => { if (href) e.currentTarget.style.color = 'var(--accent)'; }}
    onMouseLeave={(e) => { if (href) e.currentTarget.style.color = ''; }}
    >
      <Icon name={icon} size={16}/>
      <span style={{ fontSize: 14, flex: 1 }}>{label}</span>
      {href && <Icon name="arrow-up-right" size={14}/>}
    </span>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{inner}</a> : inner;
};

const Footer = () => (
  <div style={{
    marginTop: 80, paddingTop: 32,
    borderTop: '1px solid oklch(0.30 0.014 60)',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    color: 'oklch(0.65 0.014 65)', fontSize: 12, gap: 16, flexWrap: 'wrap',
  }}>
    <div className="num-eyebrow" style={{ color: 'oklch(0.65 0.014 65)' }}>
      © 2026 Stephen Kamau · Built with care in Nairobi
    </div>
  </div>
);

export default Contact;
