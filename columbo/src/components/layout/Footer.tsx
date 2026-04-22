'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '@/components/shared/SocialIcons';

const footerSections = [
  {
    id: 'student',
    heading: 'Student Section',
    links: [
      { label: 'Homework', href: '#' },
      { label: 'Tutorial', href: '#' },
      { label: 'Syllabus', href: '#' },
      { label: 'Datesheet', href: '#' },
      { label: 'Assignment', href: '#' },
      { label: 'Question Bank', href: '#' },
      { label: 'Timetable', href: '#' },
      { label: 'Academic Calendar', href: '#' },
      { label: 'School Policies', href: '/school-policies' },
    ],
  },
  {
    id: 'quick',
    heading: 'Quick Links',
    links: [
      { label: 'Academics', href: '/academics' },
      { label: 'Curriculum', href: '/curriculum' },
      { label: 'News & Updates', href: '/news-updates' },
      { label: 'Blog', href: '/blog-b' },
      { label: 'Infrastructure', href: '/g/infrastructure' },
      { label: 'Co-Curricular Activities', href: '/g/cocurricular' },
      { label: 'Campus Life', href: '/g/campus-life' },
      { label: 'Circulars', href: '#' },
      { label: 'Career Opportunities', href: '#' },
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'School Events', href: '/g/events-celebrations' },
    ],
  },
];

export default function Footer() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <footer className="column_alignment">
      <div className="column_alignment footer_wrapper">
        <div className="row_column_alignment main_content align_self_center">
          {/* Logo & Map */}
          <div className="footer_container column_alignment" style={{ minWidth: '30%' }}>
            <img
              src="/images/logo/scps_main_logo.png"
              style={{ maxWidth: '80%', marginBottom: 24, filter: 'brightness(0) invert(1)' }}
              alt="SCPS Main Logo"
            />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0338838510565!2d77.139358!3d28.688633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03c8e6899ec5%3A0x31f69f0e3daac287!2sSt.%20Columbo%20Public%20School!5e0!3m2!1sen!2sin!4v1750218883083!5m2!1sen!2sin"
              height="200"
              style={{ border: 0, borderRadius: 16, maxWidth: '80%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Map"
            />
          </div>

          {/* Contact */}
          <div className="footer_container column_alignment">
            <span className="footer_heading">Get In Touch</span>
            <div className="column_alignment footer_sub_content" style={{ display: 'flex' }}>
              <a href="#" className="footer_link row_alignment">
                <MapPin size={16} style={{ margin: '4px 8px 0 0', color: 'var(--colorAccent2)', flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Address: Maharana Partap Enclave,<br />Pitam Pura, New Delhi-110034
                </span>
              </a>
              <div className="footer_link row_alignment">
                <Phone size={16} style={{ margin: '4px 8px 0 0', color: 'var(--colorAccent2)', flexShrink: 0 }} />
                <div className="column_alignment">
                  <div className="row_alignment">
                    <span style={{ color: 'rgba(255,255,255,0.8)' }}>Phone:&nbsp;</span>
                    <a href="tel:+919355185555" style={{ color: 'rgba(255,255,255,0.8)' }}>+91 9355185555</a>
                  </div>
                  <a href="tel:011-42458061" style={{ color: 'rgba(255,255,255,0.8)' }}>011-42458061-62</a>
                </div>
              </div>
              <a href="mailto:stcolumbo@gmail.com" className="footer_link row_alignment">
                <Mail size={16} style={{ margin: '4px 8px 0 0', color: 'var(--colorAccent2)', flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.8)' }}>Email: stcolumbo@gmail.com</span>
              </a>
              <span style={{ fontSize: 12, color: 'white', margin: '12px 0 0' }}>Follow Us:</span>
              <div className="row_alignment wrap">
                <a href="https://www.instagram.com/stcolumboschool" target="_blank" className="footer_social_link">
                  <InstagramIcon size={14} />
                </a>
                <a href="https://www.facebook.com/stcolumboschool/" target="_blank" className="footer_social_link">
                  <FacebookIcon size={14} />
                </a>
                <a href="https://www.youtube.com/@stcolumboschool3755" target="_blank" className="footer_social_link">
                  <YoutubeIcon size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Dynamic Sections */}
          {footerSections.map((section) => (
            <div key={section.id} className="footer_container column_alignment">
              <span
                className={`footer_heading${expandedSections[section.id] ? ' active' : ''}`}
                onClick={() => toggleSection(section.id)}
                style={{ cursor: 'pointer' }}
              >
                {section.heading}
              </span>
              <div
                className={`column_alignment footer_sub_content${expandedSections[section.id] ? ' active' : ''}`}
                style={{ display: 'flex' }}
              >
                {section.links.map((link) => (
                  <Link key={link.label} href={link.href} className="footer_link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer bottom image */}
        <div className="column_alignment main_content align_self_center">
          <img
            src="/images/generic/footer_bottom_img.png"
            style={{ width: '100%', marginBottom: -2 }}
            alt="Footer decoration"
          />
        </div>
      </div>

      {/* Copyright */}
      <div className="column_alignment" style={{ background: '#0d0d0d' }}>
        <p className="fill" style={{ width: '100%', padding: '20px 8px', fontSize: 12, textAlign: 'center', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
          <b style={{ fontSize: 14, color: 'white' }}>© 2026 St. Columbo Public School. All Rights Reserved.</b>
          <br />
          Handcrafted with excellence by{' '}
          <a href="https://invincibleweb.in/" target="_blank" style={{ color: 'var(--colorAccent2)' }}>
            Invincible Web Solutions.
          </a>
        </p>
      </div>
    </footer>
  );
}
