import Section from '../components/Section';
import Card from '../components/Card';
import { Package, Megaphone, UserCheck, Microscope } from 'lucide-react';
import './Programs.css';

const programs = [
  {
    icon: <Package size={36} strokeWidth={1.5} />,
    title: 'Health Kit Distribution',
    description:
      'Regular drives to collect, assemble, and deliver essential supplies — first-aid materials, hygiene products, and educational resources — to families who need them.',
    impact: '90 kits delivered to local families',
  },
  {
    icon: <Megaphone size={36} strokeWidth={1.5} />,
    title: 'Health Awareness Campaigns',
    description:
      'Flyers, posters, and digital content on preventive health, nutrition, mental wellness, and disease awareness — designed for real community conversations.',
    impact: '500+ community members reached',
  },
  {
    icon: <Microscope size={36} strokeWidth={1.5} />,
    title: 'Hands-On Learning',
    description:
      'Students and aspiring healthcare workers volunteer in kit assembly, outreach events, and campaign work — building skills through real service.',
    impact: 'Training future healthcare leaders',
  },
  {
    icon: <UserCheck size={36} strokeWidth={1.5} />,
    title: 'Professional Mentorship',
    description:
      'Experienced clinicians and health workers lead workshops and speaking events, sharing guidance with members and the wider community.',
  },
];

const Programs = () => (
  <Section id="programs" background="white">
    <div className="programs">
      <header className="programs__header">
        <span className="section-label">What we run</span>
        <h2>Programs &amp; initiatives</h2>
        <p className="programs__subtitle">
          Layered community work — from packed kits on the ground to mentorship in the room.
        </p>
      </header>

      <div className="programs__grid">
        {programs.map((program) => (
          <Card key={program.title} hover className="program-card">
            <div className="program-card__icon">{program.icon}</div>
            <h3 className="program-card__title">{program.title}</h3>
            <p className="program-card__description">{program.description}</p>
            {program.impact && <p className="program-card__impact">{program.impact}</p>}
          </Card>
        ))}
      </div>

      <aside className="programs__cta">
        <h3>Support the next kit drive</h3>
        <p>
          Volunteers, clinics, and donors help us scale from 90 kits toward even more families
          across the Interlake.
        </p>
      </aside>
    </div>
  </Section>
);

export default Programs;
