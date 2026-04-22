import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import SidebarLayout from '@/components/shared/SidebarLayout';
import { gallerySidebarLinks } from '@/lib/sidebarLinks';
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
    <div className="column_alignment base_margin" style={{ background: 'white' }}>
      <PageBanner title="Video Gallery" />
      <Breadcrumb />

      <SidebarLayout quickLinks={gallerySidebarLinks} activeHref="/videos">
        <div className="column_alignment about_content_wrapper">
          <span className="page_heading" style={{ alignSelf: 'flex-start' }}>Video <b>Gallery</b></span>
          <div className="row_alignment wrap" style={{ margin: '16px -8px' }}>
            {videos.map((v) => (
              <div key={v.id} style={{ width: 'calc(50% - 16px)', minWidth: 260, margin: 8 }}>
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  width="100%"
                  height="220"
                  style={{ borderRadius: 10, border: 'none', display: 'block' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <span style={{ display: 'block', marginTop: 8, fontWeight: 500, color: '#333', fontSize: 14 }}>
                  {v.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SidebarLayout>
    </div>
  );
}
