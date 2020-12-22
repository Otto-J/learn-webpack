/**
 * webpack Config
 *
 * @format
 * @type {import('webpack').Configuration}
 */

const config = {
  entry: "/src/index.js",
  output: "dist/bundle.js",
  mode: "none",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: ["dynamic-import-webpack"],
        },
      },
    ],
  },
};

module.exports = config;
