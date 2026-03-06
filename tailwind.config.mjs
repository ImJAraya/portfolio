/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#f5f1e8',
        ink: '#1c1a18',
        muted: '#5b5854',
        accent: '#0f766e',
        highlight: '#b45309',
        card: '#fffcf7'
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif']
      },
      boxShadow: {
        editorial: '0 10px 35px rgba(28, 26, 24, 0.08)'
      }
    }
  },
  plugins: []
};
