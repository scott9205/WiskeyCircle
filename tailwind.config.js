/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          start: '#912d00',
          mid: '#bb4b00',
          end: '#bb7900',
        },
        surface: {
          DEFAULT: '#000000',
          elevated: '#0a0807',
          card: 'rgba(217, 217, 217, 0.04)',
        },
        ink: {
          primary: '#ffffff',
          secondary: '#c3c3c3',
          muted: '#737373',
          faded: '#606060',
          strike: '#ab2f2f',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        script: ['Parisienne', 'cursive'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(90deg, #912d00 0%, #bb7900 100%)',
        'gradient-brand-soft': 'linear-gradient(90deg, #912d00 0%, #000 100%)',
        'gradient-card-fade':
          'linear-gradient(16.7deg, #000 16.26%, rgba(30,30,30,0) 70.67%)',
        'gradient-hero-overlay':
          'linear-gradient(53.4deg, rgba(0,0,0,0.55) 41%, rgba(102,102,102,0.2) 98.6%)',
      },
      boxShadow: {
        glow: '0 0 52px -10px #a83500',
        cta: '-24px 1px 52px -10px #a83500',
      },
      borderRadius: {
        lg: '0.625rem',
        xl: '1.25rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '3rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
          '2xl': '1280px',
        },
      },
      letterSpacing: {
        wider: '0.12em',
      },
    },
  },
  plugins: [],
}
