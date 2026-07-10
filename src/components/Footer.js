import './Footer.css';

export default function Footer() {
  const year = 2026;
  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <span className="footer__logo display">Citadel</span>
          <p>House of Massage &amp; Bodywork</p>
        </div>

        <div className="footer__cols">
          <div>
            <h4>Visit</h4>
            <p>
              14 Linden Court
              <br />
              Old Town, 2nd floor
              <br />
              City 00000
            </p>
          </div>
          <div>
            <h4>Hours</h4>
            <p>
              Mon–Fri · 9–21
              <br />
              Sat · 10–19
              <br />
              Sun · by appointment
            </p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>
              <a href="tel:+10000000000">+1 (000) 000-0000</a>
              <br />
              <a href="mailto:hello@citadel.house">hello@citadel.house</a>
            </p>
          </div>
          <div>
            <h4>Follow</h4>
            <p>
              <a href="#top">Instagram</a>
              <br />
              <a href="#top">Facebook</a>
              <br />
              <a href="#top">Newsletter</a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>© {year} Citadel. All rights reserved.</span>
        <span className="footer__made">Demo landing — placeholder content &amp; stock imagery</span>
        <div className="footer__legal">
          <a href="#top">Privacy</a>
          <a href="#top">Terms</a>
        </div>
      </div>
    </footer>
  );
}
