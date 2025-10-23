const { Raleway } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackk: "#2A222D",
        primary: "#6B62AC",
        secondary: "#D0DE55",
        whitee: "#E4EAEE",
      },
      fontFamily: {
        Courier: ["Courier Prime"],
        Main: ["PIGARNOS_NEUE", "sans-serif"],
        Secondary: ["Montserrat", "sans-serif"],
        Raleway : ["Raleway",  ],
      },
      
      //   backgroundImage: {
      //     bg: "url('./assets/banner.png')",
      //     trex: "url('./assets/main-character1.png')",
      //     cloud: "url('./assets/cloud.png')",
      //     land1: "url('./assets/land1.png')",
      //     land2: "url('./assets/land2.png')",
      //     land3: "url('./assets/land3.png')",
      //     cactus: "url('./assets/cactus1.png')",
      //     tripleCactus: "url('./assets/cactus2.png')",
      //     user: "url('./assets/user.png')",
      //     wBg: "url('./assets/whatsappbg.png')",
      //     homePage: "url(./assets/hero/hero.jpeg)",
      //     deadDino: "url('./assets/main-character4.png')",
      //     Dino: "url('./assets/main-character3.png')",
      //   },
      //   keyframes: {
      //     run: {
      //       "0%": {
      //         "background-image": "url('./assets/main-character1.png')",
      //       },
      //       "33%": {
      //         "background-image": "url('./assets/main-character2.png')",
      //       },
      //       "66%": {
      //         "background-image": "url('./assets/main-character3.png')",
      //       },
      //       "100%": {
      //         "background-image": "url('./assets/main-character1.png')",
      //       },
      //     },
      //   },

      //   animation: {
      //     run: "run 0.3s forwards steps(9)",
      //   },
    },
  },
  plugins: [],
};
