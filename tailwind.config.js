module.exports = {
  mode: 'jit',
  content: [
    'src/pages/**/*.{js,ts,jsx,tsx}',
    'src/components/**/*.{js,ts,jsx,tsx}',
    'app/**/*.{js,ts,jsx,tsx}',
  ],
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  theme: {
    fontFamily: {
      sans: 'Poppins, sans-serif',
    },
    extend: {
      colors: {
        'modal-bg': 'rgba(0, 0, 0, 0.5)',
        'background-bg': '#111519',
        'background-fg': '#212529',
        'text-title': '#e9ecef',
        'text-body': '#ced4da',
        red: {
          500: '#f7326e',
        },
        green: {
          500: '#3cb86c',
        },
        blue: {
          500: '#1f7ff0',
        },
      },
    },
    screens: {
      tb: '990px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
