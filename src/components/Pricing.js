import { PRICING } from '../data';
import './Pricing.css';

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing__head container">
        <p className="eyebrow reveal">Pricing</p>
        <h2 className="pricing__title display reveal" data-delay="1">
          Ways to begin
        </h2>
      </div>

      <div className="pricing__grid container">
        {PRICING.map((p, i) => (
          <article
            className={`plan ${p.featured ? 'plan--featured' : ''} reveal`}
            data-delay={(i % 3) + 1}
            key={p.name}
          >
            {p.featured && <span className="plan__badge">Most chosen</span>}
            <h3 className="plan__name display">{p.name}</h3>
            <div className="plan__price">
              <span className="plan__amount display">{p.price}</span>
              <span className="plan__unit">{p.unit}</span>
            </div>
            <ul className="plan__features">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a
              href="#book"
              className={`btn ${p.featured ? 'btn--solid' : 'btn--outline'} plan__cta`}
            >
              Choose {p.name.replace('The ', '')}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
