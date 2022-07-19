/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
            "hero-500": "url('/images/hero-unit-bg_500.jpg')",
            "hero-800": "url('/images/hero-unit-bg_800.jpg')",
            "hero-1200": "url('/images/hero-unit-bg_1200.jpg')",
            "hero-1600": "url('/images/hero-unit-bg_1600.jpg')",
            "hero-1800": "url('/images/hero-unit-bg_1800.jpg')",
        }
    },
  },
  plugins: [],
}
