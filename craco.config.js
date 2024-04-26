const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@libs": path.resolve(__dirname, "src/libs"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
};
