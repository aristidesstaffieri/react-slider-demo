var webpack = require('webpack')

module.exports = {
  context: __dirname + "/",
  entry: {
    javascript: "./src/browser.js",
    html: "./index.html"
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ["react-hot", "babel-loader"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  }
}
