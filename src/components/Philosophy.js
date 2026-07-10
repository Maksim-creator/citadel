import './Philosophy.css';

export default function Philosophy() {
  return (
    <section className="philosophy container" id="philosophy">
      <p className="eyebrow reveal">Our philosophy</p>
      <h2 className="philosophy__statement display reveal" data-delay="1">
        We treat massage as a <em>practice</em>, not a transaction — a slow craft
        of attention, pressure, and <em>rest</em> that returns the body to itself.
      </h2>
      <div className="philosophy__foot reveal" data-delay="2">
        <p>
          Every session is read fresh. No two bodies carry the same week, so no
          two treatments are ever quite the same.
        </p>
        <div className="philosophy__stats">
          <div>
            <span className="philosophy__num display">12</span>
            <span className="philosophy__label">Master therapists</span>
          </div>
          <div>
            <span className="philosophy__num display">9k+</span>
            <span className="philosophy__label">Sessions given</span>
          </div>
          <div>
            <span className="philosophy__num display">4.9</span>
            <span className="philosophy__label">Guest rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
