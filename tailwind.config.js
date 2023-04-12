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
        fontFamily: {
            sans: ["Oswald", "sans-serif"],
        },
        extend: {
            textColor: {
                skin: {
                    text: "var(--text-color)",
                    primary: "var(--primary-color)",
                    border: "var(--border-color)",
                },
            },
            borderRadius: {
                skin: {
                    btn: "0.6rem",
                    box: "0.6rem",
                },
            },
            fontSize: {
                skin: {
                    btn: "0.9rem",
                    small: "1.3rem",
                    main: "2rem",
                    paragraph: "1rem",
                },
            },
            fontWeight: {
                skin: {
                    btnWeight: "600",
                    smallWeight: "400",
                    mainWeight: "800",
                    paragraph: "400",
                },
                backGround: {
                    skin: {
                        bg: "var(--bg-color)",
                    },
                },
            },
        },
    },
    plugins: [],
});
