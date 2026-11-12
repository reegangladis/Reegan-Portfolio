/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#07090E',
        surface: {
          DEFAULT: '#0D111A',
          elevated: '#151B28',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(0, 240, 255, 0.35)',
        },
        primary: {
          DEFAULT: '#00F0FF',
          glow: 'rgba(0, 240, 255, 0.25)',
          muted: 'rgba(0, 240, 255, 0.12)',
        },
        secondary: {
          DEFAULT: '#8B5CF6',
          glow: 'rgba(139, 92, 246, 0.25)',
          muted: 'rgba(139, 92, 246, 0.12)',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
        card: {
          bg: '#0D111A',
          border: '#1E2638',
          hover: '#151B28',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-primary': '0 0 25px -5px rgba(0, 240, 255, 0.3)',
        'glow-secondary': '0 0 25px -5px rgba(139, 92, 246, 0.3)',
        'glow-mixed': '0 0 35px -5px rgba(0, 240, 255, 0.2), 0 0 20px -5px rgba(139, 92, 246, 0.2)',
        'subtle-card': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

