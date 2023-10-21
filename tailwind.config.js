/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      gray: {
        100: "rgb(249, 250, 251)",
        200: "rgb(239, 243, 244)",
        400: "rgb(83, 100, 113)"
      },
      black: {
        400: "#1a1a1a",
      },
      white: {
        400: "#fff"
      }
    },
    extend: {},
  },
  plugins: [],
}
