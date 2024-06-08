"use strict";
import customLoggerPlugin from "eslint-plugin-suggest-custom-logger";

export default {
  parser: "@typescript-eslint/parser",
  languageOptions: {
    sourceType: "module",
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  plugins: ["@typescript-eslint", customLoggerPlugin],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "customLoggerPlugin/suggest-custom-logger-rule": "warn",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        "customLoggerPlugin/suggest-custom-logger-rule": "warn",
      },
    },
  ],
};
