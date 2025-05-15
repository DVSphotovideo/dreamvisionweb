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
        'accent-100':'#00c900',
        'accent-200':'#00c900',
        'accent-300':'#00c900',
        'accent-400':'#00c900',
        'accent-500':'#00a900',
        'accent-600':'#00c900',
        'accent-700':'#00c900',
        'accent-800':'#00c900',
        'accent-900':'#00c900',
      }
    },
  },
  plugins: [],
}