const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        options: { presets: ["@babel/env", "@babel/preset-react"] },
      },{
        test: /\.s?css$/,
        use: [ 
          'style-loader', 
          'css-loader',
          'sass-loader'
        ]
      }
    ],
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: path.join(__dirname, "public")
  }
};
