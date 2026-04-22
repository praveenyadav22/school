import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Video Gallery | St. Columbo Public School' };

const videos = [
  { id: 'PInJ0Qwu80g', title: 'Virtual Campus Tour' },
  { id: '5YSU6n8-ZWY', title: 'Annual Day 2024-25 - Swagatham' },
  { id: 'ALa3hyZMiVg', title: 'Student Testimonials' },
  { id: 'vxIs-au_y0M', title: 'School Highlights' },
  { id: '6W3MXqXdv_w', title: 'Events & Celebrations' },
];

export default function VideosPage() {
  return (
    <div className="column_alignment base_margin">
      <PageBanner title="Video Gallery" />
      <Breadcrumb />
      <div className="column_alignment section_wrapper">
        <div className="column_alignment main_content align_self_center">
          <span className="page_heading">Video <b>Gallery</b></span>
          <div className="row_alignment wrap two" style={{ marginTop: 24 }}>
            {videos.map((v) => (
              <div key={v.id} className="column_alignment" style={{ padding: 12 }}>
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  width="100%"
                  height="280"
                  style={{ borderRadius: 12, border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <span style={{ marginTop: 8, fontWeight: 500, color: '#333', textAlign: 'center' }}>{v.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
