const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            primary: "#47aaf2",
            secondray: "#2b2c6c",
        },
        fontSize: {
            menuItems: "0.75rem",
            content: "1rem",
            heading: "1.875rem",
            subtitle: "0.938rem",
        },
    },
    plugins: [],
});
