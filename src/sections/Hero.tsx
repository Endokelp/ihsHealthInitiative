import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              Empowering Communities Through <span className="text-primary">Health</span>
            </h1>
            <p className="hero__description">
              The Interlake Health Initiative brings essential health awareness, resources, 
              and hands-on opportunities to families and future healthcare professionals in our community.
            </p>
            <div className="hero__actions">
              <Button size="lg" onClick={() => scrollToSection('contact')}>
                Get Involved <ArrowRight size={20} />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('about')}>
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="hero__stats">
            <div className="stat-card">
              <div className="stat-card__number">500+</div>
              <div className="stat-card__label">Families Reached</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__number">50+</div>
              <div className="stat-card__label">Health Kits Distributed</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__number">20+</div>
              <div className="stat-card__label">Professionals Connected</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
