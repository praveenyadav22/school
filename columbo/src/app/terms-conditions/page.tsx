import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Terms & Conditions | St. Columbo Public School' };

const sections = [
  { title: '1. Admission', text: 'Admission to SCPS is subject to availability of seats and fulfilment of eligibility criteria as specified by the school. The school reserves the right to accept or reject any application without providing reasons.' },
  { title: '2. Fee Structure', text: 'Fees once paid are non-refundable. The school reserves the right to revise the fee structure annually. Parents will be duly notified of any changes before the commencement of the academic year.' },
  { title: '3. Code of Conduct', text: "Students are expected to follow all school rules and regulations. Parents/guardians are responsible for ensuring that their ward adheres to the school's code of conduct at all times." },
  { title: '4. Use of School Property', text: "Students must treat all school property with care and respect. Any damage caused to school property will be recovered from the student's family." },
  { title: '5. Communication', text: 'Parents are expected to keep their contact information updated with the school at all times. Important communications are sent via SMS, email, and the school app.' },
  { title: '6. Privacy', text: 'SCPS is committed to protecting the privacy of students and their families. Personal information collected during admission is used solely for administrative purposes and is not shared with third parties.' },
  { title: '7. Amendments', text: 'SCPS reserves the right to amend these terms and conditions at any time. Parents will be notified of significant changes through official communication channels.' },
];

export default function TermsConditionsPage() {
  return (
    <div className="column_alignment base_margin" style={{ background: 'white' }}>
      <PageBanner title="Terms & Conditions" />
      <Breadcrumb />
      <div className="column_alignment section_wrapper" style={{ background: 'white' }}>
        <div className="main_content about_content_wrapper align_self_center">
          <span className="content_heading">Terms & <b>Conditions</b></span>
          <p>
            By enrolling your child at St. Columbo Public School (SCPS), you agree to the following
            terms and conditions. Please read them carefully before proceeding with the admission process.
          </p>
          {sections.map((s) => (
            <div key={s.title} style={{ marginTop: 24 }}>
              <h3 style={{ color: 'var(--colorAccent)', margin: '0 0 8px' }}>{s.title}</h3>
              <p style={{ margin: 0, lineHeight: 1.7, color: '#555' }}>{s.text}</p>
            </div>
          ))}
          <p style={{ marginTop: 32, fontSize: 14, color: '#888' }}>
            Last updated: January 2026. For queries, contact us at{' '}
            <a href="mailto:stcolumbo@gmail.com" style={{ color: 'var(--colorAccent)' }}>stcolumbo@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
