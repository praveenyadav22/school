import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About SCPS | St. Columbo Public School',
  description: 'Learn about St. Columbo Public School — our history, values, and commitment to holistic education.',
};

export default function AboutPage() {
  return (
    <div className="column_alignment base_margin">
      <PageBanner title="About SCPS" />
      <Breadcrumb />
      <div className="column_alignment section_wrapper">
        <div className="main_content row_column_alignment two align_self_center">
          <div className="column_alignment about_content_wrapper">
            <span className="content_heading">
              About <b>St. Columbo Public School</b>
            </span>
            <p>
              St. Columbo Public School is a premier educational institution dedicated to nurturing
              young minds and shaping future leaders. Founded with the vision of providing
              world-class education in a holistic environment, we have been a beacon of academic
              excellence for decades.
            </p>
            <p>
              Our school believes in the comprehensive development of every child — academically,
              physically, socially, and emotionally. We integrate modern pedagogical methods with
              time-tested values to create an environment where students thrive.
            </p>
            <p>
              At SCPS, education goes beyond textbooks. We offer a rich tapestry of co-curricular
              activities, sports, arts, and technology programs that help students discover their
              unique talents and build confidence.
            </p>
            <p>
              Our dedicated faculty, state-of-the-art infrastructure, and strong parent-school
              partnership form the foundation of our success. We are committed to preparing students
              not just for examinations, but for life.
            </p>
            <Link href="/mission-vision" className="accent_button" style={{ alignSelf: 'flex-start', marginTop: 16 }}>
              Our Vision &amp; Mission
            </Link>
          </div>
          <div className="column_alignment align_center" style={{ padding: 24 }}>
            <img
              src="/images/generic/welcome_scps.png"
              alt="About SCPS"
              style={{ width: '100%', maxWidth: 450, borderRadius: 12 }}
            />
            <div
              className="column_alignment"
              style={{
                marginTop: 24,
                background: 'linear-gradient(135deg, #711123, #4c0415)',
                borderRadius: 12,
                padding: 24,
                color: 'white',
                width: '100%',
                maxWidth: 450,
              }}
            >
              {[
                { value: '25+', label: 'Years of Excellence' },
                { value: '5000+', label: 'Alumni Worldwide' },
                { value: '200+', label: 'Qualified Faculty' },
                { value: '100%', label: 'Board Results' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="row_alignment"
                  style={{
                    justifyContent: 'space-between',
                    padding: '12px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  <span style={{ fontSize: 28, fontWeight: 900, color: '#EFB137' }}>{stat.value}</span>
                  <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', textAlign: 'right' }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="column_alignment section_wrapper" style={{ background: '#f8f8f8' }}>
        <div className="main_content align_self_center">
          <span className="page_heading">Explore <b>More About Us</b></span>
          <div className="row_alignment wrap" style={{ marginTop: 24, justifyContent: 'center', gap: 16 }}>
            {[
              { label: 'Vision & Mission', href: '/mission-vision' },
              { label: 'Why Us', href: '/why-us' },
              { label: 'Safety & Security', href: '/safety-and-security' },
              { label: 'Management', href: '/management' },
            ].map((link) => (
              <Link key={link.label} href={link.href} className="accent_button">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
