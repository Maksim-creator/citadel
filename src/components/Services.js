import { SERVICES } from '../data';
import SmartImage from './SmartImage';
import './Services.css';

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services__head container">
        <div className="reveal">
          <p className="eyebrow">Treatments</p>
          <h2 className="services__title display">The menu of care</h2>
        </div>
        <p className="services__intro reveal" data-delay="1">
          Seven treatments, from a full-hour reset to a ten-minute tune-up.
          Not sure where to begin? We'll shape it with you on arrival.
        </p>
      </div>

      <div className="services__grid container">
        {SERVICES.map((s, i) => (
          <article
            className={`service reveal ${i % 2 === 1 ? 'service--reverse' : ''}`}
            key={s.id}
          >
            <div className="service__media">
              <SmartImage src={s.image} alt={s.name} />
              <span className="service__id">{s.id}</span>
            </div>
            <div className="service__body">
              <div className="service__row">
                <h3 className="service__name display">{s.name}</h3>
                <span className="service__price">{s.price}</span>
              </div>
              <p className="service__text">{s.text}</p>
              <div className="service__meta">
                <span>{s.duration}</span>
                <a
                  href="#book"
                  className="service__link"
                  onClick={() =>
                    window.dispatchEvent(
                      new CustomEvent('booking:service', { detail: s.slug })
                    )
                  }
                >
                  Book <span className="btn__arrow">→</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
