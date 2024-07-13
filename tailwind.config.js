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
      primary: "#CCF5AC",
      secondary: "#3845AF",

      button: "#CE5E68",

      white: "#F0F0F0",
      grey: "#484848",
      black: "#343536",

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
      gridTemplateColumns: {
        25: "repeat(25, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
