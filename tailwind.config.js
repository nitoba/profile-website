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