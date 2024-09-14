/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: "#010502", // Add custom background color
        textbg:"#f7f4f4",
      },
    },
  },
  plugins: [],
}
