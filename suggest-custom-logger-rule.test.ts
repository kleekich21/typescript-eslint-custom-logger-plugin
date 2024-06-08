import { RuleTester } from "@typescript-eslint/rule-tester";
import suggestCustomLoggerRule from "./suggest-custom-logger-rule";

const ruleTester = new RuleTester({
  parser: "@typescript-eslint/parser",
});

ruleTester.run("suggest-custom-logger-rule", suggestCustomLoggerRule, {
  valid: [{ code: 'customLogger.log("hi")' }],
  invalid: [
    {
      code: 'console.log("hi")',
      errors: [{ messageId: "customLoggerNotUsedForLog" }],
    },
    {
      code: 'console.error("hi")',
      errors: [{ messageId: "customLoggerNotUsedForError" }],
    },
  ],
});
