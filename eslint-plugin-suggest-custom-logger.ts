import suggestCustomLoggerRule from "./src/rules/suggest-custom-logger-rule";

const customLoggerPlugin = {
  rules: { "suggest-custom-logger-rule": suggestCustomLoggerRule },
};
export default customLoggerPlugin;
