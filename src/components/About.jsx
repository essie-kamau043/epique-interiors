import './About.css';
import kitchenCounters from "../assets/images/kitchen-counters.jpeg";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">

        <div className="about-image-wrap reveal">
          
        <img
  src={kitchenCounters}
  alt="Designer at work"
  className="about-image"
/>
          <div className="about-badge">
            <b className="about-badge-num">12+</b>
            <span className="about-badge-sub">Years of<br />Excellence</span>
          </div>
        </div>

        <div className="about-text reveal">
          <span className="section-label">Our Story</span>
          <h2 className="section-title">
            Designing Spaces That Feel Like <em>Home</em>
          </h2>
          <p className="about-para">
            Founded in 2012, Epique Interiors was born from a passion for
            beautiful, purposeful design. Our team of expert designers works
            closely with each client to understand their lifestyle, vision, and
            values — creating spaces that are as functional as they are breathtaking.
          </p>
          <p className="about-para">
            We believe every room has the potential to inspire. From concept to
            completion, we handle every detail with precision and care.
          </p>
          <a href="#services" className="btn-primary">Learn More</a>
        </div>

      </div>
    </section>
  );
}