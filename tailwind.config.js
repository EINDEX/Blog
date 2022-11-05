module.exports = {
    content: ["./templates/**/*.html", "./themes/**/*.html",  "./themes/**/*.html"],
    theme: {
      screens: {
        'md': {max: '768px'},
        'sm': {max: '640px'},
      },
      extend: {},
    },
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
    ]
  }