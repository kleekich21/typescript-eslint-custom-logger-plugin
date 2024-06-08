"use strict";

const customLoggerPlugin = require("./eslint-plugin-custom-logger");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
    },
    plugins: { "custom-logger": customLoggerPlugin },
    rules: {
      "custom-logger/suggest-custom-logger": "warn",
    },
  },
];
