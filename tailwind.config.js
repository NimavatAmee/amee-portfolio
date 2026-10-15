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
        // Exact Yash Kava Portfolio Design Tokens
        paper: '#f7f5f0',        // Warm tactile paper
        ink: {
          DEFAULT: '#1b1a17',    // Deep espresso dark
          soft: '#3f3c36',       // Medium dark for body
          muted: '#6d6a62',      // Secondary taupe gray
        },
        line: '#e6e1d6',         // Hairline border
        card: '#fffdf9',         // Warm white card surface
        
        // Green Accent Family
        green: {
          DEFAULT: '#1f6146',    // Forest pine green
          deep: '#173d2c',       // Dark forest
          bg: '#e7eee8',         // Gentle sage / mint tint
          line: '#d5e0d8',       // Sage border
          mute: '#5b6a60',       // Muted sage
        },

        // Sand Family
        sand: {
          DEFAULT: '#f2ebdc',    // Warm desert sand
          line: '#e5dbc7',
          ink: '#4a3a1d',
          mute: '#6d6250',
        },

        // Clay Family
        clay: {
          DEFAULT: '#ece6e2',    // Warm clay
          line: '#ddd4ce',
          ink: '#43352f',
          mute: '#6a5c55',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
