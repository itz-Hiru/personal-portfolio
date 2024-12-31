module.exports = function addVariablesForColors({ addBase, theme }) {
	const colors = theme("colors");
	const flattenColors = (colors, prefix = "") =>
		Object.entries(colors).reduce((acc, [key, value]) => {
			if (typeof value === "string") {
				acc[`${prefix}${key}`] = value;
			} else {
				Object.assign(acc, flattenColors(value, `${prefix}${key}-`));
			}
			return acc;
		}, {});

	const flattenedColors = flattenColors(colors);

	const cssVariables = Object.fromEntries(
		Object.entries(flattenedColors).map(([key, value]) => [`--${key}`, value])
	);

	addBase({
		":root": cssVariables,
	});
};
