/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        Lightpink: "hsl(275, 100%, 97%)",
        Grayishpurple: "hsl(292, 16%, 49%)",
        Darkpurple: "hsl(292, 42%, 14%)",
      },
      fontFamily: {
        WorkSans: "Work Sans",
      },
      backgroundImage: {
        desktoppattern: "url('./assets/images/background-pattern-desktop.svg')",
        mobilepattern: "url('./assets/images/background-pattern-mobile.svg')",
      },
      screens: {
        sm: "500px",
      },
    },
  },
  plugins: [],
};
