/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Philosopher':'Philosopher, sans serif',
        'Poppins':'Poppins, sans serif',
      },
      fontSize:{
        'sl':'150px'
      },
    },
  },
  plugins: [],
}
