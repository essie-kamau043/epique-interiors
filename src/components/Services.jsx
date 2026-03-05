import ServiceCard from './ServiceCard';
import './Services.css';

const services = [
  {
    icon: '🏡',
    title: 'Residential Design',
    description:
      'Full-service home design — from open-plan living rooms to intimate bedrooms — crafted to reflect your personality and lifestyle.',
  },
  {
    icon: '🏢',
    title: 'Office & Commercial',
    description:
      'Workspace environments that enhance productivity, communicate your brand, and impress every visitor who walks through the door.',
  },
  {
    icon: '📐',
    title: 'Space Planning',
    description:
      'Intelligent layout solutions that maximize every square meter, improving flow, light, and usability without compromise.',
  },
  {
    icon: '🔨',
    title: 'Renovation Consultation',
    description:
      'Expert guidance through your renovation journey — material selection, contractor coordination, and seamless project delivery.',
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-inner">

        <div className="services-head reveal">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Our Services</h2>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

      </div>
    </section>
  );
}