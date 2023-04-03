/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        // 'sm': {'min': '640px', 'max': '767px'},
        // 'md': {'min': '768px', 'max': '1023px'},
        // 'lg': {'min': '1024px', 'max': '1279px'},
        // 'xl': {'min': '1280px'},
      },
      backgroundImage : {
        'white-shadow' : 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255, 255, 255, 1) 95%)'
      },
    },
  },
  plugins: [],
}
