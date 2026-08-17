/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071524',
          900: '#0B1F33',
          800: '#122A44',
          700: '#193859',
          600: '#234C75',
        },
        hvac: {
          blue: '#0077D4',
          'blue-dark': '#005DA6',
          'blue-light': '#1D92EC',
          'blue-soft': '#E6F2FF',
        },
        cyan: {
          accent: '#0084E3',
          'accent-hover': '#005DA6',
          'accent-light': '#E6F2FF',
          'accent-glow': 'rgba(0, 132, 227, 0.3)',
        },
        darkText: '#10212F',
        mutedText: '#607080',
        lightBg: '#F4F8FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(11, 31, 51, 0.06)',
        'card-hover': '0 12px 30px -4px rgba(11, 31, 51, 0.12)',
        'glow': '0 0 25px rgba(0, 132, 227, 0.35)',
      }
    },
  },
  plugins: [],
}
