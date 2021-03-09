/* eslint-disable no-unused-vars */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        main: "#269DF8",
        surface: "#eff6fc",
        dark: "#232B3E",
        logo: "#0990f7",
        hover: "#078ff7",
        active: "#11151E",
        NavDark: "#1A202E",
        hoverDark: "#171c28",
        profileDark: "#11151E",
      },
      fontFamily: {
        body: ["ubuntu"],
      },
      colors: {
        main: "#269DF8",
      },
      borderColor: {
        main: "#269df8",
        line: "#078ff7",
        surface: "#eff6fc",
      },
      gridTemplateRows: {
        main: "4.5em auto 3em",
      },
      gridTemplateColumns: {
        main: "20% auto 5%",
      },
      maxHeight: {
        s: "90vh",
      },
      inset: (theme, { negative }) => ({
        auto: "auto",
        ...theme("spacing"),
        ...negative(theme("spacing")),
        "2/4": "43%",
        "1/4": "27%",
        "3/4": "30%",
        "1/3": "35%",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
