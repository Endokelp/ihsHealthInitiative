import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import { Package, Megaphone, UserCheck, Microscope, Instagram } from 'lucide-react';
import './Programs.css';

const Programs: React.FC = () => {
  const programs = [
    {
      icon: <Package size={40} />,
      title: 'Health Kit Distribution',
      description: 'We organize regular health kit drives to collect and distribute essential health supplies to families in need. Our kits include first-aid materials, hygiene products, and educational resources.',
      impact: 'Delivered 50+ health kits to local families'
    },
    {
      icon: <Megaphone size={40} />,
      title: 'Health Awareness Campaigns',
      description: 'Creating and distributing informative flyers, posters, and digital content about preventive health, nutrition, mental wellness, and disease awareness to educate our community.',
      impact: 'Reached 500+ community members'
    },
    {
      icon: <Instagram size={40} />,
      title: 'Social Media Outreach',
      description: 'We maintain active Instagram and TikTok accounts to share health tips, warnings, and educational content that resonates with diverse audiences, especially younger community members.',
      impact: 'Growing social media presence'
    },
    {
      icon: <Microscope size={40} />,
      title: 'Hands-On Learning',
      description: 'Aspiring healthcare professionals gain practical experience through volunteering in our programs, from kit assembly to community outreach, building skills for their future careers.',
      impact: 'Training future healthcare leaders'
    },
    {
      icon: <UserCheck size={40} />,
      title: 'Professional Mentorship',
      description: 'We connect our members and the community with experienced healthcare professionals who share their insights, experiences, and guidance through workshops and speaking events.',
      impact: '20+ professionals engaged'
    }
  ];

  return (
    <Section id="programs" background="alt">
      <div className="programs">
        <div className="programs__header">
          <h2>Our Programs & Initiatives</h2>
          <p className="programs__subtitle">
            Making a difference through targeted health programs and community engagement
          </p>
        </div>

        <div className="programs__grid">
          {programs.map((program, index) => (
            <Card key={index} hover className="program-card">
              <div className="program-card__icon">
                {program.icon}
              </div>
              <h3 className="program-card__title">{program.title}</h3>
              <p className="program-card__description">{program.description}</p>
              <div className="program-card__impact">
                <span className="impact-badge">{program.impact}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="programs__cta">
          <h3>Want to support our programs?</h3>
          <p>Your involvement can help us reach more families and create lasting impact in our community.</p>
        </div>
      </div>
    </Section>
  );
};

export default Programs;
