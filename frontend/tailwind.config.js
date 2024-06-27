/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": "url(/home-bg.webp)"
      },
      

      fontFamily: {
        "hero": ["Crimson Text", "serif"]
      },
      fontSize: {
        "hero-md": "7.5rem",
        "hero-sm": "5rem"
      }
    },
  },
  plugins: [],
}
