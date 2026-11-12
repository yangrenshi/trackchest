import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["Geist Mono", "JetBrains Mono", "ui-monospace", "monospace"],
        logo: ['"Chakra Petch"', "sans-serif"],
      },
      colors: {
        base: "#121212",
        card: "#1d1d1d",
        "card-hover": "#242424",
        chip: "#2b2b2b",
        dim: "#9a9a9a",
        line: "#2e2e2e",
        accent: "#ffc93c",
        "accent-hover": "#ffd766",
      },
    },
  },
  plugins: [],
};
export default config;
