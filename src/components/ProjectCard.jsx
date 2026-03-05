import './ProjectCard.css';

export default function ProjectCard({ title, sub, url, onOpen }) {
  return (
    <div className="project-card" onClick={() => onOpen(url)}>
      <img src={url} alt={title} loading="lazy" className="project-card-img" />
      <div className="project-card-overlay">
        <h4 className="project-card-title">{title}</h4>
        <span className="project-card-sub">{sub}</span>
      </div>
    </div>
  );
}