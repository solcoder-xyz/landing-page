/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Solana brand colors
        'solana-purple': '#9945FF',
        'solana-green': '#14F195',
        'deep-space': '#0E0E0E',

        // Supporting colors
        'cyan-info': '#38BDF8',
        'amber-warn': '#FBBF24',
        'pink-error': '#FB7185',

        // Text colors
        'slate-primary': '#E6FFFA',
        'slate-secondary': '#94A3B8',
        'slate-tertiary': '#64748B',
      },
      fontFamily: {
        mono: ['"Fira Code"', '"JetBrains Mono"', '"Courier Prime"', 'monospace'],
        sans: ['"Space Grotesk"', '"Inter"', 'sans-serif'],
        retro: ['"Press Start 2P"', '"VT323"', 'monospace'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(45deg, #9945FF 0%, #14F195 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url('/noise-texture.png')",
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'scanline': 'scanline 8s linear infinite',
        'flicker': 'flicker 0.15s infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'type': 'type 2s steps(40) 1s forwards',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.98' },
        },
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(20, 241, 149, 0.3)',
            filter: 'brightness(1)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(20, 241, 149, 0.6)',
            filter: 'brightness(1.1)',
          },
        },
        'type': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      boxShadow: {
        'terminal-glow': '0 0 30px rgba(20, 241, 149, 0.3)',
        'purple-glow': '0 0 30px rgba(153, 69, 255, 0.3)',
      },
    },
  },
  plugins: [],
};
