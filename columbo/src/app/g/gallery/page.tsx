import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import SidebarLayout from '@/components/shared/SidebarLayout';
import { gallerySidebarLinks } from '@/lib/sidebarLinks';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Photo Gallery | St. Columbo Public School' };

const galleryImages = [
  { src: '/images/generic/spacious_classroom.jpg', caption: 'Digital Classrooms' },
  { src: '/images/generic/excellent_childcare.jpg', caption: 'Childcare Facilities' },
  { src: '/images/generic/state_of_art.jpg', caption: 'Computer Lab' },
  { src: '/images/generic/modern_science.jpg', caption: 'Science Lab' },
  { src: '/images/generic/well_stocked_libs.jpg', caption: 'Library' },
  { src: '/images/generic/excellent_sports.jpg', caption: 'Sports Facilities' },
  { src: '/images/generic/gps_transport.jpg', caption: 'GPS Transport' },
  { src: '/images/generic/awards_home_img.jpg', caption: 'Awards Ceremony' },
];

export default function GalleryPage() {
  return (
    <div className="column_alignment base_margin" style={{ background: 'white' }}>
      <PageBanner title="Photo Gallery" />
      <Breadcrumb />

      <SidebarLayout quickLinks={gallerySidebarLinks} activeHref="/g/gallery">
        <div className="column_alignment about_content_wrapper">
          <span className="page_heading" style={{ alignSelf: 'flex-start' }}>Photo <b>Gallery</b></span>
          <div className="row_alignment wrap" style={{ margin: '16px -8px' }}>
            {galleryImages.map((img) => (
              <div key={img.src} style={{ width: 'calc(50% - 16px)', minWidth: 200, margin: 8 }}>
                <div className="gallery_item_container column_alignment" style={{ margin: 0 }}>
                  <img
                    src={img.src}
                    alt={img.caption}
                    style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: '6px 6px 0 0' }}
                  />
                  <span style={{ padding: 10 }}>{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SidebarLayout>
    </div>
  );
}
