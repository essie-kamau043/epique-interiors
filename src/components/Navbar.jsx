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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>
      <a href="#hero" className="navbar-logo">Epique Interiors</a>

      {/* Desktop links */}
      <ul className="navbar-links">
        {links.map(({ label, href }) => (
          <li key={label}><a href={href} className="navbar-link">{label}</a></li>
        ))}
        <li><a href="#cta" className="navbar-btn">Book Consultation</a></li>
      </ul>

      {/* Hamburger */}
      <button
        className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      <div className={`navbar-drawer${menuOpen ? ' open' : ''}`}>
        {links.map(({ label, href }) => (
          <a key={label} href={href} className="drawer-link" onClick={closeMenu}>{label}</a>
        ))}
        <a href="#cta" className="drawer-btn" onClick={closeMenu}>Book Consultation</a>
      </div>

      {/* Backdrop */}
      {menuOpen && <div className="navbar-backdrop" onClick={closeMenu} />}
    </nav>
  );
}