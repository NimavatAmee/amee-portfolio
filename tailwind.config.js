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
        // Exact Jaydeep Agravat Portfolio Color Palette
        warm: {
          bg: '#131210',       // --bg: warm charcoal dark
          surface: '#1c1a17',  // --surface: warm dark surface
          line: '#2e2b26',     // --line: fine dark border line
          text: '#f0ece4',     // --text: cream white
          muted: '#a39d92',    // --muted: warm stone gray
          accent: '#f08a5d',   // --accent: apricot coral
          accentDark: '#b4441f',
          accentText: '#1a120d',
          hover: '#24221e',
        },
        dark: {
          950: '#131210',
          900: '#1c1a17',
          850: '#22201d',
          800: '#2e2b26',
          700: '#3d3a34',
          600: '#524e47',
        },
        accent: {
          coral: '#f08a5d',
          terracotta: '#b4441f',
          peach: '#f7a37e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Instrument Serif"', '"Iowan Old Style"', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
