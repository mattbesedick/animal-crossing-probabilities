const pathLib = require("path");

module.exports = {
	mode: "development",
	entry: [
		"@babel/polyfill", // enables async-await
		"./client/index.js",
	],
	output: {
		chunkFilename: "[name].bundle.js",
		filename: "bundle.js",
		path: pathLib.join(__dirname, "public"),
		publicPath: "/",
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	devtool: "cheap-module-eval-source-map",
	watchOptions: {
		ignored: /node_modules/,
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: pathLib.resolve(__dirname, "client"),
				exclude: /node_modules/,
				loader: "babel-loader",
			},
		],
	},
};
