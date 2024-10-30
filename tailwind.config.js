/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "t-light": "#E0FFFF",
        "t-dark": "#D7CFC3",

        "t-n-light": " #8cb0a6",
        "t-n-c-light": " #8c9cb0",

        "t-n-dark": "#B0B0B0",
        "t-n-c-dark": "#D8D8D8",

        "nav-grad-light": "#485b56",
        "nav-grad-dark": "#9a6a52",

        "t-n-hover-light": "#aeb08c",
        "t-n-c-hover-light": "#9a8cb0",

        "t-n-hover-dark": "#ad7a6d",
        "t-n-c-hover-dark": "#A1B2B4",

        "skills-bg-light": "#BFA2D9",
        // "skills-bg-n-light": "#A8D5BA",
        "skills-bg-n-light": "#94ffed",

        "skills-bg-dark": "#4B5563",
        "skills-bg-n-dark": "#45280d",

        "send-bg-light": "#7A4C9C",
        "send-bg-dark": "#A65E2E",

        "skill-t-light": "#FFFFFF",
        "skill-t-dark": "#bfbdbd",

        "banner-bg-light": "#75697d",
        "banner-bg-dark": "#1C1C1C",
      },
      backgroundImage: {
        // "grad-light": "linear-gradient(135deg, #D6AEDD, #A27DC8, #E1B7E2)",
        // "grad-dark": "linear-gradient(135deg, #3E2A7E, #7B4B9A, #C57EAE)",

        // "nav-grad-light": "linear-gradient(135deg, #5E0F61, #65237A, #0D0D0D)",

        "hero-bg": "linear-gradient(to right, #ff7e5f, #feb47b)",
        "skills-bg": "linear-gradient(to right, #6a11cb, #2575fc)",
        "projects-bg": "linear-gradient(to right, #43cea2, #185a9d)",
        "contact-bg": "linear-gradient(to right, #ff512f, #dd2476)",

        // "shared-bg": "linear-gradient(to right,  #65237A, #000000) !important",
        // "dark-shared-bg":
        //   "linear-gradient(to right, #D08E6D,#2D2D2D) !important",
      },
    },
  },

  plugins: [],
};
