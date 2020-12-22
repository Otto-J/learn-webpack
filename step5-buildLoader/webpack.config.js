/**
 * webpack Config
 *
 * @format
 * @type {import('webpack').Configuration}
 */

const config = {
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          "html-loader",
          {
            loader: "./src/md-loader",
            options: {
              trim: true,
            },
          },
        ],
      },
    ],
  },
};

module.exports = config;
