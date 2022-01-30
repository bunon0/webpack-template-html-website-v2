const path = require("path");

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

	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: "babel-loader",
					},
				],
			},
		],
	},
	target: ["web", "es5"],
};
