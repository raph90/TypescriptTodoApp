const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
module.exports = {
  entry: "./src/js/index.ts",
  output: {
    // NEW
    path: path.join(__dirname, "dist"),
    filename: "js/[name].js"
  },
  devtool: "source-map",
  plugins: [htmlPlugin],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
    }
    ]
  }
};
