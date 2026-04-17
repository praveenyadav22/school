"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { accessibilityService, AccessibilityState } from "@/components/Accessibility/AccessibilityService";

// ── Context type ──────────────────────────────────────────────
interface AccessibilityContextType extends AccessibilityState {
  toggleSetting: (
    key: keyof AccessibilityState,
    value: AccessibilityState[keyof AccessibilityState]
  ) => void;
  toggleResetSetting: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

// ── Provider ──────────────────────────────────────────────────
export const AccessibilityProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<AccessibilityState>(accessibilityService.getSettings());

  useEffect(() => {
    // Subscribe to service updates
    const unsubscribe = accessibilityService.onUpdate((settings) => {
      setState({ ...settings });
    });

    // Setup screen reader listeners
    const cleanupScreenReader = accessibilityService.setupScreenReaderListeners();

    return () => {
      unsubscribe();
      cleanupScreenReader();
    };
  }, []);

  const toggleSetting = useCallback(
    (
      key: keyof AccessibilityState,
      value: AccessibilityState[keyof AccessibilityState]
    ) => {
      // Map level strings to numeric values for step controls
      let resolvedValue: AccessibilityState[keyof AccessibilityState] = value;

      if (typeof value === "string" && value.startsWith("level")) {
        const num = parseInt(value.replace("level", ""), 10);
        resolvedValue = isNaN(num) ? 0 : num as any;
      }

      accessibilityService.toggleSetting(key, resolvedValue);
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
    <AccessibilityContext.Provider
      value={{ ...state, toggleSetting, toggleResetSetting }}
    >
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
