"use strict";
/** If your project does not specify "type":"module" in its package.json file, then eslint.config.js must be in CommonJS format
 * https://eslint.org/docs/latest/use/configure/configuration-files#:~:text=If%20your%20project%20does%20not%20specify%20%22type%22%3A%22module%22%20in%20its%20package.json%20file%2C%20then%20eslint.config.js%20must%20be%20in%20CommonJS%20format
 */

const typescriptParser = require("@typescript-eslint/parser");
const typescriptRecomended = require("@typescript-eslint/eslint-plugin");
// const customLoggerPlugin = require("./dist/eslint-plugin-suggest-custom-logger").default; // using local file
const customLoggerPlugin =
  require("typescript-eslint-custom-logger-plugin").default;

module.exports = [
  {
    files: ["*.ts", "*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins: { typescriptRecomended, customLoggerPlugin },

    rules: {
      "customLoggerPlugin/suggest-custom-logger-rule": "warn",
    },
  },
];
