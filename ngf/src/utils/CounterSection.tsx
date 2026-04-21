"use client";

import { useEffect, useRef, useState } from "react";

// ─── Stats data ───────────────────────────────────────────────
const STATS = [
  { icon: "fa-trophy",         value: 275,  label: "AWARDS"          },
  { icon: "fa-graduation-cap", value: 3282, label: "STUDENTS"        },
  { icon: "fa-university",     value: 120,  label: "YEARS OF HISTORY" },
];

// ─── Count-up hook ────────────────────────────────────────────
function useCountUp(target: number, duration = 3000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let t0: number | null = null;
    const step = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ─── Single stat block ────────────────────────────────────────
function StatItem({ icon, value, label }: { icon: string; value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(value, 3000, started);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="cs-stat" ref={ref}>
      <i className={`fa ${icon} cs-stat__icon`} aria-hidden="true" />
      <p className="cs-stat__figure">{count}</p>
      <span className="cs-stat__label">{label}</span>
    </div>
  );
}

// ─── CounterSection ───────────────────────────────────────────
export default function CounterSection() {
  return (
    <section id="mt_fun">
      <div className="container">
        <div className="cs-card">

          {/* ── Left panel ──────────────────────────────────── */}
          <div className="cs-card__left">
            <div className="inner-heading cs-card__heading">
              <h3>Why Choose Us</h3>
              <h2>New Green Field School ?</h2>
            </div>
            <div className="cs-stats-row">
              {STATS.map((s) => (
                <StatItem key={s.label} icon={s.icon} value={s.value} label={s.label} />
              ))}
            </div>
          </div>

          {/* ── Right panel — photo + play button ───────────── */}
          <div className="cs-card__right">
            <h2 className="cs-tour__title">Take a tour</h2>
            <a
              href="https://www.youtube.com/channel/UCoJu3eCj9veE-M4na90Wjaw"
              target="_blank"
              rel="noopener noreferrer"
              className="cs-tour__link"
              aria-label="Take a tour on YouTube"
            >
              <div className="cs-play">
                <button type="button" className="cs-play__btn" aria-label="Play">
                  <i className="fa fa-play" aria-hidden="true" />
                </button>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
