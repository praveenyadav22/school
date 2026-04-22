"use client";

import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const AccessibilityDrawer: React.FC<Props> = ({ isOpen, onClose, children }) => {
  return (
    <div className={`acc-drawer${isOpen ? " open" : ""}`} role="dialog" aria-modal="true" aria-label="Accessibility Settings">
      <div className="acc-drawer__header">
        <h2>Accessibility Settings</h2>
        <button className="acc-drawer__close" onClick={onClose} aria-label="Close accessibility panel">
          ✕
        </button>
      </div>
      <div className="acc-drawer__body">
        {children}
      </div>
    </div>
  );
};

export default AccessibilityDrawer;
