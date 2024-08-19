/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SpaceMono: "Space Mono",
      },
      colors: {
        verydarkcyan: "#00494d",
        tealcyan: "#26c0ab",
        lighttealcyan: "#5edaca",
        darkgrayishcyan: "#5e7a7d",
        grayishcyan: "#7f9c9f",
        lightgrayishcyan: "#c5e4e7",
        verylightcyan: "#f4fafa",
      },
    },
  },
  plugins: [],
};
