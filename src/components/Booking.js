import { useCallback, useEffect, useRef, useState } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { SERVICES } from '../data';
import './Booking.css';

const CAL_USER = 'citadel.massage';

/* Citadel palette for the embed. hideEventTypeDetails removes the sidebar
   with the host's avatar, name and bio. */
const CAL_UI = {
  theme: 'light',
  cssVarsPerTheme: {
    light: {
      'cal-brand': '#443223',
      'cal-brand-emphasis': '#755151',
      'cal-brand-text': '#fff9f3',
      'cal-brand-accent': '#fff9f3',
      'cal-bg': '#fff9f3',
      'cal-bg-emphasis': '#f0e4d2',
      'cal-bg-subtle': '#f4ead9',
      'cal-bg-muted': '#f8f0e4',
      'cal-bg-inverted': '#443223',
      'cal-text-emphasis': '#443223',
      'cal-text': '#57422e',
      'cal-text-subtle': '#72583e',
      'cal-text-muted': '#7c7960',
      'cal-text-inverted': '#fff9f3',
      'cal-border-emphasis': '#c9b394',
      'cal-border': '#dcc9ab',
      'cal-border-subtle': '#e8d9bf',
      'cal-border-booker': '#e8d9bf',
      'cal-border-muted': '#f0e4d2',
    },
  },
  hideEventTypeDetails: true,
  layout: 'month_view',
};

export default function Booking() {
  const [service, setService] = useState(SERVICES[0].slug);
  const tabsRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = tabsRef.current;
    if (!el) return;
    const overflow = el.scrollWidth > el.clientWidth + 8;
    setCanPrev(overflow && el.scrollLeft > 8);
    setCanNext(overflow && el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, [updateArrows]);

  // Keep the active tab in view — matters when a "Book" link in the
  // Services section picks a treatment deep in the strip.
  useEffect(() => {
    const track = tabsRef.current;
    const active = track?.querySelector('.is-active');
    if (!track || !active) return;
    track.scrollTo({
      left: active.offsetLeft - (track.clientWidth - active.offsetWidth) / 2,
      behavior: 'smooth',
    });
  }, [service]);

  const nudge = (dir) => {
    const el = tabsRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: 'smooth' });
  };

  // "Book" links in the Services section broadcast the chosen slug.
  useEffect(() => {
    const onPick = (e) => {
      if (SERVICES.some((s) => s.slug === e.detail)) setService(e.detail);
    };
    window.addEventListener('booking:service', onPick);
    return () => window.removeEventListener('booking:service', onPick);
  }, []);

  // Each service embeds under its own namespace, so theme every one we show.
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: service });
      cal('ui', CAL_UI);
    })();
  }, [service]);

  return (
    <section className="booking" id="book">
      <div className="booking__inner container">
        <p className="eyebrow eyebrow--light reveal">Reservations</p>
        <h2 className="booking__title display reveal" data-delay="1">
          Give yourself
          <br />
          the hour.
        </h2>
        <p className="booking__lede reveal" data-delay="2">
          Booking takes a minute. Choose your treatment, pick a time that
          works, and confirmation lands in your inbox right away.
        </p>

        <div className="booking__carousel reveal" data-delay="3">
          <button
            className="booking__tabs-arrow"
            aria-label="Previous treatments"
            disabled={!canPrev}
            onClick={() => nudge(-1)}
          >
            ←
          </button>
          <div
            className={`booking__services ${canPrev ? 'has-more-left' : ''} ${canNext ? 'has-more-right' : ''}`}
            role="tablist"
            aria-label="Treatment"
            ref={tabsRef}
            data-lenis-prevent
          >
            {SERVICES.map((s) => (
              <button
                key={s.slug}
                role="tab"
                aria-selected={service === s.slug}
                className={`booking__service ${service === s.slug ? 'is-active' : ''}`}
                onClick={() => setService(s.slug)}
              >
                <span className="booking__service-name">{s.label}</span>
                <span className="booking__service-meta">{`${s.duration} · ${s.price}`}</span>
              </button>
            ))}
          </div>
          <button
            className="booking__tabs-arrow"
            aria-label="More treatments"
            disabled={!canNext}
            onClick={() => nudge(1)}
          >
            →
          </button>
        </div>

        <div className="booking__cal reveal" data-delay="4">
          <Cal
            key={service}
            namespace={service}
            calLink={`${CAL_USER}/${service}`}
            style={{ width: '100%', height: '100%' }}
            config={{ layout: 'month_view', theme: 'light' }}
          />
        </div>

        <div className="booking__alt reveal" data-delay="4">
          <span>Prefer to talk?</span>
          <a href="tel:+421951060042">+421 951 060 042</a>
          <a href="mailto:massagecitadel@gmail.com">massagecitadel@gmail.com</a>
        </div>
      </div>
    </section>
  );
}
