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
              <a href="https://www.instagram.com/interlake_health_initiative?igsh=MTM2M2Zvb2hicjJkag==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://www.tiktok.com/@interlake_health_?_r=1&_t=ZT-922OeuNC60F" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                {/* lucide-react might not have TikTok, using a generic video icon or text if it fails, but for now let's try to see if I can use a path or just a common icon. 
                   Actually, better to use an SVG for TikTok if unsure. 
                   Let's check if the user has other icons.
                   I will use a text label or a generic icon if TikTok is missing? 
                   No, I'll try to use an SVG path for TikTok directly to be safe.
                */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-music-2"
                >
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              </a>
              <a href="mailto:Interlakehealthinitiative@gmail.com" aria-label="Email">
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
