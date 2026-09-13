import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      window.location.assign(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          <button
            type="button"
            className="header__logo"
            onClick={() => scrollToSection('home')}
            aria-label="Interlake Health Initiative home"
          >
            <span className="header__logo-mark">IHI</span>
            <span className="header__logo-text">Interlake Health</span>
          </button>

          <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
            <button type="button" onClick={() => scrollToSection('home')} className="nav-link">
              Home
            </button>
            <button type="button" onClick={() => scrollToSection('impact')} className="nav-link">
              Impact
            </button>
            <button type="button" onClick={() => scrollToSection('programs')} className="nav-link">
              Programs
            </button>
            <Link to="/partners" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Partners
            </Link>
            <button type="button" onClick={() => scrollToSection('contact')} className="nav-link">
              Get Involved
            </button>
          </nav>

          <button
            type="button"
            className="header__mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
