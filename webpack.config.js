module.exports = {
	entry: `./src/js/index.js`,
	output: {
		path: `${__dirname}/dist`,
		filename: "js/main.js",
	},
	mode: "development",

	devServer: {
		static: "dist",
		open: true,
	},
};
