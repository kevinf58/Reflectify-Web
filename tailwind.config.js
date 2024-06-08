export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    borderWidth: {
      default: "2px",
      large: "10px",
    },
    colors: {
      primary: "#E0707A",
      secondary1: "#FEC006",
      secondary2: "#FF9A2A",

      button: "#CE5E68",

      white: "#F5F5F5",
      lightgrey: "#ECECEC",
      grey: "#D9D9D9",
      darkgrey: "#939393",
      black: "#484848",
      black2: "#000000",

      success: "#42E226",
      warning: "#FEC006",
      error: "#FB3A3A",
    },
    fontFamily: {
      header: ["Roboto", "sans-serif"],
      body: ["Arial", "sans-serif"],
    },
    extend: {
      width: {
        160: "40rem",
      },
      height: {
        0.5: "0.125rem",
        88: "22rem",
        104: "26rem",
        136: "34rem",
      },
      gridTemplateRows: {
        9: "repeat(9, minmax(0, 1fr))",
      },
      gridRowStart: {
        9: "9",
      },
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
      },
      gridColumnStart: {
        14: "14",
      },
      margin: {
        0.5: "0.125rem",
      },
      boxShadow: {
        "recipe-card": "2px 3px 2px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
