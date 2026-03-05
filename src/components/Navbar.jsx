import { useEffect, useState } from 'react';
import './Navbar.css';

const links = [
  { label: 'Home',      href: '#hero' },
  { label: 'About',     href: '#about' },
  { label: 'Services',  href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact',   href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>
      <a href="#hero" className="navbar-logo">
        Epique <span>Interiors</span>
      </a>
      <ul className="navbar-links">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="navbar-link">{label}</a>
          </li>
        ))}
        <li>
          <a href="#cta" className="navbar-btn">Book Consultation</a>
        </li>
      </ul>
    </nav>
  );
}