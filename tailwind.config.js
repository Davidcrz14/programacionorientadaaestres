/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'circuit-pattern': "url('/poe.svg')",
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      gradientColorStops: {
        'blue-400': '#60a5fa',
        'purple-500': '#8b5cf6',
        'purple-600': '#7c3aed',
        'pink-500': '#ec4899',
      },
    },
  },
  plugins: [],
}

