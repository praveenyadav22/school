import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = { title: "Best Practices" };

const PRACTICES = [
  {
    icon: "🔬",
    title: "Project-Based Learning (PBL)",
    desc: "Students work on real-world problems and present their solutions, developing research, teamwork, and communication skills in an authentic context.",
  },
  {
    icon: "🤖",
    title: "STEM / STEAM Integration",
    desc: "Science, Technology, Engineering, Arts, and Mathematics are integrated across subjects through hands-on activities, experiments, and cross-disciplinary projects.",
  },
  {
    icon: "💻",
    title: "Digital Literacy Program",
    desc: "Students are equipped with 21st-century digital skills — coding, data literacy, online safety, and responsible digital citizenship — through our technology-rich learning environment.",
  },
  {
    icon: "🌿",
    title: "Eco-Clubs and Sustainability",
    desc: "Students actively participate in environmental programs including plantation drives, waste management, energy conservation, and climate change awareness campaigns.",
  },
  {
    icon: "📖",
    title: "Phad se Padh Reading Initiative",
    desc: "Our unique community reading program uses visual storytelling inspired by Rajasthani Phad art to cultivate a love for reading and connect students to India's rich cultural heritage.",
  },
  {
    icon: "🤝",
    title: "Community Service",
    desc: "Regular outreach programs connect students with the community — developing empathy, social responsibility, and an understanding of their role as global citizens.",
  },
  {
    icon: "🎓",
    title: "Mentorship Program",
    desc: "Senior students mentor younger peers, fostering leadership, empathy, and a collaborative school culture where every student feels supported.",
  },
  {
    icon: "🧘",
    title: "Mindfulness and Wellbeing",
    desc: "Mindfulness sessions, yoga, and social-emotional learning are integrated into the school day — building resilience, focus, and emotional intelligence.",
  },
];

export default function InnovationPage() {
  return (
    <InnerPage title="Best Practices">
      <div className="normalContent">
        <h2>Best Practices at Modern Public School</h2>
        <p>
          At MPS Shalimar Bagh, we are committed to going beyond the textbook. Our best
          practices reflect our belief that education must be relevant, experiential, and
          transformative — preparing students not just for examinations, but for life.
        </p>
        <p>
          These initiatives are woven into the fabric of daily school life and have been
          recognised as models of innovative, student-centred education.
        </p>

        <div className="row" style={{ marginTop: "30px" }}>
          {PRACTICES.map((p, i) => (
            <div className="col-lg-6 col-md-6" key={i} style={{ marginBottom: "24px" }}>
              <div style={{
                background: "#f4f6f9",
                borderRadius: "8px",
                padding: "24px 20px",
                borderLeft: "4px solid #4dc3cf",
                height: "100%",
              }}>
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{p.icon}</div>
                <h4 style={{ color: "#003255", marginBottom: "10px", fontSize: "16px", fontWeight: 600 }}>
                  {p.title}
                </h4>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </InnerPage>
  );
}
