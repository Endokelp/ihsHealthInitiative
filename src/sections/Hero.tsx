import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__layer hero__layer--mesh" aria-hidden="true" />
      <div className="hero__layer hero__layer--ring hero__layer--ring-a" aria-hidden="true" />
      <div className="hero__layer hero__layer--ring hero__layer--ring-b" aria-hidden="true" />
      <div className="hero__layer hero__layer--block" aria-hidden="true" />

      <div className="container hero__container">
        <div className="hero__grid">
          <div className="hero__copy">
            <span className="section-label">Interlake Health Initiative</span>
            <h1 className="hero__title">
              Health resources that reach families{' '}
              <em className="hero__title-em">where they live</em>
            </h1>
            <p className="hero__description">
              We assemble and deliver health kits, run awareness campaigns, and connect
              aspiring healthcare workers with mentors across the Interlake community.
            </p>
            <div className="hero__actions">
              <Button size="lg" onClick={() => scrollToSection('contact')}>
                Get Involved <ArrowRight size={20} />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('programs')}>
                Our Programs
              </Button>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__card-stack">
              <article className="stat-layer stat-layer--back">
                <span className="stat-layer__value">500+</span>
                <span className="stat-layer__label">Families reached</span>
              </article>
              <article className="stat-layer stat-layer--mid">
                <span className="stat-layer__value stat-layer__value--highlight">84</span>
                <span className="stat-layer__label">Health kits assembled &amp; delivered</span>
              </article>
              <article className="stat-layer stat-layer--front">
                <span className="stat-layer__value">20+</span>
                <span className="stat-layer__label">Healthcare mentors engaged</span>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
