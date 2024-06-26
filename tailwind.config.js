/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    borderWidth: {
      default: "2px",
    },
    screens: {
      "2xl": { max: "1536px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
    },
    colors: {
      primary: "#69F5A1",
      secondary1: "#FEC006",
      secondary2: "#FF9A2A",

      button: "#CE5E68",

      white: "#F5F5F5",
      lightgrey: "#ECECEC",
      grey: "#DADADA",
      darkgrey: "#939393",
      black: "#484848",

      success: "#42E226",
      warning: "#FEC006",
      error: "#FB3A3A",
    },
    fontFamily: {
      header: ["inter", "Roboto", "serif"],
      body: ["Arial", "serif"],
      editorParagraph: ["Inria Serif", "serif"],
    },
    extend: {
      keyframes: {
        blink: {
          "0%": { opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        blink: "blink 1s infinite steps(1, end)",
      },
    },
  },
  plugins: [],
};
