"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="acc-trigger-btn"
        onClick={() => setIsOpen(true)}
        aria-label="Accessibility options"
        title="Accessibility"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="4" r="2" fill="white" />
          <path d="M20 9H4M12 9V20M9 20l3-2.5L15 20" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className={`acc-overlay${isOpen ? " open" : ""}`} onClick={() => setIsOpen(false)} />

      <div className={`acc-drawer${isOpen ? " open" : ""}`} role="dialog" aria-label="Accessibility Settings">
        <div className="acc-drawer__header">
          <h3>Accessibility</h3>
          <button onClick={() => setIsOpen(false)} aria-label="Close"><X size={18} /></button>
        </div>
        <div className="acc-drawer__body">
          <div className="acc-section">
            <h4>Text Size</h4>
            <div className="acc-btn-group">
              <button onClick={() => { document.documentElement.style.fontSize = "13px"; }}>A–</button>
              <button onClick={() => { document.documentElement.style.fontSize = ""; }}>A</button>
              <button onClick={() => { document.documentElement.style.fontSize = "20px"; }}>A+</button>
            </div>
          </div>
          <div className="acc-section">
            <h4>Display</h4>
            <div className="acc-toggle-row">
              <label htmlFor="acc-contrast">High Contrast</label>
              <input type="checkbox" id="acc-contrast"
                onChange={(e) => document.body.classList.toggle("acc-high-contrast", e.target.checked)} />
            </div>
            <div className="acc-toggle-row">
              <label htmlFor="acc-gray">Grayscale</label>
              <input type="checkbox" id="acc-gray"
                onChange={(e) => document.body.classList.toggle("acc-grayscale", e.target.checked)} />
            </div>
          </div>
          <div className="acc-section">
            <h4>Reset</h4>
            <div className="acc-btn-group">
              <button onClick={() => {
                document.documentElement.style.fontSize = "";
                document.body.classList.remove("acc-high-contrast", "acc-grayscale");
                const hc = document.getElementById("acc-contrast") as HTMLInputElement;
                const gr = document.getElementById("acc-gray") as HTMLInputElement;
                if (hc) hc.checked = false;
                if (gr) gr.checked = false;
              }}>Reset All</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
