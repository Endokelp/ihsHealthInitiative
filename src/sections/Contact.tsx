import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';
import TikTokIcon from '../components/TikTokIcon';
import { Mail, Users, HandHeart, Calendar, Instagram } from 'lucide-react';
import './Contact.css';

const EMAIL = 'Interlakehealthinitiative@gmail.com';
const SOCIAL = {
  instagram: 'https://www.instagram.com/interlake_health_initiative/',
  tiktok: 'https://www.tiktok.com/@interlake_health_',
} as const;

const Contact = () => (
  <Section id="contact" background="accent">
    <div className="contact">
      <header className="contact__header">
        <span className="section-label">Join us</span>
        <h2>Get involved</h2>
        <p className="contact__subtitle">
          Volunteer, partner, or attend — there is a place for you in the next kit drive.
        </p>
      </header>

      <div className="contact__content">
        <div className="contact__ways">
          <Card className="contact-card">
            <div className="contact-card__icon">
              <HandHeart size={28} strokeWidth={1.5} />
            </div>
            <h4>Volunteer</h4>
            <p>
              Help pack health kits, create awareness materials, or support outreach events.
              Ideal for students and healthcare enthusiasts.
            </p>
          </Card>

          <Card className="contact-card">
            <div className="contact-card__icon">
              <Users size={28} strokeWidth={1.5} />
            </div>
            <h4>Partner with us</h4>
            <p>
              Clinics and healthcare professionals can share expertise, resources, and mentorship
              with our members and the wider community.
            </p>
          </Card>

          <Card className="contact-card">
            <div className="contact-card__icon">
              <Calendar size={28} strokeWidth={1.5} />
            </div>
            <h4>Attend events</h4>
            <p>
              Workshops, awareness sessions, and networking events — open to anyone who wants
              to learn and connect locally.
            </p>
          </Card>
        </div>

        <Card className="contact__panel">
          <h3>Ready to make an impact?</h3>
          <p>Reach out about volunteering, partnerships, or our next health kit drive.</p>

          <ul className="contact__info">
            <li className="contact-info-item">
              <Mail size={22} strokeWidth={1.5} />
              <div>
                <strong>Email</strong>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
            </li>
            <li className="contact-info-item">
              <Instagram size={22} strokeWidth={1.5} />
              <div>
                <strong>Instagram</strong>
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">
                  @interlake_health_initiative
                </a>
              </div>
            </li>
            <li className="contact-info-item">
              <TikTokIcon size={22} />
              <div>
                <strong>TikTok</strong>
                <a href={SOCIAL.tiktok} target="_blank" rel="noopener noreferrer">
                  @interlake_health_
                </a>
              </div>
            </li>
          </ul>

          <Button
            size="lg"
            className="contact__button"
            href={`mailto:${EMAIL}?subject=Get%20involved%20with%20Interlake%20Health%20Initiative`}
          >
            Email us to get started
          </Button>
        </Card>
      </div>
    </div>
  </Section>
);

export default Contact;
