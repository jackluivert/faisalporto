/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#ffffff', // Clean white background
          100: '#f8fafc',
          200: '#f1f5f9',
          400: '#cbd5e1',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        azure: {
          light: '#e0f2fe',
          lighter: '#f0f9ff',
          DEFAULT: '#0284c7', // Deep azure primary
          dark: '#0369a1',
          darker: '#075985',
        },
        navy: {
          light: '#dbeafe',
          DEFAULT: '#1e3a8a', // Tailored navy secondary
          dark: '#1e3a8a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.04)',
        'glass-hover': '0 10px 40px rgba(2, 132, 199, 0.1)',
      }
    },
  },
  plugins: [],
}
