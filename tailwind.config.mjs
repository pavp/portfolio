/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      maxWidth: {
        container: '1200px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Manrope', 'system-ui', 'sans-serif'],
      },
      spacing: {
        section: '80px',
      },
      borderRadius: {
        btn: '4px',
        card: '8px',
        feature: '12px',
      },
      colors: {
        accent: {
          DEFAULT: 'var(--accent)',
        },
      },
    },
  },
  plugins: [],
};
