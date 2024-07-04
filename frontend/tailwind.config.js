/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage:{
      'signup': "url('https://tailwindcss.com/_next/static/media/7-dark@tinypng.22f91747.png')"
    }
  },
  plugins: [],
}