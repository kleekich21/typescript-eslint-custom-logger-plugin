"use strict";
import customLoggerPlugin from "eslint-plugin-custom-logger.ts";

export default {
  parser: "@typescript-eslint/parser",
  languageOptions: {
    sourceType: "module",
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  plugins: ["@typescript-eslint", customLoggerPlugin],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "custom/custom-logger": "warn",
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
        "custom/custom-logger": "warn",
      },
    },
  ],
};
