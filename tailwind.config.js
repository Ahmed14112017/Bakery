/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors:{
        backgroundcolor:"#cf8f45",
        textcolor:"#fff",
        buttoncolor:"#FDBA10",
        designColor:"#fcc911",
        backgroundcolor2:"#ffd39f"
      }, 
      backgroundImage: {
        'custom-image': "url('/src/assets/MaskGroup-1.png')",
      },
    },
  },
  plugins: [],
}