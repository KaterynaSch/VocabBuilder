/** @type {import('tailwindcss').Config} */

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["MacPaw Fixel Display", "sans-serif"],
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1440px",
    },
    container: {
      center: true,
      screens: {
        sm: "288px",
        md: "704px",
        lg: "1240px",
      },
    },
    colors: {
      text: "#121417",
      grayText: "#121417CC",
      lightGray: "#12141780",
      green: "#85AA9F",
      hoverGreen: "#A5C0B8",
      white: "#FCFCFC",
      white1: "#F8F8F8",
      gray: "#12141780",
      red: "#D80027",
      lightGreen: "#3CBF61",
    },
  },
};
export const plugins = [];
