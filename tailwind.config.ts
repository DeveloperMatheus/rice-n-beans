import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", "[class~='dark']"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        modal: {
          "0%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.2s ease-in-out",
        modal: "modal 0.2s ease-in-out",
      },
    },
    content: {
      checkIcon: 'url("/icon/check.svg")',
      arrowIcon: 'url("/icon/arrow.svg")',
    },
  },
  plugins: [],
};
export default config;
