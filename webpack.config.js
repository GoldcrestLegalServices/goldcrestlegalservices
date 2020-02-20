const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const config = {
  entry: {
    app: "./src/index.pug"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  devServer: {
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.pug"
    }),
    new HtmlWebpackPlugin({
      filename: "privacy-policy.html",
      template: "./src/privacy-policy.pug"
    }),
    new HtmlWebpackPlugin({
      filename: "cookies-policy.html",
      template: "./src/cookies-policy.pug"
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ["pug-loader"]
      }
    ]
  }
};
module.exports = (env, argv) => {
  if (argv.mode === "development") {
  }
  if (argv.mode === "production") {
  }
  return config;
};
// "./src/privacy-policy.pug";
