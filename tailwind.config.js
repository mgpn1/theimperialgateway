/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hyatt: {
          navy: '#002A5C',
          blue: '#0077CC',
          lightBlue: '#E5F2FA',
          gold: '#D4A556',
          gray: '#F2F2F2',
          darkGray: '#333333',
          border: '#E0E0E0'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'hyatt': '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};