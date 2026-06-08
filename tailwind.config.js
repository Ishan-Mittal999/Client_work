/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#1B120D',
        coffee: '#3E2723',
        cream: '#F8F3ED',
        beige: '#D7CCC8',
        gold: {
          DEFAULT: '#D4AF37',
          50: '#FBF6E5',
          100: '#F6EBC1',
          200: '#EDD884',
          300: '#E4C547',
          400: '#D4AF37',
          500: '#A88B27',
          600: '#7C661D',
        },
        // Gen Z accent palette
        bubblegum: '#FF6B9D',
        cyber: '#00F0FF',
        sunset: '#FF6B35',
        neon: '#39FF14',
        lavender: '#B388FF',
        coral: '#FF8A65',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      backgroundImage: {
        'gold-gradient':
          'linear-gradient(135deg, #F6EBC1 0%, #D4AF37 50%, #7C661D 100%)',
        'espresso-gradient':
          'linear-gradient(180deg, #1B120D 0%, #3E2723 100%)',
        'cream-gradient':
          'linear-gradient(180deg, #F8F3ED 0%, #D7CCC8 100%)',
        'radial-glow':
          'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.18), transparent 60%)',
        'vibe-gradient':
          'linear-gradient(135deg, #D4AF37, #FF6B9D, #B388FF, #00F0FF)',
        'noise':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glow: '0 0 40px rgba(212, 175, 55, 0.25)',
        'glow-lg': '0 0 80px rgba(212, 175, 55, 0.35)',
        'glow-pink': '0 0 40px rgba(255, 107, 157, 0.25)',
        'glow-purple': '0 0 40px rgba(179, 136, 255, 0.25)',
        'glow-cyan': '0 0 40px rgba(0, 240, 255, 0.25)',
        'glow-multi': '0 0 60px rgba(212, 175, 55, 0.2), 0 0 120px rgba(255, 107, 157, 0.1)',
        soft: '0 10px 40px -10px rgba(0,0,0,0.35)',
        'soft-lg': '0 30px 80px -20px rgba(0,0,0,0.5)',
        'inner-glow': 'inset 0 0 30px rgba(212, 175, 55, 0.08)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(3deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(-2deg)' },
        },
        steam: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.7' },
          '100%': { transform: 'translateY(-60px) scale(1.4)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '75%': { transform: 'rotate(5deg)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.4), 0 0 60px rgba(212, 175, 55, 0.1)' },
        },
        'gradient-rotate': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        blob: {
          '0%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        steam: 'steam 3s ease-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
        wiggle: 'wiggle 0.5s ease-in-out',
        'bounce-in': 'bounceIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-rotate': 'gradient-rotate 6s ease infinite',
        'gradient-rotate-fast': 'gradient-x 3s ease infinite',
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        blob: 'blob 8s ease-in-out infinite',
        'text-shimmer': 'text-shimmer 4s linear infinite',
        'text-shimmer-fast': 'text-shimmer 2s linear infinite',
        'spin-slow': 'spin-slow 12s linear infinite',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'bounce-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
