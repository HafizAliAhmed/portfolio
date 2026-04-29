import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'var(--bg)',
          subtle: 'var(--bg-subtle)',
          card: 'var(--bg-card)',
          elevated: 'var(--bg-elevated)',
        },
        border: {
          DEFAULT: 'var(--border)',
          strong: 'var(--border-strong)',
          accent: 'var(--border-accent)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          faint: 'var(--text-faint)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          soft: 'var(--accent-soft)',
          glow: 'var(--accent-glow)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
      },
      maxWidth: {
        'container': '1200px',
        'prose-blog': '720px',
      },
      animation: {
        'reveal': 'reveal 0.7s ease-out forwards',
        'pulse-ring': 'pulse-ring 2.4s ease-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
