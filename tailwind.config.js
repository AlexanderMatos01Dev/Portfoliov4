/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        script: ['BrushScriptOpti-Regular', 'cursive'],
      },
      colors: {
        primary: '#52b9d9',
      },
    },
  },
  plugins: [],
}