import './ServiceCard.css';

export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card reveal">
      <div className="service-card-icon">{icon}</div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-desc">{description}</p>
    </div>
  );
}