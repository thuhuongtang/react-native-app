/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: ["./App.tsx","./app/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: 'rgb(143, 98, 239)',       // PRIMARY_COLOR
                secondary: '#EF8C62',               // SECONDARY_COLOR
                background: '#010424',              // BACKGROUND_COLOR

                text: {
                    DEFAULT: 'rgb(255, 255, 255)',    // TEXT_COLOR
                    80: 'rgba(255, 255, 255, 0.8)',   // TEXT_COLOR_80
                    60: 'rgba(255, 255, 255, 0.6)',   // TEXT_COLOR_60
                    40: 'rgba(255, 255, 255, 0.4)',   // TEXT_COLOR_40
                },

                surface: '#2C3556',                 // SURFACE_COLOR
                grayLight: '#515151',              // GRAY_LIGHT
            },
        },
    },
    plugins: [],
}