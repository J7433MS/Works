/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        lightYellow: 'rgb(255, 244, 212)',
        lightBlack: 'rgb(33, 33, 33)',
        lightGray: 'rgb(245, 245, 245)',
        lightRed: 'rgb(250, 65, 71)',
        html: 'rgb(227, 76, 39)',
        css: 'rgb(36, 102, 242)',
        javascript: 'rgb(240, 215, 29)',
        react: 'rgb(97, 219, 250)',
        tailwindCss: 'rgb(76, 169, 181)',
        node: 'rgb(148, 199, 72)',
        mongo: 'rgb(8, 110, 81)',
        vsCode: 'rgb(44, 176, 242)',
        vite: 'rgb(101, 20, 222)',
      },
    },
  },
  plugins: [],
}

