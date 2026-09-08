/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#08090b',
          card: '#0f1319',
          surface: '#141a24',
          border: '#1f2937',
          neon: '#00f2fe',
          cyan: '#00e5ff',
          teal: '#0df',
          gold: '#e5c07b',
          goldLight: '#f3d99d',
          accent: '#00f0ff',
          accentHover: '#33f3ff'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 20px -3px rgba(0, 242, 254, 0.4)',
        'neon-strong': '0 0 35px 2px rgba(0, 242, 254, 0.65)',
        'gold': '0 0 20px -3px rgba(229, 192, 123, 0.35)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
