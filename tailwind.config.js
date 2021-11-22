module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        wwg: "#262267",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["'Fira Sans', sans-serif;"],
    },
    borderRadius: {
      full: "1.5rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
