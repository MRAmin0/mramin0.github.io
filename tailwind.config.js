/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
                fa: ['Vazirmatn', 'sans-serif'],
            },
            colors: {
                primary: '#4A90E2',
                dark: '#1a1a1a',
                darker: '#121212',
                card: '#2c2c2c',
            }
        },
    },
    plugins: [],
}
