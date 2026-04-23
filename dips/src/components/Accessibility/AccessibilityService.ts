// Accessibility service utilities
export const AccessibilityService = {
  increaseFontSize: () => {
    const current = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    document.documentElement.style.fontSize = Math.min(current + 2, 24) + "px";
  },
  decreaseFontSize: () => {
    const current = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    document.documentElement.style.fontSize = Math.max(current - 2, 12) + "px";
  },
  resetFontSize: () => {
    document.documentElement.style.fontSize = "";
  },
};
