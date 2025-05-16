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
        'accent-500':'#202020a0',
        'accent-600':'#121212d0',
        'accent-700':'#00c900',
        'accent-800':'#00c900',
        'accent-900':'#00c900',
        'transparent':'#00000000',
        'transparent-100':'#00000020',
        'navbar':'#121212f0',
        'navbar-100':'#121212d0',
        'navbar-200':'#222222d0',
        'navbar-300':'#303030a0',
        'navbar-400':'#424242a0',
        'navbar-text':'#ffffff',
        'navbar-text-100':'#cccccc',
        'navbar-text-200':'#aaaaaa',
        'navbar-text-300':'#888888',
        'text':'#ffffff',
        'text-100':'#cccccc',
        'text-200':'#aaaaaa',
        'text-300':'#888888',
      }
    },
  },
  plugins: [],
}