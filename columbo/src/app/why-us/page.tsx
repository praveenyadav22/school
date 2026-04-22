import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import { whyChooseItems } from '@/lib/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Us | St. Columbo Public School',
};

export default function WhyUsPage() {
  return (
    <div className="column_alignment base_margin">
      <PageBanner title="Why Choose SCPS?" />
      <Breadcrumb />

      <div className="column_alignment section_wrapper">
        <div className="column_alignment main_content align_self_center">
          <span className="page_heading">
            Why <b>St. Columbo Public School?</b>
          </span>
          <p style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 32px', fontSize: 18, color: '#555', lineHeight: 1.7 }}>
            We offer a unique blend of academic rigor, co-curricular excellence, and character
            development that sets us apart.
          </p>
          <div className="row_alignment wrap four">
            {whyChooseItems.map((item, i) => (
              <div key={i} className="column_alignment" style={{ padding: 8 }}>
                <div
                  className="column_alignment"
                  style={{
                    background: 'white',
                    borderRadius: 12,
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                    height: '100%',
                  }}
                >
                  <div style={{ height: 200, overflow: 'hidden' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: 16 }}>
                    <h3 style={{ color: 'var(--colorAccent)', margin: '0 0 8px', fontSize: 17 }}>
                      {item.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: 14, color: '#666', lineHeight: 1.5 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        className="column_alignment section_wrapper align_center"
        style={{ background: 'linear-gradient(135deg, #711123, #4c0415)', textAlign: 'center' }}
      >
        <h2 style={{ color: '#EFB137', fontSize: 32, marginBottom: 16, fontFamily: 'var(--heading-font)' }}>
          Ready to Join Our Family?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 500, margin: '0 auto 24px', fontSize: 18 }}>
          Experience the SCPS difference. Apply now for the upcoming academic year.
        </p>
        <a
          href="https://erp.quickcampus.online/registration/1c029836-58df-467a-aa1c-a9f73f3e2b05"
          target="_blank"
          className="accent_button"
          style={{ background: '#EFB137', color: '#212121', fontSize: 16, padding: '14px 32px' }}
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
