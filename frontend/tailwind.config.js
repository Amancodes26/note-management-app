/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            transitionProperty: {
                transform: "transform",
                opacity: "opacity",
            },
            transitionTimingFunction: {
                smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
            },
            transitionDuration: {
                300: "300ms",
                500: "500ms",
            },
        },
    },
    plugins: [],
};
