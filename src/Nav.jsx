// Sticky top navigation
const Nav = () => {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [theme, setTheme] = React.useState(() =>
    document.documentElement.getAttribute('data-theme') || 'light'
  );

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('portfolio-theme', next); } catch (e) {}
    setTheme(next);
  };

  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#stack", label: "Stack" },
    { href: "#contact", label: "Contact" },
  ];

  const ThemeToggle = ({ wide }) => (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      style={{
        background: 'transparent', cursor: 'pointer',
        border: '1px solid var(--line)', borderRadius: 999,
        height: 36, width: wide ? 'auto' : 36,
        padding: wide ? '0 14px' : 0,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        color: 'var(--ink)',
        transition: 'border-color .2s ease, background .2s ease',
        flexShrink: 0,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--ink)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--line)'; }}
    >
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={15} />
      {wide && <span style={{ fontSize: 14 }}>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>}
    </button>
  );

  return (
    <header
      style={{
        position: 'sticky', top: 0, zIndex: 50,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        background: scrolled ? 'color-mix(in oklab, var(--bg) 85%, transparent)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'background .25s ease, border-color .25s ease',
      }}
    >
      <div className="container-x" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 32px', gap: 16 }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{
            display: 'inline-flex', width: 32, height: 32, borderRadius: 6,
            background: 'var(--ink)', color: 'var(--ink-inv)',
            alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Instrument Serif', serif", fontSize: 20, letterSpacing: '-0.02em',
          }}>S</span>
          <div style={{ lineHeight: 1.15 }}>
            <div style={{ fontWeight: 500, fontSize: 14 }}>Stephen Kamau</div>
            <div className="num-eyebrow" style={{ fontSize: 10 }}>Data &amp; ML Engineer</div>
          </div>
        </a>

        <nav className="desktop-only">
          <ul style={{ display: 'flex', gap: 8, listStyle: 'none', margin: 0, padding: 0 }}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="ink-2" style={{
                  display: 'inline-block', padding: '8px 14px', borderRadius: 999,
                  fontSize: 14, transition: 'background .2s, color .2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg-2)'; e.currentTarget.style.color = 'var(--ink)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink-2)'; }}
                >{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <ThemeToggle />
          <a href="#contact" className="btn btn-primary" style={{ padding: '10px 16px', fontSize: 13 }}>
            Get in touch <Icon name="arrow-up-right" size={14} />
          </a>
        </div>

        <div className="mobile-only" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <ThemeToggle />
          <button
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
            style={{
              background: 'transparent', border: '1px solid var(--line)',
              width: 40, height: 40, borderRadius: 999,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--ink)', cursor: 'pointer',
            }}
          >
            <Icon name={open ? "close" : "menu"} size={18} />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-only" style={{
          borderTop: '1px solid var(--line)',
          background: 'var(--paper)',
        }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: '12px 20px 20px' }}>
            {links.map((l) => (
              <li key={l.href} style={{ borderBottom: '1px solid var(--line-2)' }}>
                <a href={l.href} onClick={() => setOpen(false)}
                   style={{ display: 'block', padding: '16px 0', fontSize: 18, fontFamily: "'Instrument Serif', serif" }}>
                  {l.label}
                </a>
              </li>
            ))}
            <li style={{ paddingTop: 18 }}>
              <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Get in touch <Icon name="arrow-up-right" size={14} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

window.Nav = Nav;
