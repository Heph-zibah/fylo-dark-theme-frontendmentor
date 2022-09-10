/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      openSans: ['Open Sans', 'san-serif'],
      raleway: ['Raleway', 'sans-serif']
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        white:' hsl(0, 0%, 100%)',
        darkBlueIntro : 'hsl(217, 28%, 15%)',
        darkBlueMain: 'hsl(218, 28%, 13%)',
        darkBlueFooter: 'hsl(216, 53%, 9%)',
        darkBlueTestimonials:' hsl(219, 30%, 18%)',
         cyan: 'hsl(176, 68%, 64%)',
        blue: 'hsl(198, 60%, 50%)',
        lightRedError: 'hsl(0, 100%, 63%)'
      }
    },
  },
  plugins: [],
}
