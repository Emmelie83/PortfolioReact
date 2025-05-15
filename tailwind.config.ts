import { Config } from "tailwindcss";

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#10101A',
        text: '#E0E0E0',
        accent: '#ff9ae0',
      },
      fontFamily: {
        sans: ['"PT Sans"', 'sans-serif'],
        heading: ['"Exo 2"', 'sans-serif'],
      },
      boxShadow: {
        profile: '0 10px 30px rgba(0, 0, 0, 0.6)',
      },
      borderRadius: {
        md: '6px',
      },
    },
  },
  plugins: [],
}

export default config;