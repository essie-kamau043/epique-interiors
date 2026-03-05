import { useState } from 'react';
import ProjectCard from './ProjectCard';
import './Portfolio.css';

import living1 from '../assets/images/seat-1.jpeg';
import living2 from '../assets/images/tv-area.jpeg';
import living3 from '../assets/images/side-pieces.jpeg';
import kitchen1 from '../assets/images/kitchen-counters.jpeg';
import kitchen2 from '../assets/images/kitchen-counter.jpeg';
import bedroom1 from '../assets/images/bed.jpeg';
import bedroom2 from '../assets/images/bed-2.jpeg';
import office1 from '../assets/images/office-table-1.jpeg';
import bedroom3 from '../assets/images/book-shelf.jpeg';
import bedroom4 from '../assets/images/bunk-bed.jpeg';
import bedroom5 from '../assets/images/dressing-table.jpeg';
import bedroom6 from '../assets/images/dressing-table 2.jpeg';
import bedroom7 from '../assets/images/dressing-table-3.jpeg';

const FILTERS = ['all', 'living', 'kitchen', 'bedroom', 'office'];

const FILTER_LABELS = {
  all: 'All', living: 'Living Room', kitchen: 'Kitchen', bedroom: 'Bedroom', office: 'Office',
};

const projects = [
  { id: 1,  cat: 'living',  title: 'Modern Living Room',       url: living1 },
  { id: 2,  cat: 'kitchen', title: 'Luxury Kitchen',           url: kitchen1 },
  { id: 3,  cat: 'bedroom', title: 'Master Bedroom',           url: bedroom1 },
  { id: 4,  cat: 'office',  title: 'Creative Office',          url: office1 },
  { id: 5,  cat: 'living',  title: 'Minimalist Lounge',        url: living2 },
  { id: 6,  cat: 'bedroom', title: 'Guest Bedroom',            url: bedroom2 },
  { id: 7,  cat: 'kitchen', title: 'Open Plan Kitchen',        url: kitchen2 },
  { id: 8,  cat: 'living',  title: 'Penthouse Living',         url: living3 },
  { id: 9,  cat: 'bedroom', title: 'Modern Book Shelf',        url: bedroom3 },
  { id: 10, cat: 'bedroom', title: 'Modern Kids Room',         url: bedroom4 },
  { id: 11, cat: 'bedroom', title: 'Dressing Table I',         url: bedroom5 },
  { id: 12, cat: 'bedroom', title: 'Dressing Table II',        url: bedroom6 },
  { id: 13, cat: 'bedroom', title: 'Dressing Table III',       url: bedroom7 },
];

export default function Portfolio() {
  const [active, setActive] = useState('all');
  const [modal,  setModal]  = useState(null);

  const filtered = active === 'all'
    ? projects
    : projects.filter((p) => p.cat === active);

  return (
    <section id="portfolio" className="portfolio-section">

      <div className="portfolio-head reveal">
        <div>
          <span className="section-label" style={{ color: 'var(--gold)' }}>Our Work</span>
          <h2 className="section-title portfolio-title">Featured Projects</h2>
        </div>
        <div className="portfolio-filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`portfolio-filter-btn${active === f ? ' active' : ''}`}
              onClick={() => setActive(f)}
            >
              {FILTER_LABELS[f]}
            </button>
          ))}
        </div>
      </div>

      <div className="portfolio-grid">
        {filtered.map((p) => (
          <ProjectCard key={p.id} {...p} onOpen={setModal} />
        ))}
      </div>

      {modal && (
        <div className="portfolio-modal" onClick={() => setModal(null)}>
          <span className="portfolio-modal-close" onClick={() => setModal(null)}>×</span>
          <img className="portfolio-modal-img" src={modal} alt="Project" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

    </section>
  );
}