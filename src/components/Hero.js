import { useRef, useState } from 'react';
import { HERO } from '../data';
import './Hero.css';

export default function Hero() {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="hero" id="top">
      <div className="hero__media">
        {/* Always-present image layer with a slow Ken Burns drift */}
        <div
          className="hero__image"
          style={{ backgroundImage: `url(${HERO.poster})` }}
        />
        {/* Video fades in on top only if the stock file actually plays */}
        <video
          ref={videoRef}
          className={`hero__video ${videoReady ? 'is-ready' : ''}`}
          autoPlay
          muted
          loop
          playsInline
          poster={HERO.poster}
          onCanPlay={() => setVideoReady(true)}
        >
          <source src={HERO.video} type="video/mp4" />
        </video>
        <div className="hero__scrim" />
      </div>

      {/* The brand mark itself is the fixed <Logo />, centered here on load.
          Everything below sits under it. */}
      <div className="hero__content container">
        <p className="hero__desc reveal">
          A house of restorative massage in the heart of the city — unhurried
          hands, warm rooms, and rituals shaped entirely around you.
        </p>
        <div className="hero__meta reveal" data-delay="1">
          <a href="#contacts" className="hero__contacts">
            Contacts
          </a>
          <span className="hero__address">Mayfair, London</span>
        </div>
      </div>
    </section>
  );
}
