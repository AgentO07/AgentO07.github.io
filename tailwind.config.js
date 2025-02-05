/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f5f7fa',
          100: '#ebeef5',
          200: '#d2dae8',
          300: '#a8baد3',
          400: '#7792bc',
          500: '#526fa5',
          600: '#3d5a8f',
          700: '#334b77',
          800: '#2d4163',
          900: '#2a3a54',
          950: '#1c2536',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [],
};