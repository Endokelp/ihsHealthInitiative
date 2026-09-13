import { Instagram, Mail } from 'lucide-react';
import TikTokIcon from './TikTokIcon';
import './Footer.css';

const SOCIAL = {
  instagram: 'https://www.instagram.com/interlake_health_initiative/',
  tiktok: 'https://www.tiktok.com/@interlake_health_',
  email: 'mailto:Interlakehealthinitiative@gmail.com',
} as const;

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
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href={SOCIAL.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <TikTokIcon size={22} />
              </a>
              <a href={SOCIAL.email} aria-label="Email">
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
