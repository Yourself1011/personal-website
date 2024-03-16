import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {},
        fontFamily: {
            mono: ["Ubuntu Mono"],
        },
    },
    plugins: [
        plugin(({ addUtilities, matchUtilities, theme }) => {
            addUtilities({
                ".preserve-3d": {
                    "transform-style": "preserve-3d",
                },
            });
            matchUtilities(
                {
                    "-perspective": (value) => ({
                        transform: `translateZ(${value}) scale(calc(-${value
                            .replace("rem", "")
                            .replace("px", "/16")}/8 + 1))`,
                    }),
                    perspective: (value) => ({
                        transform: `translateZ(-${value}) scale(calc(${value
                            .replace("rem", "")
                            .replace("px", "/16")}/8 + 1))`,
                    }),
                },
                { values: theme("spacing") }
            );
        }),
    ],
};
