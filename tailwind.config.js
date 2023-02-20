/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer': "url('../src/images/footer.png')",
        'timeline': "url('../src/images/timeline-graphic.png",
        'header': "url('../src/images/graphic-one.png')"
      }
    },
  },
  plugins: [],
}
