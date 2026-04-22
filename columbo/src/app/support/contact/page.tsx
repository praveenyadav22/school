'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="column_alignment base_margin">
      <PageBanner title="Contact Us" />
      <Breadcrumb />

      {/* Contact Cards */}
      <div className="column_alignment section_wrapper">
        <div className="column_alignment main_content align_self_center">
          <span className="page_heading">Get In <b>Touch</b></span>
          <div className="row_column_alignment contact_detail_container" style={{ justifyContent: 'center', marginTop: 24 }}>
            <div className="column_alignment">
              <MapPin size={18} style={{ color: 'white' }} />
              <span>Our Address</span>
              <a href="#">Maharana Partap Enclave, Pitam Pura, New Delhi - 110034</a>
            </div>
            <div className="column_alignment">
              <Phone size={18} style={{ color: 'white' }} />
              <span>Phone Numbers</span>
              <a href="tel:+919355185555">+91 9355185555</a>
              <a href="tel:01142458061">011-42458061-62</a>
            </div>
            <div className="column_alignment">
              <Mail size={18} style={{ color: 'white' }} />
              <span>Email Address</span>
              <a href="mailto:stcolumbo@gmail.com">stcolumbo@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Map + Form */}
      <div className="column_alignment section_wrapper" style={{ background: '#f8f8f8' }}>
        <div className="main_content row_column_alignment two align_self_center">
          {/* Map */}
          <div className="column_alignment" style={{ padding: 12 }}>
            <span className="content_heading" style={{ marginBottom: 16 }}>Find <b>Us Here</b></span>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0338838510565!2d77.139358!3d28.688633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03c8e6899ec5%3A0x31f69f0e3daac287!2sSt.%20Columbo%20Public%20School!5e0!3m2!1sen!2sin!4v1750218883083!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0, borderRadius: 16 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SCPS Location"
            />
          </div>

          {/* Form */}
          <div className="column_alignment" style={{ padding: 12 }}>
            <span className="content_heading" style={{ marginBottom: 16 }}>Send Us a <b>Message</b></span>
            {sent && (
              <div className="message-success" style={{ position: 'relative', top: 'auto', left: 'auto', transform: 'none', marginBottom: 16 }}>
                ✅ Thank you! Your message has been sent successfully.
              </div>
            )}
            <form className="form_wrapper" onSubmit={handleSubmit} style={{ margin: 0, maxWidth: '100%' }}>
              <label>Full Name *</label>
              <input
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
              />
              <label>Email Address *</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required
              />
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
              />
              <label>Message *</label>
              <textarea
                placeholder="How can we help you?"
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                required
              />
              <button type="submit" className="accent_button" style={{ width: '100%', cursor: 'pointer' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
