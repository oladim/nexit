/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // scan all React component files
    "./public/index.html",        // if using CRA or Vite
  ],
  theme: {
     extend: {
          fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
          },
        },
  },
  plugins: [],
}

