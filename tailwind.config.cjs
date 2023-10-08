/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
    },
    screens: {
      md: { min: "640px", max: "1023px" },
      sm: { max: "640px" },
      lg: { min: "1690px" },
    },
  },
  darkMode: "media",
  plugins: [require("@tailwindcss/typography")],
};
