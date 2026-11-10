import { Mail } from 'lucide-react';
import './Footer.css';

const EMAIL = 'mailto:Interlakehealthinitiative@gmail.com';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <p className="footer__brand">Interlake Health Initiative</p>
            <p className="footer__description">
              Community health kits, awareness, and mentorship across the Interlake.
            </p>
          </div>

          <div className="footer__section">
            <p className="footer__heading">Navigate</p>
            <ul className="footer__links">
              <li><a href="/#home">Home</a></li>
              <li><a href="/#impact">Impact</a></li>
              <li><a href="/#programs">Programs</a></li>
              <li><a href="/partners">Partners</a></li>
              <li><a href="/#contact">Get Involved</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <p className="footer__heading">Connect</p>
            <div className="footer__social">
              <a href={EMAIL} aria-label="Email">
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>

        <p className="footer__bottom">
          © {year} Interlake Health Initiative. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
