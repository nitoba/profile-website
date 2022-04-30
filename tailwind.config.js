module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  theme: {
    extend: {},
    screens: {
      'tb': '990px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      "modal-bg": "rgba(0, 0, 0, 0.5)",
      "background-bg": "var(--background-bg)", 
      "background-fg": "var(--background-fg)", 
      "text-title": "var(--text-title)", 
      "text-body": "var(--text-body)",
      "red": "var(--red)",
      "green": "var(--green)",
      "blue": "var(--blue)",
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}