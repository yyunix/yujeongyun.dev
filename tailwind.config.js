/** @type {import('tailwindcss').Config} */
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
