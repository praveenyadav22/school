import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vision & Mission | St. Columbo Public School',
};

const values = [
  { icon: '🎯', title: 'Excellence', desc: 'Pursuing the highest standards in everything we do.' },
  { icon: '❤️', title: 'Compassion', desc: 'Caring for each other and the world around us.' },
  { icon: '🌟', title: 'Integrity', desc: 'Honesty and transparency in all our actions.' },
  { icon: '🤝', title: 'Collaboration', desc: 'Working together to achieve greater outcomes.' },
  { icon: '🚀', title: 'Innovation', desc: 'Embracing new ideas and approaches to learning.' },
  { icon: '🌍', title: 'Responsibility', desc: 'Being accountable to our community and environment.' },
];

export default function MissionVisionPage() {
  return (
    <div className="column_alignment base_margin">
      <PageBanner title="Vision & Mission" />
      <Breadcrumb />

      {/* Vision */}
      <div className="column_alignment section_wrapper">
        <div className="main_content row_column_alignment two align_self_center">
          <div className="column_alignment about_content_wrapper">
            <span className="content_heading">Our <b>Vision</b></span>
            <p>
              To be a globally recognized institution that nurtures compassionate, creative, and
              critical thinkers who contribute positively to society — individuals who embrace
              diversity, lead with integrity, and are lifelong learners.
            </p>
            <p>
              We envision a school where every student discovers their unique potential and is
              empowered to make a meaningful difference in the world.
            </p>
          </div>
          <div
            className="column_alignment align_center"
            style={{
              background: 'linear-gradient(135deg, #711123, #4c0415)',
              borderRadius: 16,
              padding: 40,
              margin: 16,
              color: 'white',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: 64 }}>🔭</span>
            <h2 style={{ color: '#EFB137', fontFamily: 'var(--heading-font)', marginTop: 16 }}>
              Shaping Tomorrow&apos;s Leaders
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
              Every child who walks through our gates has the potential to change the world.
              We are here to help them realize it.
            </p>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="column_alignment section_wrapper" style={{ background: '#f8f8f8' }}>
        <div className="main_content column_alignment align_self_center">
          <span className="page_heading">Our <b>Mission</b></span>
          <p style={{ textAlign: 'center', maxWidth: 800, margin: '16px auto', fontSize: 18, lineHeight: 1.7, color: '#444' }}>
            To provide a stimulating and inclusive learning environment that fosters academic
            excellence, character development, and holistic growth — enabling each student to
            achieve their fullest potential and become responsible global citizens.
          </p>
          <div className="row_alignment wrap four" style={{ marginTop: 32 }}>
            {values.map((v) => (
              <div
                key={v.title}
                className="column_alignment align_center"
                style={{
                  background: 'white',
                  borderRadius: 12,
                  padding: 24,
                  margin: 8,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  textAlign: 'center',
                }}
              >
                <span style={{ fontSize: 40 }}>{v.icon}</span>
                <h3 style={{ color: 'var(--colorAccent)', margin: '12px 0 8px' }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: '#666', margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
