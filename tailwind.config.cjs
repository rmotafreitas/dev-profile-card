/** @type {import('tailwindcss').Config} */
    module.exports = {
        darkMode: 'class',
        content: [
            "./src/*.tsx",
            "./src/components/**/*.tsx",
            "./src/pages/**/*.tsx",
            "./index.html"
        ],
        theme: {
            fontFamily: {
                sans: ["Lato", "sans-serif"],
            },
            extend: {
                colors: {
                    page: "#d5c6ff",
                    card: "#FFFFFF",
                    "card-black": "#26235c",
                    circle: "#F7DF1E",
                    shape: "#26235C",
                    "primary-txt": "#252525"
                }
            },
        },
        plugins: [],
    }

