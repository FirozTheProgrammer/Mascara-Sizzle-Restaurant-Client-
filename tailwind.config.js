/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/home/chef-service.webp')",
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
