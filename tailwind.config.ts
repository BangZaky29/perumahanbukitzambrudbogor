import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          "green-900": "#0F3D2E",
          "green-700": "#1B4D3E",
          "green-500": "#2E7D5B",
          "green-400": "#3D9970",
          "green-300": "#5BB88A",
          "gold-500": "#F2A93B",
          "gold-600": "#D9922E",
          "gold-700": "#C9861A",
        },
        cream: {
          50: "#FAF7F0",
          100: "#F5F0E3",
        },
        neutral: {
          900: "#1C231F",
          800: "#2A332D",
          700: "#3D4A42",
          500: "#6B7268",
          400: "#8A9187",
          300: "#B0B5AD",
          200: "#D4D7D2",
          100: "#EAECE8",
        },
        partner: {
          navy: "#1E2A5E",
          skyblue: "#4FA8DC",
          "skyblue-light": "#7EC2E8",
        },
      },
      fontFamily: {
        display: ['"Lora"', "Georgia", "serif"],
        body: ['"Plus Jakarta Sans"', '"Inter"', "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: [
          "clamp(2.5rem, 5vw, 4.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        h2: [
          "clamp(2rem, 3.5vw, 2.75rem)",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" },
        ],
        h3: ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.6" }],
        caption: ["0.875rem", { lineHeight: "1.5" }],
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(180deg, rgba(15,61,46,0.85) 0%, rgba(15,61,46,0.4) 50%, rgba(15,61,46,0.9) 100%)",
        "gradient-cta":
          "linear-gradient(135deg, #1B4D3E 0%, #0F3D2E 100%)",
        "gradient-partner":
          "linear-gradient(135deg, #1E2A5E 0%, #2A3A7E 50%, #4FA8DC 100%)",
        "gradient-gold":
          "linear-gradient(135deg, #F2A93B 0%, #C9861A 100%)",
      },
      boxShadow: {
        card: "0 4px 24px rgba(15,61,46,0.08)",
        "card-hover": "0 12px 40px rgba(15,61,46,0.15)",
        badge: "0 4px 16px rgba(242,169,59,0.3)",
        float: "0 8px 32px rgba(15,61,46,0.12)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "float-delayed": "float 3s ease-in-out 1.5s infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-4px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [],
};

export default config;
