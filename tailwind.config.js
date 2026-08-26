/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // 30% — Brand Blue
        primary: {
          DEFAULT: "#087CFF",
          dark: "#005FD4",
          light: "#EAF3FF",
        },

        // 60% — Clean White
        background: "#FFFFFF",
        surface: "#FFFFFF",

        // 10% — Deep Black
        text: {
          DEFAULT: "#111111",
          secondary: "#5F6368",
          inverse: "#FFFFFF",
        },

        // Supporting colors
        blue: {
          50: "#F2F7FF",
          100: "#EAF3FF",
          200: "#CFE3FF",
          300: "#A8CCFF",
          400: "#5FA5FF",
          500: "#087CFF",
          600: "#006FE6",
          700: "#005FD4",
          800: "#004AA8",
          900: "#003574",
        },

        border: "#E5E7EB",

        // Small accent — use sparingly
        accent: "#F4C542",

        error: "#B93737",
        success: "#198754",
      },

      fontFamily: {
        // heading: ["Libre Caslon Text", "serif"],
        heading: ["Patrick Hand", "serif"],
        sans: ["Manrope", "sans-serif"],
      },

      borderRadius: {
        DEFAULT: "10px",
        card: "16px",
        pill: "9999px",
      },

      boxShadow: {
        soft: "0 10px 30px rgba(8, 124, 255, 0.08)",
        card: "0 8px 24px rgba(17, 17, 17, 0.06)",
      },

      fontSize: {
        "hero-desktop": ["64px", { lineHeight: "1.1" }],
        "hero-mobile": ["44px", { lineHeight: "1.1" }],
      },
    },
  },

  plugins: [],
};