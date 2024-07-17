const plugin = require('tailwindcss/plugin');
export default {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: { 
    colors:{
      'boulder':'#757575',
      // 'pumice':'#d0d1d0',
      'black-white': '#fffffc',
      // 'lavender': '#c497e3',
      'mercury':'#E9E9E9',
      'mediumpurple':'#A445ED',
      // 'perfume':'#e9cefb',
      'wildsand':'#f4f4f4',
      'mineshaft':'#3A3A3A',
      'mineshaftpwdlite':'#2D2D2D',
      'mineshaftpowder':'#1F1F1F',
      'sunsetorange':'#FF5252',
      'black':'#050505',
    },
    screens: {
      'mobile': {'min':'200px','max':'427px'},
      'tablet': {'min':'427px','max':'782px'},
      'laptop': {'min':'782.1px'}
    },
    extend: {
      fontFamily: {
        'inter':["Inter", "sans-serif"],
        'lora':["Lora", "serif"],
        'inconsolata':["Inconsolata", "monospace"]
      },
      boxShadow: {
        'mediumpurple': '0 35px 35px rgba(164, 69, 237, 0.25)',
      }
    },
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant("children","&>*")
    })
  ]
}
