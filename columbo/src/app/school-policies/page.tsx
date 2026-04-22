import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'School Policies | St. Columbo Public School' };

const policies = [
  {
    title: 'Attendance Policy',
    content: 'Students are required to maintain a minimum of 75% attendance to be eligible to appear in examinations. Regular attendance is essential for academic success and continuous assessment.',
  },
  {
    title: 'Code of Conduct',
    content: 'All students are expected to maintain dignity, respect, and discipline at all times. Bullying, harassment, or any form of misconduct will result in disciplinary action in accordance with school rules.',
  },
  {
    title: 'Uniform Policy',
    content: 'Students must wear the prescribed school uniform on all school days. The uniform must be clean, well-pressed, and complete. Deviation from the uniform policy requires prior written permission.',
  },
  {
    title: 'Mobile Phone Policy',
    content: 'Mobile phones are not permitted on school premises during school hours. Any mobile phone found in a student\'s possession may be confiscated and returned only to parents.',
  },
  {
    title: 'Fee Payment Policy',
    content: 'School fees are to be paid by the prescribed due date. A late fee will be applicable for delayed payments. Students with outstanding fees may be restricted from examinations.',
  },
  {
    title: 'Anti-Bullying Policy',
    content: 'SCPS maintains a zero-tolerance policy towards bullying in any form — physical, verbal, or online. All complaints are investigated promptly, and appropriate action is taken to ensure a safe environment.',
  },
];

export default function SchoolPoliciesPage() {
  return (
    <div className="column_alignment base_margin">
      <PageBanner title="School Policies" />
      <Breadcrumb />
      <div className="column_alignment section_wrapper">
        <div className="column_alignment main_content align_self_center">
          <span className="page_heading">School <b>Policies</b></span>
          <p style={{ textAlign: 'center', maxWidth: 650, margin: '0 auto 40px', color: '#555', fontSize: 18, lineHeight: 1.7 }}>
            Our policies ensure a safe, disciplined, and productive learning environment for all students.
          </p>
          <div className="column_alignment" style={{ gap: 16 }}>
            {policies.map((p, i) => (
              <div
                key={p.title}
                style={{
                  background: 'white',
                  borderRadius: 12,
                  padding: 24,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                  borderLeft: '4px solid var(--colorAccent)',
                  marginBottom: 12,
                }}
              >
                <h3 style={{ color: 'var(--colorAccent)', margin: '0 0 10px', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{
                    background: 'var(--colorAccent)',
                    color: 'white',
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 13,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}>
                    {i + 1}
                  </span>
                  {p.title}
                </h3>
                <p style={{ margin: 0, color: '#555', lineHeight: 1.7, fontSize: 16 }}>{p.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
