import suggestCustomLoggerRule from "./src/rules/suggest-custom-logger-rule";

const customLoggerPlugin = {
  rules: { "suggest-custom-logger": suggestCustomLoggerRule },
};
export default customLoggerPlugin;
