import { useLayoutEffect, useRef } from 'react';
import './Logo.css';

// A single brand mark with two phases:
//   Phase 1 (scroll < START): position:absolute, so it rides up with the page
//     natively — in lockstep with the description, no scroll-jank.
//   Phase 2 (START..START+DIST): position:fixed, scrubbed by scroll from wherever
//     it had ridden to, into the nav panel's docked top-left slot.
export default function Logo() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const START = 150; // scroll (px) the logo rides with the page before docking
    const DIST = 150; // scroll (px) over which it then scrubs into the panel
    const m = { dockCx: 0, dockCy: 0, heroCx: 0, heroY0: 0, scale: 1, docking: false };
    let ticking = false;

    const apply = () => {
      ticking = false;
      const y = window.scrollY;
      if (y < START) {
        // Phase 1 — native ride; hand positioning back to CSS/absolute.
        if (m.docking) {
          m.docking = false;
          el.classList.remove('is-docking');
        }
        el.style.transform = '';
        el.classList.remove('is-solid');
        return;
      }
      // Phase 2 — fixed, scrub into the panel from the ridden position.
      if (!m.docking) {
        m.docking = true;
        el.classList.add('is-docking');
      }
      const p = Math.min(1, (y - START) / DIST);
      const rideY = m.heroY0 - y; // where it had ridden to when docking began
      const cx = m.heroCx + (m.dockCx - m.heroCx) * p;
      const cy = rideY + (m.dockCy - rideY) * p;
      const s = 1 + (m.scale - 1) * (1 - p);
      el.style.transform = `translate(${cx - m.dockCx}px, ${cy - m.dockCy}px) scale(${s})`;
      el.classList.toggle('is-solid', p > 0.8);
    };

    const measure = () => {
      // Read docked geometry in the fixed state, then restore.
      const wasDocking = el.classList.contains('is-docking');
      el.classList.add('is-docking');
      el.style.transform = 'none';
      const r = el.getBoundingClientRect();
      m.dockCx = r.left + r.width / 2;
      m.dockCy = r.top + r.height / 2;
      m.heroCx = window.innerWidth / 2;
      m.heroY0 = window.innerHeight * 0.4;
      m.scale = Math.min(3.4, Math.max(1.8, (window.innerWidth * 0.4) / r.width));
      el.style.setProperty('--hero-scale', m.scale);
      if (!wasDocking) el.classList.remove('is-docking');
      el.style.transform = '';
      m.docking = wasDocking;
      apply();
      el.classList.add('is-ready');
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(apply);
      }
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measure);
    }
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
    };
  }, []);

  return (
    <div className="brand-logo-anchor">
      <a
        href="#top"
        ref={ref}
        className="brand-logo"
        aria-label="Citadel — House of Massage"
      >
        <span className="brand-logo__name">Citadel</span>
        <span className="brand-logo__sub">House of Massage</span>
      </a>
    </div>
  );
}
