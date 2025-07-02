/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,vue,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#F3743D',
        defaultGray: '#939393',
      },
    },
  },
  plugins: [],
}
