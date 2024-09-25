/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    fontFamily : {
      'primary' : ['Montserrat', 'sans'],
      'secondary' : ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        transparent : 'transparent',
        'primaryColor' : '#E8E9F5',
        'secondaryColor' : '#10111C',
        'tertierColor' : '#5869FF',
        'accentColor' : '#0218E3',
        'alert' : '#950000',
        'secondary-45' : 'rgba(16, 17, 28, .45)',
        'secondary-75' : 'rgba(16, 17, 28, .75)',
        'secondary-25' : 'rgba(16, 17, 28, .25)',
        'inputBg' : '#D8D9E8',
        'text-light' : '#E8E9F5',
        'text-dark' : '#10111C',
        'text-placeholder' : '#555555',
        'link' : '#273DFF'
      },
      spacing : {
        'mobileNav' : 'calc(42px + 32px)',
        'desktopNav' : 'calc(28px + 48px)'
      },
      backgroundImage : {
        'auth-bg' : "url('.././public/bg-img.webp')",
        'skeleton' : "linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))"
      },
      backgroundSize : {
        'shine' : '40px 100%'
      },
      backgroundPosition: {
        'offsetShine' : 'left -90px top 0'
      },
      animation: {
        'skeleton-loading' : 'shine 1s ease infinite'
      },
      keyframes: {
        shine: {
          'to' : { backgroundPosition: 'right -90px top 0'}
        }
      }
    },
  },
  plugins: [],
};
