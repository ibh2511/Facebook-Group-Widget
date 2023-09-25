/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#31363B",
        secondary: "#EEEEEE",
      },
      fontFamily: {
        monospace: ["Cousine", "monospace"],
      },
      borderColor: {
        primary: "var(--border-color)",
      },
    },
  },

  plugins: [],
}
