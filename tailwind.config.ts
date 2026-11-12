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
        display: ['"Chakra Petch"', "sans-serif"],
        tech: ['"Rajdhani"', "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        void: {
          950: "#07090e",
          900: "#0b0f19",
          850: "#101626",
          800: "#151d32",
        },
        amber: {
          350: "#ffd147",
          450: "#f7b018",
          550: "#d97706",
        },
      },
    },
  },
  plugins: [],
};
export default config;
