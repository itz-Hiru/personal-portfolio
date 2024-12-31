/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "15px",
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: '1200px',
		},
		fontFamily: {
			primary: "var(--font-jetbrainsMono)",
		},
		extend: {
			colors: {
				purple: "#CBACF9",
				black: {
					DEFAULT: "#000",
					100: "#000319",
					200: "rgba(17, 25, 40, 0.75)",
					300: "rgba(255, 255, 255, 0.125)",
				},
				white: {
					DEFAULT: "#FFF",
					100: "#BEC1DD",
					200: "#C1C2D3",
				},
				blue: {
					"100": "#E4ECFF",
				},
				primary: '#000',
				accent: {
					DEFAULT: '#0099ff',
					hover: '#E4ECFF',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				spotlight: "spotlight 5s ease .75s 1 forwards",
			},
			keyframes: {
				spotlight: {
					"0%": {
						opacity: 0,
						transform: "translate(-72%, -62%) scale(0.5)",
					},
					"100%": {
						opacity: 1,
						transform: "translate(-50%,-40%) scale(1)",
					},
				},
			},
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require('./addVariableForColors.js')
	],
};
