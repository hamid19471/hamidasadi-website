/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        color: {
            "aj-bg": "var(--bg-color)",
            "aj-text": "var(--text-color)",
            "aj-primary": "var(--primary-color)",
            "aj-border": "var(--border-color)",
        },
        fontFamily: {
            sans: ["Oswald", "sans-serif"],
        },
        extend: {
            borderRadius: {
                "btn-radius": "0.6rem",
                "box-radius": "0.6rem",
            },
            fontSize: {
                "btn-text": "0.9rem",
                "small-heading": "1.3rem",
                "main-heading": "2rem",
                paragraph: "1rem",
            },
            fontWeight: {
                "btn-text": "600",
                "small-heading": "400",
                "main-heading": "800",
                paragraph: "400",
            },
        },
    },
    plugins: [],
});
