module.exports = {
  theme: {
    extend: {
      colors: {
        navyblue: {
          DEFAULT: "#16304B",
          50: "#4E8BCB",
          100: "#3E81C6",
          200: "#326DAA",
          300: "#29588A",
          400: "#1F446B",
          500: "#16304B",
          600: "#091420",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Filenames to scan for classes
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html",
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // safelist: [],
    },
  },
};
