/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "pale-blue":"hsl(221,100%,96%)",
        "slate-blue":{
          "dark":"hsl(241,81%,54%)",
          "light":"hsl(252,100%,67%)"
        },
        "violet-blue":"hsl(256,72%,46%,1)",
        "dark-gray-blue":"hsl(224,30%,27%)",
        "memory":"hsl(39, 100%, 56%)",
        "verbal":"hsl(166, 100%, 37%)",
        "visual":"hsl(234, 85%, 45%)",
        "light-red":{
          default:"hsl(0,100%,67%)",
          light:"hsla(0,100%,67%,.1)",
          memory:"hsla(39, 100%, 56%,.1)",
          visual:"hsla(234, 85%, 45%,.1)",
          verbal:"hsla(166, 100%, 37%,.1)"
        }
      },
      fontFamily: {
        hanken: ["Hanken Grotesk", "sans-serif"],
      },
      fontWeight: {
        hankenRegular: 500,
        hankenBold: 700,
        hankenExtraBold: 700,
      },
    },
  },
  plugins: [],
}

