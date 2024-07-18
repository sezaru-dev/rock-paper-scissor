/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'3Auto': 'repeat(3, auto)',
			},
		},
	},
	plugins: [],
};
