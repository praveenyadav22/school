import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
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
    <div className="column_alignment base_margin">
      <PageBanner title="Photo Gallery" />
      <Breadcrumb />
      <div className="column_alignment section_wrapper">
        <div className="column_alignment main_content align_self_center">
          <span className="page_heading">Photo <b>Gallery</b></span>
          <div className="row_alignment wrap four" style={{ marginTop: 24 }}>
            {galleryImages.map((img) => (
              <div key={img.src} style={{ padding: 8 }}>
                <div className="gallery_item_container column_alignment">
                  <img src={img.src} alt={img.caption} style={{ width: '100%', height: 250, objectFit: 'cover', borderRadius: '6px 6px 0 0' }} />
                  <span>{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
