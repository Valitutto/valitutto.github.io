module.exports = {
  content: ["./*.html", "./src/**/*.html", "./src/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lime: {
          50: "#f7fee7",
          100: "#ecfccb",
          200: "#d9f99d",
          300: "#bef264",
          400: "#a3e635",
          500: "#84cc16",
          600: "#65a30d",
          700: "#4d7c0f",
          800: "#3f6212",
          900: "#365314",
        },
      },
    },
    boxShadow: {
      "offset-white": "5px 5px 0px #fff",
      "offset-black": "5px 5px 0px #000",
    },
  },
  variants: {
    extend: {},
    boxShadow: ["dark"],
  },
  plugins: [],
};
