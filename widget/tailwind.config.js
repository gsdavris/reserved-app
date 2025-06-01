/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Τα αρχεία σου (React components)
  ],
  theme: {
    extend: {
      // Εδώ μπορείς να προσθέσεις custom colors, fonts, spacing κλπ
      colors: {
        primary: "#0d6efd", // Παράδειγμα: δικό σου primary
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};


