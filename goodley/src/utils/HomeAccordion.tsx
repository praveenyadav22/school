"use client";

import { useState } from "react";

const ACCORDION_ITEMS = [
  {
    id: "accordian1",
    title: "Interactive Library",
    img: "/images/generic/home-accordion01.jpg",
    content: `"The library is not only a fun place to go, it is a place to connect, share, grow & help others expand their horizons." – Lynne T`,
  },
  {
    id: "accordian2",
    title: "Smart Classroom",
    img: "/images/generic/home-accordion2.jpg",
    content: "Great teachers are nimble, observant, and responsive, always keeping an open mind about how to best engage their students through interactive teaching in specially designed smart classrooms and get them excited about learning.",
  },
  {
    id: "accordian3",
    title: "Language Lab",
    img: "/images/generic/home-accordion03.jpg",
    content: "English Language Lab not only enhances vocabulary, but also focuses on the finer shades of language like grammar, pronunciation, intonation, modulation, phonetics and syllabic division. Learners learn without any fear or embarrassment which helps build their confidence and proficiency in the language.",
  },
  {
    id: "accordian4",
    title: "Life @ GPS",
    img: "/images/generic/home-accordion04.jpg",
    content: "Childhood is a sensitive phase of one's life. The resources, and nurturing one receives in the school has a profound impact on their blossoming into adulthood. Each child has its own personality, strengths, and intrinsic talents.",
  },
];

export default function HomeAccordion() {
  const [activeId, setActiveId] = useState<string>("accordian1");

  return (
    <div className="theme__accordian googleyAccordian theme__accordian-withArrow">
      <div className="panel-group" id="rules-regulation" role="tablist" aria-multiselectable="true">
        {ACCORDION_ITEMS.map((item) => {
          const isActive = activeId === item.id;
          return (
            <div key={item.id} className={`panel panel-default${isActive ? " active" : ""}`}>
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    role="button"
                    aria-expanded={isActive}
                    className={isActive ? "" : "collapsed"}
                    onClick={() => setActiveId(isActive ? "" : item.id)}
                    style={{ cursor: "pointer", display: "block" }}
                  >
                    <span>{item.title}</span>
                    <span className="icon" />
                  </a>
                </h4>
              </div>
              {isActive && (
                <div id={item.id} className="panel-collapse collapse in" aria-expanded="true">
                  <div className="panel-body">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="floatleft"
                      src={item.img}
                      alt={item.title}
                      width={100}
                      height={75}
                    />
                    {item.content}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
