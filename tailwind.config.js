/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        updown: {
          "0%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        updown: "updown 2s ease-in-out infinite alternate-reverse both",
      },
    },
  },
  plugins: [],
};
