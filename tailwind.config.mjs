/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        pixel:
          '"Micro 5", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      fontSize: {
        13: ['0.8125rem', '1.2rem'],
        15: ['0.9375rem', '1.375rem'],
      },
    },
  },
  plugins: [],
};
