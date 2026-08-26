/**
 * Theme config — programmatic access to color tokens
 * Used when CSS classes aren't sufficient (e.g., Framer Motion, charts)
 */
export const themeColors = {
  brand: {
    green900: "#0F3D2E",
    green700: "#1B4D3E",
    green500: "#2E7D5B",
    green400: "#3D9970",
    green300: "#5BB88A",
    gold500: "#F2A93B",
    gold600: "#D9922E",
    gold700: "#C9861A",
  },
  cream: {
    50: "#FAF7F0",
    100: "#F5F0E3",
  },
  neutral: {
    900: "#1C231F",
    500: "#6B7268",
    300: "#B0B5AD",
  },
  partner: {
    navy: "#1E2A5E",
    skyblue: "#4FA8DC",
  },
} as const;
