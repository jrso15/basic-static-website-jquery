const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./theme/scripts/master.js",
  mode: "development",
  output: {
    filename: "./theme/scripts/main.js",
    publicPath: "",
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      minify: false,
    }),
    new MiniCssExtractPlugin({
      filename: "styles/main.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "..",
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
