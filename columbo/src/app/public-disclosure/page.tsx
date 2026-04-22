import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Public Disclosure | St. Columbo Public School' };

const disclosureData = [
  { label: 'School Name', value: 'St. Columbo Public School' },
  { label: 'Affiliation Number', value: '2730427' },
  { label: 'School Code', value: '20872' },
  { label: 'Address', value: 'Maharana Partap Enclave, Pitam Pura, New Delhi - 110034' },
  { label: 'Principal Name', value: 'To Be Updated' },
  { label: 'Contact Number', value: '+91 9355185555 / 011-42458061-62' },
  { label: 'Email', value: 'stcolumbo@gmail.com' },
  { label: 'Year of Establishment', value: '2000' },
  { label: 'Status of Affiliation', value: 'Permanent' },
  { label: 'Medium of Instruction', value: 'English' },
  { label: 'Type of School', value: 'Co-Educational' },
  { label: 'Classes Offered', value: 'Nursery to Class X' },
];

export default function PublicDisclosurePage() {
  return (
    <div className="column_alignment base_margin" style={{ background: 'white' }}>
      <PageBanner title="Public Disclosure" />
      <Breadcrumb />
      <div className="column_alignment section_wrapper" style={{ background: 'white' }}>
        <div className="column_alignment main_content align_self_center">
          <span className="page_heading">Public <b>Disclosure</b></span>
          <p style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 32px', color: '#555', fontSize: 16, lineHeight: 1.7 }}>
            In accordance with CBSE guidelines, we provide the following mandatory public disclosures.
          </p>
          <div style={{ overflowX: 'auto', width: '100%' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <thead>
                <tr style={{ background: 'var(--colorAccent)' }}>
                  <th style={{ padding: '14px 20px', color: 'white', textAlign: 'left', fontFamily: 'var(--main-font)', fontSize: 15 }}>Detail</th>
                  <th style={{ padding: '14px 20px', color: 'white', textAlign: 'left', fontFamily: 'var(--main-font)', fontSize: 15 }}>Information</th>
                </tr>
              </thead>
              <tbody>
                {disclosureData.map((row, i) => (
                  <tr key={row.label} style={{ background: i % 2 === 0 ? '#fff' : '#fafafa', borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '13px 20px', fontWeight: 600, color: '#333', fontSize: 14 }}>{row.label}</td>
                    <td style={{ padding: '13px 20px', color: '#555', fontSize: 14 }}>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: 24, background: '#FFF8E1', border: '1px solid #EFB137', borderRadius: 8, padding: 16 }}>
            <p style={{ margin: 0, color: '#555', fontSize: 14, lineHeight: 1.6 }}>
              <strong>Note:</strong> For complete mandatory disclosure documents as required by CBSE, please visit the school office or contact us at{' '}
              <a href="mailto:stcolumbo@gmail.com" style={{ color: 'var(--colorAccent)' }}>stcolumbo@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
