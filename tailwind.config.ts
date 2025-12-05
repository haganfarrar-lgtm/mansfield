import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest': {
          // Rebranding "forest" to be our primary dark slate/charcoal for that "Architectural" feel
          // This keeps the code working (using 'text-forest-900') but changes the visual color dramatically
          50: '#f4f6f7', 100: '#e3e8eb', 200: '#c5d0d6', 300: '#9baeb8',
          400: '#758d9b', 500: '#587181', 600: '#445b69', 700: '#384a55',
          800: '#313e47', 900: '#1f2937', 950: '#111827', // Deep Charcoal/Slate
        },
        'earth': {
          // Rebranding "earth" to be our vibrant accent (Sage/Lime)
          50: '#f2fcf0', 100: '#e1f9db', 200: '#c4f2b8', 300: '#98e683',
          400: '#6bd652', 500: '#46b82e', 600: '#349420', 700: '#2a741d',
          800: '#265c1c', 900: '#214d1b', 950: '#0d2a0a', // Vibrant Fresh Green
        },
        'stone': {
          // Keeping stone as a warm neutral sand/beige to balance the cold slate
          50: '#faf9f6', 100: '#f5f2eb', 200: '#e6dfd1', 300: '#d5c7b0',
          400: '#c2ab8d', 500: '#b0906e', 600: '#947556', 700: '#775d46',
          800: '#614d3d', 900: '#504035', 950: '#2b221c', // Warm Sand
        }
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'], // Technical, modern, distinct
        'body': ['Inter', 'sans-serif'], // Clean, standard modern web
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      boxShadow: {
        'sharp': '4px 4px 0px 0px rgba(0,0,0,0.1)', // Brutalist/Sharp shadow
      }
    },
  },
  plugins: [],
}
export default config
