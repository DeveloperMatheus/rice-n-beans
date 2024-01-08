import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", "[class~='dark']"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    content: {
      checkIcon: 'url("/icon/check.svg")',
      circleIcon: 'url("/icon/circle.svg")',
    },
  },
  plugins: [],
};
export default config;
