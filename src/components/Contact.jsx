import { useState } from 'react';
import './Contact.css';

const details = [
  { icon: '📞', label: 'Phone',    value: '+254 722 464 306' },
  { icon: '✉',  label: 'Email',    value: 'hmwangi098@gmail.com' },
  { icon: '📍', label: 'Location', value: 'Westlands, Nairobi, Kenya' },
  { icon: '🕐', label: 'Hours',    value: 'Mon–Sat, 8:00 AM – 6:00 PM' },
];

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/mzdjpjzp', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">

        {/* Form Column */}
        <div className="reveal">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title contact-title">
            Let's Start Your <em>Project</em>
          </h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input name="name"    type="text"  placeholder="Your Name"               required />
            <input name="email"   type="email" placeholder="Email Address"           required />
            <input name="phone"   type="tel"   placeholder="Phone Number (optional)" />
            <textarea name="message" placeholder="Tell us about your project..." required />

            <button
              type="submit"
              className="btn-primary contact-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="contact-feedback success">
                ✅ Message sent! We'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="contact-feedback error">
                ❌ Something went wrong. Please try again or WhatsApp us directly.
              </p>
            )}
          </form>
        </div>

        {/* Info Column */}
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
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40140.67793334754!2d37.08205438068172!3d-1.05988413179918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4fb53d8f5581%3A0x4261933def037bb6!2sMakongeni%2C%20Thika!5e1!3m2!1sen!2ske!4v1772727442421!5m2!1sen!2ske"
  width="100%"
  height="160"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Our Location"
/>
        </div>

      </div>
    </section>
  );
}