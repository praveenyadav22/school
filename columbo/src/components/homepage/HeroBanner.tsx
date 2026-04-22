'use client';

export default function HeroBanner() {
  return (
    <div className="header_container" style={{ height: '100vh' }}>
      <video
        autoPlay
        playsInline
        loop
        muted
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src="/video/school-video_1.mp4" type="video/mp4" />
      </video>
      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '30%',
          background: 'linear-gradient(to top, rgba(255,255,255,0.5), transparent)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
