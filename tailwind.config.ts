import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        matzu: {
          50: '#F8FAFC',  // Cinza muito claro para separação de seções
          100: '#F1F5F9', // Backgrounds de cards
          600: '#2563EB', // Azul Tech (Botões, CTAs e Highlights)
          700: '#1D4ED8', // Azul Tech Hover
          800: '#1E293B', // Grafite (Títulos principais)
          900: '#0F172A', // Azul Navy/Escuro (Fundos dark e Header)
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;