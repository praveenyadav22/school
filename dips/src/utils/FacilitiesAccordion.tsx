"use client";

import { useState } from "react";
import Link from "next/link";

const PANELS = [
  {
    id: "sports",
    title: "Sports",
    content: "Extending education beyond the confines of the classrooms, the school aims at cultivating values of team spirit, discipline and physical development through various sports activities.",
    href: "/facilities/sports",
  },
  {
    id: "transport",
    title: "School Transport",
    content: "The school has its own fleet of air conditioned luxury coaches with trained attendants and experienced drivers equipped with mobile phones. The school provides transport facility for students from Rohini, Ashok Vihar, Shalimar Bagh and surrounding areas.",
    href: "/facilities/school-transport",
  },
  {
    id: "remedial",
    title: "Remedial & Enrichment Classes",
    content: "The school takes initiative in organizing remedial classes in order to achieve expected competencies in core academic skills such as literacy and numeracy. Remedial instructions can help struggling learners shore up their basic skills and reduce the gap between what a student knows and what he's expected to know.",
    href: "/facilities/remedial-enrichment",
  },
];

export default function FacilitiesAccordion() {
  const [open, setOpen] = useState<string>("sports");

  return (
    <section>
      <h3><i className="fa fa-question-circle" /> FACILITIES <span>AT DE INDIAN PUBLIC SCHOOL</span></h3>
      <div className="facilitiesPanel">
        <div className="panel-group" id="accordion6">
          {PANELS.map((panel) => (
            <div className="panel panel-default" key={panel.id}>
              <div className="panel-heading">
                <h6 className="panel-title">
                  <button
                    style={{ background: "none", border: "none", padding: 0, cursor: "pointer", width: "100%", textAlign: "left" }}
                    onClick={() => setOpen(open === panel.id ? "" : panel.id)}
                  >
                    {panel.title}
                  </button>
                </h6>
              </div>
              {open === panel.id && (
                <div className="panel-collapse">
                  <div className="panel-body">
                    {panel.content}{" "}
                    <Link href={panel.href}><span className="fa fa-arrow-circle-right" /></Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <Link href="/facilities/sports" className="c-button c-button-radius c-button-themered has-margin-top-15">
          Read All
        </Link>
      </div>
    </section>
  );
}
