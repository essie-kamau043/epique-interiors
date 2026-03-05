import './Footer.css';

const quickLinks   = [['Home','#hero'],['About','#about'],['Services','#services'],['Portfolio','#portfolio'],['Contact','#contact']];
const serviceLinks = ['Residential Design','Office Design','Space Planning','Renovation'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        <div>
          <a href="#hero" className="footer-logo">Epique <span>Interiors</span></a>
          <p className="footer-desc">
            Epigue Interiors is an interior design studio crafting beautiful, functional
            spaces in Nairobi and across East Africa.
          </p>
        </div>

        <div>
          <p className="footer-heading">Quick Links</p>
          <ul className="footer-list">
            {quickLinks.map(([label, href]) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-heading">Services</p>
          <ul className="footer-list">
            {serviceLinks.map((l) => (
              <li key={l}><a href="#services">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-heading">Contact Us</p>
          <ul className="footer-list">
            <li><a href="tel:254 700 000000">254 722 464306</a></li>
            <li><a href="mailto:epiqueinteriors.com">epiqueinteriors.com</a></li>
            <li>Makongeni, Thika</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2025 Epique Interiors. All rights reserved.</span>
        <span>Privacy Policy · Terms of Service</span>
      </div>
    </footer>
  );
}