'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

const routeLabels: Record<string, string> = {
  about: 'About SCPS',
  'mission-vision': 'Vision & Mission',
  'why-us': 'Why Us',
  'safety-and-security': 'Safety & Security',
  management: 'Management',
  academics: 'Academics',
  curriculum: 'Curriculum',
  'news-updates': 'News & Updates',
  'blog-b': 'Blog',
  videos: 'Video Gallery',
  'school-policies': 'School Policies',
  'support': 'Support',
  contact: 'Contact Us',
  'terms-conditions': 'Terms & Conditions',
  'public-disclosure': 'Public Disclosure',
  g: 'Gallery',
  gallery: 'Photo Gallery',
  infrastructure: 'Infrastructure',
  cocurricular: 'Co-Curricular Activities',
  'events-celebrations': 'Events & Celebrations',
  'campus-life': 'Campus Life',
};

export default function Breadcrumb() {
  const pathname = usePathname();

  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);

  const crumbs = segments.map((seg, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const label = routeLabels[seg] || seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    return { href, label };
  });

  return (
    <div className="breadcrumb_wrapper">
      <div className="breadcrumb_content">
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#666', fontSize: 14, fontFamily: 'var(--main-font)' }}>
          <Home size={14} />
          Home
        </Link>
        {crumbs.map((crumb, index) => (
          <span key={crumb.href} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <ChevronRight size={12} className="separator" />
            {index === crumbs.length - 1 ? (
              <span style={{ color: 'var(--colorAccent)', fontWeight: 500, fontSize: 14 }}>{crumb.label}</span>
            ) : (
              <Link href={crumb.href} style={{ color: '#666', fontSize: 14, textDecoration: 'none' }}>
                {crumb.label}
              </Link>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
