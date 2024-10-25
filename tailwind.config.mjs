/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cream: "#F6F5F1",
        black: "#353534",
      },
      fontFamily: {
        display: ["Cormorant", "serif"],
        body: ["Lato", "sans-serif"],
      },
      fontSize: {
        "fl-xs": "var(--step--2)",
        "fl-s": "var(--step--1)",
        "fl-base": "var(--step-0)",
        "fl-lg": "var(--step-1)",
        "fl-xl": "var(--step-2)",
        "fl-2xl": "var(--step-3)",
        "fl-3xl": "var(--step-4)",
        "fl-4xl": "var(--step-5)",
      },
    },
  },
  plugins: [],
};
