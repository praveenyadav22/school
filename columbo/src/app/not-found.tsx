import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      className="column_alignment align_center base_margin"
      style={{ minHeight: '70vh', textAlign: 'center', padding: '60px 20px' }}
    >
      <span style={{ fontSize: 120, lineHeight: 1 }}>😔</span>
      <h1
        style={{
          fontSize: 80,
          fontWeight: 900,
          color: 'var(--colorAccent)',
          margin: '16px 0 0',
          fontFamily: 'var(--heading-font)',
        }}
      >
        404
      </h1>
      <h2 style={{ fontSize: 28, color: '#333', margin: '8px 0' }}>Page Not Found</h2>
      <p style={{ color: '#666', maxWidth: 420, lineHeight: 1.7, margin: '8px auto 32px' }}>
        The page you are looking for might have been moved, renamed, or doesn&apos;t exist.
      </p>
      <div className="row_alignment" style={{ gap: 12 }}>
        <Link href="/" className="accent_button">
          Go to Homepage
        </Link>
        <Link href="/support/contact" className="bordered_button" style={{ padding: '10px 20px', fontSize: 14 }}>
          Contact Us
        </Link>
      </div>
    </div>
  );
}
