/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        parchment:
          'url(https://provenire.s3.amazonaws.com/vintage-grunge-paper-background_1048-10911.avif)',
      },
      boxShadow: {
        'inner-blood': 'inset 0px 0px 20px 10px crimson',
        'inner-donum': 'inset 0px 0px 20px 10px slateblue',
      },
    },
    fontFamily: {
      sans: ['var(--font-josefin-sans)', 'sans-serif'],
      serif: ['var(--font-cardo)', 'serif'],
    }
  },
  plugins: [require('@tailwindcss/typography')],
};
