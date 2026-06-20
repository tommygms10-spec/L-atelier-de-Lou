import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F5F2",
        "rose-poudre": "#D8A2A8",
        nude: "#E8D5C4",
        taupe: "#C8B8A6",
        "gris-chaud": "#6B6B6B",
        "noir-elegant": "#2A2A2A",
        "dore-subtil": "#D4B483",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(42, 42, 42, 0.15)",
        glow: "0 0 40px rgba(212, 180, 131, 0.25)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(2deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
