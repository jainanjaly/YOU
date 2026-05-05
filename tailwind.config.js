/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0d0d0d',
        card: '#141414',
        ink: '#f0f0f0',
        muted: '#888888',
        pink: {
          soft: '#f4a7c3',
          DEFAULT: '#e879a0',
          glow: 'rgba(232, 121, 160, 0.35)',
        },
        violet: {
          soft: '#a855f7',
          DEFAULT: '#7c3aed',
          glow: 'rgba(124, 58, 237, 0.35)',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Lora"', 'serif'],
        sans: ['Inter', '"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        ambient: {
          '0%': { backgroundPosition: '0% 0%, 100% 100%' },
          '50%': { backgroundPosition: '100% 50%, 0% 50%' },
          '100%': { backgroundPosition: '0% 0%, 100% 100%' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' },
        },
      },
      animation: {
        bob: 'bob 4s ease-in-out infinite',
        bounceSoft: 'bounceSoft 2s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        ambient: 'ambient 24s ease-in-out infinite',
        blink: 'blink 1s steps(1) infinite',
      },
    },
  },
  plugins: [],
};
