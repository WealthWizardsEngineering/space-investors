const path = require("path");

module.exports = {
  mode: "development",
  entry: "./dist/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "public"),
  },
};