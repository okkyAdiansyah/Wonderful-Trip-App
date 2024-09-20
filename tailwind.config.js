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
    colors : {
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
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing : {
        'mobileNav' : 'calc(42px + 32px)',
        'desktopNav' : 'calc(28px + 48px)'
      },
      backgroundImage : {
        'auth-bg' : "url('.././public/bg-img.webp')"
      }
    },
  },
  plugins: [],
};
