/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'menuBackground' : "url('https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
        'heroBackground' : "url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
        'giftCardBg' : "url('https://assets-global.website-files.com/5d03b4e130118314af624b20/62683001aedd80475a0b4dfb_Gifts_Img_1%20(1).jpg')"
      },
      colors: {
        'freshly-white': '#fef9eb',
        'freshly-white-2': '#fffdf7',
      },
      height: {
        '128': '32rem',
        '1440': '90rem',
      },
      width: {
        '128': '32rem',
        '1440': '90rem',
      },
    },
  },
  plugins: [],
  extend: {
    backgroundImage: {
      'hero': "url('https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
    },
  },
}
