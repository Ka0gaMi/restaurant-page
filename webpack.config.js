const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name][ext][query]",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "Restaurant Page",
      filename: "index.html",
      inject: "head",
      scriptLoading: "defer",
      publicPath: "./gh-pages/",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              esModule: true,
              encoding: "base64",
              limit: 3 * 1024,
              noquotes: true,
              stripdeclarations: true,
            },
          },
        ],
      },
    ],
  },
};
