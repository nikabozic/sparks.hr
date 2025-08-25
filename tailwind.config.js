/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6", // luksuzni ljubičasti
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95"
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glass: "0 10px 40px rgba(139,92,246,0.25)"
      },
      backgroundImage: {
        luxe: "radial-gradient(1200px 600px at 10% -10%, rgba(255,255,255,0.12), transparent), radial-gradient(900px 500px at 110% 10%, rgba(167,139,250,0.25), transparent), linear-gradient(135deg,#0f1021,#1b1035,#090a1a)"
      }
    }
  },
  plugins: []
};
