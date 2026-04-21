"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { accessibilityService, AccessibilityState } from "@/components/Accessibility/AccessibilityService";

// ── Context type ──────────────────────────────────────────────
interface AccessibilityContextType extends AccessibilityState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toggleSetting: (key: keyof AccessibilityState, value: any) => void;
  toggleResetSetting: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

// ── Provider ──────────────────────────────────────────────────
export const AccessibilityProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<AccessibilityState>(accessibilityService.getSettings());

  useEffect(() => {
    const unsubscribe = accessibilityService.onUpdate((settings) => {
      setState({ ...settings });
    });
    const cleanupScreenReader = accessibilityService.setupScreenReaderListeners();
    return () => {
      unsubscribe();
      cleanupScreenReader();
    };
  }, []);

  const toggleSetting = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (key: keyof AccessibilityState, value: any) => {
      let resolvedValue = value;
      if (typeof value === "string" && (value as string).startsWith("level")) {
        const num = parseInt(value.replace("level", ""), 10);
        resolvedValue = isNaN(num) ? 0 : num;
      }
      accessibilityService.toggleSetting(
        key,
        resolvedValue as AccessibilityState[keyof AccessibilityState]
      );
    },
    []
  );

  const toggleResetSetting = useCallback(() => {
    const resetState: AccessibilityState = {
      fontSize: 0,
      lineHeight: 0,
      letterSpacing: 0,
      highlightLinks: false,
      dyslexiaFont: false,
      darkMode: false,
      invertColors: false,
      hideImages: false,
      screenReader: false,
      largeCursor: false,
    };
    Object.entries(resetState).forEach(([key, val]) => {
      accessibilityService.toggleSetting(
        key as keyof AccessibilityState,
        val as AccessibilityState[keyof AccessibilityState]
      );
    });
  }, []);

  return (
    <AccessibilityContext.Provider value={{ ...state, toggleSetting, toggleResetSetting }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

// ── Hook ──────────────────────────────────────────────────────
export const useAccessibility = (): AccessibilityContextType => {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) throw new Error("useAccessibility must be used inside AccessibilityProvider");
  return ctx;
};
