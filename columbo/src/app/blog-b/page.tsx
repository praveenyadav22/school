import Breadcrumb from '@/components/shared/Breadcrumb';
import PageBanner from '@/components/shared/PageBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Blog | St. Columbo Public School' };

const posts = [
  { title: "10 Ways to Support Your Child's Learning at Home", category: 'Parenting', date: 'March 10, 2026', image: '/images/generic/spacious_classroom.jpg', excerpt: 'Practical tips for parents to complement classroom learning and build strong study habits at home.' },
  { title: "The Importance of Sports in a Child's Development", category: 'Sports', date: 'February 20, 2026', image: '/images/generic/excellent_sports.jpg', excerpt: 'How physical activity boosts cognitive function, social skills, and emotional resilience in children.' },
  { title: "Preparing for CBSE Board Exams: A Student's Guide", category: 'Academics', date: 'January 15, 2026', image: '/images/generic/state_of_art.jpg', excerpt: 'Expert strategies and time management tips to help Class X students excel in their board examinations.' },
  { title: 'Why Co-Curricular Activities Matter', category: 'Campus Life', date: 'December 5, 2025', image: '/images/generic/modern_science.jpg', excerpt: "Understanding how activities beyond the classroom shape a child's personality and future career prospects." },
];

export default function BlogPage() {
  return (
    <div className="column_alignment base_margin" style={{ background: 'white' }}>
      <PageBanner title="Blog" />
      <Breadcrumb />
      <div className="column_alignment section_wrapper" style={{ background: 'white' }}>
        <div className="column_alignment main_content align_self_center">
          <span className="page_heading">SCPS <b>Blog</b></span>
          <div className="row_alignment wrap two" style={{ marginTop: 32 }}>
            {posts.map((post) => (
              <div key={post.title} style={{ padding: 10 }}>
                <div className="article_list_item_container column_alignment" style={{ margin: 0 }}>
                  <div className="cover_image"><img src={post.image} alt={post.title} /></div>
                  <div style={{ padding: '0 16px 16px' }}>
                    <span style={{ color: 'var(--colorAccent)', fontWeight: 600, fontSize: 12, display: 'block', marginTop: 12 }}>{post.category}</span>
                    <h3 className="article_item_title" style={{ margin: '8px 0', fontSize: 18 }}>{post.title}</h3>
                    <span style={{ fontSize: 12, color: '#888', display: 'block', marginBottom: 8 }}>🗓 {post.date}</span>
                    <p className="article_item_description" style={{ margin: 0 }}>{post.excerpt}</p>
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
