import React from 'react';
import './Section.css';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'alt' | 'accent';
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'white',
  id,
}) => {
  return (
    <section id={id} className={`section section--${background} ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default Section;
