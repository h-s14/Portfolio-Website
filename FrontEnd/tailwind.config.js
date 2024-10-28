/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "t-light": "#4B2E83",
        "t-dark": "#B0B0B0",

        "t-n-light": "#4B2E83",
        "t-n-dark": "#B0B0B0",

        "t-n-hover-light": "#8A3B8A",
        "t-n-hover-dark": "#C67CC2",
      },
      backgroundImage: {
        "grad-light": "linear-gradient(135deg, #D6AEDD, #A27DC8, #E1B7E2)",
        "grad-dark": "linear-gradient(135deg, #3E2A7E, #7B4B9A, #C57EAE)",

        "nav-grad-light": "linear-gradient(135deg, #C05C94, #F2A6C4, #EAB8E4)",
        "nav-grad-dark": "linear-gradient(135deg,  #5A2D81, #B95C9E, #DA7D9A)",

        "hero-bg": "linear-gradient(to right, #ff7e5f, #feb47b)",
        "skills-bg": "linear-gradient(to right, #6a11cb, #2575fc)",
        "projects-bg": "linear-gradient(to right, #43cea2, #185a9d)",
        "contact-bg": "linear-gradient(to right, #ff512f, #dd2476)",
        "shared-bg":
          "linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b) !important",
        "dark-shared-bg":
          "linear-gradient(to right, #141e30, #243b55) !important",
      },
    },
  },

  plugins: [],
};
