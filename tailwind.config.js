/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'void': '#05070a',
        'panel': '#0a0f14',
        'panel-raised': 'rgba(15, 22, 28, 0.75)',
        'cyan-bright': '#5fd8e0',
        'cyan-mid': '#4db9c4',
        'mint': '#a9e9d5',
        'term-green': '#3ddc84',
        'term-amber': '#e0a458',
        'term-red': '#ff5c5c',
        'glass-border': 'rgba(95, 216, 224, 0.18)',
        'glass-border-hover': 'rgba(95, 216, 224, 0.55)',
        'grid-line': 'rgba(95, 216, 224, 0.06)',
        'text-primary': '#e8f4f5',
        'text-secondary': '#7a9499',
        'text-mono-dim': '#4a6266',
        // Keep legacy aliases for transition
        dark: {
          bg: '#05070a',
          card: '#0a0f14',
          border: 'rgba(95, 216, 224, 0.18)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'gradient': 'gradient 3s ease infinite',
        'cursor-blink': 'cursorBlink 1s step-end infinite',
        'scanline': 'scanline 8s linear infinite',
        'flicker-in': 'flickerIn 0.8s ease-out forwards',
        'trace-pulse': 'tracePulse 2s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        flickerIn: {
          '0%': { opacity: '0', filter: 'brightness(0)' },
          '10%': { opacity: '0.8', filter: 'brightness(2)' },
          '20%': { opacity: '0.4', filter: 'brightness(0.5)' },
          '40%': { opacity: '0.9', filter: 'brightness(1.5)' },
          '60%': { opacity: '0.6', filter: 'brightness(0.8)' },
          '100%': { opacity: '1', filter: 'brightness(1)' },
        },
        tracePulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(95, 216, 224, 0.2), 0 0 20px rgba(95, 216, 224, 0.1)' },
          '50%': { boxShadow: '0 0 10px rgba(95, 216, 224, 0.4), 0 0 40px rgba(95, 216, 224, 0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
