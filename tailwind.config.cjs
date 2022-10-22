/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			colors: {
				/* (Dark Mode Elements) */
				dark_blue: 'hsl(209, 23%, 22%)',
				/* (Dark Mode Background) */
				very_dark_blue: 'hsl(207, 26%, 17%)',
				/* (Light Mode Text) */
				very_dark_blue_text: 'hsl(200, 15%, 8%)',
				/* (Light Mode Input) */
				dark_gray: 'hsl(0, 0%, 52%)',
				/* (Light Mode Background) */
				very_light_gray: 'hsl(0, 0%, 98%)',
				/* (Dark Mode Text & Light Mode Elements) */
				fem_white: 'hsl(0, 0%, 100%)'
			},
			fontFamily: {
				nunito: ['Nunito Sans', 'sans-serif']
			}
		}
	},
	plugins: [],
	// Add dark mode manually
	darkMode: 'class'
};
