import path from "node:path";
import type webpack from "webpack";
import { staticBuildExtension } from "wesl-plugin";
import weslPlugin from "wesl-plugin/webpack";

// in case you run into any typescript error when configuring `devServer`
// import 'webpack-dev-server';

const config: webpack.Configuration = {
	mode: "production",
	entry: "./src/index.js",
	output: {
		path: path.resolve(import.meta.dirname, "dist"),
		filename: "main.bundle.js",
	},
	plugins: [
		weslPlugin({ extensions: [staticBuildExtension], }),
	],
};

export default config;
