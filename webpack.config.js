const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							url: false,
						},
					},
				],
			},
		],
	},
	target: ["web", "es5"],

	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/styles.css",
		}),
	],
};
