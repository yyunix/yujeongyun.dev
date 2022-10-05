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
      colors: {
        accent: "var(--color-accent)",
        faint: "var(--color-faint)",
        fore: {
          primary: "var(--color-fore-primary)",
          secondary: "var(--color-fore-secondary)",
          subtle: "var(--color-fore-subtle)",
        },
        back: {
          primary: "var(--color-back-primary)",
          secondary: "var(--color-back-secondary)",
        },
      },
      typography: () => ({
        base: { css: disabledCss },
        sm: { css: disabledCss },
      }),
      gridTemplateColumns: {
        "project-grid": "repeat(auto-fill,minmax(280px,1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
