/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#fffbf7',
          surface: '#fff5ee',
          card: '#ffffff',
        },
        border: {
          DEFAULT: '#e8ddd4',
        },
        accent: {
          sakura: '#c2185b',
          'sakura-light': '#f48fb1',
          indigo: '#2d4a7a',
          gold: '#d4a574',
        },
        text: {
          primary: '#2d2d3a',
          secondary: '#6b7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif JP"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
