import { GALLERY } from '../data';
import SmartImage from './SmartImage';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__head container">
        <div className="reveal">
          <p className="eyebrow">The house</p>
          <h2 className="about__title display">
            A room built for
            <br />
            doing <em>nothing</em>.
          </h2>
        </div>
        <div className="about__copy reveal" data-delay="1">
          <p>
            Citadel occupies a quiet floor above the noise — low light, warm stone,
            the smell of cedar and eucalyptus. We designed every corner to lower
            your shoulders before a single hand touches you.
          </p>
          <p>
            No screens. No rush. No upselling at the door. Just a considered space,
            a skilled team, and time that finally belongs to you.
          </p>
          <a href="#book" className="btn btn--outline">
            Plan your visit <span className="btn__arrow">→</span>
          </a>
        </div>
      </div>

      <div className="about__gallery container">
        {GALLERY.map((src, i) => (
          <div
            className={`about__tile about__tile--${i} reveal`}
            data-delay={(i % 3) + 1}
            key={i}
          >
            <SmartImage src={src} alt={`Citadel interior ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
