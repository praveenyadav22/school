"use client";

import { useState } from "react";
import AccessibilityDrawer from "./AccessibilityDrawer";
import AccessibilityPanel from "./AccessibilityPanel";

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ── Trigger button — fixed right side, below topsocialicon ── */}
      <div className="accessibilityToggleWrap shadow border">
        <button
          className="accessibilityToggleBtn"
          onClick={() => setIsOpen(true)}
          aria-label="Open Accessibility Settings"
          aria-expanded={isOpen}
          title="Accessibility Settings"
        >
          {/* Wheelchair / person icon — matching remixicon style used site-wide */}
          <i className="ri-user-heart-line" />
        </button>
      </div>

      {/* ── Backdrop ── */}
      {isOpen && (
        <div
          className="drawer-overlay open"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Slide-in drawer ── */}
      <AccessibilityDrawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <AccessibilityPanel />
      </AccessibilityDrawer>
    </>
  );
};

export default AccessibilityWidget;
