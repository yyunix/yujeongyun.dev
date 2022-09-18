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
    extend: {
      typography: (theme) => ({
        base: { css: disabledCss },
        sm: { css: disabledCss },
        dark: {
          css: {
            color: theme("colors.gray.400"),
            h2: { color: theme("colors.gray.200") },
            a: { color: theme("colors.blue.400") },
          },
        },
        light: {
          css: {
            color: theme("colors.gray.800"),
            a: { color: theme("colors.blue.600") },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
