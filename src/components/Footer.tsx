import React from 'react';
import { Heart, Instagram, Mail } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h4 className="footer__title">Interlake Health Initiative</h4>
            <p className="footer__description">
              Empowering communities through health awareness, education, and support.
            </p>
          </div>

          <div className="footer__section">
            <h5 className="footer__heading">Quick Links</h5>
            <ul className="footer__links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#contact">Get Involved</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h5 className="footer__heading">Connect With Us</h5>
            <div className="footer__social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="mailto:info@interlakehealth.org" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {currentYear} Interlake Health Initiative. Made with <Heart size={16} className="footer__heart" /> for community health.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
