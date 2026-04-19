import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#1a6b2e",
          light: "#2a9444",
          bright: "#3dbd5c",
        },
        dark: {
          DEFAULT: "#ffffff",
          2: "#f8faf9",
          3: "#f1f4f2",
        },
        surface: {
          DEFAULT: "#ffffff",
          2: "#f4f7f5",
        },
        text: {
          DEFAULT: "#111a12",
          muted: "#556656",
          dim: "#889989",
        },
      },
      keyframes: {
        glitch: {
          "0%, 80%, 100%": { clipPath: "none", transform: "translate(0)", opacity: "0" },
          "82%": { clipPath: "inset(15% 0 55% 0)", transform: "translate(-3px, 1px)", opacity: "0.8" },
          "85%": { clipPath: "inset(50% 0 15% 0)", transform: "translate(3px, -1px)", opacity: "0.8" },
          "88%": { clipPath: "none", transform: "translate(0)", opacity: "0" },
        },
        scanline: {
          "0%": { top: "-4px", opacity: "1" },
          "100%": { top: "100%", opacity: "0.3" },
        },
        borderPulse: {
          "0%, 100%": { boxShadow: "0 0 0px rgba(61,189,92,0)", borderColor: "rgba(61,189,92,0.15)" },
          "50%": { boxShadow: "0 0 22px rgba(61,189,92,0.5), inset 0 0 12px rgba(61,189,92,0.08)", borderColor: "rgba(61,189,92,0.7)" },
        },
        stripeSweep: {
          "0%": { left: "-120%", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { left: "160%", opacity: "0.8" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        glitch: "glitch 5s infinite",
        scanline: "scanline 1.5s linear",
        borderPulse: "borderPulse 4s ease-in-out infinite",
        stripeSweep: "stripeSweep 0.6s ease forwards",
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
