const plugin = require("@tailwindcss/forms");

module.exports = {
  
  content: [
    "./../**/*.blade.php",    // resources/layoutes/admin/
    "./../../../admin/**/*.blade.php",    // resources/views/admin/
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