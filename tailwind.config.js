/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js},", "index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        "2xl": "2px 5px 10px 0px rgba(0,0,0,0.2)",
      },
      screens: {
        md: "941px",
      },
    },
  },
  plugins: [],
};
