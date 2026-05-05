import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#030d27',
          900: '#051539',
          800: '#0a2056',
          700: '#0e2b73',
        },
        brand: {
          600: '#1036C1',
          500: '#1A47ED',
          400: '#3F6FEB',
          100: '#E6EAF4',
          50: '#F1F4FB',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
