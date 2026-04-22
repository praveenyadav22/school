import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'News & Updates | St. Columbo Public School' };

const news = [
  {
    title: 'Admission Open for 2026-2027',
    date: 'December 4, 2025',
    category: 'Admissions',
    excerpt: 'St. Columbo Public School is pleased to announce that admissions are now open for the academic year 2026-2027. Apply early to secure your seat.',
  },
  {
    title: 'List of Nursery Admissions (2026-2027)',
    date: 'December 10, 2025',
    category: 'Admissions',
    excerpt: 'The list of students selected for Nursery admissions for the academic session 2026-2027 is now available.',
  },
  {
    title: 'Times Education Icons Award',
    date: 'November 20, 2025',
    category: 'Awards',
    excerpt: 'SCPS proudly receives the Times Education Icons Award for Exemplary Performance in Education, presented by the Times Group.',
  },
  {
    title: 'Annual Day 2024-25 Highlights',
    date: 'January 15, 2025',
    category: 'Events',
    excerpt: 'Our Annual Day celebrations were a grand success with over 500 students showcasing their talent in music, dance, and drama.',
  },
  {
    title: 'Board Results 2024-25',
    date: 'May 28, 2025',
    category: 'Academics',
    excerpt: 'SCPS achieves 100% pass results in CBSE Class X examinations with several students scoring above 95%.',
  },
  {
    title: 'New Computer Lab Inauguration',
    date: 'April 5, 2025',
    category: 'Infrastructure',
    excerpt: 'A state-of-the-art computer lab with 60 high-performance workstations was inaugurated to enhance digital learning.',
  },
];

const categoryColors: Record<string, string> = {
  Admissions: '#711123',
  Awards: '#EFB137',
  Events: '#0094DA',
  Academics: '#0ab120',
  Infrastructure: '#9b59b6',
};

export default function NewsUpdatesPage() {
  return (
    <div className="column_alignment base_margin">
      <PageBanner title="News & Updates" />
      <Breadcrumb />
      <div className="column_alignment section_wrapper">
        <div className="column_alignment main_content align_self_center">
          <span className="page_heading">Latest <b>News & Updates</b></span>
          <div className="row_alignment wrap two" style={{ marginTop: 32 }}>
            {news.map((item) => (
              <div key={item.title} style={{ padding: 10, width: 'calc(50% - 20px)', minWidth: 280 }}>
                <div
                  className="article_list_item_container column_alignment"
                  style={{ margin: 0, width: '100%' }}
                >
                  <div style={{ padding: '16px 16px 0' }}>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        color: categoryColors[item.category] || '#711123',
                        background: `${categoryColors[item.category]}18`,
                        padding: '3px 8px',
                        borderRadius: 4,
                      }}
                    >
                      {item.category}
                    </span>
                  </div>
                  <div style={{ padding: '12px 16px 16px' }}>
                    <h3 className="article_item_title" style={{ margin: '0 0 8px', fontSize: 18 }}>
                      {item.title}
                    </h3>
                    <span style={{ fontSize: 12, color: '#888', display: 'block', marginBottom: 10 }}>
                      🗓 {item.date}
                    </span>
                    <p className="article_item_description" style={{ margin: 0, fontSize: 14, color: '#666', lineHeight: 1.6 }}>
                      {item.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
