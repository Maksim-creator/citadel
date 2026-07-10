import { useEffect, useState } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import './Booking.css';

const CAL_USER = 'maksym-bocharov-dll5ry';

const SERVICES = [
  { slug: 'oil-massage', label: 'Oil', meta: '120 min · €40' },
  { slug: 'sport-massage', label: 'Sport', meta: '60 min · €70' },
  { slug: 'head-massage', label: 'Head', meta: '45 min · €40' },
  { slug: 'first-massage', label: 'Neck', meta: '30 min · €30' },
];

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

        <div className="booking__services reveal" data-delay="3" role="tablist" aria-label="Treatment">
          {SERVICES.map((s) => (
            <button
              key={s.slug}
              role="tab"
              aria-selected={service === s.slug}
              className={`booking__service ${service === s.slug ? 'is-active' : ''}`}
              onClick={() => setService(s.slug)}
            >
              <span className="booking__service-name">{s.label}</span>
              <span className="booking__service-meta">{s.meta}</span>
            </button>
          ))}
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
          <a href="tel:+10000000000">+1 (000) 000-0000</a>
          <a href="mailto:hello@citadel.house">hello@citadel.house</a>
        </div>
      </div>
    </section>
  );
}
