import Section from '../components/Section';
import './Impact.css';

const kitContents = [
  'First-aid essentials',
  'Hygiene supplies',
  'Preventive health guides',
  'Nutrition & wellness tips',
];

const Impact = () => (
  <Section id="impact" background="alt" className="impact-section">
    <div className="impact">
      <div className="impact__visual">
        <div className="impact__kit impact__kit--layer-3" aria-hidden="true" />
        <div className="impact__kit impact__kit--layer-2" aria-hidden="true" />
        <div className="impact__kit impact__kit--layer-1">
          <span className="impact__kit-count">84</span>
          <span className="impact__kit-label">kits delivered</span>
        </div>
      </div>

      <div className="impact__content">
        <span className="section-label">By the numbers</span>
        <h2>Every kit is built layer by layer</h2>
        <p>
          From sourcing supplies to packing and handoff, our team has assembled and delivered
          <strong> 84 complete health kits</strong> to families across the Interlake — each one
          stocked with practical items and clear, community-focused guidance.
        </p>
        <ul className="impact__list">
          {kitContents.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

export default Impact;
