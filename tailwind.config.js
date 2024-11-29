  /** @type {import('tailwindcss').Config} */
  const flowbite = require("flowbite-react/tailwind");
  
  module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js",
      flowbite.content(),
    ],
    theme: {
      screens: {
        lap:{
          max: "1340px",
        },
        labMd:{
          max: "1080px",
        },
        tablet:{
          max: "950px",
        },
        tabletXs:{
          max: "780px",
        },
        mobile:{
          max: "520px",
        },
      },
      extend: {
        fontFamily: {
          sans: [
            'Arial',
            '-apple-system',
            'BlinkMacSystemFont',
            'Roboto',
            'Segoe UI',
            'Helvetica',
            'Arial',
            'sans-serif',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol'
          ],
          times: [
            'Times New Roman', 
            'Georgia', 
            'Times', 
            'serif', 
            'Apple Color Emoji', 
            'Segoe UI Emoji', 
            'Segoe UI Symbol'
          ],
          udemy: [
            "Udemy Sans","SF Pro Text","-apple-system,BlinkMacSystemFont","Roboto","Segoe UI","Helvetica,Arial,sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"
          ]
        },
        colors:{
          first: "#2d2f31",
          second: "#929496",
          third: "#6a6f73",
          fourth: "#c0c4fc",
          fifth: "#eceb98",
          sixth:"#1e6055",
          seventh:"#562ac5",
          eighth: "#5022c3",
          nineth: "#F69C08",
        },
        backgroundColor:{
          first: "#2d2f31",
          second: "#f8f9fb",
          third: "#f7f9fa",
          fourth: "#5022c3",
          fifth: "#eceb98",
          sixth: "#3b198f",
          seventh: "#ebebeb",
          eighth:"#a435f0",
        },
        backgroundImage:{
          
        },
        aspectRatio: {
          first: '1 / 0.5625',
        },

      },
    },
    plugins: [require('flowbite/plugin'),
      flowbite.plugin(),

    ],
  };