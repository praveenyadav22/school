'use client';

import { noticeItems } from '@/lib/navigation';

export default function MarqueeNotice() {
  const items = [...noticeItems, ...noticeItems, ...noticeItems, ...noticeItems];

  return (
    <div className="column_alignment marquee_container" style={{ background: 'var(--colorAccent)' }}>
      <div className="marquee_content_wrapper">
        {items.map((item, idx) => (
          <div key={idx} className="row_alignment marquee_content">
            <span className="notice_strip">{item}</span>
            <span className="notice_strip">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}
