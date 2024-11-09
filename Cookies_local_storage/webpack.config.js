const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: "./",
    watchFiles: ["./*.html"], // Watch for changes in HTML files
    client: {
      logging: "info",
    },
    port: 8080,
  },
  mode: "development",
};
