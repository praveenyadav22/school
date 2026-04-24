"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { accessibilityService, AccessibilityState } from "@/components/Accessibility/AccessibilityService";

interface AccessibilityContextType extends AccessibilityState {
  toggleSetting: (
    key: keyof AccessibilityState,
    value: AccessibilityState[keyof AccessibilityState]
  ) => void;
  toggleResetSetting: () => void;
}

const defaultState: AccessibilityState = {
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

const AccessibilityContext = createContext<AccessibilityContextType>({
  ...defaultState,
  toggleSetting: () => {},
  toggleResetSetting: () => {},
});

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AccessibilityState>(defaultState);

  useEffect(() => {
    // Subscribe to service updates
    const unsubscribe = accessibilityService.onUpdate((newState) => {
      setState({ ...newState });
    });
    // Setup screen reader if needed
    const cleanupScreenReader = accessibilityService.setupScreenReaderListeners();
    return () => {
      unsubscribe();
      cleanupScreenReader();
    };
  }, []);

  const toggleSetting = (
    key: keyof AccessibilityState,
    value: AccessibilityState[keyof AccessibilityState]
  ) => {
    accessibilityService.toggleSetting(key, value);
  };

  const toggleResetSetting = () => {
    const resetState: AccessibilityState = { ...defaultState };
    Object.keys(resetState).forEach((key) => {
      accessibilityService.toggleSetting(
        key as keyof AccessibilityState,
        resetState[key as keyof AccessibilityState]
      );
    });
    setState({ ...defaultState });
  };

  return (
    <AccessibilityContext.Provider value={{ ...state, toggleSetting, toggleResetSetting }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  return useContext(AccessibilityContext);
}
