/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#002776", // Azul Royal
        accent: "#FFDF00", // Amarelo Canário
        brandGreen: "#009B3A", // Verde Bandeira
        marfim: "#FFFFFF",
        slateDark: "#101820",
        
        // New Dark Premium Theme colors
        darkBg: "#0B0F16",
        darkSurface: "#151B26",
        darkCard: "#1A2233",
        darkText: "#F5F7FA",
        darkTextSecondary: "#B8C2D1",
      },
      fontFamily: {
        sans: ["'DM Sans'", "Inter", "sans-serif"],
        sporty: ["'Bebas Neue'", "sans-serif"],
        condensed: ["'Barlow Condensed'", "sans-serif"],
        drama: ["'Playfair Display'", "serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      borderRadius: {
        'large': '2rem',
        'xlarge': '3rem',
      }
    },
  },
  plugins: [],
}
