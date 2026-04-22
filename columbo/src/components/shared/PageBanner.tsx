interface PageBannerProps {
  title: string;
  backgroundImage?: string;
}

export default function PageBanner({
  title,
  backgroundImage = '/images/generic/About us page banner.png',
}: PageBannerProps) {
  return (
    <div className="banner_wrapper row_alignment align_center">
      <img src={backgroundImage} alt={title} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(113,17,35,0.85), rgba(113,17,35,0.4))',
          zIndex: 1,
        }}
      />
      <span style={{ position: 'relative', zIndex: 2 }}>{title}</span>
    </div>
  );
}
