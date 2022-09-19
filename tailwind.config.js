/** @type {import('tailwindcss').Config} */
const disabledCss = {
  "code::before": false,
  "code::after": false,
  "blockquote p:first-of-type::before": false,
  "blockquote p:last-of-type::after": false,
  pre: false,
  code: false,
  "pre code": false,
  "code::before": false,
  "code::after": false,
};

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  purge: {
    enabled: true,
    content: ["./**/*.tsx"],
    options: {
      safelist: ["dark"], //specific classes
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", ...fontFamily.sans],
      mono: ["Fira Code", ...fontFamily.mono],
    },
    extend: {
      typography: (theme) => ({
        base: { css: disabledCss },
        sm: { css: disabledCss },
        dark: {
          css: {
            color: theme("colors.gray.400"),
            h1: { color: theme("colors.gray.200") },
            h2: { color: theme("colors.gray.200") },
            a: { color: theme("colors.sky.400") },
          },
        },
        light: {
          css: {
            color: theme("colors.gray.800"),
            a: { color: theme("colors.sky.500") },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
