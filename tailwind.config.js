/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      primaryColor:"#0067ff",
      yellowColor:"#FEB60D",
      irisBlueColor:"#01B5C5",
      headingColor:"#181A1E",
      textColor:"#4E545F",
      purpleColor:'#553a99'
      }
    },
  },
  plugins: [],
}

