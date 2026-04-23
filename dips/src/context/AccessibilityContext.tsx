"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface AccessibilityContextType {
  fontSize: number;
  setFontSize: (size: number) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType>({
  fontSize: 100,
  setFontSize: () => {},
});

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState(100);
  return (
    <AccessibilityContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  return useContext(AccessibilityContext);
}
