import React from 'react';
import Section from '../components/Section';
import { Target, Users, Heart } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <Section id="about" background="white">
      <div className="about">
        <div className="about__header">
          <h2>About Our Initiative</h2>
          <p className="about__subtitle">
            Building healthier communities through education, awareness, and hands-on support
          </p>
        </div>

        <div className="about__content">
          <div className="about__mission">
            <div className="mission-card">
              <div className="mission-card__icon">
                <Target size={32} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower families in need with essential health resources and knowledge 
                while providing aspiring healthcare professionals with meaningful hands-on experience.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-card__icon">
                <Heart size={32} />
              </div>
              <h3>Our Values</h3>
              <p>
                Compassion, accessibility, and community-driven care guide everything we do. 
                We believe everyone deserves access to health education and resources.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-card__icon">
                <Users size={32} />
              </div>
              <h3>Our Community</h3>
              <p>
                We connect healthcare professionals, students, volunteers, and families to 
                create a supportive network focused on improving community health outcomes.
              </p>
            </div>
          </div>

          <div className="about__story">
            <h3>Our Story</h3>
            <p>
              The Interlake Health Initiative was founded with a simple yet powerful vision: 
              to bridge the gap between healthcare knowledge and community needs. We recognized 
              that many families lack access to basic health information and resources, while 
              aspiring healthcare workers need practical experience.
            </p>
            <p>
              By bringing together clinics, volunteers, and community members, we've created 
              a sustainable model that benefits everyone involved. Through health kit drives, 
              awareness campaigns, and professional mentorship, we're making a lasting impact 
              on our community's wellbeing.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
