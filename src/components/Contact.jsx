import { useState } from 'react';
import './Contact.css';

const details = [
  { icon: '📞', label: 'Phone',    value: '+254 722 46 43 06' },
  { icon: '✉',  label: 'Email',    value: 'hello@epiqueinteriors.co' },
  { icon: '📍', label: 'Location', value: 'Makongeni, Thika, Kenya' },
  { icon: '🕐', label: 'Hours',    value: 'Mon–Sat, 8:00 AM – 6:00 PM' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will be in touch soon.');
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">

        <div className="reveal">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title contact-title">
            Let's Start Your <em>Project</em>
          </h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input name="name"    type="text"  placeholder="Your Name"               value={form.name}    onChange={handleChange} required />
            <input name="email"   type="email" placeholder="Email Address"           value={form.email}   onChange={handleChange} required />
            <input name="phone"   type="tel"   placeholder="Phone Number (optional)" value={form.phone}   onChange={handleChange} />
            <textarea name="message" placeholder="Tell us about your project..." value={form.message} onChange={handleChange} required />
            <button type="submit" className="btn-primary contact-submit">Send Message</button>
          </form>
        </div>

        <div className="reveal">
          <p className="contact-info-title">Contact Information</p>
          {details.map(({ icon, label, value }) => (
            <div key={label} className="contact-detail">
              <div className="contact-detail-icon">{icon}</div>
              <div>
                <span className="contact-detail-label">{label}</span>
                <span className="contact-detail-value">{value}</span>
              </div>
            </div>
          ))}
          <div className="contact-map">📍 Google Map Embed Here</div>
        </div>

      </div>
    </section>
  );
}