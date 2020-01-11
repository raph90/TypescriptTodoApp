const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
const TSLintPlugin = require("tslint-webpack-plugin");
module.exports = {
  entry: "./src/js/index.ts",
  output: {
    // NEW
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  devServer: {
    contentBase: "./dist",
    proxy: [
      // allows redirect of requests to webpack-dev-server to another destination
      {
        context: ["/api", "/auth"], // can have multiple
        target: "http://localhost:8081", // server and port to redirect to
        secure: false
      }
    ]
  },
  devtool: "source-map",
  plugins: [
    htmlPlugin,
    new TSLintPlugin({
      files: ["./src/**/*.ts"]
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    })
  ],
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
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  }
};
