/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'login-image': "url('/src/assets/images/pordosol.jpg')",
        'register-image': "url('/src/assets/images/nacerdosol.jpg')",
      }),
      boxShadow: {
        'custom': '3px 3px 1px 0px #00000060',
        'custom-hover': '0 30px 60px 0 #9d774f',
        'custom-hover2': '0 30px 60px 0 #4c51df',
      },
      backgroundColor: {
        'card-bg': '#dfd1c34f',
      },
      borderRadius: {
        '4p': '15px',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  plugins: [],
}