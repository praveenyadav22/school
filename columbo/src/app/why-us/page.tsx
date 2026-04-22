import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import SidebarLayout from '@/components/shared/SidebarLayout';
import { aboutSidebarLinks } from '@/lib/sidebarLinks';
import { whyChooseItems } from '@/lib/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Why Us | St. Columbo Public School' };

export default function WhyUsPage() {
  return (
    <div className="column_alignment base_margin" style={{ background: 'white' }}>
      <PageBanner title="Why Choose SCPS?" />
      <Breadcrumb />

      <SidebarLayout quickLinks={aboutSidebarLinks} activeHref="/why-us">
        <div className="column_alignment about_content_wrapper">
          <span className="page_heading" style={{ alignSelf: 'flex-start' }}>Why Choose <b>St. Columbo?</b></span>
          <p>
            We offer a unique blend of academic rigour, co-curricular excellence, and character
            development that sets us apart. Here is what makes SCPS the preferred choice for
            thousands of families in Delhi.
          </p>
          <div className="row_alignment wrap" style={{ margin: '16px 0' }}>
            {whyChooseItems.map((item) => (
              <div
                key={item.title}
                style={{
                  width: 'calc(50% - 16px)',
                  margin: 8,
                  background: '#fafafa',
                  borderRadius: 10,
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                  minWidth: 240,
                }}
              >
                <img src={item.image} alt={item.title} style={{ width: '100%', height: 160, objectFit: 'cover' }} />
                <div style={{ padding: '12px 16px' }}>
                  <strong style={{ color: 'var(--colorAccent)', fontSize: 15 }}>{item.title}</strong>
                  <p style={{ margin: '6px 0 0', fontSize: 14, color: '#666', lineHeight: 1.5 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SidebarLayout>
    </div>
  );
}
