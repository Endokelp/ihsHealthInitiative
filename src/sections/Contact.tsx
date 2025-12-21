import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';
import { Mail, Users, HandHeart, Calendar, Instagram } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <Section id="contact" background="accent">
      <div className="contact">
        <div className="contact__header">
          <h2>Get Involved</h2>
          <p className="contact__subtitle">
            Join us in making a difference in our community's health and wellbeing
          </p>
        </div>

        <div className="contact__content">
          <div className="contact__ways">
            <Card className="contact-card">
              <div className="contact-card__icon">
                <HandHeart size={32} />
              </div>
              <h4>Volunteer</h4>
              <p>
                Help organize health kit drives, create awareness materials, or assist
                with community outreach events. Perfect for students and healthcare enthusiasts.
              </p>
            </Card>

            <Card className="contact-card">
              <div className="contact-card__icon">
                <Users size={32} />
              </div>
              <h4>Partner With Us</h4>
              <p>
                Healthcare professionals and clinics can collaborate with us to share
                expertise, resources, and mentor aspiring health workers.
              </p>
            </Card>

            <Card className="contact-card">
              <div className="contact-card__icon">
                <Calendar size={32} />
              </div>
              <h4>Attend Events</h4>
              <p>
                Join our workshops, health awareness sessions, and professional networking
                events to learn and connect with the community.
              </p>
            </Card>
          </div>

          <div className="contact__form-section">
            <Card className="contact__form-card">
              <h3>Ready to make an impact?</h3>
              <p>Contact us to learn more about volunteer opportunities and partnerships.</p>

              <div className="contact__info">
                <div className="contact-info-item">
                  <Mail size={24} />
                  <div>
                    <strong>Email Us</strong>
                    <a href="mailto:Interlakehealthinitiative@gmail.com">Interlakehealthinitiative@gmail.com</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <Instagram size={24} />
                  <div>
                    <strong>Follow Us on Instagram</strong>
                    <a href="https://www.instagram.com/interlake_health_initiative?igsh=MTM2M2Zvb2hicjJkag==" target="_blank" rel="noopener noreferrer">
                      @interlake_health_initiative
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Using SVG for TikTok to ensure it works without guessing lucide version */}
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
                    >
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  </div>
                  <div>
                    <strong>Follow Us on TikTok</strong>
                    <a href="https://www.tiktok.com/@interlake_health_?_r=1&_t=ZT-922OeuNC60F" target="_blank" rel="noopener noreferrer">
                      @interlake_health_
                    </a>
                  </div>
                </div>
              </div>

              <Button size="lg" className="contact__button">
                Send Us a Message
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
