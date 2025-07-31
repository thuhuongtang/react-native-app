module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
        ["babel-preset-expo", { jsxImportSource: "nativewind" }],
        "nativewind/babel",
        ],
        plugins: [
        ['module-resolver', {
        alias: {
            assets: './assets',
            components: './app/components',
            screens: './app/screens',
            // add more aliases if needed
        },
        }],
    ],

    };
};