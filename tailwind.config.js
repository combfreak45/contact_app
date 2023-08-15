/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "5A5959",
        orange: "#F6820C",
        yellow: "#FFEAAE",
      },
    },
  },
  plugins: [],
};

