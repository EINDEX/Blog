const themeDir = __dirname;

module.exports = {    
    syntax: "postcss-scss",
    plugins: [   
        // require("stylelint-scss"),
        require('postcss-import')({
            path: [themeDir]
            }), 
            require('tailwindcss/nesting'),
        require('tailwindcss')(themeDir + '/tailwind.config.js'),
        require('autoprefixer')({
            path: [themeDir]    
        }),
    ]
}