import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <span className="hero-label">Epique Interiors And Furnitures</span>
        <h1 className="hero-heading">
          Transforming Spaces into <em>Beautiful</em> Experiences
        </h1>
        <p className="hero-desc">
          We craft interiors that tell your story — blending timeless elegance
          with modern functionality for homes and workplaces that inspire.
        </p>
        <div className="hero-btns">
          <a href="#portfolio" className="btn-primary">View Portfolio</a>
          <a href="#cta" className="btn-outline">Book Consultation</a>
        </div>
      </div>
      <div className="hero-scroll">
        <span className="hero-scroll-line" />
        SCROLL
      </div>
    </section>
  );
}