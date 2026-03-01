import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{json,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        "panel-a": "var(--panel-a)",
        "panel-b": "var(--panel-b)"
      },
      boxShadow: {
        card: "0 18px 45px -30px rgba(26, 24, 20, 0.45)",
        glow: "0 16px 70px -38px rgba(214, 112, 36, 0.6)"
      },
      maxWidth: {
        prosewide: "74rem"
      },
      animation: {
        "fade-up": "fade-up 700ms ease-out both"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
