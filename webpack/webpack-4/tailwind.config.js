// const plugin = require("@tailwindcss/forms");
// try with plugin for dark mode

module.exports = {
    content: [
      "./dist/**/*.html",    // Include HTML files
    ],

    darkMode: 'class',
    theme: {
      extend: {
          // colors: {
          //     clifford: '#da373d',
          // }
      }
    },
    // plugin: {
    //   tailwindcss: {},
    //   autoprefixer: {},
    // }
}