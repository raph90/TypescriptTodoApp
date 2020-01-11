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
  devServer: {
    contentBase: "./dist",
    proxy: [ // allows redirect of requests to webpack-dev-server to another destination
      {
        context: ['/api', '/auth'],  // can have multiple
        target: 'http://localhost:8081', // server and port to redirect to
        secure: false,
      },
    ],
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
