/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        themes: [
            {
                empatic: {
                    "primary": "#00BFA6",
                    "secondary": "#7C3AED",
                    "accent": "#F59E0B",
                    "neutral": "#1F2937",
                    "base-100": "#111827",
                    "base-200": "#1F2937",
                    "info": "#3ABFF8",
                    "success": "#36D399",
                    "warning": "#FBBD23",
                    "error": "#F87272",
                },
            },
            "light",
            "dark",
        ],
    },
}
