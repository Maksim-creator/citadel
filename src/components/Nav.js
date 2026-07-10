import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../data';
import './Nav.css';

export default function Nav({ revealed = false }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(NAV_LINKS[0].href);
  const close = () => setOpen(false);

  // Scrollspy: mark the link whose section is passing the middle of the screen.
  useEffect(() => {
    const els = NAV_LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(
      Boolean
    );
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Floating toggle — visible on phones only, where the panel is a drawer. */}
      <button
        className={`nav__burger ${open ? 'is-open' : ''}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>

      <aside className={`nav ${revealed ? 'nav--revealed' : ''} ${open ? 'nav--open' : ''}`}>
        <div className="nav__panel">
          <nav className="nav__links">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={l.href === active ? 'is-active' : ''}
                onClick={close}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      <button
        className="nav__backdrop"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={close}
      />
    </>
  );
}
