import { EXPERIENCE } from '../data';
import './Experience.css';

export default function Experience() {
  return (
    <section
      className="experience"
      id="experience"
      style={{ backgroundImage: `url(${EXPERIENCE.image})` }}
    >
      <div className="experience__scrim" />
      <div className="experience__inner container">
        <div className="experience__intro">
          <p className="eyebrow eyebrow--light reveal">The experience</p>
          <h2 className="experience__title display reveal" data-delay="1">
            An hour that
            <br />
            unfolds slowly.
          </h2>
        </div>

        <ol className="experience__steps">
          {EXPERIENCE.steps.map((step, i) => (
            <li className="estep reveal" data-delay={(i % 3) + 1} key={step.n}>
              <span className="estep__n">{step.n}</span>
              <div>
                <h3 className="estep__title">{step.title}</h3>
                <p className="estep__text">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
