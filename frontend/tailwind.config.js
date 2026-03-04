/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                spotisic: {
                    base: '#000000',
                    elevated: '#121212',
                    highlight: '#1a1a1a',
                    accent: '#1ed760',
                    accentHover: '#1fdf64',
                    textMuted: '#a7a7a7'
                }
            }
        },
    },
    plugins: [],
}
