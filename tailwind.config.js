/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        palette1: {
          bg: '#FFFACD',
          card: 'rgba(255, 250, 205, 0.65)',
          accent: '#B81104',
          accentLight: '#e03023',
          text: '#2D1B19',
          border: 'rgba(184, 17, 4, 0.18)',
        },
        palette2: {
          bg: '#09080E',
          card: 'rgba(18, 16, 26, 0.70)',
          accent: '#FE6807',
          accentLight: '#ff8533',
          text: '#F3F4F6',
          border: 'rgba(254, 104, 7, 0.20)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        heading: ['Outfit', 'Space Grotesk', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(254, 104, 7, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 30px rgba(254, 104, 7, 0.8))' },
        }
      },
      boxShadow: {
        'glass-sm': '0 4px 16px 0 rgba(0, 0, 0, 0.25)',
        'glass-md': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-lg': '0 12px 48px 0 rgba(0, 0, 0, 0.50)',
        'glow-orange': '0 0 25px -5px rgba(254, 104, 7, 0.5)',
        'glow-red': '0 0 25px -5px rgba(184, 17, 4, 0.5)',
      }
    },
  },
  plugins: [],
}
