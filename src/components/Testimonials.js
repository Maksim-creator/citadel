import { TESTIMONIALS } from '../data';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <p className="eyebrow eyebrow--light reveal">Kind words</p>
        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <figure className="quote reveal" data-delay={(i % 3) + 1} key={i}>
              <span className="quote__mark">”</span>
              <blockquote className="quote__text">{t.quote}</blockquote>
              <figcaption className="quote__by">
                <span className="quote__name">{t.name}</span>
                <span className="quote__detail">{t.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
