const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, 'index'),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "js/[name].js",
    publicPath: ""
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"'
    }),
    // new webpack.optimize.AggressiveMergingPlugin(),
    // new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html",
      inject: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader'
        ],
        include: path.join(__dirname, '/'),
        exclude: path.join(__dirname, '/node_modules')
      }
    ]
  }
};
