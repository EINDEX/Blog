/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    screens: {
      md: { max: "850px" },
      sm: { max: "640px" },
      lg: { min: "1690px" },
    },
  },
  plugins: [],
};
