const { RuleTester } = require("eslint");
const suggestCustomLoggerRule = require("./suggest-custom-logger");

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2015 },
});

ruleTester.run("suggest-custom-logger", suggestCustomLoggerRule, {
  valid: [
    {
      code: "CustomLogger.log('hi')",
    },
  ],
  invalid: [
    {
      code: "console.log('hi')",
      output: "CustomLogger.log('hi')",
      errors: 1,
    },
  ],
});

console.log("All tests passed!");
