/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/navBar/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "t-light": "#E0FFFF",
        "t-dark": "#D7CFC3",
        "t-n-light": "#8cb0a6",
        "t-n-c-light": "#8c9cb0",
        "t-n-dark": "#B0B0B0",
        "t-n-c-dark": "#D8D8D8",
        "nav-grad-light": "#485b56",
        "nav-grad-dark": "#9a6a52",
        "t-n-hover-light": "#aeb08c",
        "t-n-c-hover-light": "#9a8cb0",
        "t-n-hover-dark": "#ad7a6d",
        "t-n-c-hover-dark": "#A1B2B4",
        "skills-bg-light": "#BFA2D9",
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
    },
  },
  plugins: [],
};
