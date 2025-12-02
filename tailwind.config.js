/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Courier New"', 'Courier', 'monospace'],
        serif: ['"Crimson Text"', 'serif'],
        hand: ['"Permanent Marker"', 'cursive'],
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'paper': '#fdfdfd',
        'brand-red': '#cc0000',
      }
    },
  },
  plugins: [],
}