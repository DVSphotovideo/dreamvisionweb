/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-meniu':'#BAA333',
        'text-meniu':'#00A333',
        'text-meniu-100':'#77c977',
        'text-meniu-200':'#77c977',
        'text-meniu-600':'#77c977',
        'accent-meniu':'#00c900',
      }
    },
  },
  plugins: [],
}