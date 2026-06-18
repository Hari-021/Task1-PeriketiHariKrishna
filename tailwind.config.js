/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#050816',
        primary: '#00E5FF',
        secondary: '#7B61FF',
        accent: '#00FFB3',
        panel: 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(0, 229, 255, 0.25)',
        violet: '0 0 44px rgba(123, 97, 255, 0.24)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        scan: 'scan 5s linear infinite',
        pulseGlow: 'pulseGlow 2.8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.72', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.35)' },
        },
      },
    },
  },
  plugins: [],
};
