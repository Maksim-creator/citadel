import { MARQUEE } from '../data';
import './Marquee.css';

export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((word, i) => (
          <span className="marquee__item" key={i}>
            {word}
            <span className="marquee__dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
